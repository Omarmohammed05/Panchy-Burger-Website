"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { MenuItem, Variant } from "@/types";

export interface CartItem {
    id: string; // unique id for cart item (item.id + variant.name)
    menuItem: MenuItem;
    variant: Variant;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: MenuItem, variant: Variant) => void;
    removeFromCart: (cartItemId: string) => void;
    clearCart: () => void;
    totalPrice: number;
    totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Load cart from local storage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("panchy_cart");
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to load cart", e);
            }
        }
    }, []);

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("panchy_cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: MenuItem, variant: Variant) => {
        const cartItemId = `${item.id}-${variant.name_en}`;

        setCart((prev) => {
            const existing = prev.find((i) => i.id === cartItemId);
            if (existing) {
                return prev.map((i) =>
                    i.id === cartItemId ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { id: cartItemId, menuItem: item, variant, quantity: 1 }];
        });
    };

    const removeFromCart = (cartItemId: string) => {
        setCart((prev) => prev.filter((i) => i.id !== cartItemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalPrice = cart.reduce((total, item) => total + (item.variant.price * item.quantity), 0);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice, totalItems }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
