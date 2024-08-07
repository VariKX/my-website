import React from 'react';
import style from './style.module.scss';
import { StackType } from '@/types';
import { getStackFile } from './getStackFile';

interface IStackElementProps extends Omit<StackType, 'id'> {};

const StackElement: React.FC<IStackElementProps> = (props) => {

  return (
    <div className={style['stack-element']}>
      {/* <Image src={getStackFile(props.name)} alt={props.name}/> */}
      <p className={style['stack-element__name']}>{props.name}</p>
    </div>
  )
};

export default StackElement;