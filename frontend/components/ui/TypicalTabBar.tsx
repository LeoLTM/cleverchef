"use client";

import { Apple, Pizza, Drumstick, Fish, IceCream, Coffee } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface TypicalTabBarProps {}

export default function TypicalTabBar({}: TypicalTabBarProps) {
  interface Category {
    id: string;
    name: string;
    icon: JSX.Element;
  }
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: "fruits",
      name: "Fruits",
      icon: <Apple className="h-6 w-6 mb-1" />,
    },
    {
      id: "pizza",
      name: "Pizza",
      icon: <Pizza className="h-6 w-6 mb-1" />,
    },
    {
      id: "meat",
      name: "Meat",
      icon: <Drumstick className="h-6 w-6 mb-1" />,
    },
    {
      id: "seafood",
      name: "Seafood",
      icon: <Fish className="h-6 w-6 mb-1" />,
    },
    {
      id: "desserts",
      name: "Desserts",
      icon: <IceCream className="h-6 w-6 mb-1" />,
    },
    {
      id: "beverages",
      name: "Beverages",
      icon: <Coffee className="h-6 w-6 mb-1" />,
    },
    {
      id: "vegetables",
      name: "Vegetables",
      icon: <Apple className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "bread",
      name: "Bread",
      icon: <Pizza className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "dairy",
      name: "Dairy",
      icon: <Drumstick className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "snacks",
      name: "Snacks",
      icon: <Fish className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "frozen",
      name: "Frozen",
      icon: <IceCream className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "condiments",
      name: "Condiments",
      icon: <Coffee className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "canned",
      name: "Canned",
      icon: <Apple className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "baking",
      name: "Baking",
      icon: <Pizza className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "grains",
      name: "Grains",
      icon: <Drumstick className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "spices",
      name: "Spices",
      icon: <Fish className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "sauces",
      name: "Sauces",
      icon: <IceCream className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "pasta",
      name: "Pasta",
      icon: <Coffee className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "breakfast",
      name: "Breakfast",
      icon: <Apple className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "cleaning",
      name: "Cleaning",
      icon: <Pizza className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "personal-care",
      name: "Personal Care",
      icon: <Drumstick className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "baby",
      name: "Baby",
      icon: <Fish className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "pet",
      name: "Pet",
      icon: <IceCream className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "household",
      name: "Household",
      icon: <Coffee className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "health",
      name: "Health",
      icon: <Apple className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
    {
      id: "beauty",
      name: "Beauty",
      icon: <Pizza className="h-6 w-6 mb-1" />, // Replace with appropriate icon
    },
  ];

  return (
    <>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-4 px-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "secondary" : "ghost"}
              className={`flex flex-col items-center justify-center h-[72px] w-[72px] rounded-none p-2 b  ${
                selectedCategory === category.id
                  ? "border-b-4 border-black text-black font-bold"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.icon}
              <span className="text-xs text-center">{category.name}</span>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
}
