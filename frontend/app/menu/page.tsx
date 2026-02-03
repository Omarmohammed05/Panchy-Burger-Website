"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { getMenu } from "@/lib/api";
import { MenuData, MenuItem, Category } from "@/types";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";

export default function MenuPage() {
    const [menu, setMenu] = useState<MenuData | null>(null);
    const [activeCategory, setActiveCategory] = useState<Category>("Beef Burger");
    const [loading, setLoading] = useState(true);
    const { lang, t } = useLanguage();
    const { addToCart } = useCart();

    useEffect(() => {
        async function loadMenu() {
            const data = await getMenu();
            setMenu(data);
            setLoading(false);
        }
        loadMenu();
    }, []);

    const categories: Category[] = ["Beef Burger", "Chicken Burger", "Smash Burger", "Meals", "Crepes", "Rizo", "Sides"];

    const categoryTranslations: Record<Category, string> = {
        "Beef Burger": "بيف برجر",
        "Chicken Burger": "تشيكن برجر",
        "Smash Burger": "سماش برجر",
        "Meals": "وجبات",
        "Crepes": "كريب",
        "Rizo": "ريزو",
        "Sides": "أطباق جانبية"
    };

    const getPriceDisplay = (item: MenuItem) => {
        if (item.variants && item.variants.length > 0) {
            const price = item.variants[0].price;
            return `${price} EGP`;
        }
        return "N/A";
    };

    const handleAddToCart = (item: MenuItem, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(item, item.variants[0]);
        alert(t("Added to cart!", "تمت الإضافة للسلة!"));
    };

    return (
        <main className="min-h-screen bg-panchy-bg text-white">
            <Navbar />

            <div className="pt-32 px-4 max-w-7xl mx-auto pb-20">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-panchy-gold glow-text">
                    {t("Our Menu", "قائمة الطعام")}
                </h1>

                <div className="flex justify-center mb-12 flex-wrap gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full border transition-all text-sm md:text-lg font-bold uppercase tracking-wider ${activeCategory === cat
                                ? "bg-panchy-orange border-panchy-orange text-black glow-box"
                                : "border-gray-800 text-gray-400 hover:border-panchy-orange hover:text-panchy-orange"
                                }`}
                        >
                            {lang === "en" ? cat : categoryTranslations[cat]}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="text-center text-gray-400 animate-pulse">{t("Loading menu...", "جاري تحميل القائمة...")}</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {menu && menu[activeCategory]?.map((item: MenuItem) => (
                            <Link href={`/menu/${item.id}`} key={item.id} className="block group h-full">
                                <div className="bg-panchy-dark border border-white/5 rounded-2xl overflow-hidden hover:border-panchy-orange/50 transition-all hover:shadow-[0_0_30px_rgba(255,159,28,0.15)] h-full flex flex-col relative">
                                    {/* Image Area */}
                                    <div className="h-56 bg-gradient-to-b from-gray-800 to-panchy-dark relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={lang === "en" ? item.name_en : item.name_ar}
                                                className="w-full h-full object-contain p-4 drop-shadow-xl"
                                                onError={(e) => {
                                                    // Fallback if image fails to load
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                                                    e.currentTarget.parentElement!.innerHTML = '<div class="text-4xl">🍔</div>';
                                                }}
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-4xl group-hover:text-panchy-gold transition-colors">
                                                🍔
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6 flex flex-col flex-1 relative z-10">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold font-serif text-white group-hover:text-panchy-orange transition-colors">
                                                {lang === "en" ? item.name_en : item.name_ar}
                                            </h3>
                                            <span className="text-panchy-gold font-bold text-lg">{getPriceDisplay(item)}</span>
                                        </div>

                                        <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-1 leading-relaxed">
                                            {lang === "en" ? item.description_en : item.description_ar}
                                        </p>

                                        <button
                                            onClick={(e) => handleAddToCart(item, e)}
                                            className="w-full py-3 rounded-xl bg-white/5 hover:bg-panchy-gold hover:text-black transition-all text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group-hover:bg-white/10"
                                        >
                                            <span>{t("Add to Cart", "أضف للسلة")} 🛒</span>
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
