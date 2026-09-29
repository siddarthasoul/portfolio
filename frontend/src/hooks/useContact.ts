"use client";

import api from "../lib/api";
import { useEffect, useState } from "react";
import {type SendMessageResponse, type ContactInfo, type SendMessageInput} from "../types/contact";


export function useContact() {
  const [contact, setContact] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [sending, setSending] = useState<boolean>(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [sentMessage, setSentMessage] =
    useState<SendMessageResponse | null>(null);

  useEffect(() => {
    api
      .get("/contact/")
      .then((response) => {
        setContact(response.data.data);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const sendMessage = async (
    data: SendMessageInput,
  ): Promise<SendMessageResponse> => {
    setSending(true);
    setSendError(null);

    try {
      const response = await api.post(
        "/contact/message",
        data,
      );

      const message = response.data.data;

      setSentMessage(message);

      return message;
    } catch (err: any) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Something went wrong";

      setSendError(message);

      throw new Error(message);
    } finally {
      setSending(false);
    }
  };

  return {
    contact,
    loading,
    error,

    sendMessage,
    sending,
    sendError,
    sentMessage,
  };
}