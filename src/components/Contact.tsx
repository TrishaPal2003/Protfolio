"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
      <div className="rounded-xl border border-border bg-bg-card p-8 md:p-12">
        <h2 className="mb-2 text-center text-2xl font-bold text-text-primary md:text-3xl">
          Get In Touch
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-sm text-text-secondary">
            <p>
              I&apos;m currently looking for new opportunities. Whether you
              have a question or just want to say hi, I&apos;ll try my best to
              get back to you.
            </p>
            <p>trishapal160@gmail.com</p>
            <p>+880 1878XXXXX</p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-accent">LinkedIn</a>
              <a href="#" className="hover:text-accent">GitHub</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-xs text-text-secondary">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full rounded-md border border-border bg-bg px-4 py-2 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-xs text-text-secondary">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full rounded-md border border-border bg-bg px-4 py-2 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-xs text-text-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Your Message"
                className="w-full rounded-md border border-border bg-bg px-4 py-2 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-md bg-accent-soft py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-emerald-400">
                Message sent. I&apos;ll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please email me directly instead.
              </p>
            )}
          </form>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
