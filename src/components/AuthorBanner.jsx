import './AuthorBanner.css';

export default function AuthorBanner({ position = 'top' }) {
  return (
    <div className={`author-banner ${position === 'bottom' ? 'bottom' : ''}`}>
      This POC was created by{' '}
      <a href="https://ibrahim-abdullaziz.vercel.app/" target="_blank" rel="noopener noreferrer">
        Ibrahim Abdullaziz
      </a>
    </div>
  );
}
