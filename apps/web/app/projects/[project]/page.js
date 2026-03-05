"use client";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { ProjectOverview } from "@/components/project-overview";
import { LayoutGrid, LayoutList } from "lucide-react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import projects from "@/db/projects";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { useState } from "react";

export default function Page() {
  const params = useParams();
  let { project } = params;
  const curProject = projects[project];
  const phases = curProject?.phases || [];
  return (
    <div>
      <div className="flex flex-col items-center gap-6 py-4">
        <ProjectOverview />
        <div className="flex justify-between w-full max-w-5xl px-1">
          <h4>Project phases</h4>
          <div className="flex gap-3">
            <LayoutList className="text-blue-600 font-semibold cursor-pointer" />
            <LayoutGrid className="cursor-pointer" />
          </div>
        </div>
        {phases.map((phase, i) => {
          const [showDetails, setShowDetails] = useState(false);
          const text = i % 3 == 1 ? "" : "text-[#a1a1a1]";
          return (
            <>
              <Card
                size="lg"
                className="mx-auto bg-[#09090b] w-full max-w-5xl"
                key={i}
              >
                <CardHeader>
                  <h4 className={"font-semibold " + text}>
                    Phase {i + 1}: {phase.name}
                  </h4>
                  <p>{phase.description}</p>
                </CardHeader>
                <CardContent>
                  <p>
                    The card component supports a size prop that can be set to
                    &quot;sm&quot; for a more compact appearance.
                  </p>
                </CardContent>
                <CardContent>
                  {showDetails && (
                    <FieldGroup>
                      {phase.milestones.map((milestone, j) => {
                        return (
                          <Field orientation="horizontal" key={j}>
                            <Checkbox
                              id="finder-pref-9k2-hard-disks-ljj-checkbox"
                              name="finder-pref-9k2-hard-disks-ljj-checkbox"
                              defaultChecked
                            />
                            <FieldLabel
                              htmlFor="finder-pref-9k2-hard-disks-ljj-checkbox"
                              className="font-normal"
                            >
                              {milestone.title}
                            </FieldLabel>
                          </Field>
                        );
                      })}
                    </FieldGroup>
                  )}
                </CardContent>
                <CardFooter className="flex justify-end gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowDetails((prev) => !prev)}
                  >
                    {showDetails ? "Hide Details" : "Show Details"}
                  </Button>
                  <Button>
                    <Link href={`/projects/${project}/${i}`}>Open</Link>
                  </Button>
                </CardFooter>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}
