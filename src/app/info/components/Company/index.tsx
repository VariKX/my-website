import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/ru';
import type { CompanyRoadType, StackType } from '@/types';
import StackElement from '@/components/StackElement';
import cn from 'classnames';
import { workingRoadData } from '../../constants';

interface ICompanyProps extends CompanyRoadType {};

dayjs.extend(customParseFormat);
dayjs.locale('ru');

const DATE_FORMAT = 'DD.MM.YYYY';
const RETURN_DATE_FORMAT = 'MMMM YYYY';

const Company: React.FC<ICompanyProps> = (props) => {

  const calculateDuration = (): string => {
    const startDate = dayjs(props.startDate, DATE_FORMAT);

    if (props.endDate) {
      const endDate = dayjs(props.endDate, DATE_FORMAT);
      return `${endDate.diff(startDate, 'y', true).toFixed(1)} года`;
    } else {
      const currentDate = dayjs();
      return `${currentDate.diff(startDate, 'y', true).toFixed(1)} года`;
    }
  };

  const getEndDate = (): string => {
    if (props.endDate) return dayjs(props.endDate, DATE_FORMAT).format(RETURN_DATE_FORMAT);

    return 'по настоящее время';
  };

  return (
    <div className={style['company']}>
      <div 
        className={cn(style['line'], {[style['line_end']]: props.id === workingRoadData.length})}
      />
      <div className={style['company__box']}>
        <Image className={style['company__logo']} src={props.logo} alt={props.name}/>
        <div className={style['company__data']}>
          <h3>{props.name}</h3>
          <p>{props.position}</p>
          <p className={style['company__duration']}>{calculateDuration()}</p>
          <p className={style['company__duration']}>
            {dayjs(props.startDate, DATE_FORMAT).format(RETURN_DATE_FORMAT)} &#x2014; {getEndDate()}
          </p>
        </div>
      </div>
      <p className={style['company__text']}>{props.doing}</p>
      <div className={style['company__stack']}>
        {props.stack.map((stack: StackType) => <StackElement {...stack} key={stack.id}/>)}
      </div>
    </div>
  );
};

export default Company;