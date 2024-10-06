import Link from "next/link";
import { Clock, Users, Leaf } from "lucide-react";

interface RecipeCardProps {
  id: number;
  image: string;
  title: string;
  time: string;
  healthScore: number;
  rating: number;
  costPerServing: number;
}

export function RecipeCard({
  id,
  image,
  title,
  time,
  healthScore,
  rating,
  costPerServing,
}: RecipeCardProps) {
  return (
    <Link href={`/recipes/${id}`} className="block">
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-24 object-cover" />
        <div className="p-2">
          <h3 className="font-semibold text-sm mb-2 truncate">{title}</h3>
          <div className="text-xs mb-1">
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{time}</span>
            </div>
          </div>
          <div className="text-xs mb-1">
            <div className="flex items-center">
              <Leaf className="h-3 w-3 mr-1" />
              <span>Health Score: {healthScore}</span>
            </div>
          </div>
          <div className="text-xs mb-1">
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1" />
              <span>Rating: {rating}</span>
            </div>
          </div>
          <div className="text-xs">
            <div className="flex items-center">
              <span>Cost per Serving: ${costPerServing.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
