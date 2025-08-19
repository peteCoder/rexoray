import { Project } from "@/lib/types";
import { notFound } from "next/navigation";
import { getProjectByID } from "@/actions/getProjectByID";
import ProjectClient from "../_components/ProjectClient";

export default async function ProjectDetails({
  params,
}: {
  params: { projectId: string };
}) {
  const projectArray = await getProjectByID(params.projectId);
  const project: Project | undefined = projectArray[0];

  if (!project) return notFound();

  return <ProjectClient project={project} />;
}
