"use client";

import TopAppBar from "@/components/ui/TopAppBar";
import {
  BetweenHorizonalStart,
  Pencil,
  Info,
  NotebookPen,
  CookingPot,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DynamicButton from "@/components/ui/DynamicButton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import NavigationBar from "@/components/ui/NavigationBar";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  const handlePlanNextWeek = () => {
    alert("handlePlanNextWeek");
  };
  const handleCookNow = () => {
    alert("handleCookNow");
  };
  const handleAddMeal = () => {
    alert("handleAddMeal");
  };
  const handleEditMealPlan = () => {
    alert("handleEditMealPlan");
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
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Save 5 hours this week with meal prepping!</AlertTitle>
            <AlertDescription>
              By spending 2 hours on Sunday meal prepping, you can save 5 hours
              during the week. Click the button "Start meal prepping" at the
              bottom to get started.
            </AlertDescription>
          </Alert>
        </TabsContent>
        <TabsContent value="next-week" className="w-full">
          Next week
        </TabsContent>
      </Tabs>
      <DynamicButton
        primaryIcon={<CookingPot />}
        primaryLabel="Cook Now"
        primaryOnClick={handleCookNow}
        secondaryIcon={<NotebookPen />}
        secondaryLabel="Plan Next Week"
        secondaryOnClick={handlePlanNextWeek}
        showSecondaryButton={true}
      />
      <div className="grid grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-4xl">$1,329</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +25% from last week
            </div>
          </CardContent>
          <CardFooter>
            <Progress value={25} aria-label="25% increase" />
          </CardFooter>
        </Card>
      </div>

      <NavigationBar />
    </>
  );
}
