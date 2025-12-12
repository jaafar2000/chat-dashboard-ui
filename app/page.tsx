import { fetchSidebarUsers, fetchChats } from "@/lib/api";
import Dashboard from "./Dashboard";

export default async function Page() {
  const [sidebarUsers, chats] = await Promise.all([
    fetchSidebarUsers(),
    fetchChats(),
  ]);

  return <Dashboard sidebarUsers={sidebarUsers} chats={chats} />;
}
