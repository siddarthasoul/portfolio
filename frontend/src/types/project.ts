export interface ProjectBranch {
    name: string;
    label: string;
    description: string;
    github: string;
}

export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    github: string;
    live: string | null;
    featured: boolean;
    branches?: ProjectBranch[];
}