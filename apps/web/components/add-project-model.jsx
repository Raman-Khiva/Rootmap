"use client";
import { useGroq } from "@/hooks/groqQuery";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import testProject from "@/db/testProject";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddProjectModal() {
  const [projectIdea, setProjectIdea] = useState("A project management saas");
  const { generate } = useGroq();

  const handleSubmit = async (e) => {
    console.log("entering form submit");
    console.log("Project Idea:", projectIdea);
    let groqGeneratedProject = await generate(projectIdea);
    console.warn("Type of groqGeneratedProject:", typeof groqGeneratedProject);
    console.log("GROQ generated project:", groqGeneratedProject);
    groqGeneratedProject = JSON.parse(groqGeneratedProject);
    console.log("Parsed GROQ project:", groqGeneratedProject);
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add project</DialogTitle>
            <DialogDescription>
              Describe your project idea here to generate a executable project
              plan.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Project Idea</Label>
              <Input
                id="name-1"
                value={projectIdea}
                onChange={(e) => setProjectIdea(e.target.value)}
                name="project-idea"
                defaultValue="A project management saas"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
