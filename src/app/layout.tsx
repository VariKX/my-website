import Header from '@/component/Header';
import './style/global.scss';

export const metadata = {
  title: 'VariKX Tech',
  description: 'Личный сайт разработчика Сергея Можайского',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any'/>
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
