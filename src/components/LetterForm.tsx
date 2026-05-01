"use client";

import { useState } from "react";

export interface LetterFormData {
  name: string;
  email: string;
  message: string;
}

interface LetterFormProps {
  onSubmit: (data: LetterFormData) => Promise<void>;
  isLoading?: boolean;
}

export default function LetterForm({
  onSubmit,
  isLoading = false,
}: LetterFormProps) {
  const [formData, setFormData] = useState<LetterFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await onSubmit(formData);
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting letter:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-[2rem]">
      {/* Success Message */}
      {submitted && (
        <div className="p-[1.6rem] rounded-lg bg-green-100 border border-green-400 text-green-800">
          <p className="font-semibold text-[1.4rem]">
            ✓ Thank you for your letter! It will be reviewed and posted soon.
          </p>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-mahogany font-semibold text-[1.4rem] mb-[0.8rem]"
        >
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full px-[1.6rem] py-[1.2rem] rounded-lg border-2 border-mahogany/20 focus:border-gold focus:outline-none text-mahogany text-[1.4rem] transition-colors duration-300"
          disabled={isLoading}
        />
        {errors.name && (
          <p className="text-red-600 text-[1.2rem] mt-[0.4rem]">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-mahogany font-semibold text-[1.4rem] mb-[0.8rem]"
        >
          Your Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className="w-full px-[1.6rem] py-[1.2rem] rounded-lg border-2 border-mahogany/20 focus:border-gold focus:outline-none text-mahogany text-[1.4rem] transition-colors duration-300"
          disabled={isLoading}
        />
        {errors.email && (
          <p className="text-red-600 text-[1.2rem] mt-[0.4rem]">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-mahogany font-semibold text-[1.4rem] mb-[0.8rem]"
        >
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share your heartfelt wishes, memories, or encouragement..."
          rows={6}
          className="w-full px-[1.6rem] py-[1.2rem] rounded-lg border-2 border-mahogany/20 focus:border-gold focus:outline-none text-mahogany text-[1.4rem] transition-colors duration-300 resize-none"
          disabled={isLoading}
        />
        {errors.message && (
          <p className="text-red-600 text-[1.2rem] mt-[0.4rem]">
            {errors.message}
          </p>
        )}
        <p className="text-mahogany/60 text-[1.2rem] mt-[0.4rem]">
          {formData.message.length} characters
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-[3.2rem] py-[1.4rem] rounded-full bg-gold text-mahogany text-[1.4rem] font-bold tracking-wider uppercase hover:bg-gold-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
      >
        {isLoading ? "Submitting..." : "Submit Letter ✉"}
      </button>

      <p className="text-mahogany/60 text-[1.2rem] text-center">
        All letters are reviewed before being posted. Thank you!
      </p>
    </form>
  );
}
