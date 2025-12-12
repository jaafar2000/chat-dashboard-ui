export type User = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  company?: {
    department?: string;
    title?: string;
  };
};

export type SidebarUser = {
  id: number;
  name: string;
  messages: number;
};

export type ChatPreview = {
  id: number;
  name: string;
  avatar: string;
  rolePreview: string;
  time: string;
};

export type Message = {
  id: number;
  from: "user" | "agent";
  text: string;
  time: string;
};

export type ContactDetails = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  company: string;
};
