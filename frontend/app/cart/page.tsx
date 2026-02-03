"use client";

import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function CartPage() {
    const { cart, removeFromCart, clearCart, totalPrice } = useCart();
    const { lang, t } = useLanguage();

    const handleWhatsAppCheckout = () => {
        if (cart.length === 0) return;

        const phoneNumber = "201282860651";

        // Order Message (Arabic Only)
        let message = `*طلب جديد:*\n\n`;
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.menuItem.name_ar} (${item.variant.name_ar}) x${item.quantity} - ${item.variant.price * item.quantity} EGP\n`;
        });
        message += `\n*الإجمالي:* ${totalPrice} EGP`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    };

    return (
        <main className="min-h-screen bg-panchy-bg text-white">
            <Navbar />

            <div className="pt-32 px-4 max-w-4xl mx-auto pb-20">
                <h1 className="text-4xl font-serif font-bold text-center mb-12 text-panchy-gold glow-text">
                    {t("Your Cart", "سلة المشتريات")}
                </h1>

                {cart.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-2xl text-gray-400 mb-8">{t("Your cart is empty", "السلة فارغة")}</p>
                        <Link href="/menu" className="px-8 py-3 bg-panchy-orange text-black font-bold rounded-xl hover:bg-panchy-gold transition-all">
                            {t("Browse Menu", "تصفح القائمة")}
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                        <div className="p-6 md:p-8 space-y-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6 last:border-0">
                                    <div className="flex items-center gap-6 w-full md:w-auto">
                                        <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                                            🍔
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">
                                                {lang === "en" ? item.menuItem.name_en : item.menuItem.name_ar}
                                            </h3>
                                            <p className="text-sm text-gray-400">
                                                {lang === "en" ? item.variant.name_en : item.variant.name_ar}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between w-full md:w-auto gap-8">
                                        <span className="font-bold text-gray-300">x{item.quantity}</span>
                                        <span className="font-bold text-panchy-gold text-lg">{item.variant.price * item.quantity} EGP</span>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-400 transition-colors p-2"
                                            title="Remove"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-black/40 p-6 md:p-8 border-t border-white/10">
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-2xl font-serif text-white">{t("Total", "الإجمالي")}</span>
                                <span className="text-3xl font-bold text-panchy-red glow-text">{totalPrice} EGP</span>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <button
                                    onClick={clearCart}
                                    className="px-6 py-4 border border-white/20 text-gray-400 font-bold rounded-xl hover:bg-white/10 hover:text-white transition-all"
                                >
                                    {t("Clear Cart", "مسح السلة")}
                                </button>
                                <button
                                    onClick={handleWhatsAppCheckout}
                                    className="flex-1 bg-[#25D366] text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all transform hover:scale-[1.01] flex items-center justify-center gap-3 text-lg"
                                >
                                    <span>{t("Checkout via WhatsApp", "إتمام الطلب عبر واتساب")}</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448.001 9.9-4.371 9.914-9.719.008-5.348-4.425-9.749-9.847-9.749-5.447-.001-9.9 4.37-9.915 9.719-.001 2.115.596 3.715 1.591 5.392l-.815 2.977 3.68-.812zm7.264-7.443c-.247-.124-1.463-.723-1.69-.808-.227-.085-.392-.125-.56.126-.167.251-.652.809-.799.975-.147.167-.294.19-.54.067-.247-.124-1.04-.383-1.983-1.222-.736-.656-1.232-1.468-1.378-1.716-.147-.248-.016-.381.108-.504.111-.11.247-.29.371-.433.125-.143.167-.238.251-.403.084-.167.042-.314-.022-.441-.062-.126-.56-1.352-.767-1.838-.202-.486-.407-.419-.56-.426-.145-.008-.31-.009-.475-.009-.166 0-.434.063-.661.309-.227.247-.867.848-.867 2.067 0 1.219.888 2.396 1.013 2.562.125.166 1.748 2.668 4.236 3.742 2.488 1.074 2.488.716 2.943.673.455-.043 1.463-.598 1.67-.1.176.207.176.417.108.535-.067.118-.247.243-.493.367z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
