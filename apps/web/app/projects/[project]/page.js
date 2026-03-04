'use client'
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import projects from '@/db/projects'
import {useParams} from 'next/navigation';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import{
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import {useState} from 'react';


export default function Page(){
  const  params = useParams();
  let {project} = params;
  const curProject = projects[project];
  const phases = curProject?.phases || [];
  return(
    <div>
        <h2>{project}</h2>
        <div className="flex flex-col gap-4 pt-20">
          {phases.map((phase,i)=>{
           const [showDetails,setShowDetails] = useState(false);
           return (
               <Card size="lg" className="mx-auto w-full max-w-4xl" key={i}>
      <CardHeader>
        <CardTitle>{phase.name}</CardTitle>
        <CardDescription>
                  {phase.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          The card component supports a size prop that can be set to
          &quot;sm&quot; for a more compact appearance.
        </p>
      </CardContent>
      <CardContent>
                {showDetails &&  (<FieldGroup>
                  {phase.milestones.map((milestone,j)=>{
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
        )})}
                </FieldGroup> )}

      </CardContent>
      <CardFooter className="flex justify-end gap-4">
        <Button variant="outline" 
           onClick={()=>setShowDetails((prev)=>!prev)}
                >
          {showDetails ? "Hide Details" : "Show Details"}
        </Button>
        <Button><Link href={`/projects/${project}/${i}`}>Open</Link></Button>
      </CardFooter>
    </Card>
            )})}

        </div>
      </div>
  )
}

