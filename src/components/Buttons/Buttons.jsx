import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackBtn } from './Buttons.styled';

export const FeedbacksAdd = ({ onAddFeedback, options }) => {
  // console.log(onAddFeedback, options);
  return (
    <>
      {options.map(name => (
        <FeedbackBtn
          type="button"
          key={name}
          onClick={() => onAddFeedback(name)}
        >
          {name}
        </FeedbackBtn>
      ))}
    </>
  );
};

FeedbacksAdd.propTypes = {
  onAddFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
