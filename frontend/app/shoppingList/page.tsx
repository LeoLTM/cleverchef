"use client"; //TODO: For all main pages, it would be better to have them as client components and the interactivity in the components themselves

import { useState } from "react";
import TopAppBar from "@/components/ui/TopAppBar";
import {
  EllipsisVertical,
  History,
  Info,
  Plus,
  Minus,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

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

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent side={"bottom"}>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                >
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      <NavigationBar />
    </>
  );
}
