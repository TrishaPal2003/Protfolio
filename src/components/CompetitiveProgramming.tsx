import { TrophyIcon } from "./icons";
import Reveal from "./Reveal";

const PLATFORMS = [
  {
    name: "LeetCode",
    status: "Problem Solver",
    url: "https://leetcode.com/u/trishapal160/",
  },
  {
    name: "Codeforces",
    status: "Participant",
    url: "https://codeforces.com/profile/TRISHA_PAL58",
  },
];

export default function CompetitiveProgramming() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
      <div className="rounded-xl border-l-4 border-l-emerald-400 border-y border-r border-border bg-bg-card p-8 transition-colors hover:border-l-emerald-300">
        <div className="mb-4 flex items-center gap-3">
          <TrophyIcon className="h-6 w-6 text-emerald-400" />
          <h2 className="text-xl font-bold text-text-primary md:text-2xl">
            Competitive Programming
          </h2>
        </div>

        <h3 className="mb-2 font-semibold text-text-primary">ICPC 2024</h3>
        <p className="mb-6 max-w-2xl text-sm text-text-secondary">
          Participated in the ICPC 2024 Dhaka Regionals, collaborating under
          pressure to solve algorithmic challenges against top regional talent.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          {PLATFORMS.map((platform) => (
            <div
              key={platform.name}
              className="flex flex-1 items-center justify-between rounded-md border border-border bg-bg px-4 py-3 text-sm"
            >
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-text-primary transition-colors hover:text-emerald-400"
              >
                {platform.name}
              </a>
              <span className="text-text-secondary">{platform.status}</span>
            </div>
          ))}
        </div>
      </div>
      </Reveal>
    </section>
  );
}
