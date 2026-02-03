"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleLang, lang, t } = useLanguage();
    const { totalItems } = useCart();

    return (
        <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex items-center">
                        <Link href="/" className="relative h-16 w-32 md:h-20 md:w-40 transition-transform hover:scale-105">
                            <img
                                src="/images/logo.png"
                                alt="Panchy Logo"
                                className="w-full h-full object-contain"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-300 hover:text-panchy-orange transition-colors text-sm font-bold uppercase tracking-widest">
                            {t("Home", "الرئيسية")}
                        </Link>
                        <Link href="/menu" className="text-gray-300 hover:text-panchy-orange transition-colors text-sm font-bold uppercase tracking-widest">
                            {t("Menu", "قائمة الطعام")}
                        </Link>
                        <Link href="/location" className="text-gray-300 hover:text-panchy-orange transition-colors text-sm font-bold uppercase tracking-widest">
                            {t("Contact Us", "تواصل معنا")}
                        </Link>

                        <Link href="/cart" className="relative text-gray-300 hover:text-panchy-orange transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-panchy-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>

                        <button
                            onClick={toggleLang}
                            className="px-4 py-1 border border-white/20 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all uppercase"
                        >
                            {lang === "en" ? "AR" : "EN"}
                        </button>
                    </div>

                    <div className="-mr-2 flex md:hidden items-center gap-4">
                        <button
                            onClick={toggleLang}
                            className="px-3 py-1 border border-white/20 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all uppercase"
                        >
                            {lang === "en" ? "AR" : "EN"}
                        </button>
                        <Link href="/cart" className="relative text-white hover:text-panchy-orange transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-panchy-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-panchy-orange focus:outline-none"
                        >
                            {!isOpen ? (
                                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black border-t border-white/10">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        <Link href="/" className="text-gray-300 hover:text-panchy-orange block py-2 text-lg font-bold">
                            {t("Home", "الرئيسية")}
                        </Link>
                        <Link href="/menu" className="text-gray-300 hover:text-panchy-orange block py-2 text-lg font-bold">
                            {t("Menu", "قائمة الطعام")}
                        </Link>
                        <Link href="/location" className="text-gray-300 hover:text-panchy-orange block py-2 text-lg font-bold">
                            {t("Contact Us", "تواصل معنا")}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
