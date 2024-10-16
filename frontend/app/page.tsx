"use client";

import TopAppBar from "@/components/ui/TopAppBar";
import { BetweenHorizonalStart, Pencil } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DynamicButton from "@/components/ui/DynamicButton";

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
      <Tabs defaultValue="this-week" className="flex w-full flex-col">
        <TabsList className="flex w-full">
          <TabsTrigger value="this-week" className="flex-1">
            This Week
          </TabsTrigger>
          <TabsTrigger value="next-week" className="flex-1">
            Next Week
          </TabsTrigger>
        </TabsList>
        <TabsContent value="this-week" className="w-full">
          This week yeah
        </TabsContent>
        <TabsContent value="next-week" className="w-full">
          Next week nooo
        </TabsContent>
      </Tabs>
      <div className="h-96 border-green-500 border-2 my-4">Spacer</div>
      <DynamicButton primaryLabel="Add Meal" primaryOnClick={handleAddMeal} />;
      <DynamicButton
        primaryLabel="Add Meal"
        primaryOnClick={handleAddMeal}
        secondaryLabel="Edit Meal Plan"
        secondaryOnClick={handleEditMealPlan}
        showSecondaryButton
      />
      ;
    </>
  );
}
