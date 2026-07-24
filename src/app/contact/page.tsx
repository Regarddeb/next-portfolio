"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, File, Github, Linkedin, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";

import Footer from "@/shared/Footer";
import Title from "@/shared/Title";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
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
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again later or reach out directly on LinkedIn.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Back to Home Button */}
      <div className="pt-6 flex justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      <div className="flex flex-col items-center pt-6 gap-10 pb-10">
        <Title title="Get in touch" />
        <p className="font-light text-center w-[90%] md:w-[70%] xl:w-[50%]">
          I’d love to hear from you! Whether you have a question, a project
          idea, or just want to say hi, feel free to reach out. You can connect
          with me on LinkedIn, check out my resume, explore my GitHub, or simply
          send me a message using the form below.
        </p>
        <div className="flex flex-col w-[90%] md:w-[60%] xl:w-[40%] gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <a
              href="https://www.linkedin.com/in/humphrey-uno-601022228"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              className="cursor-pointer p-3 border border-gray-400 rounded-lg flex justify-center items-center gap-3"
            >
              <Linkedin size={15} />
              <p className="font-medium">Linkedin</p>
            </a>
            <a
              href="/Humphrey Uno CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              className="cursor-pointer p-3 border border-gray-400 rounded-lg flex justify-center items-center gap-3"
            >
              <File size={15} />
              <p className="font-medium">Resume</p>
            </a>
            <a
              href="https://github.com/Regarddeb"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              className="cursor-pointer p-3 border border-gray-400 rounded-lg flex justify-center items-center gap-3"
            >
              <Github size={15} />
              <p className="font-medium">Github</p>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[90%] md:w-[60%] xl:w-[42%] gap-7 xl:p-3"
        >
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">
              Or send me a message
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {status.type && (
            <div
              className={`p-4 rounded-lg text-sm text-center ${
                status.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {status.message}
            </div>
          )}

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

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              required
              id="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <Button
            size="lg"
            type="submit"
            className="cursor-pointer"
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
      </div>
      <Footer />
    </div>
  );
}
