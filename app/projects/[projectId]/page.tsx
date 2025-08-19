import { Project } from "@/lib/types";
import { notFound } from "next/navigation";
import { getProjectByID } from "@/actions/getProjectByID";
import ProjectClient from "../_components/ProjectClient";

interface Params {
  params: {
    projectId: string;
  };
}



export default async function ProjectDetails(props: Params) {
  const { projectId } = await props.params; // await params before using

  console.log("Project ID Main: ", projectId);

  const projectArray = await getProjectByID(projectId);
  const project: Project | undefined = projectArray[0];

  if (!project) return notFound();

  return <ProjectClient project={project} />;
}
