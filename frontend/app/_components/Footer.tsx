"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "@/components/ui/Logo";

const socialLinks = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaYoutube, href: "#" },
];

const footerLinks = [
  {
    title: "روابط سريعة",
    links: [
      { name: "عن الأكاديمية", href: "/about" },
      // { name: "المسارات التعليمية", href: "/paths" },
      { name: "الدورات المتاحة", href: "/courses" },
      { name: "الأسئلة الشائعة", href: "/faq" },
    ],
  },
  {
    title: "الدعم",
    links: [
      { name: "مركز المساعدة", href: "/help" },
      { name: "سياسة الخصوصية", href: "/privacy" },
      { name: "الشروط والأحكام", href: "/terms" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-8">
      <hr className={`max-w-6xl mx-auto border-zinc-400/50 mb-8`} />
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-right">
          {/* Section 4: Branding */}
          <div className="flex flex-col gap-4 items-end">
            <div className="flex flex-row-reverse items-center gap-3">
              <div className="text-right">
                <h2 className="font-bold text-xl text-primary2">
                  أكاديمية علاء حامد
                </h2>
                <p className="text-zinc-400 text-sm font-medium" dir="ltr">
                  Alaa Hamed Academy
                </p>
              </div>
              {/* Logo */}
              <Logo />
            </div>
            <p className="text-zinc-600 pr-7 text-sm leading-relaxed max-w-[62.5">
              منصة تعليمية متكاملة لبناء شخصية مسلمة متوازنة.
            </p>
          </div>

          {/* Section 2 & 3: Dynamic Links */}
          {footerLinks.map((group, idx) => (
            <div key={idx} className={`flex flex-col gap-6 order-${3 - idx}`}>
              <h3 className="font-bold text-xl text-primary2">{group.title}</h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="text-zinc-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Section 4: Contact Info */}
          <div className="flex flex-col gap-6 order-4">
            <h3 className="font-bold text-xl text-primary2">تواصل معنا</h3>
            <ul className="flex flex-col gap-4 text-zinc-600">
              <li className="flex flex-row-reverse items-center justify-end gap-3 group">
                <span className="group-hover:text-primary transition-colors">
                  info@alaahamed.academy
                </span>
                <Mail className="w-5 h-5 text-zinc-400" />
              </li>
              <li className="flex flex-row-reverse items-center justify-end gap-3 group">
                <span
                  dir="ltr"
                  className="group-hover:text-primary transition-colors"
                >
                  +966 50 123 4567
                </span>
                <Phone className="w-5 h-5 text-zinc-400" />
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex justify-start gap-3 mt-2">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-50 text-zinc-400 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 max-w-6xl mx-auto pt-8 border-t border-zinc-400/50 text-center text-zinc-600 text-xs flex justify-between items-center">
          <span>
            © {new Date().getFullYear()} أكاديمية علاء حامد. جميع الحقوق محفوظة
          </span>
          <span
            className={`[&_a]:text-primary/75 [&_a]:font-semibold [&_a]:cursor-pointer [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-primary [&_a]:transition-colors [&_a]:duration-300`}
          >
            تم التنفيذ بفضل اللّه بواسطة{" "}
            <a target="_blank" href="https://mnmlst-nine.vercel.app">
              Mnmlst
            </a>{" "}
            و{" "}
            <a target="_blank" href="https://mnmlst-nine.vercel.app">
              Abdullah
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
