import {
  AnimeCard,
  BooksCard,
  ExperienceCard,
  GithubCard,
  LocationCard,
  MusicCard,
  NowCard,
  SocialLinksCard,
  StacksCard,
} from "./cards";

export function BentoGrid() {
  return (
    <div className="mt-10 space-y-3 stagger">
      {/* Row 1: GitHub + Now */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <GithubCard />
        <NowCard />
      </div>

      {/* Row 2: Music (wide) + Anime */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <MusicCard />
        </div>
        <AnimeCard />
      </div>

      {/* Row 3: [Social + Experience stacked] + Location */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <SocialLinksCard />
          <ExperienceCard />
        </div>
        <LocationCard />
      </div>

      {/* Row 4: Stacks + Books */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <StacksCard />
        <BooksCard />
      </div>
    </div>
  );
}
