"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronLeft, Bell, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopAppBarProps {
  title: string;
  leftText?: string;
  rightIcons?: Array<"bell" | "search" | "settings">;
  onLeftTextClick?: () => void;
  onRightIconClick?: (icon: "bell" | "search" | "settings") => void;
}

export default function TopAppBar({
  title,
  leftText,
  rightIcons = [],
  onLeftTextClick,
  onRightIconClick,
}: TopAppBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, [pathname]);

  const handleBack = () => {
    router.back();
  };

  const iconComponents = {
    bell: Bell,
    search: Search,
    settings: Settings,
  };

  return (
    <div className="flex items-center justify-between px-4 h-12 bg-white border-b border-gray-200">
      <div className="w-1/3 flex items-center">
        {canGoBack ? (
          <Button
            variant="ghost"
            size="sm"
            className="p-0"
            onClick={handleBack}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Back</span>
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            className="p-0"
            onClick={onLeftTextClick}
          >
            <span className="text-sm font-medium">{leftText}</span>
          </Button>
        )}
      </div>
      <div
        className={`flex-1 text-center font-semibold ${
          canGoBack ? "" : "text-left ml-4"
        }`}
      >
        {title}
      </div>
      <div className="w-1/3 flex justify-end space-x-2">
        {rightIcons.map((iconName, index) => {
          const IconComponent = iconComponents[iconName];
          return (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="p-1"
              onClick={() => onRightIconClick && onRightIconClick(iconName)}
            >
              <IconComponent className="h-5 w-5" />
              <span className="sr-only">{iconName}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
