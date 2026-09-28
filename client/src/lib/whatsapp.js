import { PROFILE } from '../data/content.js';

export function whatsappUrl() {
  return `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(PROFILE.whatsappMessage)}`;
}
