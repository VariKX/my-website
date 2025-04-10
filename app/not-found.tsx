export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-[88px] leading-none font-bold">404</h1>
      <p className="text-muted-foreground text-xl mb-4">Такой страницы не существует.</p>
      <a href="/" className="text-sm underline hover:text-foreground transition">Вернуться на главную →</a>
    </main>
  );
}
