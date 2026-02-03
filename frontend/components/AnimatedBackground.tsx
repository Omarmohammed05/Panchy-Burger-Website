"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
    const [particles, setParticles] = useState<{ id: number; left: string; duration: string; delay: string }[]>([]);

    useEffect(() => {
        // Generate static particles on client side only to avoid hydration mismatch
        const newParticles = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            duration: `${10 + Math.random() * 20}s`,
            delay: `${Math.random() * 5}s`
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="bg-animation">
            {/* Dynamic particles */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        left: p.left,
                        animationDuration: p.duration,
                        animationDelay: p.delay
                    }}
                />
            ))}

            {/* Static Gradient Globs */}
            {/* Dynamic Gradient Orbs - Moving & Morphing */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-panchy-red/20 rounded-full blur-[128px] mix-blend-screen filter animate-blob" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-panchy-orange/20 rounded-full blur-[128px] mix-blend-screen filter animate-blob animation-delay-2000" />
            <div className="absolute -bottom-32 left-20 w-96 h-96 bg-panchy-gold/20 rounded-full blur-[128px] mix-blend-screen filter animate-blob animation-delay-4000" />
            <div className="absolute -bottom-32 right-20 w-96 h-96 bg-panchy-red/20 rounded-full blur-[128px] mix-blend-screen filter animate-blob animation-delay-2000" />
        </div>
    );
}
