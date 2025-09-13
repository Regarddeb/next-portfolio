"use client";
import { File, Github, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";

import Footer from "@/shared/Footer";
import Title from "@/shared/Title";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CursorHighlight from "@/shared/CursorHighlight";

export default function Contact() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center pt-10 gap-10 pb-10">
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

        <form className="flex flex-col w-[90%] md:w-[60%] xl:w-[42%] gap-7 xl:p-3">
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">
              Or send me a message
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="name">Full name</Label>
            <Input required id="name" placeholder="Enter your name" />
          </div>
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              required
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea required id="message" placeholder="Enter your message" />
          </div>
          <Button size="lg" className="cursor-pointer">
            Send Message
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
