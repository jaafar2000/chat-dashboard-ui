import Skeleton from "./Skeleton";

export default function AppShellSkeleton() {
  return (
    <div className="grid h-full grid-cols-[260px_360px_minmax(0,1fr)_340px] bg-[#f4f5f7]">
      <aside className="border-r bg-white px-3 py-4">
        <Skeleton className="h-4 w-20 mb-4" />
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="mb-2 h-8 w-full rounded-lg" />
        ))}

        <Skeleton className="mt-6 mb-4 h-3 w-16" />
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="mb-2 h-8 w-full rounded-lg" />
        ))}

        <Skeleton className="mt-6 mb-4 h-3 w-20" />
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="mb-2 h-8 w-full rounded-lg" />
        ))}
      </aside>

      <section className="border-r bg-white flex flex-col">
        <div className="border-b px-4 py-3">
          <Skeleton className="h-4 w-32 mb-3" />
          <Skeleton className="h-8 w-full rounded-xl" />
        </div>
        <div className="flex-1 space-y-2 overflow-y-auto px-4 py-4 bg-[#f5f5f7]">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl bg-white px-3 py-3"
            >
              <Skeleton className="h-9 w-9 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-3 w-44" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-r bg-white flex flex-col">
        <div className="border-b px-4 py-3 flex items-center justify-between">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-8 w-24 rounded-full" />
        </div>

        <div className="flex-1 bg-[#f5f5f7] px-10 py-6 space-y-4 overflow-y-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`flex ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <Skeleton className="h-10 w-64 rounded-2xl" />
            </div>
          ))}
        </div>

        <div className="border-t bg-white px-6 py-4">
          <Skeleton className="h-11 w-full rounded-2xl" />
        </div>
      </section>

      <aside className="bg-white flex flex-col">
        <div className="border-b px-4 py-3">
          <Skeleton className="h-4 w-20 mb-2" />
        </div>

        <div className="flex-1 px-4 py-3 space-y-6 overflow-y-auto">
          <div className="space-y-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-32" />
          </div>

          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-3 w-full" />
            ))}
          </div>

          <div className="flex gap-2">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>

          <Skeleton className="h-16 w-full rounded-lg" />
        </div>
      </aside>
    </div>
  );
}
