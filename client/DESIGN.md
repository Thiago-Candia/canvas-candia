# Reglas de diseño

Reglas estrictas, no sugerencias. Si algo no está permitido acá, no se usa.
Vigentes ahora para **Header + Hero (`#inicio`) + Proyectos (`#proyectos`) +
Skills (`#skills`) + Sobre mí (`#sobre-mi`) + Experiencia (`#experiencia`)**.
Queda **Contacto** — se audita después.

## 0. Rendimiento (esto sí aplica a todo el sitio)

- El fondo es estático (gradiente + ruido + grilla vía CSS, formato de
  `cv-js`), sin canvas ni animación por JS: cero costo de CPU/GPU en loop.
- Fuentes autohospedadas (`@fontsource`), solo los pesos que se usan.
  Nada de request a Google Fonts en runtime.
- `backdrop-blur` nunca apilado con glows (`shadow` de color, `blur-2xl`
  decorativo): es la combinación más cara para el compositor y además
  es el efecto "brusco" que se quiere evitar.

## 1. Tipografía — 2 fuentes, cero excepciones

| Uso                                  | Fuente          | Pesos   |
| ------------------------------------- | --------------- | ------- |
| Wordmark, H1, H2, CTA, texto de lectura | Syne            | 400/600/800 |
| Nav, eyebrow (`// sección`), badges, meta | Space Mono   | 400/700 |

Nunca una tercera fuente. Nunca la pila `ui-sans-serif` por defecto de
Tailwind sin haberla pisado en `@theme`.

## 2. Escala tipográfica — saltos reales, no de 16 a 18

Únicas clases permitidas:

`text-xs`(12) · `text-sm`(14) · `text-base`(16) · `text-xl`(20) ·
`text-3xl`(30) · `text-5xl`(48) · `text-7xl`(72)

Prohibidas: `text-lg`, `text-2xl`, `text-4xl`, `text-6xl` — el salto contra
su vecina es demasiado chico para leerse como jerarquía real.

## 3. Escala de espaciado — 8 pasos, nada más

`gap-*` / `mt-*` / `mb-*` / `py-*` / `px-*` solo pueden valer:

`2`(8px) · `4`(16px) · `6`(24px) · `8`(32px) · `12`(48px) · `16`(64px) ·
`20`(80px) · `28`(112px)

Nada de `mt-3`, `mt-5`, `mt-9`, `gap-14`, `px-2.5`, `py-1`, `gap-3.5`, etc.

## 4. Color — un solo acento

- Acento: `--color-accent` (`#36f0b0`). Es el mismo verde en toda la web,
  incluido el canvas de fondo — nada de un azul random ahí y un verde acá.
- Por sección, el acento aparece en **un** solo lugar protagonista (el CTA
  primario, o el estado activo, o el punto de "disponible"). No en bordes
  decorativos de todas las cards, no en el hover de todos los botones.
- Todo lo demás vive en la escala de grises: `ink` (texto), `muted`
  (texto secundario), `panel` (superficies), `bg` (fondo). No se agregan
  colores nuevos.

## 5. Gradientes y glows: prohibidos

Cero `bg-gradient-*`, cero `radial-gradient`, cero halos con `blur-2xl`
detrás de cajas, cero `text-shadow`/`box-shadow` de color para dar "glow".
Si hace falta profundidad: un borde de 1px y como mucho `shadow-sm`.
Excepción única: el fondo global (`Background.jsx` / `.bg-layer__*`), que
es el gradiente + ruido + grilla trasladado de `cv-js`. Ningún otro
elemento (cards, botones, badges) usa gradiente ni glow.

## 6. Un elemento dominante por sección

Cada sección tiene un solo foco visual y todo lo demás pesa menos a
propósito. En el Hero el foco es el H1: la foto y los botones no compiten
con glow ni tamaño.

## 7. Movimiento — simple y no brusco

Transiciones de 150–200ms, solo en `opacity` y `transform`
(`translateY`/`scale`). Nada de animar `box-shadow`, nada de glow
pulsante, nada de easing exagerado.

## 8. Excepción de ancho: carruseles

Un carrusel de cards puede romper el `max-w-6xl` y ocupar el ancho de la
ventana (full-bleed) para que las cards se vean grandes de verdad. El
eyebrow y el título de la sección se quedan en el contenedor estándar;
solo el carrusel en sí rompe el ancho. Se logra con la prop `wide` de
`Section` (renderiza `children` como hijo directo de `<section>`, que ya
ocupa el 100% del body) — **nunca** con `w-[100vw]` + `calc(50%-50vw)`:
ver regla 9.

## 9. Responsive de verdad: probado, no asumido

- **Nunca mezclar `vw` con `%`/`px` en el mismo cálculo** (el clásico
  `width: 100vw; margin: calc(50% - 50vw)` para "romper" un contenedor).
  `vw` incluye el ancho de la scrollbar y no se mueve igual que `%`/`px`
  bajo zoom del navegador — a ciertos niveles de zoom terminan en números
  distintos y el layout se desarma (cards gigantes o pegadas a un borde,
  overflow horizontal). Si algo necesita ocupar el ancho real de la
  ventana, se resuelve sacándolo del contenedor `max-w-6xl` (ver regla 8),
  no calculando su ancho con `vw`.
- **Ningún elemento de tamaño fijo (`w-[Npx]`, `h-[Nrem]`) dentro de un
  grid o flex que pueda angostarse** (columnas `fr`, `1fr`/`0.9fr`, etc.).
  Un tamaño fijo no se encoge cuando la columna que lo contiene se vuelve
  más chica que él — se sale del layout. Se resuelve con `w-full` +
  `max-w-[Npx]` (fluido hasta un techo) en vez de un ancho fijo, más
  `aspect-square`/`aspect-video` si tiene que mantener proporción, y
  `min-w-0` en el elemento de grid/flex que lo contiene.
- **Toda sección nueva se prueba en un barrido real de anchos** — no solo
  mobile/desktop — antes de darla por terminada: 320, 375, 640, 768, 800
  (el punto flaco típico, justo arriba de un breakpoint), 1024, 1280,
  1920, 2560 y también algo bien ancho (4000+, monitores grandes con
  zoom out fuerte). `document.body.scrollWidth` no debe superar
  `window.innerWidth` en ninguno (una diferencia de ~15px es la
  scrollbar, no un bug).
- **Una fila scrolleable (carrusel) que puede llegar a entrar entera en
  pantalla** (cards con `max-w`, zoom out fuerte) se centra con
  `[justify-content:safe_center]`, nunca con `justify-center` a secas:
  `center` sin `safe` puede volver inalcanzable el primer ítem cuando el
  contenido SÍ desborda (el navegador centra el overflow simétricamente
  y el inicio real queda fuera de rango en `scrollLeft: 0`). Tampoco se
  resuelve envolviendo la fila en un contenedor `w-max` + `mx-auto`: si
  las cards tienen ancho en `%`, ese ancho pasa a depender de un
  contenedor que a su vez depende de su contenido — circular, y los
  porcentajes se disparan.
