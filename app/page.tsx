import React from "react";

const techStack = [
  "TypeScript", "JavaScript", "Next.js", "Nest.js", "React", "Redux Toolkit",
  "Tailwind CSS", "FSD (архитектура)", "БЭМ",
  "PostgreSQL", "TypeORM", "WebSocket", "REST API",
  "Docker", "Docker Compose", "Nginx",
  "Service Workers", "Notification API", "PWA",
  "ESLint", "Prettier", "Husky", "Git", "Figma"
];

const HomePage: React.FC = () => {
  return (
    <main>
      <section
        id="hero"
        className="relative flex flex-col justify-end h-screen pt-[100px] px-6 md:px-20 max-w-screen-2xl mx-auto pb-[80px]"
      >
        <p className="text-xl sm:text-2xl mb-4 text-muted-foreground">
          Сергей Можайский / разработчик
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-start md:items-end">
          <h1 className="text-[clamp(2rem,12vw,280px)] leading-none font-bold tracking-tight max-w-full md:max-w-[900px]">
            Frontend<br />Developer
          </h1>

          <p className="text-base sm:text-xl max-w-md text-muted-foreground">
            Специализируюсь на создании веб-интерфейсов с фокусом на скорость, читаемый код и удобство для пользователя. Использую современные технологии: Next, TypeScript, Tailwind и грамотную архитектуру.
          </p>
        </div>
      </section>

      <section id="about" className="py-24 px-6 md:px-20 max-w-screen-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">Обо мне</h2>
        <div className="max-w-2xl text-muted-foreground space-y-4 text-lg leading-relaxed">
          <p>
            Меня зовут Сергей Можайский. Я frontend-разработчик, специализирующийся на создании современных и быстрых интерфейсов с акцентом на производительность, чистоту кода и удобство для пользователя.
          </p>
          <p>
            В работе использую стек: <strong className="text-foreground">Next.js, TypeScript, Tailwind CSS</strong>, а также придерживаюсь архитектурных подходов вроде FSD (Feature-Sliced Design) и принципов UI/UX-дизайна.
          </p>
          <p>
            Стараюсь сделать каждый проект логичным, масштабируемым и аккуратным. Люблю интерфейсы, в которых всё по полочкам.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 max-w-screen-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 tracking-tight">Мой стек</h2>
        <div className="flex flex-wrap gap-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground transition text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="py-24 px-6 md:px-20 max-w-screen-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 tracking-tight">Проекты</h2>
        <div className="text-muted-foreground text-lg text-center py-10 border border-dashed border-border rounded-md">
          Пока здесь ничего нет. Но скоро появятся интересные проекты — загляните позже!
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-border p-6 rounded-md hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-2">Project Name</h3>
            <p className="text-muted-foreground mb-4">
              Краткое описание проекта. Что делал, какие технологии использовал, зачем.
            </p>
            <a href="#" className="text-sm underline hover:text-foreground transition">
              Смотреть демо →
            </a>
          </div>

          <div className="border border-border p-6 rounded-md hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-2">Project Name 2</h3>
            <p className="text-muted-foreground mb-4">
              Другой проект с описанием и ссылками на GitHub/превью.
            </p>
            <a href="#" className="text-sm underline hover:text-foreground transition">
              Смотреть на GitHub →
            </a>
          </div>
        </div> */}
      </section>

      <section id="contact" className="py-24 px-6 md:px-20 max-w-screen-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">Контакты</h2>
        <p className="text-muted-foreground text-lg mb-4">
          Хотите сотрудничать или задать вопрос? Напишите мне:
        </p>
        <div className="text-lg font-medium">
          <a href="mailto:varikxoff@yandex.ru" className="underline hover:text-foreground">
            varikxoff@yandex.ru
          </a>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Или найдите меня в{" "}
          <a href="https://t.me/VariKX" className="underline hover:text-foreground">Telegram</a> /{" "}
          <a href="https://github.com/VariKX" className="underline hover:text-foreground">GitHub</a>
        </p>
      </section>

      <footer className="text-center text-xs text-muted-foreground mt-16 pb-10">
        © {new Date().getFullYear()} Сергей Можайский. Все права защищены.
      </footer>
    </main>
  );
};

export default HomePage;
