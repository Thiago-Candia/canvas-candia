import { GitHubIcon, LinkedInIcon } from './Icons.jsx';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/Thiago-Candia', Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thiago-candia-23953b313/', Icon: LinkedInIcon },
];

export default function Content() {
  return (
    <div className="content">
      <div className="name">Thiago Candia</div>
      <div className="role">// Programmer</div>
      <div className="tagline">Argentina &mdash; La Plata</div>

      <div className="links">
        {LINKS.map(({ label, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">
            <Icon />
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
