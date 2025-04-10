import React from "react";

const Home: React.FC = () => {
  return (
    <section className="relative flex flex-col h-[calc(100vh-64px)] justify-end pb-[70px] max-w-screen-2xl mx-auto px-6 md:px-20">
      <p className="text-2xl mb-4 text-muted-foreground">Сергей Можайский / разработчик</p>

      <div className="flex flex-col md:flex-row gap-10 items-start md:items-end">
        <h1 className="text-[clamp(3rem,15vw,200px)] leading-none font-bold tracking-tight max-w-full md:max-w-[900px]">
          Frontend<br />Developer
        </h1>

        <p className="text-xl max-w-md text-muted-foreground">
          Специализируюсь на создании веб-интерфейсов с фокусом на скорость, читаемый код и удобство для пользователя.  
          Использую современные технологии: Next, TypeScript, Tailwind и грамотную архитектуру.
        </p>
      </div>
    </section>
  );
};

export default Home;
