"use client";

import { useState } from "react";
import { RecipeCard } from "@/components/ui/RecipeCard";
import TopAppBar from "@/components/ui/TopAppBar";
import SearchBar from "@/components/ui/SearchBar";
import { ArrowDownUp, SlidersHorizontal } from "lucide-react";
import TypicalTabBar from "@/components/ui/TypicalTabBar";

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState("");

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
    {
      id: 4,
      image: "https://example.com/image4.jpg",
      title: "Beef Tacos",
      time: "20 mins",
      healthScore: 80,
      rating: 4.6,
      costPerServing: 2.0,
    },
    {
      id: 5,
      image: "https://example.com/image5.jpg",
      title: "Grilled Salmon",
      time: "35 mins",
      healthScore: 92,
      rating: 4.9,
      costPerServing: 4.5,
    },
    {
      id: 6,
      image: "https://example.com/image6.jpg",
      title: "Caesar Salad",
      time: "15 mins",
      healthScore: 88,
      rating: 4.3,
      costPerServing: 1.5,
    },
    {
      id: 7,
      image: "https://example.com/image7.jpg",
      title: "Margherita Pizza",
      time: "50 mins",
      healthScore: 75,
      rating: 4.4,
      costPerServing: 3.2,
    },
    {
      id: 8,
      image: "https://example.com/image8.jpg",
      title: "Lentil Soup",
      time: "40 mins",
      healthScore: 94,
      rating: 4.7,
      costPerServing: 1.8,
    },
  ];
  const handleSort = (): void => {
    alert("Sorting");
  };
  const handleFilter = (): void => {
    alert("Filtering");
  };
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-h-screen">
      <TopAppBar
        title="Recipes"
        rightIcons={[
          { icon: <ArrowDownUp />, onClick: handleSort, label: "Sort" },
          {
            icon: <SlidersHorizontal />,
            onClick: handleFilter,
            label: "Filter",
          },
        ]}
      />

      <div className="sticky top-14 bg-white z-10 shadow-xl">
        <SearchBar
          searchText="Find recipes"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <TypicalTabBar />
      </div>

      <main className="grid grid-cols-2 gap-4 pt-4">
        {filteredRecipes.map((recipe) => (
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
