import { CvIcon, GitHubIcon, LinkedInIcon } from './Icons.jsx';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/Thiago-Candia', signal: 'code', Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thiago-candia-23953b313/', signal: 'profile', Icon: LinkedInIcon },
  { label: 'CV', href: 'https://thiago-candia.github.io/curriculum-vitae-JS/', signal: 'cv', Icon: CvIcon },
];

export default function Content() {
  return (
    <div className="content">
      <div className="name">Thiago Candia</div>
      <div className="role">// Programmer</div>
      <div className="tagline">Argentina &mdash; La Plata</div>

      <div className="links">
        {LINKS.map(({ label, href, signal, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" data-signal={signal}>
            <Icon />
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
