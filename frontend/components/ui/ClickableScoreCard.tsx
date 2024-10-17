import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
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
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface ClickableScoreCardProps {
  scoreTitle: string;
  scoreValue: number;
  footerText: string;
}

export default function ClickableScoreCard({
  scoreTitle,
  scoreValue,
  footerText,
}: ClickableScoreCardProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Card className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardDescription>{scoreTitle}</CardDescription>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{scoreValue}</div>
            <p className="text-xs text-muted-foreground">{footerText}</p>
          </CardContent>
        </Card>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit project</DrawerTitle>
          <DrawerDescription>
            Make changes to your project here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
