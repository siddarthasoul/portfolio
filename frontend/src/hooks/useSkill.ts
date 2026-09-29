"use client";

import { useEffect, useState } from "react";

import api from "../lib/api";
import { type SkillCategory } from "../types/skill"



export function useSkills() {
    const [skills, setSkills] = useState<SkillCategory[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        api
            .get("/skills/")
            .then((response) => {
                setSkills(response.data.data);
            })
            .catch((err) => {
                setError(err.message || "Something went wrong");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {
        skills, loading, error,
    };
}