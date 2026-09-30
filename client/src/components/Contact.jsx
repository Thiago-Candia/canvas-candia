import Section from './Section.jsx';
import { CvIcon, GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from './Icons.jsx';
import { LINKS, PROFILE } from '../data/content.js';
import { whatsappUrl } from '../lib/whatsapp.js';

const CONTACTS = [
  { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, Icon: MailIcon },
  { label: 'WhatsApp', value: PROFILE.phone, href: whatsappUrl(), Icon: WhatsAppIcon },
  { label: 'LinkedIn', value: 'thiago-candia', href: LINKS.linkedin, Icon: LinkedInIcon },
  { label: 'GitHub', value: 'Thiago-Candia', href: LINKS.github, Icon: GitHubIcon },
  { label: 'CV', value: 'Descargar PDF', href: LINKS.cvFile, Icon: CvIcon, download: 'Thiago-Candia-CV.pdf' },
];

export default function Contact() {
  return (
    <Section id="contacto" eyebrow="Contacto" title="Hablemos">
      <p className="max-w-xl text-muted">
        Estoy buscando sumarme a un equipo de desarrollo. Si tenés una oportunidad o un proyecto en mente, escribime.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CONTACTS.map(({ label, value, href, Icon, download }) => (
          <a
            key={label}
            href={href}
            target={download || href.startsWith('mailto:') ? undefined : '_blank'}
            download={download}
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-accent/15 bg-panel/60 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-accent/60"
          >
            <Icon size={22} className="shrink-0 text-accent" />
            <span className="min-w-0">
              <span className="block font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">{label}</span>
              <span className="block truncate text-sm text-white">{value}</span>
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
