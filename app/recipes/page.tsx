"use client";

import { RecipeCard } from "@/components/ui/RecipeCard";
import TopAppBar from "@/components/ui/TopAppBar";

export default function RecipesPage() {
  const recipes = [
    {
      id: 1,
      image: "https://example.com/image1.jpg",
      title: "Spaghetti Carbonara",
      time: "30 mins",
      healthScore: 85,
      rating: 4.5,
      costPerServing: 2.5,
    },
    {
      id: 2,
      image: "https://example.com/image2.jpg",
      title: "Chicken Alfredo",
      time: "45 mins",
      healthScore: 90,
      rating: 4.7,
      costPerServing: 3.0,
    },
    {
      id: 3,
      image: "https://example.com/image3.jpg",
      title: "Vegetable Stir Fry",
      time: "25 mins",
      healthScore: 95,
      rating: 4.8,
      costPerServing: 1.8,
    },
  ];

  const handleSettingsClick = (): void => {
    alert("Settings clicked");
  };

  return (
    <div className="max-h-screen">
      <TopAppBar
        title="Recipes"
        rightIcons={["settings"]}
        onRightIconClick={(icon) => {
          if (icon === "settings") handleSettingsClick();
        }}
      />
      <main className="grid grid-cols-2 gap-4 p-4 md:p-8">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            title={recipe.title}
            time={recipe.time}
            healthScore={recipe.healthScore}
            rating={recipe.rating}
            costPerServing={recipe.costPerServing}
          />
        ))}
      </main>
    </div>
  );
}
