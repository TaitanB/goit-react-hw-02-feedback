import React from 'react';
import PropTypes from 'prop-types';
import { StatisticItem } from './Statistics.styled';

export const Statistics = ({ stats, total, positivePerc }) => {
  return (
    <>
      {Object.keys(stats).map(stat => (
        <StatisticItem key={stat}>
          {stat}: {stats[stat]}
        </StatisticItem>
      ))}
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feedback: {positivePerc}</StatisticItem>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePerc: PropTypes.string.isRequired,
};
