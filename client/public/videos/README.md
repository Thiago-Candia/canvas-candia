# Videos de proyectos

Poné acá los videos de cada proyecto y referencialos desde
`src/data/content.js` (campo `video` de cada entrada en `PROJECTS`):

    video: '/videos/yovistoasi.mp4'

Mientras un proyecto no tenga `video`, la card muestra un placeholder
con las iniciales del nombre — no hace falta completar todos a la vez.

## Para que el sitio siga siendo rápido

- MP4, códec H.264. ~8–10 MB por video alcanza; 720p es de sobra para
  una preview dentro de una card.
- Sin audio si el video es solo demostrativo (`-an` en ffmpeg).
- El video usa `preload="none"`: no se descarga nada hasta que alguien
  le da play. Si además sumás un `poster` (imagen `.jpg`/`.webp` liviana,
  el primer frame), la card no queda con un cuadro negro mientras tanto.

Ejemplo para comprimir con ffmpeg:

    ffmpeg -i original.mov -vf scale=1280:-2 -c:v libx264 -crf 28 -preset veryslow -an yovistoasi.mp4
