"use client"; //TODO: For all main pages, it would be better to have them as client components and the interactivity in the components themselves

import { useState } from "react";
import TopAppBar from "@/components/ui/TopAppBar";
import {
  EllipsisVertical,
  History,
  Info,
  Plus,
  HandCoins,
  ListChecks,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DynamicButton from "@/components/ui/DynamicButton";
import NavigationBar from "@/components/ui/NavigationBar";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("home-delivery");

  const handleOptionsClick = () => {
    alert("Options Clicked");
  };
  const handleHistoryClick = () => {
    alert("History Clicked");
  };

  const handleCheckedItemsClick = () => {
    alert("handleCheckedItemsClick");
  };

  const handleAddEntry = () => {
    alert("Add Entry Clicked");
  };

  const handleCheckout = () => {
    alert("Checkout Clicked");
  };

  const rightIcons =
    selectedTab === "home-delivery"
      ? [
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
        ]
      : [
          {
            icon: <ListChecks />,
            onClick: handleCheckedItemsClick,
            label: "Checked Items",
          },
          {
            icon: <EllipsisVertical />,
            onClick: handleOptionsClick,
            label: "Options",
          },
        ];

  return (
    <>
      <TopAppBar title="Shopping List" rightIcons={rightIcons} />

      <Tabs
        defaultValue="home-delivery"
        className="flex w-full flex-col"
        onValueChange={setSelectedTab}
      >
        <TabsList className="flex w-full">
          <TabsTrigger value="home-delivery" className="flex-1">
            Home Delivery
          </TabsTrigger>
          <TabsTrigger value="self-purchase" className="flex-1">
            Self-Purchase in Store
          </TabsTrigger>
        </TabsList>
        <TabsContent value="home-delivery" className="w-full">
          <DynamicButton
            primaryIcon={<HandCoins />}
            primaryLabel="Checkout"
            primaryOnClick={handleCheckout}
            secondaryIcon={<Plus />}
            secondaryLabel="Add Entry"
            secondaryOnClick={handleAddEntry}
            showSecondaryButton={true}
          />
        </TabsContent>
        <TabsContent value="self-purchase" className="w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <DynamicButton
            primaryIcon={<Plus />}
            primaryLabel="Add Entry"
            primaryOnClick={handleAddEntry}
          />
        </TabsContent>
      </Tabs>
      <NavigationBar />
    </>
  );
}
