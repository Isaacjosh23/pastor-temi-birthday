"use client";

import { useState } from "react";

export interface LetterFormData {
  name: string;
  title: string;
  message: string;
  remarks?: string;
}

interface LetterFormProps {
  onSubmit: (data: LetterFormData) => Promise<void>;
  isLoading: boolean;
}

export default function LetterForm({ onSubmit, isLoading }: LetterFormProps) {
  const [form, setForm] = useState<LetterFormData>({
    name: "",
    title: "",
    message: "",
    remarks: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name.trim() ||
      !form.title.trim() ||
      !form.message.trim() ||
      !form.remarks?.trim()
    )
      return;
    await onSubmit(form);
    setForm({ name: "", title: "", message: "", remarks: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    "w-full border border-gold/30 rounded-lg px-[1rem] py-[1rem] md:py-[1.2rem] md:px-[1rem] text-[1.3rem] md:text-[1.5rem] text-mahogany bg-cream/50 placeholder:text-mahogany/35 outline-none focus:border-gold transition-colors duration-200";
  const labelClass =
    "block text-mahogany text-[1.4rem] font-semibold mb-[0.6rem] tracking-wide";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[2.4rem]">
      {submitted && (
        <div className="bg-gold/15 border border-gold/40 rounded-lg px-[1.6rem] py-[1.2rem] text-mahogany text-[1.4rem]">
          ✓ Your letter has been sent. Thank you!
        </div>
      )}

      <div>
        <label className={labelClass}>Your Name *</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className={inputClass}
          style={{ fontFamily: "'Lato', sans-serif" }}
        />
      </div>

      <div>
        <label className={labelClass}>Letter Title *</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Give your letter a title"
          required
          className={inputClass}
          style={{ fontFamily: "'Lato', sans-serif" }}
        />
      </div>

      <div>
        <label className={labelClass}>Your Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Share your heartfelt wishes, memories, or encouragement..."
          required
          rows={7}
          className={`${inputClass} resize-none`}
          style={{ fontFamily: "'Lato', sans-serif" }}
        />
      </div>

      <div>
        <label className={labelClass}> Closing Remarks *</label>
        <input
          name="remarks"
          value={form.remarks}
          onChange={handleChange}
          placeholder="Yours sincerely"
          required
          className={inputClass + " italic"}
          style={{ fontFamily: "'Lato', sans-serif" }}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-mahogany text-cream text-[1.3rem] md:text-[1.5rem] font-semibold py-4 rounded-full hover:bg-mahogany-light transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer tracking-wide"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        {isLoading ? "Sending..." : "Send Letter ✉"}
      </button>
    </form>
  );
}
