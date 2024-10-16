"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NotepadText, Salad, ShoppingCart, Truck } from "lucide-react";

const tabs = [
  { name: "Meal Plan", href: "/", icon: NotepadText },
  { name: "Recipes", href: "/recipes", icon: Salad },
  { name: "Shopping List", href: "/shoppingList", icon: ShoppingCart },
];

export default function Tabbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <ul className="flex justify-around">
        {tabs.map((tab) => (
          <li key={tab.name} className="flex-1">
            <Link
              href={tab.href}
              className={`flex flex-col items-center py-2 ${
                pathname === tab.href ? "text-green-600" : "text-gray-500"
              }`}
            >
              <tab.icon className="w-6 h-6" />
              <span className="text-xs">{tab.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
