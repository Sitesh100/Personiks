import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Treatments", href: "/treatments" },
  { name: "Instant Procedures", href: "/instant-procedures" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "About Us", href: "/about" },
];

export default function Header() {
  return (
    <header className="w-full flex justify-center pt-8">
      <nav
        className="flex items-center justify-between w-[1308px] h-[100px] bg-cream rounded-4xl px-[40px] shadow"
        style={{ maxWidth: "98vw" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.svg"
            alt="Personiks Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <span className="font-serif text-2xl font-bold text-gold">
            Personiks
          </span>
        </Link>
        {/* Nav Links */}
        <ul className="flex items-center gap-[48px]">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-lg font-medium text-[#222] hover:text-gold transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
