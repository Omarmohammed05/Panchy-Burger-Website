"use client";

import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";

export default function LocationPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-panchy-bg text-white">
            <Navbar />

            <div className="pt-32 px-4 max-w-7xl mx-auto pb-20">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-panchy-gold glow-text">
                    {t("Find Us", "موقعنا")}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                            <h2 className="text-2xl font-serif font-bold text-white mb-4">
                                {t("Panchy Restaurant - Zarqa", "مطعم بانشي - الزرقاء")}
                            </h2>
                            <p className="text-gray-300 text-lg mb-4">
                                {t(
                                    "Come visit us for the best burger experience in Zarqa. We are located in the heart of the city.",
                                    "تفضل بزيارتنا لأفضل تجربة برجر في الزرقاء. موقعنا في قلب المدينة."
                                )}
                            </p>
                            <div className="space-y-4 text-gray-400">
                                <p className="flex items-center gap-2"><span>📍</span> {t("New Zarqa, 36th St.", "الزرقاء الجديدة، شارع 36")}</p>
                                <p className="flex items-center gap-2"><span>📞</span> +20 128 286 0651</p>
                                <p className="flex items-center gap-2"><span>⏰</span> {t("Open Daily: 12:00 PM - 12:00 AM", "يومياً: ١٢ ظهراً - ١٢ منتصف الليل")}</p>
                            </div>
                            <div className="mt-8">
                                <a
                                    href="https://maps.app.goo.gl/JA3f7WEsVBG7ARfH9"
                                    target="_blank"
                                    className="inline-flex px-8 py-3 bg-panchy-orange text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(255,140,0,0.5)] transition-all transform hover:-translate-y-1"
                                >
                                    {t("Get Directions", "الاتجاهات")}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border border-panchy-gold/20 relative bg-gray-900 group">
                        {/* Visual effect only, clicking opens the real map */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                        {/* Embedded Map Stub */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-800">
                            <iframe
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.583348630983!2d36.08866187514801!3d32.05404557397441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b65c3013f9c69%3A0xc4e51421f10738d8!2sPanchy%20Restaurant!5e0!3m2!1sen!2sjo!4v1707000000000!5m2!1sen!2sjo"
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
