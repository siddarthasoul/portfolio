import type { ContactInfo, ContactLinksProps } from "../../types/contact"


export default function ContactLinks({
  contact,
}: ContactLinksProps) {
  const links = [
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: "@",
      color: "group-hover:text-cyan-300",
      external: false,
    },
    {
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
      icon: "↗",
      color: "group-hover:text-cyan-300",
      external: false,
    },
    {
      label: "WhatsApp",
      value: "Chat with me",
      href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`,
      icon: "W",
      color: "group-hover:text-green-300",
      external: true,
    },
    {
      label: "GitHub",
      value: "View my repositories",
      href: contact.github,
      icon: "GH",
      color: "group-hover:text-purple-300",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "Connect professionally",
      href: contact.linkedin,
      icon: "in",
      color: "group-hover:text-blue-300",
      external: true,
    },
    {
      label: "Instagram",
      value: "Find me on Instagram",
      href: contact.instagram,
      icon: "◎",
      color: "group-hover:text-pink-300",
      external: true,
    },
  ].filter((link) => Boolean(link.value && link.href));

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.07] bg-black/20 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-sm font-semibold text-gray-300 transition ${link.color}`}
          >
            {link.icon}
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-200">
              {link.label}
            </p>
            <p className="mt-1 truncate text-xs text-gray-500">
              {link.value}
            </p>
          </div>

          <span className="shrink-0 text-sm text-gray-600 transition group-hover:translate-x-0.5 group-hover:text-cyan-300">
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}