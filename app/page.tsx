import { fetchSidebarUsers, fetchChats } from "@/lib/api";
import Dashboard from "./Dashboard";

export default async function Page() {
  try {
    const [sidebarUsers, chats] = await Promise.all([
      fetchSidebarUsers(),
      fetchChats(),
    ]);

    return <Dashboard sidebarUsers={sidebarUsers} chats={chats} />;
  } catch (error) {
    console.error("Error fetching initial data:", error);
    return <div>Error loading data</div>;
  }
}
