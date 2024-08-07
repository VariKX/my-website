import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/ru';
import { CompanyRoadType } from '../../types';

interface ICompanyProps {
  data: CompanyRoadType;
};

dayjs.extend(customParseFormat);
dayjs.locale('ru');

const DATE_FORMAT = 'DD.MM.YYYY';
const RETURN_DATE_FORMAT = 'MMMM YYYY';

const Company: React.FC<ICompanyProps> = ({ data }) => {

  const calculateDuration = (): string => {
    const startDate = dayjs(data.startDate, DATE_FORMAT);
    const currentDate = dayjs();
    return `${currentDate.diff(startDate, 'y', true).toFixed(1)} года`;
  };

  const getEndDate = (): string => {
    if (data.endDate) return dayjs(data.endDate, DATE_FORMAT).format(RETURN_DATE_FORMAT);

    return 'по настоящее время';
  };

  return (
    <div className={style['company']}>
      <div className={style['line']}></div>
      <Image className={style['company__logo']} src={data.logo} alt={data.name}/>
      <div className={style['company__data']}>
        <h3 className={style['company__name']}>{data.name}</h3>
        <p className={style['company__position']}>{data.position}</p>
        <p className={style['company__duration']}>{calculateDuration()}</p>
        <p className={style['company__duration']}>
          {dayjs(data.startDate, DATE_FORMAT).format(RETURN_DATE_FORMAT)} &#x2014; {getEndDate()}
        </p>
      </div>
    </div>
  );
};

export default Company;