import { Project } from "@/lib/types";
import { notFound } from "next/navigation";

import { getProjectByID } from "@/actions/getProjectByID";
import { ProjectParams } from "@/lib/types";
import ProjectClient from "../_components/ProjectClient";

export default async function ProjectDetails({
  params: { projectId },
}: ProjectParams) {
  const projectArray = await getProjectByID(projectId);
  const project: Project | undefined = projectArray[0];

  if (!project) return notFound();

  return <ProjectClient project={project} />;
}
