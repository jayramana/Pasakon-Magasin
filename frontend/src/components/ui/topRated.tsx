import { ShineEffect } from "./shineeffect";
import { Star } from "lucide-react";
import { LuThumbsUp } from "react-icons/lu";
export function TopRatedBadge() {
  return (
    <ShineEffect className="inline-flex items-center bg-[#008080] text-white text-xs font-medium px-2 py-0.5 rounded gap-1">
      <LuThumbsUp /> <span className="relative z-[2]">Top Rated</span>
    </ShineEffect>
  );
}
