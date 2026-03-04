"use client";
import projects from "@/db/projects";
import { useParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { CircleCheckBig, CircleCheck } from "lucide-react";
import { Link, SquareTerminal } from "lucide-react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Badge } from "@/components/ui/badge";

import {
  Snippet,
  SnippetAddon,
  SnippetCopyButton,
  SnippetInput,
  SnippetText,
} from "@/components/ai-elements/snippet";

const links = [
  {
    title: "Turborepo Documentation",
    about: "Official guide to using Turborepo for monorepo management.",
    url: "https://turbo.build/repo/docs",
  },
  {
    title: "Create Turborepo CLI",
    about: "CLI tool used to scaffold a Turborepo project.",
    url: "https://turbo.build/repo/docs/getting-started",
  },
];

export default function Page() {
  const params = useParams();

  const { project, phase } = params;
  const curPhase = projects[project].phases[phase];
  const milestones = projects[project].phases[phase].milestones || [];

  return (
    <div className="w-full flex flex-col py-8 lg:pl-32 md:pl-24 pl-12">
      <div className="flex flex-col gap-5 mb-16">
        <h1 className="text-3xl font-semibold">Phase {Number(phase) + 1}</h1>
        <h3 className="text-lg font-medium text-gray-300">
          {curPhase.description}
        </h3>
      </div>
      <FieldGroup className="flex flex-col gap-12 items-center w-full">
        {milestones.map((milestone, j) => (
          <FieldGroup key={j} className="flex flex-col gap-2">
            <Field orientation="horizontal">
              <Checkbox
                id="finder-pref-9k2-hard-disks-ljj-checkbox"
                name="finder-pref-9k2-hard-disks-ljj-checkbox"
              />
              <FieldLabel
                htmlFor="finder-pref-9k2-hard-disks-ljj-checkbox"
                className="font-semibold text-xl"
              >
                {milestone.title}
              </FieldLabel>
            </Field>
            <FieldGroup className="ml-6 flex flex-col gap-20 pl-12 relative border-l-3 border-blue-600 ">
              {milestone.tasks.map((task, i) => (
                <div className="my-8 flex flex-col gap-5">
                  <div
                    key={i}
                    className="flex flex-col border-b-2 max-w-2xl pb-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-black absolute left-0  -translate-x-[56%]">
                        <CircleCheckBig className="text-blue-600 z-40 " />
                      </div>
                      <h4 className=" text-lg font-medium">{task.title}</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{task.type}</Badge>
                      <span className="text-violet-400 text-sm flex items-center">
                        <SquareTerminal height={17} />
                        <p className="font-semibold">2 cmds</p>
                      </span>
                      <span className="text-green-400 flex items-center text-sm font-semibold">
                        <Link height={18} />
                        <p>2 links</p>
                      </span>
                    </div>
                  </div>
                  <h3>
                    <span className=" text-gray-400">why? </span>
                    {task.purpose}
                  </h3>
                  <div className="">
                    <h4 className="text-gray-400 pb-2">Commands: </h4>
                    {task.commands?.map((command, k) => (
                      <Snippet className="max-w-sm" code={command} key={k}>
                        <SnippetAddon className="pl-1">
                          <SnippetText>$</SnippetText>
                        </SnippetAddon>
                        <SnippetInput />
                        <SnippetAddon align="inline-end" className="pr-2">
                          <SnippetCopyButton />
                        </SnippetAddon>
                      </Snippet>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-gray-400 ">Docs:</h4>
                    <div className="flex gap-3">
                      {links.map((link, index) => (
                        <Badge>{link.title}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </FieldGroup>
          </FieldGroup>
        ))}
      </FieldGroup>
    </div>
  );
}
