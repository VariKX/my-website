import React from 'react';
import style from './style.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import MyPhoto from './assets/myphoto.jpg';
import { studingRoadData, workingRoadData } from './constants';
import Company from './components/Company';
import type { CompanyRoadType, StudingRoadType } from '@/types';
import Study from './components/Study';

const Info: React.FC = () => {
  
  return (
    <main className={style['info']}>
      <section className={cn(style['info__about'], style['about'])}>
        <div className={style['about__box']}>
          <h2 className={style['info__caption']}>Обо мне</h2>
          <p className={style['info__text']}>Текст для теста обо мне. Скоро я его наполню, но пока он будет такой. Текст для теста обо мне. Скоро я его наполню, но пока он будет такой. Текст для теста обо мне. Скоро я его наполню, но пока он будет такой. Текст для теста обо мне. Скоро я его наполню, но пока он будет такой. </p>
        </div>
        <Image className={style['about__photo']} alt='myphoto' src={MyPhoto}/>
      </section>
      <section className={style['info__road']}>
        <h2 className={style['info__caption']}>Опыт работы</h2>
        {workingRoadData.map((data: CompanyRoadType) => <Company {...data} key={data.id}/>)}
      </section>
      <section className={style['info__road']}>
        <h2 className={style['info__caption']}>Образование</h2>
        {studingRoadData.map((study: StudingRoadType) => <Study {...study} key={study.id}/>)}
      </section>
    </main>
  );
};

export default Info;