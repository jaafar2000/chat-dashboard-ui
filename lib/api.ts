import type {
  SidebarUser,
  ChatPreview,
  Message,
  ContactDetails,
  User,
} from "./types";

const DUMMY_BASE = "https://dummyjson.com";
const JSON_BASE = "https://jsonplaceholder.typicode.com";

async function safeFetch<T>(url: string, label: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${label}`);
  return res.json();
}

export async function fetchSidebarUsers(): Promise<SidebarUser[]> {
  const data = await safeFetch<{ users: User[] }>(
    `${DUMMY_BASE}/users?limit=10`,
    "users"
  );

  return data.users.map((u, i) => ({
    id: u.id,
    name: `${u.firstName} ${u.lastName}`,
    messages: (((i + 1) * 3) % 5) + 1,
  }));
}

export async function fetchChats(): Promise<ChatPreview[]> {
  const data = await safeFetch<{ users: User[] }>(
    `${DUMMY_BASE}/users?limit=12`,
    "chats"
  );

  return data.users.map((u, i) => ({
    id: u.id,
    name: `${u.firstName} ${u.lastName}`,
    avatar: u.image,
    rolePreview:
      u.company?.department || u.company?.title || "No role information",
    time: `${23}:${String(8 + i).padStart(2, "0")}`,
  }));
}

export async function fetchMessages(chatId: number): Promise<Message[]> {
  const postId = ((chatId - 1) % 20) + 1;

  const data = await safeFetch<any[]>(
    `${JSON_BASE}/comments?postId=${postId}`,
    "messages"
  );

  return data.slice(0, 8).map((m, i) => ({
    id: m.id,
    from: i % 2 === 0 ? "user" : "agent",
    text: m.body,
    time: `${23}:${String(8 + i).padStart(2, "0")}`,
  }));
}

export async function fetchContact(chatId: number): Promise<ContactDetails> {
  const u = await safeFetch<User>(
    `${DUMMY_BASE}/users/${chatId}`,
    "contact details"
  );

  return {
    id: u.id,
    firstName: u.firstName,
    lastName: u.lastName,
    email: `${u.firstName.toLowerCase()}@example.com`,
    phone: "+1 234 567 890",
    city: "Unknown",
    company: u.company?.title || "Sales Team",
  };
}
