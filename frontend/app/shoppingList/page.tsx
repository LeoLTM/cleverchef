"use client"; //TODO: For all main pages, it would be better to have them as client components and the interactivity in the components themselves

import TopAppBar from "@/components/ui/TopAppBar";
import { EllipsisVertical, History } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const handleOptionsClick = () => {
    alert("Options Clicked");
  };
  const handleHistoryClick = () => {
    alert("History Clicked");
  };

  return (
    <>
      <TopAppBar
        title="Shopping List"
        rightIcons={[
          {
            icon: <History />,
            onClick: handleHistoryClick,
            label: "Filter",
          },
          {
            icon: <EllipsisVertical />,
            onClick: handleOptionsClick,
            label: "Sort",
          },
        ]}
      />

      <Tabs defaultValue="home-delivery" className="flex w-full flex-col">
        <TabsList className="flex w-full">
          <TabsTrigger value="home-delivery" className="flex-1">
            Home Delivery
          </TabsTrigger>
          <TabsTrigger value="self-purchase" className="flex-1">
            Self-Purchase in Store
          </TabsTrigger>
        </TabsList>
        <TabsContent value="home-delivery" className="w-full">
          Home delivery content
        </TabsContent>
        <TabsContent value="self-purchase" className="w-full">
          Self-purchase in store content
        </TabsContent>
      </Tabs>
    </>
  );
}
