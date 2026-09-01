import Reveal from "./Reveal";

const contactLinks = [
  {
    label: "Email",
    value: "trishapal160@gmail.com",
    href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new",
  },
  {
    label: "Phone",
    value: "+880 1871852611",
    href: "tel:+8801871852611",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/TrishaPal2003",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/trisha-pal03/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/trisha.pal.7583992",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="rounded-2xl border border-border bg-bg-card p-8 md:p-12">
          {/* Heading */}
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Contact
            </p>

            <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
              Get In Touch
            </h2>

            <p className="mt-4 text-sm leading-7 text-text-secondary md:text-base">
              I&apos;m always open to discussing new opportunities, projects,
              collaborations, or interesting ideas. Feel free to reach out
              through email or connect with me on social platforms.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Direct Contact */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-text-primary">
                Direct Contact
              </h3>

              <div className="space-y-4">
                {contactLinks.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="group block rounded-xl border border-border bg-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                  >
                    <span className="mb-1 block text-xs uppercase tracking-wider text-text-secondary">
                      {contact.label}
                    </span>

                    <span className="text-sm font-medium text-text-primary transition-colors group-hover:text-accent">
                      {contact.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-text-primary">
                Find Me Online
              </h3>

              <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-border bg-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                  >
                    <span className="text-sm font-medium text-text-primary transition-colors group-hover:text-accent">
                      {social.label}
                    </span>

                    <span className="text-text-secondary transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
