"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import InstagramFeed from "@/components/InstagramFeed";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <main className="min-h-screen bg-panchy-bg text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-panchy-red/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-panchy-orange/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className={`text-center md:text-start flex-1 ${lang === "ar" ? "md:text-right" : ""}`}>
            <h2 className="text-panchy-orange font-bold text-lg mb-4 tracking-widest uppercase animate-fade-in-up">
              {t("Affordable and very filling", "أسعار مميزة وطعم يشبعك")}
            </h2>
            <h1 className="text-5xl md:text-7xl font-sans font-black leading-tight mb-6">
              {t("Hot, fresh burgers", "برجر ساخن وطازج")} <br />
              <span className="text-white relative inline-block">
                {t("made for any time", "معمول عشانك")}
                {/* Decorative underline/sparkle could go here */}
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-panchy-orange to-panchy-red">
                {t("cravings", "في أي وقت")}
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              {t(
                "Made with fresh ingredients, juicy patties, and soft buns, our burgers are grilled to perfection and served hot. Every bite is packed with rich flavor.",
                "مكونات طازجة، لحم بلدي، وعيش طري. البرجر بتاعنا مشوي بامتياز وبيتقدم ساخن. كل قطعة مليانة طعم ياخدك لبعيد."
              )}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${lang === "ar" ? "md:justify-end" : "md:justify-start"}`}>
              <Link
                href="/menu"
                className="px-8 py-4 bg-panchy-orange text-black font-bold rounded-full hover:bg-panchy-gold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,159,28,0.4)]"
              >
                {t("Order now 🍔", "اطلب الآن 🍔")}
              </Link>
              <Link
                href="/menu"
                className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all font-bold backdrop-blur-sm"
              >
                {t("See our menu", "القائمة الكاملة")}
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl">
                🛵
              </div>
              <div>
                <p className="text-sm text-gray-400">{t("We offer fast", "خدمة توصيل")}</p>
                <p className="font-bold text-white">{t("delivery service", "سريعة جداً")}</p>
              </div>
            </div>
          </div>

          {/* Hero Image / 3D Composition */}
          <div className="flex-1 relative w-full aspect-square max-w-[600px]">
            {/* This simulates the floating burger composition from the screenshot */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-panchy-bg z-10 md:hidden"></div>

            {/* Main Burger Image Placeholder - In real implementation, these would be separate floating PNGs */}
            {/* Main Burger Image Placeholder - In real implementation, these would be separate floating PNGs */}
            <div className="relative z-0 animate-float w-full h-full flex items-center justify-center">
              {/* Replace with actual burger images */}
              <img
                src="/images/hero_burger.png"
                alt="Panchy Hero Burger"
                className="w-[120%] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-none ml-[-10%]"
              />
            </div>

            {/* Floating Ingredients Composition */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-20">
              <img
                src="/images/hero_ingredients.png"
                alt="Fresh Ingredients"
                className="w-full h-full object-contain animate-float-delayed scale-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />
    </main>
  );
}
