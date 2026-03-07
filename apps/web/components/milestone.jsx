import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Task } from "@/components/task";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
export function Milestone() {
  return (
    <Card className="w-full bg- gap-0 max-w-5xm p-0 overflow-hidden">
      <CardHeader className="bg-card-primary w-full px-8 py-6 flex m-0  justify-between items-center">
        <CardTitle className="flex gap-3 items-center">
          <h4 className="font-bold tracking-wide">Title</h4>
          <Badge
            variant="outline"
            className="text-blue-700 bg-blue-800/20 border-blue-800 "
          >
            Active
          </Badge>
        </CardTitle>
        <div className="flex items-center gap-5 min-w-sm justify-end">
          <p className="text-[15px] font-medium text-text-secondary">
            Target Mar 30
          </p>
          <Progress value={60} className="w-full max-w-24" />
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 grid-rows-auto p-0 m-0 ">
        <Task />
        <Task />
        <Task />
        <Task />
      </CardContent>
    </Card>
  );
}
