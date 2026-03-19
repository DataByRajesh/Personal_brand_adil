
import { Instagram, Linkedin } from 'lucide-react';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Performances", href: "#performances" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/adil_ibnu/", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/adil-ibnu-0b7aa7354/", icon: Linkedin },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white tracking-wider">ADIL IBNU</a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
