export const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/o-meni", label: "O meni" },
  { href: "/usluge", label: "Usluge" },
  { href: "/saradnja", label: "Saradnja" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

const WHATSAPP_MESSAGE =
  "Zdravo! Zanima me zakazivanje termina za logopedsku procenu.";

export const CONTACT = {
  phone: "062 975 8945",
  phoneHref: "+381629758945",
  email: "dunja.joksic31@gmail.com",
  address: "Ulica i broj, Beograd",
  hours: "Ponedeljak – petak, po zakazivanju",
  instagram: "#",
  whatsappHref: `https://wa.me/381629758945?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
};

export const SITE_NAME = "Logopedski kabinet Dunje Joksić";
