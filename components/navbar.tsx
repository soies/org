import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/notice", label: "Notice" },
  { href: "/#event", label: "Events" },
];

export default function NavBar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className='flex h-24 items-center px-4 md:px-6  sticky top-0 z-50 bg-slate-50 dark:bg-gray-950'>
      {/* Logo */}
      <Link
        href='/'
        aria-label='SOIES Nepal'
        prefetch={false}
        className='flex items-center'
      >
        <Image
          src='/soies.svg'
          alt='SOIES Nepal Logo'
          width={80}
          height={80}
          priority
        />
        <div
          className={`flex flex-col font-semibold p-4 ${isClient ? "font-bold" : ""}`}
        >
          <p>Society of Industrial Engineering</p>
          <p>Students - SOIES Nepal</p>
        </div>
      </Link>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='lg:hidden ml-auto'>
            <Menu />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle className='font-bold'>SOIES Nepal</SheetTitle>
          </SheetHeader>
          <nav className='grid gap-4 py-6'>
            {menuItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className='w-full py-2 text-lg font-bold'
                prefetch={false}
              >
                {label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <nav className='hidden lg:flex gap-6 ml-auto'>
        {menuItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className='inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-bold transition-colors hover:bg-gray-100 dark:hover:bg-gray-800'
            prefetch={false}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
