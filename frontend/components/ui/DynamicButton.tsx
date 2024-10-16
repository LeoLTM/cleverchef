import React from "react";
import { Button } from "@/components/ui/button";

interface DynamicButtonProps {
  primaryLabel: string;
  primaryOnClick: () => void;
  secondaryLabel?: string;
  secondaryOnClick?: () => void;
  showSecondaryButton?: boolean;
}

const DynamicButton: React.FC<DynamicButtonProps> = ({
  primaryLabel,
  primaryOnClick,
  secondaryLabel,
  secondaryOnClick,
  showSecondaryButton = false,
}) => {
  return (
    <div className="flex w-full">
      {showSecondaryButton && secondaryLabel && secondaryOnClick ? (
        // Render two buttons if showSecondaryButton is true and secondaryLabel and secondaryOnClick are provided
        <>
          <Button
            className="flex-1 mr-2 secondary-button bg-white text-primary border-gray-500 border hover:text-white hover:bg-primary"
            onClick={secondaryOnClick}
          >
            {secondaryLabel}
          </Button>
          <Button className="flex-1 primary-button " onClick={primaryOnClick}>
            {primaryLabel}
          </Button>
        </>
      ) : (
        // Render only the primary button if showSecondaryButton is false or secondaryLabel and secondaryOnClick are not provided
        <Button className="flex-1 primary-button" onClick={primaryOnClick}>
          {primaryLabel}
        </Button>
      )}
    </div>
  );
};

export default DynamicButton;
