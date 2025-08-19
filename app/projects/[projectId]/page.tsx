import { Project } from "@/lib/types";
import { notFound } from "next/navigation";
import { getProjectByID } from "@/actions/getProjectByID";
import ProjectClient from "../_components/ProjectClient";

// ✅ Type params as a Promise
type tParams = Promise<{ projectId: string }>;

export default async function ProjectDetails(props: { params: tParams }) {
  const { projectId } = await props.params; // ✅ works

  console.log("Main: ", projectId);

  const projectArray = await getProjectByID(projectId);
  const project: Project | undefined = projectArray[0];

  if (!project) return notFound();

  return <ProjectClient project={project} />;
}
