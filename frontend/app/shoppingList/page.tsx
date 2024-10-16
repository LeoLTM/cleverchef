"use client"; //TODO: For all main pages, it would be better to have them as client components and the interactivity in the components themselves

import TopAppBar from "@/components/ui/TopAppBar";
import { EllipsisVertical, History } from "lucide-react";

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
    </>
  );
}
