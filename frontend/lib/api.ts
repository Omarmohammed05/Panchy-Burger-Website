import { MenuData, MenuItem } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Fallback data structure must match the new types
const FALLBACK_MENU: MenuData = {
    "Beef Burger": [
        {
            id: 1,
            name_en: "Classic Beef Burger",
            name_ar: "بيف برجر كلاسيك",
            description_en: "Juicy beef patty with fresh lettuce, tomatoes, onions, and our signature sauce.",
            description_ar: "قطعة لحم بقري عصارية مع خس طازج، طماطم، بصل، وصوصنا المميز.",
            image: "/images/beef_classic.png",
            variants: [{ name_en: "Single", name_ar: "سنجل", price: 150 }]
        },
        {
            id: 2,
            name_en: "Cheese Beef Burger",
            name_ar: "بيف برجر بالجبنة",
            description_en: "Classic beef burger topped with melted cheddar cheese.",
            description_ar: "بيف برجر كلاسيك مغطى بجبنة شيدر ذائبة.",
            image: "/images/beef_cheese.png",
            variants: [{ name_en: "Single", name_ar: "سنجل", price: 170 }]
        },
        {
            id: 3,
            name_en: "Hero Burger",
            name_ar: "هيرو برجر",
            description_en: "A massive burger for heroes, packed with double beef, double cheese, and special toppings.",
            description_ar: "برجر ضخم للأبطال، مليء بقطعتين لحم، قطعتين جبنة، وإضافات خاصة.",
            image: "/images/hero_burger.png",
            variants: [{ name_en: "Double", name_ar: "دبل", price: 220 }]
        }
    ],
    "Chicken Burger": [
        {
            id: 4,
            name_en: "Fried Chicken Burger",
            name_ar: "برجر دجاج مقلي",
            description_en: "Crispy fried chicken breast with lettuce and mayonnaise.",
            description_ar: "صدور دجاج مقلية مقرمشة مع خس ومايونيز.",
            image: "/images/fried_chicken_burger.png",
            variants: [{ name_en: "Single", name_ar: "سنجل", price: 140 }]
        }
    ],
    "Smash Burger": [
        {
            id: 5,
            name_en: "Smash Burger",
            name_ar: "سماش برجر",
            description_en: "Smashed beef patty with crispy edges, cheese, and caramelized onions.",
            description_ar: "قطعة لحم بقري سماش مع أطراف مقرمشة، جبنة، وبصل مكرمل.",
            image: "/images/smash_burger.png",
            variants: [{ name_en: "Single", name_ar: "سنجل", price: 160 }]
        }
    ],
    "Meals": [
        {
            id: 6,
            name_en: "Crunchy Meal",
            name_ar: "وجبة كرانشي",
            description_en: "A complete meal with crunchy chicken, fries, and a drink.",
            description_ar: "وجبة كاملة مع دجاج كرانشي، بطاطس، ومشروب.",
            image: "/images/meal_crunchy.png",
            variants: [{ name_en: "Standard", name_ar: "عادي", price: 200 }]
        },
        {
            id: 7,
            name_en: "Mix Meal",
            name_ar: "وجبة ميكس",
            description_en: "A mix of beef and chicken options served with sides.",
            description_ar: "مزيج من خيارات اللحم والدجاج يقدم مع أطباق جانبية.",
            image: "/images/meal_mix.png",
            variants: [{ name_en: "Standard", name_ar: "عادي", price: 230 }]
        }
    ],
    "Crepes": [
        {
            id: 8,
            name_en: "Cheese Crepe",
            name_ar: "كريب جبنة",
            description_en: "Delicious crepe filled with a mix of cheeses.",
            description_ar: "كريب لذيذ محشو بمزيج من الأجبان.",
            image: "/images/crepe_cheese.png",
            variants: [{ name_en: "Standard", name_ar: "عادي", price: 90 }]
        },
        {
            id: 9,
            name_en: "Crunchy Crepe",
            name_ar: "كريب كرانشي",
            description_en: "Crepe filled with crunchy chicken pieces and sauce.",
            description_ar: "كريب محشو بقطع دجاج كرانشي وصوص.",
            image: "/images/crepe_crunchy.png",
            variants: [{ name_en: "Standard", name_ar: "عادي", price: 110 }]
        }
    ],
    "Rizo": [
        {
            id: 10,
            name_en: "Rizo Strips",
            name_ar: "ريزو ستريبس",
            description_en: "Rice topped with crispy chicken strips and barbecue sauce.",
            description_ar: "أرز مغطى بقطع دجاج ستريبس مقرمشة وصوص باربيكيو.",
            image: "/images/rizo_strips.png",
            variants: [{ name_en: "Standard", name_ar: "عادي", price: 80 }]
        }
    ],
    "Sides": [
        {
            id: 11,
            name_en: "French Fries",
            name_ar: "بطاطس مقلية",
            description_en: "Classic golden crispy french fries.",
            description_ar: "بطاطس مقلية ذهبية مقرمشة كلاسيكية.",
            image: "/images/fries.png",
            variants: [{ name_en: "Medium", name_ar: "وسط", price: 40 }]
        },
        {
            id: 12,
            name_en: "Cheese Fries",
            name_ar: "بطاطس بالجبنة",
            description_en: "Fries topped with melted cheese sauce.",
            description_ar: "بطاطس مغطاة بصوص الجبنة الذائبة.",
            image: "/images/fries_cheese.png",
            variants: [{ name_en: "Medium", name_ar: "وسط", price: 55 }]
        }
    ]
};

export async function getMenu(): Promise<MenuData> {
    // If the API URL is localhost, assume we are in a demo/no-backend env 
    // and use fallback data immediately to avoid "connection refused" errors in console.
    if (API_URL.includes("localhost")) {
        console.log("Using fallback menu data (Localhost detected)");
        return FALLBACK_MENU;
    }

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
