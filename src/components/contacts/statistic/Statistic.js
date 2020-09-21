import React from 'react'
import { useSelector } from 'react-redux';
import { selectStatistic } from '../../../features/reduxSlices/filterSlice';
import './Statistic.css';

export const Statistic = () => {
  const { collectionSize, males, females, indeterminate, predominate, nationalities } = useSelector(selectStatistic);

  return (
    <div className="statistic">
        <h3 className="statistic__title">Statistic</h3>
        <div className="statistic__general">
          <div className="statistic__item"><span className="statistic__headers">Collection size</span><span className="statistic__item--big">{collectionSize}</span></div>
          <div className="statistic__item"><span className="statistic__headers">Males</span><span className="statistic__item--big">{males}</span></div>
          <div className="statistic__item"><span className="statistic__headers">Females</span><span className="statistic__item--big">{females}</span></div>
          <div className="statistic__item"><span className="statistic__headers">Indeterminate</span><span className="statistic__item--big">{indeterminate}</span></div>
        </div>
        <span className="statistic__predominator">{`${predominate}s are predominate`}</span>
        <div className="statistic__nationality">
        {Object.keys(nationalities)?.map(
          (nat, i) => (
            <div className="" key={nat}>
                <span className="input-label">{`${nat}:`}</span>
                <span>{nationalities[nat]}</span>
            </div>
        ))}
      </div>
    </div>
  )
};
