"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, Users, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopAppBar from "@/components/ui/TopAppBar";

// This would typically come from an API or database
const recipe = {
  id: 1,
  title: "Avocado Toast",
  image:
    "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  time: "10 min",
  servings: 2,
  calories: 300,
  isVegetarian: true,
  ingredients: [
    "2 slices of bread",
    "1 ripe avocado",
    "Salt and pepper to taste",
    "Optional toppings: cherry tomatoes, feta cheese, red pepper flakes",
  ],
  instructions: [
    "Toast the bread slices until golden brown.",
    "Cut the avocado in half, remove the pit, and scoop out the flesh into a bowl.",
    "Mash the avocado with a fork and season with salt and pepper.",
    "Spread the mashed avocado on the toasted bread slices.",
    "Add any optional toppings as desired.",
    "Serve immediately and enjoy your delicious avocado toast!",
  ],
};

export default function RecipeDetails({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <>
      <TopAppBar showBackButton={true} showProfile={false} />

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-none mb-4"
      />

      <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>

      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{recipe.time}</span>
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-1" />
          <span>{recipe.servings} servings</span>
        </div>
        <div className="flex items-center">
          <Leaf className="h-4 w-4 mr-1" />
          <span>{recipe.calories} cal</span>
        </div>
        {recipe.isVegetarian && (
          <div className="flex items-center">
            <Leaf className="h-4 w-4 mr-1 text-green-500" />
            <span>Vegetarian</span>
          </div>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal list-inside">
        {recipe.instructions.map((instruction, index) => (
          <li key={index} className="mb-2">
            {instruction}
          </li>
        ))}
      </ol>
    </>
  );
}
