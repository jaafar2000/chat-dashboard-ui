## Setup Instructions

### Prerequisites

- Node.js 18+ recommended
- npm

### Install & Run

```bash
npm install
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

To build for production:

```bash
npm run build
npm run start
```

---

## APIs Used

The application integrates public dummy APIs to demonstrate real-world data fetching, loading states, and error handling:

- https://dummyjson.com  
  Used for users, chat previews, sidebar data, and contact details.

- https://jsonplaceholder.typicode.com  
  Used for chat message content.

A shared `safeFetch` utility is used to centralize error handling and ensure clean, maintainable API calls.

---

## Assumptions Made

- The Figma design is treated as a **visual reference**, not a pixel-perfect constraint. Minor spacing and sizing differences may exist while preserving overall layout, hierarchy, and interaction behavior.
- Authentication and persistence are out of scope.
- Desktop-first implementation is prioritized.
- State management is intentionally kept simple using React hooks, as the application scope does not require external state libraries.

---
## Live Demo

A deployed preview of the application is available here:

https://chat-dashboard-ui-xi.vercel.app
