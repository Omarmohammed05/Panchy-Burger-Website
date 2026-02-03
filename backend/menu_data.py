from typing import List, Dict, Union

# Helper for standard variant structure
def v(name_en, name_ar, price):
    return {"name_en": name_en, "name_ar": name_ar, "price": price}

MENU_DATA: Dict[str, List[Dict]] = {
    "Beef Burger": [
        {
            "id": 101,
            "name_en": "Classic Burger",
            "name_ar": "كلاسيك برجر",
            "description_en": "Beef patty with Panchy sauce, lettuce, and pickled cucumbers.",
            "description_ar": "قطعة لحم بتتبيلة بانشي، صوص بانشي، خس، وخيار مخلل.",
            "image": "/images/beef_classic.png",
            "variants": [v("Single", "سنجل", 55), v("Double", "دبل", 85)]
        },
        {
            "id": 102,
            "name_en": "Cheese Burger",
            "name_ar": "تشيز برجر",
            "description_en": "Beef patty with Cheese sauce, American cheese slice, lettuce, and pickled cucumbers.",
            "description_ar": "قطعة لحم، صوص جبنة، شريحة جبن أمريكي، خس، خيار مخلل.",
            "image": "/images/beef_cheese.png",
            "variants": [v("Single", "سنجل", 65), v("Double", "دبل", 95)]
        },
        {
            "id": 103,
            "name_en": "Jalapeno Burger",
            "name_ar": "هاليبينو برجر",
            "description_en": "Beef patty with Fire sauce, Jalapeno pieces, lettuce, and pickled cucumbers.",
            "description_ar": "قطعة لحم، صوص فاير، قطع هاليبينو، خس، خيار مخلل.",
            "image": "/images/beef_classic.png",
            "variants": [v("Single", "سنجل", 65), v("Double", "دبل", 95)]
        },
        {
            "id": 104,
            "name_en": "Mushroom Bacon Burger",
            "name_ar": "مشروم بيكون برجر",
            "description_en": "Beef patty with Panchy sauce, Mushroom pieces, Smoked bacon, BBQ sauce, lettuce, and pickles.",
            "description_ar": "قطعة لحم، صوص بانشي، قطع مشروم، بيكون مدخن، صوص باربيكيو، خس، خيار.",
            "image": "/images/beef_classic.png",
            "variants": [v("Single", "سنجل", 75), v("Double", "دبل", 105)]
        },
        {
            "id": 105,
            "name_en": "Panchy Special - Cheese Panchy",
            "name_ar": "بانشي سبيشيال - تشيز بانشي",
            "description_en": "Special marinated beef, Cheese sauce, American cheese, Mozzarella sticks, lettuce, tomato, pickles.",
            "description_ar": "قطعة لحم بتتبيلة خاصة، صوص جبنة، اصابع موتزاريلا، خس، طماطم، خيار.",
            "image": "/images/beef_cheese.png",
            "variants": [v("Standard", "وسط", 140)]
        }
    ],
    "Chicken Burger": [
        {
            "id": 201,
            "name_en": "Fried Classic Burger",
            "name_ar": "فرايد كلاسيك برجر",
            "description_en": "Fried chicken with Mayonnaise, Runch sauce, lettuce, and pickles.",
            "description_ar": "فرايد، مايونيز، صوص رانش، خس، خيار مخلل.",
            "image": "/images/fried_chicken_burger.png",
            "variants": [v("Single", "سنجل", 50), v("Double", "دبل", 70)]
        },
        {
            "id": 202,
            "name_en": "Fried Cheese Burger",
            "name_ar": "فرايد تشيز برجر",
            "description_en": "Fried chicken with Mozzarella sticks, Cheese sauce, Runch sauce, lettuce, and pickles.",
            "description_ar": "فرايد، اصابع موتزاريلا، صوص جبنة، صوص رانش، خس، خيار مخلل.",
            "image": "/images/fried_chicken_burger.png",
            "variants": [v("Single", "سنجل", 55), v("Double", "دبل", 75)]
        },
        {
            "id": 203,
            "name_en": "Panchy Special - Runch Panchy",
            "name_ar": "بانشي سبيشيال - رانش تشيكن",
            "description_en": "Marinated chicken, Smoked Turkey, Runch sauce, Cheese sauce, lettuce, tomato, pickles.",
            "description_ar": "قطعة دجاج بتتبيلة بانشي، شريحة تركي مدخن، صوص الجبنة، خس، طماطم، خيار.",
            "image": "/images/fried_chicken_burger.png",
            "variants": [v("Standard", "وسط", 130)]
        }
    ],
    "Smash Burger": [
        {
            "id": 301,
            "name_en": "Smash Classic",
            "name_ar": "سماش كلاسيك",
            "description_en": "Smash beef patty with Panchy sauce, lettuce, and pickles.",
            "description_ar": "قطعة لحم سماش، صوص بانشي، خس، خيار مخلل.",
            "image": "/images/smash_burger.png",
            "variants": [v("Single", "سنجل", 65), v("Double", "دبل", 95), v("Triple", "تريبل", 125)]
        },
        {
            "id": 302,
            "name_en": "Smash Cheesy",
            "name_ar": "سماش تشيزي",
            "description_en": "Smash beef with Cheese sauce, American cheese slice, lettuce, and pickles.",
            "description_ar": "قطعة لحم سماش، صوص جبنة، شريحة جبن امريكي، خس، خيار مخلل.",
            "image": "/images/smash_burger.png",
            "variants": [v("Single", "سنجل", 85), v("Double", "دبل", 115), v("Triple", "تريبل", 145)]
        }
    ],
    "Meals": [
        {
            "id": 401,
            "name_en": "Crunchy Chile Meal",
            "name_ar": "وجبة كرانشي تشيلي",
            "description_en": "3 Strips, Fries, Rice, Sweet Chili sauce, Pickles.",
            "description_ar": "3 ستربس، بطاطس، رز، صوص سويت شيلي، مخلل.",
            "image": "/images/meal_crunchy.png",
            "variants": [v("Standard", "وسط", 95)]
        },
        {
            "id": 402,
            "name_en": "Mix El Kaif Meal",
            "name_ar": "وجبة ميكس الكييف",
            "description_en": "2 Shish, 2 Kofta, Rice, Potatoes, Tahini, BBQ sauce, Pickles.",
            "description_ar": "2 شيش، 2 كفتة، رز، بطاطس، طحينة، صوص باربيكيو، مخلل.",
            "image": "/images/meal_mix.png",
            "variants": [v("Standard", "وسط", 120)]
        }
    ],
    "Crepes": [
        {
            "id": 501,
            "name_en": "Super Crunchy Crepe",
            "name_ar": "كريب سوبر كرانشي",
            "description_en": "Crispy chicken crepe.",
            "description_ar": "كريب دجاج مقرمش.",
            "image": "/images/crepe_crunchy.png",
            "variants": [v("Standard", "وسط", 50)]
        },
        {
            "id": 502,
            "name_en": "Mix Cheese Crepe",
            "name_ar": "كريب ميكس جبن",
            "description_en": "Assorted cheese blend.",
            "description_ar": "تشكيلة جبن.",
            "image": "/images/crepe_cheese.png",
            "variants": [v("Standard", "وسط", 55)]
        }
    ],
    "Rizo": [
        {
            "id": 601,
            "name_en": "Strips Rizo",
            "name_ar": "استربس ريزو",
            "description_en": "Rice with chicken strips.",
            "description_ar": "أرز مع قطع دجاج استربس.",
            "image": "/images/rizo_strips.png",
            "variants": [v("Standard", "وسط", 50)]
        }
    ],
    "Sides": [
        {
            "id": 701,
            "name_en": "Fries",
            "name_ar": "بطاطس",
            "description_en": "Golden crispy fries.",
            "description_ar": "بطاطس مقلية ذهبية.",
            "image": "/images/fries.png",
            "variants": [v("Small", "صغير", 20), v("Large", "كبير", 30)]
        },
        {
            "id": 702,
            "name_en": "Cheesy Fries",
            "name_ar": "شيزي فرايز",
            "description_en": "Fries with cheese sauce.",
            "description_ar": "بطاطس مع صوص الجبنة.",
            "image": "/images/fries_cheese.png",
            "variants": [v("Standard", "وسط", 35)]
        }
    ]
}
