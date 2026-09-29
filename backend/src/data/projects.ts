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

export const projects: Project[] = [
    {
        id: "soul-ai",
        slug: "soul-ai",
        title: "SOUL AI",
        description:
            "A full-stack AI platform for learning, research, and intelligent conversations, with real-time communication, authentication, AI inference, and scalable backend services.",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "Redis",
            "Ollama",
            "Docker",
        ],
        github: "https://github.com/siddarthasoul/soul-ai",
        live: null,
        featured: true,

        branches: [
            {
                name: "main",
                label: "Main",
                description: "Core SOUL AI application.",
                github: "https://github.com/siddarthasoul/soul-ai",
            },
            {
                name: "kafka-airflow",
                label: "Kafka + Airflow",
                description:
                    "Data-platform branch using Kafka for event streaming and Airflow for workflow orchestration.",
                github:
                    "https://github.com/siddarthasoul/soul-ai/tree/kafka-airflow",
            },
        ],
    },

    {
        id: "clean-rag",
        slug: "clean-rag",
        title: "Clean RAG",
        description:
            "A production-oriented Retrieval-Augmented Generation system for document ingestion, semantic retrieval, reranking, and grounded AI responses.",
        technologies: [
            "Python",
            "FastAPI",
            "Qdrant",
            "Sentence Transformers",
            "BGE Reranker",
            "Ollama",
            "PyTorch",
            "Docker",
        ],
        github: "https://github.com/siddarthasoul/clean-rag",
        live: null,
        featured: true,
    },

    {
        id: "transformer-from-scratch",
        slug: "transformer-from-scratch",
        title: "Transformer From Scratch",
        description:
            "An implementation-focused project exploring transformer language models from the ground up, including architecture, mathematics, training, and text generation.",
        technologies: [
            "Python",
            "NumPy",
            "PyTorch",
            "Deep Learning",
            "Transformers",
        ],
        github:
            "https://github.com/siddarthasoul/transformer-from-scratch",
        live: null,
        featured: true,
    },

    {
        id: "node-backend-template",
        slug: "node-backend-template",
        title: "Node.js Backend Template",
        description:
            "A reusable production-oriented backend template built with Node.js and TypeScript, focusing on clean architecture, REST APIs, Docker, and scalable backend infrastructure.",
        technologies: [
            "Node.js",
            "TypeScript",
            "Express",
            "Docker",
            "REST API",
        ],
        github: "https://github.com/siddarthasoul/tamplate",
        live: null,
        featured: false,
    },
];