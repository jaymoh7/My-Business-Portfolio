export const WHATSAPP_NUMBER = '254741549320';
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
export const buildWaLink = (msg: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;

export const EMAIL = 'jamesnjorogetech@gmail.com';
export const LOCATION = 'Nairobi, Kenya';
