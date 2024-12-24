import { Skeleton } from "../../src/components/ui/skeleton";
const Homeskeleton = () => {
  return (
    <div className="pt-28 h-[100%] w-screen flex flex-col gap-4 p-4 bg-black text-white">
      {[
        "Best Gaming Laptops",
        "Top Selling Laptops",
        "Best Laptops for Work",
        "Laptops under 60,000",
      ].map((sectionTitle, index) => (
        <div key={index} className="flex flex-col gap-2">
          <p className="font-semibold">{sectionTitle}</p>
          <div className="flex overflow-x-scroll whitespace-nowrap scroll-smooth gap-4 no-scrollbar">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="transition-all duration-300 flex flex-col items-start gap-2 w-80 p-4 hover:shadow-xl hover:cursor-pointer"
              >
                <Skeleton className="h-40 w-full object-cover bg-gray-700 rounded-md" />
                <Skeleton className="h-5 w-3/4 bg-gray-700 rounded-md" />
                <Skeleton className="h-4 w-1/4 bg-gray-600 rounded-sm mt-1" />
                <Skeleton className="h-4 w-1/2 bg-gray-600 rounded-sm mt-1" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homeskeleton;
