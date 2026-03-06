import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export function Milestone() {
  return (
    <Card className="w-full bg-card-primary p-0 overflow-hidden">
      <CardHeader className="bg-card px-3 py-4">
        <CardTitle>
          <h4>Title</h4>
          <Badge variant="outline">Active</Badge>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
