export interface Variant {
    name_en: string;
    name_ar: string;
    price: number;
}

export interface MenuItem {
    id: number;
    name_en: string;
    name_ar: string;
    description_en: string;
    description_ar: string;
    image: string;
    variants: Variant[];
}

export type Category = "Beef Burger" | "Chicken Burger" | "Smash Burger" | "Meals" | "Crepes" | "Rizo" | "Sides";

export interface MenuData {
    "Beef Burger": MenuItem[];
    "Chicken Burger": MenuItem[];
    "Smash Burger": MenuItem[];
    "Meals": MenuItem[];
    "Crepes": MenuItem[];
    "Rizo": MenuItem[];
    "Sides": MenuItem[];
}

export type Language = "en" | "ar";
