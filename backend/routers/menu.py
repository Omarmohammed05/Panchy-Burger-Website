from fastapi import APIRouter, HTTPException
from typing import List, Dict
from menu_data import MENU_DATA

router = APIRouter(
    prefix="/menu",
    tags=["menu"],
    responses={404: {"description": "Not found"}},
)

@router.get("/", response_model=Dict[str, List[Dict]])
async def get_full_menu():
    """
    Get the full menu categorized by cuisine.
    """
    return MENU_DATA

@router.get("/{category}", response_model=List[Dict])
async def get_menu_by_category(category: str):
    """
    Get menu items for a specific category (American, Arabic, Asian).
    """
    category_key = category.capitalize()
    if category_key not in MENU_DATA:
        raise HTTPException(status_code=404, detail="Category not found")
    return MENU_DATA[category_key]
