"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import styles from "../../page.module.css";

export type EngagementSectionProps = {
  formspreeEndpoint?: string;
  countApiNamespace?: string;
  countApiKey?: string;
};

type SubmissionStatus = "idle" | "loading" | "success" | "error";

type CountState = {
  value: number | null;
  error: boolean;
};

type CounterResult =
  | number
  | {
      value?: number;
      data?: {
        value?: number;
      };
    };

export function EngagementSection({
  formspreeEndpoint,
  countApiNamespace,
  countApiKey,
}: EngagementSectionProps) {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [countState, setCountState] = useState<CountState>({
    value: null,
    error: false,
  });

  const sanitizedEndpoint = useMemo(
    () => formspreeEndpoint?.trim() ?? "",
    [formspreeEndpoint]
  );
  const hasEndpoint = sanitizedEndpoint.length > 0;

  const namespace = useMemo(
    () =>
      countApiNamespace?.trim().length
        ? countApiNamespace.trim()
        : "landflix-landing",
    [countApiNamespace]
  );

  const key = useMemo(
    () => (countApiKey?.trim().length ? countApiKey.trim() : "visits"),
    [countApiKey]
  );

  const fetchCount = useCallback(async () => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const { Counter } = await import("counterapi");
      const client = new Counter({
        version: "v1" as const,
        namespace,
      });

      const result = (await client.up(key)) as CounterResult;

      const value =
        typeof result === "number"
          ? result
          : typeof result?.value === "number"
          ? result.value
          : typeof result?.data?.value === "number"
          ? result.data.value
          : null;

      if (typeof value === "number" && Number.isFinite(value)) {
        setCountState({ value, error: false });
      } else {
        setCountState({ value: null, error: true });
      }
    } catch (error) {
      console.error("CounterAPI update failed", error);
      setCountState({ value: null, error: true });
    }
  }, [namespace, key]);

  useEffect(() => {
    void fetchCount();
  }, [fetchCount]);

  return (
    <section
      className={clsx(styles.section, styles.engagementSection)}
      id="community"
    >
      <div className={styles.container}>
        <div className={clsx(styles.engagementCard, styles.reveal)}>
          <div className={styles.engagementHeader}>
            <span className={styles.sectionBadge}>Restez connectés</span>
            <h2>Newsletter & communauté</h2>
            <p>
              Recevez les nouveautés LandFlix directement dans votre boîte mail
              et rejoignez une communauté de cinéphiles toujours plus grande.
            </p>
            <div className={styles.visitorBadge} aria-live="polite">
              {countState.value !== null && !countState.error && (
                <strong>
                  {new Intl.NumberFormat("fr-FR").format(countState.value)}
                </strong>
              )}
              {countState.value !== null && !countState.error && (
                <span>visites enregistrées</span>
              )}
              {countState.value === null && !countState.error && (
                <span>Chargement du compteur…</span>
              )}
              {countState.error && (
                <span>Compteur indisponible pour le moment</span>
              )}
            </div>
          </div>

          <form
            className={styles.newsletterForm}
            action={hasEndpoint ? sanitizedEndpoint : undefined}
            method="POST"
            onSubmit={async (event) => {
              event.preventDefault();

              if (!hasEndpoint) {
                setStatus("error");
                return;
              }

              try {
                setStatus("loading");
                const formElement = event.currentTarget;
                const formData = new FormData(formElement);

                const response = await fetch(sanitizedEndpoint, {
                  method: "POST",
                  body: formData,
                  headers: {
                    Accept: "application/json",
                  },
                });

                if (!response.ok) {
                  throw new Error(
                    `Formspree responded with ${response.status}`
                  );
                }

                setStatus("success");
                formElement.reset();
              } catch (error) {
                console.error("Form submission failed", error);
                setStatus("error");
              }
            }}
            noValidate
          >
            <div className={styles.inputGroup}>
              <label className={styles.srOnly} htmlFor="newsletter-email">
                Adresse email
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                placeholder="Votre adresse email"
                disabled={!hasEndpoint || status === "loading"}
              />
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className={styles.honeypot}
              />
              <button
                type="submit"
                disabled={!hasEndpoint || status === "loading"}
              >
                {status === "loading" ? "Envoi…" : "Je m'inscris"}
              </button>
            </div>
            <p
              className={clsx(styles.formFeedback, {
                [styles.formFeedbackSuccess]: status === "success",
                [styles.formFeedbackError]: status === "error",
              })}
              role="status"
              aria-live="polite"
            >
              {status === "success" &&
                "Merci ! Confirmez votre inscription via l'email reçu."}
              {status === "error" &&
                (hasEndpoint
                  ? "Impossible d'envoyer votre demande, veuillez réessayer."
                  : "Configurez NEXT_PUBLIC_FORMSPREE_ENDPOINT pour activer le formulaire.")}
              {status === "idle" &&
                !hasEndpoint &&
                "Configurez NEXT_PUBLIC_FORMSPREE_ENDPOINT pour activer le formulaire."}
              {status === "idle" &&
                hasEndpoint &&
                "Aucun spam, uniquement les actus importantes."}
              {status === "loading" && "Envoi en cours…"}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
