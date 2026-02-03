"use client";

import { useState, useEffect, use } from "react";
import Navbar from "@/components/Navbar";
import { getMenuItem } from "@/lib/api";
import { MenuItem, Variant } from "@/types";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const [item, setItem] = useState<MenuItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
    const { lang, t } = useLanguage();
    const { addToCart } = useCart();

    useEffect(() => {
        async function loadItem() {
            const data = await getMenuItem(resolvedParams.id);
            setItem(data);
            if (data && data.variants.length > 0) {
                setSelectedVariant(data.variants[0]);
            }
            setLoading(false);
        }
        loadItem();
    }, [resolvedParams.id]);

    const handleAddToCart = () => {
        if (!item || !selectedVariant) return;
        addToCart(item, selectedVariant);
        alert(t("Added to cart!", "تمت الإضافة للسلة!"));
    };

    if (loading) return <div className="min-h-screen bg-panchy-bg text-white flex items-center justify-center">{t("Loading...", "جاري التحميل...")}</div>;
    if (!item) return <div className="min-h-screen bg-panchy-bg text-white flex items-center justify-center">{t("Product not found", "المنتج غير موجود")}</div>;

    return (
        <main className="min-h-screen bg-panchy-bg text-white">
            <Navbar />
            <div className="pt-32 px-4 max-w-5xl mx-auto pb-20">
                <Link href="/menu" className="text-gray-400 hover:text-panchy-orange mb-8 block font-bold uppercase text-sm tracking-wider hover:translate-x-1 transition-transform">
                    &larr; {t("Back to Menu", "العودة للقائمة")}
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="aspect-square bg-gradient-to-br from-gray-800 to-black rounded-3xl flex items-center justify-center text-8xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden group">
                        {item.image ? (
                            <img
                                src={item.image}
                                alt={lang === "en" ? item.name_en : item.name_ar}
                                className="w-[85%] h-[85%] object-contain drop-shadow-2xl animate-float"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                🍔
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 line-clamp-2">
                            {lang === "en" ? item.name_en : item.name_ar}
                        </h1>
                        <p className="text-3xl font-bold text-panchy-gold mb-8 glow-text">
                            {selectedVariant ? `${selectedVariant.price} EGP` : "---"}
                        </p>

                        <p className="text-gray-300 text-lg mb-8 leading-relaxed border-l-2 border-panchy-red pl-4">
                            {lang === "en" ? item.description_en : item.description_ar}
                        </p>

                        {/* Variants Selector */}
                        {item.variants.length > 1 && (
                            <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/5">
                                <label className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-3 block">{t("Select Size", "اختر الحجم")}</label>
                                <div className="flex flex-wrap gap-2">
                                    {item.variants.map((variant, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedVariant(variant)}
                                            className={`px-6 py-3 rounded-xl font-bold transition-all ${selectedVariant === variant
                                                ? "bg-panchy-red text-white shadow-lg scale-105"
                                                : "bg-black text-gray-400 hover:bg-gray-800"
                                                }`}
                                        >
                                            {lang === "en" ? variant.name_en : variant.name_ar}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="space-y-4">
                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-panchy-orange text-black font-bold py-5 rounded-2xl hover:bg-panchy-gold transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 text-lg"
                            >
                                <span>{t("Add to Cart", "أضف للسلة")} 🛒</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
