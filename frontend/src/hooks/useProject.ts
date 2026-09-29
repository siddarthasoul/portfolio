"use client";
import api from "../lib/api";
import { useState, useEffect } from "react";

import { type Project } from "../types/project";




export function useProject() {
    const [project, setProject] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        api.get('/project/').then((response) => {
            setProject(response.data.data);
        }).catch((err) => {
            setError(err.message || 'Somthing went wrong')
        }).finally(() => {
            setLoading(false)
        })
    }, []);
    return { project, loading, error };
}   