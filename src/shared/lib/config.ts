export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
  email: string;
}

export interface PersonalInfo {
  name: string;
  jobTitle: string;
  location: string;
  coordinates: { lat: string; lng: string };
  social: SocialLinks;
}

export interface SiteConfig {
  url: string;
  title: string;
  description: string;
}

export const personalInfo: PersonalInfo = {
  name: "Khash-Erdene",
  jobTitle: "Software Engineer · Fullstack Developer",
  location: "Ulaanbaatar, Mongolia",
  coordinates: { lat: "47.92°N", lng: "106.92°E" },
  social: {
    github: "https://github.com/khasherdene-b",
    linkedin: "https://www.linkedin.com/in/khasherdene0",
    instagram: "https://instagram.com/khasherdene28_",
    email: "khasherdene.day@gmail.com",
  },
};

export const siteConfig: SiteConfig = {
  url: "https://khasherdene.vercel.app",
  title: "Khash-Erdene — Software Engineer",
  description:
    "Software engineer and fullstack developer based in Ulaanbaatar, Mongolia. Building fast, thoughtful web experiences.",
};
