const TECH_ICONS = {
  JavaScript: { slug: 'javascript', color: 'F7DF1E' },
  React: { slug: 'react', color: '61DAFB' },
  HTML: { slug: 'html5', color: 'E34F26' },
  CSS: { slug: 'css', color: '1572B6' },
  'Tailwind CSS': { slug: 'tailwindcss', color: '38BDF8' },
  Tailwind: { slug: 'tailwindcss', color: '38BDF8' },
  Python: { slug: 'python', color: '3776AB' },
  Django: { slug: 'django', color: 'FFFFFF' },
  'Django REST Framework': { slug: 'django', color: 'FFFFFF' },
  'Node.js': { slug: 'nodedotjs', color: '339933' },
  Express: { slug: 'express', color: 'FFFFFF' },
  MongoDB: { slug: 'mongodb', color: '47A248' },
  PostgreSQL: { slug: 'postgresql', color: '4169E1' },
  SQLite: { slug: 'sqlite', color: '51A0D5' },
  Git: { slug: 'git', color: 'F05032' },
  GitHub: { slug: 'github', color: 'FFFFFF' },
  'Linux/Ubuntu': { slug: 'linux', color: 'FCC624' },
  WSL2: { slug: 'linux', color: 'FCC624' },
  Postman: { slug: 'postman', color: 'FF6C37' },
  Vite: { slug: 'vitejs', color: '646CFF' },
  Firebase: { slug: 'firebase', color: 'FFCA28' },
};

export default function TechIcon({ name, className = 'h-4 w-4 shrink-0' }) {
  const icon = TECH_ICONS[name];
  if (!icon) return null;

  return (
    <img
      src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color}`}
      alt=""
      loading="lazy"
      aria-hidden="true"
      className={className}
    />
  );
}
