import React from 'react';
import style from './style.module.scss';

const Page404: React.FC = () => {
  return (
    <div className={style['page-404']}>
      <h1 className={style['page-404__caption']}>404</h1>
      <div className={style['page-404__content']}>
        <p className={style['page-404__text']}>Упс, кажется такой страницы не существует!</p>
        <a className={style['page-404__link']} href='info'>На главную</a>
      </div>
    </div>
  )
};

export default Page404;