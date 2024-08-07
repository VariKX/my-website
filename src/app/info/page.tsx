import React from 'react';
import style from './style.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import MyPhoto from './assets/myphoto.jpg';
import { workingRoadData } from './constants';
import Company from './components/Company';
import { CompanyRoadType } from './types';

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
        {workingRoadData.map((data: CompanyRoadType) => <Company data={data} key={data.id}/>)}
      </section>
      <section className={style['info__road']}></section>
    </main>
  );
};

export default Info;