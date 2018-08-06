import React from 'react';
import SU from './selectableUnit.js';

export const HeaderField = ({ field }) => {


  return (
    <li className={field.liClass}>
      <a href={field.href}>
        <i className={field.icon} />
        <span>{field.displayText}</span>
      </a>
    </li>
  );
};

export const NetworkHeader = ({ field }) => {
  return (
    <li className={field.liClass}>
      <i className={field.firstIcon} />
      <span> {field.firstText} </span>
      <i className={field.secondIcon} />
      <span className={field.secondClass}>{field.secondText}</span>
    </li>
  );
};

export const BalanceHeader = ({ field }) => {
  return (
    <li className={field.liClass}>
      <h3>{field.firstText}</h3>
      <span className={field.firstClass}>
        <span className="inline-form" name="unit">
          <button type="button" data-name="unit" data-value="ether">
            {field.secondText}
          </button>
          <SU />
        </span>
      </span>
    </li>
  );
};