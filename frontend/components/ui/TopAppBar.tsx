"use client";

import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RightIconProps {
  icon: React.ReactNode;
  onClick: () => void;
  label: string;
}

interface TopAppBarProps {
  title: string;
  showProfile?: boolean;
  rightIcons?: RightIconProps[];
  isSticky?: boolean;
}

export default function TopAppBar({
  title,
  showProfile = true,
  rightIcons = [],
  isSticky = true,
}: TopAppBarProps) {
  const onProfileClick = () => {
    alert("Profile clicked");
  };
  return (
    <div
      className={`flex items-center justify-between px-4 h-14 bg-background border-b border-border ${
        isSticky ? "sticky top-0 left-0 right-0 z-50" : ""
      }`}
    >
      <div className="w-1/3 flex items-center">
        {showProfile && (
          <Button variant="ghost" size="icon" onClick={onProfileClick}>
            <User className="h-6 w-6" />
            <span className="sr-only">Profile</span>
          </Button>
        )}
      </div>
      <div className={`flex-1 text-center font-semibold`}>{title}</div>
      <div className="w-1/3 flex justify-end space-x-2">
        {rightIcons.slice(0, 3).map((iconProps, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            onClick={iconProps.onClick}
          >
            {iconProps.icon}
            <span className="sr-only">{iconProps.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
