export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
  facebook: string;
}

export interface PersonalInfo {
  name: string;
  jobTitle: string;
  company: string;
  location: string;
  coordinates: { lat: string; lng: string };
  social: SocialLinks;
}

export interface SiteConfig {
  url: string;
  title: string;
  description: string;
  version: string;
}

export interface SiteSection {
  id: string;
  label: string;
}

export const personalInfo: PersonalInfo = {
  name: "Khash-Erdene",
  jobTitle: "Software Engineer · Fullstack Developer",
  company: "Arigbank",
  location: "Ulaanbaatar, Mongolia",
  coordinates: { lat: "47.92°N", lng: "106.92°E" },
  social: {
    github: "https://github.com/khasherdene-b",
    linkedin: "https://www.linkedin.com/in/khasherdene.bo",
    facebook: "https://www.facebook.com/khasherdene.bo",
    instagram: "https://instagram.com/khasherdene.bo",
  },
};

export const siteConfig: SiteConfig = {
  url: "https://khasherdene.vercel.app",
  title: "Khash-Erdene — Software Engineer",
  description:
    "Software engineer and fullstack developer based in Ulaanbaatar, Mongolia. Building fast, thoughtful web experiences.",
  version: "2.0",
};

/** Page sections, in scroll order. Drives the header nav and command menu. */
export const SECTIONS: readonly SiteSection[] = [
  { id: "overview", label: "Overview" },
  { id: "work", label: "Work" },
];
