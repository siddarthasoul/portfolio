export interface SkillCategory {
    id: string;
    name: string;
    technologies: string[];
}

export const skills: SkillCategory[] = [
    {
        id: "ai-development",
        name: "AI Engineering",
        technologies: [
            "LLMs",
            "RAG",
            "Fine-Tuning",
            "Instruction Tuning",
            "SFT",
            "Model Training",
            "Model Evaluation",
            "Transformers",
            "PyTorch",
            "Prompt Engineering",
            "AI Agents",
            "LLM Integration",
        ],
    },
    {
        id: "backend",
        name: "Backend Engineering",
        technologies: [
            "Node.js",
            "TypeScript",
            "Express",
            "FastAPI",
            "REST APIs",
            "WebSockets",
            "Microservices",
        ],
    },
    {
        id: "frontend",
        name: "Frontend Engineering",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Responsive UI",
        ],
    },
    {
        id: "data",
        name: "Data & Infrastructure",
        technologies: [
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Qdrant",
            "Kafka",
            "Airflow",
        ],
    },
    {
        id: "devops",
        name: "DevOps & Systems",
        technologies: [
            "Docker",
            "Linux",
            "Git",
            "GitHub",
            "Nginx",
            "CI/CD",
        ],
    },
    {
        id: "foundations",
        name: "Engineering Foundations",
        technologies: [
            "C++",
            "Data Structures & Algorithms",
            "Object-Oriented Programming",
            "Operating Systems",
            "Networking",
            "System Design",
        ],
    },
];