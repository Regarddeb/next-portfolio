"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormData({ name: "", email: "", message: "", website: "" });
      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully! I'll get back to you soon.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again later or reach out directly by email or LinkedIn.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <AnimatePresence>
        {status.type && (
          <motion.div
            role="status"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`p-4 rounded-lg text-sm text-center border ${
              status.type === "success"
                ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-900"
                : "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-900"
            }`}
          >
            {status.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          id="website"
          tabIndex={-1}
          value={formData.website}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            required
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            required
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          required
          id="message"
          placeholder="Enter your message"
          className="min-h-32"
          value={formData.message}
          onChange={handleChange}
          disabled={loading}
        />
      </div>

      <Button
        size="lg"
        type="submit"
        className="cursor-pointer bg-highlight text-highlight-foreground hover:bg-highlight/85"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
