"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, FileText, Mail } from "lucide-react";
import SectionTitle from "@/shared/SectionTitle";
import ContactForm from "@/shared/ContactForm";
import { GithubIcon, LinkedinIcon } from "@/shared/BrandIcons";
import { Button } from "@/components/ui/button";
import { fadeUp, inView, stagger } from "@/lib/motion";
import { links } from "@/lib/links";

const CopyEmail: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm pl-4 pr-1 py-1 w-fit max-w-full">
      <a
        href={`mailto:${links.email}`}
        className="truncate text-sm md:text-base hover:underline underline-offset-4"
      >
        {links.email}
      </a>
      <Button
        size="icon"
        variant="ghost"
        onClick={copy}
        aria-label={copied ? "Email copied" : "Copy email"}
        className="rounded-full cursor-pointer text-white hover:bg-white/15 hover:text-white shrink-0"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "check" : "copy"}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {copied ? <Check className="text-highlight" /> : <Copy />}
          </motion.span>
        </AnimatePresence>
      </Button>
    </div>
  );
};

const externalLinks = [
  { href: links.resume, label: "Resume", icon: <FileText className="size-4" /> },
  { href: links.linkedin, label: "LinkedIn", icon: <LinkedinIcon /> },
  { href: links.github, label: "GitHub", icon: <GithubIcon /> },
];

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full pt-16 pb-24" id="contact">
      <SectionTitle title="contact" />

      <motion.div
        className="w-[85%] md:w-[80%] z-2 grid xl:grid-cols-2 rounded-2xl border border-border overflow-hidden"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={inView}
      >
        <div className="relative isolate text-white p-6 md:p-10 flex flex-col justify-center gap-6 min-h-80">
          <div className="absolute inset-0 -z-20 bg-[url('/bg-contact.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 -z-10 bg-neutral-950/80" />

          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <p className="inline-flex items-center gap-2 text-sm text-highlight font-medium">
              <Mail className="size-4" /> Get in touch
            </p>
            <h3 className="font-playfair text-3xl md:text-4xl font-semibold leading-tight">
              Let&apos;s build something together
            </h3>
            <p className="text-white/75 leading-relaxed max-w-md">
              Whether you have a role, a project idea, or just want to say hi,
              my inbox is open. Email is the fastest way to reach me.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <CopyEmail />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {externalLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-medium transition-colors hover:bg-highlight hover:text-highlight-foreground hover:border-highlight"
              >
                {icon}
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="bg-background p-6 md:p-10 flex flex-col gap-4">
          <p className="text-lg font-semibold">Or send me a message</p>
          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
