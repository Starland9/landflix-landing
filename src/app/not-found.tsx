import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <div className={styles.page}>
      <main style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--page-gutter)',
        gap: '1.5rem'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 8vw, 5rem)', 
          marginBottom: '0',
          background: 'var(--gradient-primary)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          404
        </h1>
        <h2 style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
          marginBottom: '0',
          color: 'var(--color-text-primary)'
        }}>
          Page non trouvée
        </h2>
        <p style={{ 
          marginBottom: '1rem',
          color: 'var(--color-text-secondary)',
          fontSize: '1.125rem'
        }}>
          La page que vous recherchez n'existe pas.
        </p>
        <Link 
          href={`${basePath}/`}
          style={{
            padding: '1rem 2rem',
            background: 'var(--gradient-primary)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'var(--color-text-primary)',
            fontWeight: 600,
            fontSize: '1rem',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 12px rgba(139, 93, 255, 0.3)'
          }}
        >
          Retour à l'accueil
        </Link>
      </main>
    </div>
  );
}
