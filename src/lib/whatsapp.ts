export const whatsapp = (text: string) =>
  `https://api.whatsapp.com/send/?phone=557991486259&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
