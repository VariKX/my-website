export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="flex flex-col items-center gap-2 animate-pulse text-muted-foreground">
        <span className="text-2xl font-semibold tracking-tight">Загрузка...</span>
        <span className="text-sm opacity-70">Подождите немного, магия происходит</span>
      </div>
    </main>
  );
}
