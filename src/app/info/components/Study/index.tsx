import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { StudingRoadType } from '@/types';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

interface IStudyProps extends Omit<StudingRoadType, 'id'> {};

dayjs.extend(customParseFormat);
dayjs.locale('ru');

const DATE_FORMAT = 'DD.MM.YYYY';
const RETURN_DATE_FORMAT = 'MMMM YYYY';

const Study: React.FC<IStudyProps> = (props) => {

  const getEndDate = (): string => {
    if (props.endDate) return dayjs(props.endDate, DATE_FORMAT).format(RETURN_DATE_FORMAT);

    return 'по настоящее время';
  };
  
  return (
    <div className={style['study']}>
      <Image className={style['study__photo']} src={props.logo} alt={props.name}/>
      <div className={style['study__data']}>
        <h3>{props.name}</h3>
        <p>{props.direction}</p>
        <p className={style['study__duration']}>
            {dayjs(props.startDate, DATE_FORMAT).format(RETURN_DATE_FORMAT)} &#x2014; {getEndDate()}
          </p>
      </div>
    </div>
  );
};

export default Study;