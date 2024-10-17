import React from "react";
import { Button } from "@/components/ui/button";

interface DynamicButtonProps {
  primaryIcon: React.ReactNode;
  primaryLabel: string;
  primaryOnClick: () => void;
  secondaryIcon?: React.ReactNode;
  secondaryLabel?: string;
  secondaryOnClick?: () => void;
  showSecondaryButton?: boolean;
}

const DynamicButton: React.FC<DynamicButtonProps> = ({
  primaryIcon,
  primaryLabel,
  primaryOnClick,
  secondaryIcon,
  secondaryLabel,
  secondaryOnClick,
  showSecondaryButton = false,
}) => {
  return (
    <div className="flex w-full fixed bottom-16 ">
      {showSecondaryButton && secondaryLabel && secondaryOnClick ? (
        // Render two buttons if showSecondaryButton is true and secondaryLabel and secondaryOnClick are provided
        <>
          <Button
            className="flex-1 mr-2 secondary-button bg-white text-primary border-gray-500 border hover:text-white hover:bg-primary"
            onClick={secondaryOnClick}
          >
            {secondaryIcon}
            {secondaryLabel}
          </Button>
          <Button className="flex-1 primary-button " onClick={primaryOnClick}>
            {primaryIcon}
            {primaryLabel}
          </Button>
        </>
      ) : (
        // Render only the primary button if showSecondaryButton is false or secondaryLabel and secondaryOnClick are not provided
        <Button className="flex-1 primary-button" onClick={primaryOnClick}>
          {primaryIcon}
          {primaryLabel}
        </Button>
      )}
    </div>
  );
};

export default DynamicButton;
