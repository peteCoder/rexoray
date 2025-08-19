import { Project } from "@/lib/types";
import { notFound } from "next/navigation";
import { getProjectByID } from "@/actions/getProjectByID";
import ProjectClient from "../_components/ProjectClient";
import { Metadata } from "next";

// Type params as a Promise
type tParams = Promise<{ projectId: string }>;

export async function generateMetadata(props: {
  params: tParams;
}): Promise<Metadata | undefined> {
  const { projectId } = await props.params;
  const projectArray: Project[] = await getProjectByID(projectId);
  const project = projectArray[0];

  const projectFirstImage = project?.images[0];
  const projectBannerImage = project?.bannerImage;

  if (!project) {
    return notFound();
  }

  return {
    title: `${project.title}`,
    description: `${
      project.description
        ? project.description
        : "One of our best projects is the " + project.title + "."
    }`,
    openGraph: {
      title: `${project.title}`,
      description: `${
        project.description
          ? project.description
          : "One of our best projects is the " + project.title + "."
      }`,
      type: "website",
      locale: "en_US",
      url: `${process.env.NEXT_PUBLIC_URL}/projects/${project._id}/`,
      siteName: "Rexoray Ace",
      images: [
        {
          url: projectFirstImage
            ? projectFirstImage
            : projectBannerImage
            ? projectBannerImage
            : "",
          width: 700,
          height: 700,
        },
      ],
    },
  };
}

export default async function ProjectDetails(props: { params: tParams }) {
  const { projectId } = await props.params;

  console.log("Main: ", projectId);

  const projectArray = await getProjectByID(projectId);
  const project: Project | undefined = projectArray[0];

  if (!project) return notFound();

  return <ProjectClient project={project} />;
}
