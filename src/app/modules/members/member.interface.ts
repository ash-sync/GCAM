export interface IMember {
  name: string;
  phone: string;
  role: "Executive" | "Advisory" | "General" | "Volunteer";
  image: string;
  email: string;
  bio: string;
  chapter: string;
  tag: string;
}
