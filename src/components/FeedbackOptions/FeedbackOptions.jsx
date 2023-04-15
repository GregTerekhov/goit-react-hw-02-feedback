import React from 'react';
import PropTypes from 'prop-types';
import { ButtonsContainer, OptionsButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionKeys = Object.keys(options);
  return (
    <ButtonsContainer>
      {optionKeys.map(option => (
        <OptionsButton
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </OptionsButton>
      ))}
    </ButtonsContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
