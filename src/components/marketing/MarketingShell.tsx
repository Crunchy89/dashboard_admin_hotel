"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./data";

export default function MarketingShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b1c24] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 20% 10%, #1f6f78 0%, transparent 55%), radial-gradient(ellipse 70% 45% at 90% 80%, #0e3a48 0%, transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1c24]/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-icon.svg"
              alt="Smart Hotel"
              width={36}
              height={36}
            />
            <span className="text-lg font-semibold tracking-tight">
              Smart Hotel
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex lg:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition ${
                    isActive
                      ? "font-medium text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/pricing"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#0b1c24] transition hover:bg-white/90"
          >
            Get started
          </Link>
        </div>
      </header>

      <div className="relative z-10">{children}</div>

      <footer className="relative z-10 border-t border-white/10 bg-[#08151b]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/logo-icon.svg"
                alt="Smart Hotel"
                width={28}
                height={28}
              />
              <span className="text-sm font-medium">Smart Hotel</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              Connected stays for affiliated hotels and homes — rooms, devices,
              points, and operations on one network.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Support FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>© {new Date().getFullYear()} Smart Hotel. All rights reserved.</p>
            <p>Built for affiliated hotels and smart homes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
