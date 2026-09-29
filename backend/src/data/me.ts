export interface PortfolioData {
  name: string;
  role: string;
  summary: string;
  links: {
    github: string;
  };
}

export const portfolioData: PortfolioData = {
  name: "Siddartha Mishra",
  role: "AI + Full-Stack Developer",
  summary:
    "I’m an AI + Full-Stack Developer focused on building intelligent systems, scalable backends, and practical AI applications. I enjoy understanding how things work under the hood and turning ideas into real, working products.",
  links: {
    github: "https://github.com/siddarthasoul/",
  },
};