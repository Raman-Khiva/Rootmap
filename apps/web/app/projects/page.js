import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import projects from "@/db/projects"
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

export default function Page() {
  return (
        <div className="grid lg:grid-cols-4 grid-cols-3   gap-4 p-4 pt-0 gap-5 px-6">
            <div className="pt-8 pb-4 col-span-3 lg:col-span-4 flex items-center justify-between">
             <div>
              <h2 className="text-2xl font-bold">Projects</h2>

            </div>
            <div>
              <Button>New Project</Button>

            </div>


          </div>
            {projects.map((project,i)=>(
               <Card size="sm" className="mx-auto w-full max-w-sm" key={i}>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.type}</CardDescription>
        <CardDescription>
                  {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
         <p>{project.startDate} - {project.targetDate}</p>
         <p>{project.owner}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          <Link href={`/projects/${i}`}>Open</Link>
        </Button>
      </CardFooter>
    </Card>
            ))}

        </div>
  )
}

