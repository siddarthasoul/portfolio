"use client";
import api from "../lib/api";
import { useState, useEffect } from "react";

import { type Me } from "../types/me";


export function useMe() {
    const [user, setUser] = useState<Me | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        api.get('/user/me').then((response)=>{
            setUser(response.data.data);
        }).catch((err)=>{
            setError(err.message || 'Somthing went wrong')
        }).finally(()=>{
            setLoading(false)
        });
    },[]);

    return {user, loading, error};

}