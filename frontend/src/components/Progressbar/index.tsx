import React from 'react';
import { Iuser } from '../../type.modal';
import styles from './Progressbar.module.css';

function star(star?:number) {
  switch(star) {
    case(1): {
      return styles.star1;
    }
    case(2): {
      return styles.star2;
    }
    case(3): {
      return styles.star3;
    }
    default: {
      return styles.available;
    }
  }
}

function Progressbar(props:Iuser) {
  return (
    <div className="progressbar">
      <ul className={styles.progress}>
        <li className={
          (props.chapter! >= 1 ) ? star(props.star![0])
          : undefined }>Basic</li>
        <li className={
          (props.chapter! >= 2 ) ? star(props.star![1])
          : undefined }>Qubits</li>
        <li className={
          (props.chapter! >= 3 ) ? star(props.star![2])
          : undefined }>Measurement</li>
        <li className={
          (props.chapter! >= 4 ) ? star(props.star![3])
          : undefined }>Gate</li>
        <li className={
          (props.chapter! >= 5 ) ? star(props.star![4])
          : undefined }>Algorithm</li>
      </ul>
    </div>
  )
}

export default Progressbar;