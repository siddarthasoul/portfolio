"use client";

import { useState, type FormEvent } from "react";
import type { SendMessageInput, SendMessageResponse } from "../../types/contact"

interface ContactFormProps {
  sendMessage: (
    data: SendMessageInput,
  ) => Promise<SendMessageResponse>;
  sending: boolean;
  sendError: string | null;
  onClose: () => void;
}

const initialForm: SendMessageInput = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm({
  sendMessage,
  sending,
  sendError,
  onClose,
}: ContactFormProps) {
  const [form, setForm] =
    useState<SendMessageInput>(initialForm);

  const [success, setSuccess] = useState(false);
  const [validationError, setValidationError] =
    useState<string | null>(null);

  const updateField = (
    field: keyof SendMessageInput,
    value: string,
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setValidationError(null);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setValidationError(null);

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setValidationError("Please fill in all fields.");
      return;
    }

    if (name.length > 100) {
      setValidationError(
        "Name must be 100 characters or fewer.",
      );
      return;
    }

    if (email.length > 255) {
      setValidationError(
        "Email must be 255 characters or fewer.",
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setValidationError(
        "Please enter a valid email address.",
      );
      return;
    }

    if (message.length > 5000) {
      setValidationError(
        "Message must be 5000 characters or fewer.",
      );
      return;
    }

    try {
      await sendMessage({
        name,
        email,
        message,
      });

      setForm(initialForm);
      setSuccess(true);
    } catch {
      // sendError comes from useContact()
    }
  };

  const inputClass = `
    mt-2
    w-full
    rounded-xl
    border
    border-white/[0.08]
    bg-white/[0.035]
    px-4
    py-3
    text-sm
    text-white
    outline-none
    placeholder:text-gray-600
    transition
    focus:border-cyan-300/40
    focus:bg-white/[0.05]
    focus:ring-2
    focus:ring-cyan-300/10
  `;

  if (success) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/10 text-2xl text-emerald-300">
          ✓
        </div>

        <h4 className="mt-5 text-xl font-semibold text-white">
          Message sent
        </h4>

        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-400">
          Thanks for reaching out. I'll get back to you as
          soon as possible.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="
            mt-6
            rounded-xl
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            px-6
            py-3
            text-sm
            font-semibold
            text-[#061018]
            transition
            hover:brightness-110
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-cyan-300
          "
        >
          Done
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="text-xs font-medium uppercase tracking-wide text-gray-400"
        >
          Name
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={100}
          required
          value={form.name}
          onChange={(event) =>
            updateField("name", event.target.value)
          }
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="text-xs font-medium uppercase tracking-wide text-gray-400"
        >
          Email
        </label>

        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={255}
          required
          value={form.email}
          onChange={(event) =>
            updateField("email", event.target.value)
          }
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="contact-message"
            className="text-xs font-medium uppercase tracking-wide text-gray-400"
          >
            Message
          </label>

          <span className="text-[11px] text-gray-600">
            {form.message.length}/5000
          </span>
        </div>

        <textarea
          id="contact-message"
          name="message"
          rows={5}
          maxLength={5000}
          required
          value={form.message}
          onChange={(event) =>
            updateField("message", event.target.value)
          }
          placeholder="Tell me about your idea..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Error */}
      {(validationError || sendError) && (
        <div
          role="alert"
          className="rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-xs leading-5 text-red-300"
        >
          {validationError || sendError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={sending}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-gradient-to-r
          from-cyan-400
          to-blue-500
          px-5
          py-3.5
          text-sm
          font-semibold
          text-[#061018]
          shadow-lg
          shadow-cyan-500/10
          transition
          hover:-translate-y-0.5
          hover:shadow-cyan-400/20
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-cyan-300
          disabled:cursor-not-allowed
          disabled:opacity-60
          disabled:hover:translate-y-0
        "
      >
        {sending ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#061018]/30 border-t-[#061018]" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <span>→</span>
          </>
        )}
      </button>
    </form>
  );
}