"use client";

import TopAppBar from "@/components/ui/TopAppBar";
import { BetweenHorizonalStart, Pencil } from "lucide-react";

export default function Home() {
  const handleAddMeal = () => {
    alert("Handle Add Meal");
  };
  const handleEditMealPlan = () => {
    alert("Handle Edit Meal Plan");
  };

  return (
    <>
      <TopAppBar
        title="Meal Plan"
        rightIcons={[
          {
            icon: <BetweenHorizonalStart />,
            onClick: handleAddMeal,
            label: "Add Meal",
          },
          {
            icon: <Pencil />,
            onClick: handleEditMealPlan,
            label: "Edit Meal Plan",
          },
        ]}
      />
    </>
  );
}
