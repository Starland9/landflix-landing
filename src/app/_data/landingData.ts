import type { IconType } from "react-icons";
import {
  HiArrowDownTray,
  HiMiniDevicePhoneMobile,
  HiMiniRocketLaunch,
  HiMiniSparkles,
  HiMiniSquares2X2,
  HiMiniWifi,
  HiOutlineDevicePhoneMobile,
  HiOutlineFolderOpen,
  HiOutlineHeart,
  HiOutlineMagnifyingGlassCircle,
} from "react-icons/hi2";
import {
  FaAndroid,
  FaApple,
  FaCodeBranch,
  FaGithub,
  FaGlobe,
  FaGooglePlay,
  FaLaptop,
  FaLinux,
  FaPalette,
  FaTwitter,
  FaWindows,
} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { asset } from "../_utils/asset";

export type NavLink = {
  label: string;
  href: string;
};

export type Stat = {
  icon: IconType;
  value: string;
  label: string;
};

export type Feature = {
  icon: IconType;
  title: string;
  description: string;
  highlights: string[];
  orientation?: "normal" | "reverse";
};

export type Screenshot = {
  title: string;
  description: string;
  image: string;
  alt: string;
  accent: string;
};

export type Platform = {
  icon: IconType;
  name: string;
  requirement: string;
  status: string;
};

export type Tech = {
  icon: IconType;
  name: string;
  description: string;
};

export type Benefit = {
  icon: IconType;
  title: string;
  description: string;
};

export type DownloadButton = {
  icon: IconType;
  label: string;
  title: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export type ResourceLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type EngagementConfig = {
  formspreeEndpoint: string;
  countApiNamespace: string;
  countApiKey: string;
};

export const navLinks: NavLink[] = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Plateformes", href: "#platforms" },
  { label: "Téléchargement", href: "#download" },
  { label: "Communauté", href: "#community" },
  { label: "FAQ", href: "#faq" },
];

export const stats: Stat[] = [
  { icon: HiArrowDownTray, value: "10K+", label: "Téléchargements" },
  { icon: HiMiniSquares2X2, value: "6", label: "Plateformes" },
  { icon: HiMiniSparkles, value: "4.8/5", label: "Note Moyenne" },
  { icon: HiMiniRocketLaunch, value: "100K+", label: "Contenus Disponibles" },
];

export const features: Feature[] = [
  {
    icon: HiOutlineMagnifyingGlassCircle,
    title: "🔍 Recherche Intelligente",
    description:
      "Trouvez instantanément vos films et séries préférés grâce à un moteur de recherche optimisé et pertinent.",
    highlights: [
      "Recherche en temps réel",
      "Filtres avancés",
      "Suggestions intelligentes",
    ],
  },
  {
    icon: HiArrowDownTray,
    title: "📥 Téléchargement Ultra-Rapide",
    description:
      "Profitez d'un système UQLoad optimisé pour récupérer vos contenus favoris en un éclair.",
    highlights: [
      "Progression en direct",
      "Téléchargements multiples",
      "Reprise automatique",
    ],
    orientation: "reverse",
  },
  {
    icon: HiOutlineFolderOpen,
    title: "📁 Gestionnaire de Téléchargements",
    description:
      "Visualisez, organisez et contrôlez chaque fichier avec des statistiques détaillées et un nettoyage automatisé.",
    highlights: [
      "Vue détaillée",
      "Statistiques d'espace",
      "Nettoyage intelligent",
    ],
  },
  {
    icon: HiMiniSparkles,
    title: "🎨 Design Moderne & Élégant",
    description:
      "Un univers Material Design 3 avec mode sombre, animations fluides et interfaces pensées pour 2025.",
    highlights: [
      "Material Design 3",
      "Animations fluides",
      "Interface responsive",
    ],
    orientation: "reverse",
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: "📱 100% Multiplateforme",
    description:
      "Développée avec Flutter, l'application offre une expérience native sur mobile, bureau et web.",
    highlights: ["Android & iOS", "Windows, macOS & Linux", "Web"],
  },
  {
    icon: HiOutlineHeart,
    title: "💾 Ma Liste Personnalisée",
    description:
      "Sauvegardez et synchronisez vos contenus préférés pour les retrouver en un clin d'œil sur tous vos appareils.",
    highlights: [
      "Favoris synchronisés",
      "Organisation intuitive",
      "Accès rapide",
    ],
    orientation: "reverse",
  },
];

export const screenshots: Screenshot[] = [
  {
    title: "Écran d'accueil",
    description: "Parcourez les nouveautés du moment",
    image: asset("/screenshots/home.jpg"),
    alt: "Accueil de LandFlix montrant les tendances du jour",
    accent: "var(--color-primary-purple)",
  },
  {
    title: "Résultats de recherche",
    description: "Filtres puissants et fiches enrichies",
    image: asset("/screenshots/search_result.jpg"),
    alt: "Résultats de recherche sur LandFlix",
    accent: "var(--color-accent-teal)",
  },
  {
    title: "Gestionnaire de téléchargements",
    description: "Suivi précis des fichiers actifs",
    image: asset("/screenshots/download_manager.jpg"),
    alt: "Gestionnaire de téléchargements de LandFlix",
    accent: "var(--color-primary-blue)",
  },
  {
    title: "Fiche détaillée",
    description: "Infos complètes et recommandations",
    image: asset("/screenshots/details.jpg"),
    alt: "Fiche détaillée d'un film sur LandFlix",
    accent: "var(--color-accent-orange)",
  },
];

const defaultFormspreeEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

const defaultCountApiNamespace =
  process.env.NEXT_PUBLIC_COUNTAPI_NAMESPACE ?? "landflix-landing";

const defaultCountApiKey = process.env.NEXT_PUBLIC_COUNTAPI_KEY ?? "visits";

export const engagementConfig: EngagementConfig = {
  formspreeEndpoint: defaultFormspreeEndpoint.trim(),
  countApiNamespace: defaultCountApiNamespace.trim() || "landflix-landing",
  countApiKey: defaultCountApiKey.trim() || "visits",
};

export const platforms: Platform[] = [
  {
    icon: FaAndroid,
    name: "Android",
    requirement: "API 21+ (Android 5.0+)",
    status: "Disponible",
  },
  {
    icon: FaApple,
    name: "iOS",
    requirement: "Version 12.0+",
    status: "Disponible",
  },
  {
    icon: FaWindows,
    name: "Windows",
    requirement: "Windows 10+",
    status: "Disponible",
  },
  {
    icon: FaApple,
    name: "macOS",
    requirement: "Version 10.14+",
    status: "Disponible",
  },
  {
    icon: FaLinux,
    name: "Linux",
    requirement: "GTK+ 3.0",
    status: "Disponible",
  },
  {
    icon: FaGlobe,
    name: "Web",
    requirement: "Navigateurs modernes",
    status: "Disponible",
  },
];

export const techStack: Tech[] = [
  {
    icon: HiMiniDevicePhoneMobile,
    name: "Flutter",
    description: "Framework UI multiplateforme de Google",
  },
  {
    icon: HiMiniSquares2X2,
    name: "Dart",
    description: "Langage moderne et performant",
  },
  {
    icon: FaPalette,
    name: "Material Design 3",
    description: "Design system de Google",
  },
  {
    icon: FaCodeBranch,
    name: "BLoC Pattern",
    description: "Gestion d'état robuste",
  },
];

export const flutterBenefits: Benefit[] = [
  {
    icon: HiMiniRocketLaunch,
    title: "Performance native",
    description: "Compilation en code natif pour une fluidité optimale.",
  },
  {
    icon: HiMiniDevicePhoneMobile,
    title: "Un seul code",
    description: "Développez une fois, déployez partout.",
  },
  {
    icon: HiMiniSparkles,
    title: "UI magnifique",
    description: "Widgets riches et personnalisables à l'infini.",
  },
  {
    icon: HiMiniWifi,
    title: "Hot Reload",
    description: "Iterez en temps réel pendant le développement.",
  },
];

const releaseBaseUrl =
  "https://github.com/Starland9/LandFlix/releases/download/dev-latest";

export const downloadButtons: DownloadButton[] = [
  {
    icon: FaGooglePlay,
    label: "APK Android",
    title: "Télécharger",
    href: `${releaseBaseUrl}/app-release.apk`,
  },
  {
    icon: FaWindows,
    label: "Binaire",
    title: "Windows",
    href: `${releaseBaseUrl}/windows-build.zip`,
  },
  {
    icon: FaLinux,
    label: "Binaire",
    title: "Linux",
    href: `${releaseBaseUrl}/linux-build.zip`,
  },
  {
    icon: FaGlobe,
    label: "Pack",
    title: "Web",
    href: `${releaseBaseUrl}/web-build.zip`,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "LandFlix est-il vraiment gratuit ?",
    answer:
      "Oui, LandFlix est 100% gratuit, sans abonnement ni publicité. L'application est open-source et le restera.",
  },
  {
    question: "Sur quelles plateformes LandFlix est-il disponible ?",
    answer:
      "LandFlix est déployée sur Android, iOS, Windows, macOS, Linux et sur le web pour une expérience uniforme.",
  },
  {
    question: "Mes téléchargements sont-ils sauvegardés ?",
    answer:
      "Chaque téléchargement est historisé, consultable et gérable via un tableau de bord dédié avec statistiques.",
  },
  {
    question: "L'application nécessite-t-elle une connexion internet ?",
    answer:
      "Une connexion est requise pour rechercher et télécharger. Les contenus terminés restent accessibles hors ligne.",
  },
  {
    question: "Comment sont gérés les téléchargements ?",
    answer:
      "LandFlix suit la progression en direct, vérifie l'intégrité et automatise le nettoyage des fichiers obsolètes.",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Starland9", icon: FaGithub },
  { label: "Twitter", href: "#", icon: FaTwitter },
  { label: "LinkedIn", href: "#", icon: FaLinkedin },
];

export const resourceLinks: ResourceLink[] = [
  { label: "Documentation", href: "#" },
  { label: "FAQ", href: "#faq" },
  { label: "Support", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
];
