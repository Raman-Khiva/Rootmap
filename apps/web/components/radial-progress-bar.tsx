import { Heart } from "lucide-react";
import { Vo2MaxCard } from "@/components/ui/progress"; // Adjust the import path as needed

export const RadialProgress = () => {
  return (
    <div className="flex max-w-lg max-h-lg items-center justify-center bg-background p-4">
      <Vo2MaxCard
        title="Vo2 Max"
        value={51}
        status="Excellent"
        progress={51} // Represents the filled portion of the circle, e.g., 51%
        icon={<Heart size={20} />}
        description={
          <>
            Your Vo2 Max is in the{" "}
            <span className="font-semibold text-primary">Top 15%</span>
            <br />
            for your age and gender
          </>
        }
      />
    </div>
  );
};
