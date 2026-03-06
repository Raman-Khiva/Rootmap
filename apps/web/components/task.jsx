import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CircleCheckBig,
  ChevronsUp,
  Code,
  Flag,
  TriangleAlert,
} from "lucide-react";

function About() {
  return (
    <section className="grid grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
        <h6 className="text-sm">Purpose:</h6>
        <p>
          Secure API endpoints using JWT tokens and implement role-based access
          control for the dashboard routes.
        </p>
      </div>
      <div className="flex flex-col justify-between gap-3">
        <div className="flex justify-between border-b-2 px-1 pb-1 items-end">
          <h6>Type</h6>
          <div className="flex items-center gap-2">
            <Code size={16} className="text-violet-600 font-bold" />
            <p className="font-medium">Dev</p>
          </div>
        </div>
        <div className="flex justify-between items-end border-b-2 px-1 pb-1 ">
          <h6>Priority</h6>
          <div className="flex items-center gap-2">
            <ChevronsUp size={18} className="text-green-500 font-bold" />
            <p className="font-medium">High</p>
          </div>
        </div>
        <div className="flex justify-between pb-1 px-1 items-end ">
          <h6>Dependencies</h6>
          <div className="flex items-center gap-2">
            <p className="underline dotted">#TSK-04r</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Task() {
  return (
    <Card className="w-full  max-w-5xl flex flex-col gap-9">
      <CardHeader className="flex justify-between items-start w-full">
        <div className="flex items-start gap-4">
          <div className="pt-[2px]">
            <CircleCheckBig className="text-blue-600" />
          </div>
          <div className="flex flex-col justify-start gap-1">
            <h5 className="text-xl font-semibold tracking-wide">
              Implement Auth Middleware
            </h5>
            <div className="flex items-center gap-4">
              <p className="text-text-secondary text-[13px] font-semibold">
                #TSK-4f2
              </p>
              <Badge className="text-amber-500 bg-amber-800/30 border-yellow-800 ">
                <TriangleAlert size={14} /> At Risk
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Flag size={14} />
          <p className="text-sm text-text-secondary font-semibold">
            Target: Mar 8
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <header className="flex gap-8 border-b-2 px-3 pb-2">
          <h6>Overview</h6>
          <h6>Execution Histroy</h6>
          <h6>Notes</h6>
        </header>
        <About />
      </CardContent>
    </Card>
  );
}
