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
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page non trouvée</h2>
        <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
          La page que vous recherchez n'existe pas.
        </p>
        <Link 
          href={`${basePath}/`}
          style={{
            padding: '1rem 2rem',
            background: 'var(--accent-gradient)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'white',
            fontWeight: 600
          }}
        >
          Retour à l'accueil
        </Link>
      </main>
    </div>
  );
}
