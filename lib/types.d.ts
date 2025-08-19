// export type Project = {
//   _id: string;
//   title: string;
//   description: string;
//   moreDescription?: string;
//   startDate: string;
//   endDate: string;
//   bannerImage: string;
//   images: string[];
//   client?: string;
//   location?: string;
//   status?: string;
//   budget?: string;
//   currency?: "$" | "₦";
// };

export type Project = {
  _id: string;
  title: string;
  description: string;
  moreDescription?: string;
  startDate: string;
  endDate: string;
  bannerImage: string; // resolved URL
  images: string[]; // resolved URLs
  client?: string;
  location?: string;
  status?: "Planned" | "In Progress" | "Completed";
  budget?: string;
  currency?: "USD" | "NGN"; // store ISO currency
};

export type TeamMember = {
  _id: string;
  name: string;
  position: string;
  image: string;
  socials: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
};


export interface ProjectParams {
  params: {
    projectId: string;
  };
}


