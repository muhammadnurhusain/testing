"use client";
import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export default function NavItem({ href, label, onClick }: NavItemProps) {
  return (
    <Link href={href} className="block py-2.5 px-6 hover:bg-gray-100" onClick={onClick}>
      {label}
    </Link>
  );
}
