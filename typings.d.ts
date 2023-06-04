interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  backgroundInformation: string;
  profilePic: Image;
  email: string;
  role: string;
  name: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Experience extends SanityBody {
  _type: "experience";
  jobTitle: string;
  companyImage: Image;
  companyPosition: string;
  points: string[];
  dateStarted: string;
  dateEnded: string;
  isCurrentlyWorkingHere: boolean;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
