'use client'
import Link from "next/link";
import { LuSearch as Search, LuMenu as Menu, LuChevronDown as ChevronDown, LuX as X } from "react-icons/lu";
import { useState } from "react";
import Logo, { logoForegroundType, logoVarientType } from "./Logo";

interface NavbarProps {
  variant?: 'navbar-transparent' | 'navbar-white',
}

export default function Navbar({ variant = 'navbar-white' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Define styles based on variant
  const navBgClass = variant === 'navbar-transparent' ? 'bg-transparent' : 'bg-white shadow-sm';
  const textColorClass = variant === 'navbar-transparent' ? 'text-white' : 'text-brand-secondary-900';
  const mobileMenuBgClass = variant === 'navbar-transparent' ? 'bg-brand-secondary-900' : 'bg-white';
  const mobileMenuTextClass = variant === 'navbar-transparent' ? 'text-white' : 'text-brand-secondary-900';
  const mobileMenuBorderClass = variant === 'navbar-transparent' ? 'border-white/10' : 'border-gray-200';
  const hoverClass = variant === 'navbar-transparent' ? 'hover:text-brand-primary' : 'hover:text-brand-primary';
  const logoForeground: logoForegroundType = variant === 'navbar-white' ? 'dark' : 'light';
  const logoVariant : logoVarientType = variant === 'navbar-white' ? 'logo' : 'logo-white';

  return (
    <nav className={`z-[1] relative py-3 px-cont flex items-center justify-between ${navBgClass} ${textColorClass}`}>
      <Logo variant={logoVariant} foreGround={logoForeground} />

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        <Link href="#" className={`${textColorClass} font-semibold ${hoverClass}`}>Home</Link>
        <div className="relative group">
          <button className={`${textColorClass} font-semibold ${hoverClass} flex items-center gap-1`}>
            Umrah Packages <ChevronDown size={16} />
          </button>
          <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-2 p-2 z-50">
            <Link href="#" className="block px-4 py-2 text-brand-secondary-900 hover:bg-brand-secondary-100 rounded-sm">Economy Packages</Link>
            <Link href="#" className="block px-4 py-2 text-brand-secondary-900 hover:bg-brand-secondary-100 rounded-sm">Premium Packages</Link>
            <Link href="#" className="block px-4 py-2 text-brand-secondary-900 hover:bg-brand-secondary-100 rounded-sm">Custom Packages</Link>
          </div>
        </div>
        <Link href="#" className={`${textColorClass} font-semibold ${hoverClass}`}>Hotels</Link>
        <Link href="#" className={`${textColorClass} font-semibold ${hoverClass}`}>Visa</Link>
        <Link href="#" className={`${textColorClass} font-semibold ${hoverClass}`}>Contact Us</Link>
      </div>
      
      <div className="hidden lg:flex items-center gap-4">
        <button className="btn-secondary-white">Contact Us</button>
      </div>
      
      {/* Mobile menu button */}
      <div className="flex lg:hidden items-center gap-4">
        <button onClick={() => setSearchOpen(!searchOpen)} className="p-2" aria-label="Search">
          <Search size={20} className={textColorClass} />
        </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2" aria-label="Menu">
          {mobileMenuOpen ? <X size={24} className={textColorClass} /> : <Menu size={24} className={textColorClass} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 ${mobileMenuBgClass} shadow-lg z-30 px-cont py-4`}>
          <div className="flex flex-col space-y-3">
            <Link href="#" className={`${mobileMenuTextClass} font-semibold py-2 border-b ${mobileMenuBorderClass}`}>Home</Link>
            <div>
              <button className={`${mobileMenuTextClass} font-semibold py-2 flex items-center justify-between w-full border-b ${mobileMenuBorderClass}`}>
                Umrah Packages <ChevronDown size={16} />
              </button>
            </div>
            <Link href="#" className={`${mobileMenuTextClass} font-semibold py-2 border-b ${mobileMenuBorderClass}`}>Hotels</Link>
            <Link href="#" className={`${mobileMenuTextClass} font-semibold py-2 border-b ${mobileMenuBorderClass}`}>Visa</Link>
            <Link href="#" className={`${mobileMenuTextClass} font-semibold py-2 border-b ${mobileMenuBorderClass}`}>Contact Us</Link>
            <div className="flex items-center py-3">
              <button className="px-6 py-3 rounded-sm bg-brand-primary text-white font-bold text-sm w-full" type="button">Sign In</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
