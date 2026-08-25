export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-text-secondary sm:flex-row">
        <span className="font-medium text-text-primary">Trisha Pal</span>
        <span>© {year} Trisha Pal. Built with precision.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-accent">LinkedIn</a>
          <a href="#" className="hover:text-accent">GitHub</a>
          <a href="mailto:trishapal160@gmail.com" className="hover:text-accent">Email</a>
        </div>
      </div>
    </footer>
  );
}
