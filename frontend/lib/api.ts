import { MenuData, MenuItem } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Fallback data structure must match the new types
const FALLBACK_MENU: MenuData = {
    "Beef Burger": [],
    "Chicken Burger": [],
    "Smash Burger": [],
    "Meals": [],
    "Crepes": [],
    "Rizo": [],
    "Sides": []
};

export async function getMenu(): Promise<MenuData> {
    try {
        const res = await fetch(`${API_URL}/menu`, { cache: 'no-store' });
        if (!res.ok) throw new Error("Failed to fetch menu");
        return res.json();
    } catch (error) {
        console.warn("Backend not reachable, using fallback data", error);
        return FALLBACK_MENU;
    }
}

export async function getMenuItem(id: string): Promise<MenuItem | null> {
    const menu = await getMenu();
    // Search through all categories
    for (const category of Object.values(menu)) {
        const item = category.find((i: MenuItem) => i.id.toString() === id);
        if (item) return item;
    }
    return null;
}
