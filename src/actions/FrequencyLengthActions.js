import {
  FREQUENCY_LENGTH
} from '../actions/types';

const formatTime = require('minutes-seconds-milliseconds');

const finalCalculation = (dispatch, frequency_length_new_state) => {
  dispatch({
    type: FREQUENCY_LENGTH,
    frequency_length_boolean: frequency_length_new_state.frequency_length_new_boolean,
    frequency_length_values: frequency_length_new_state.frequency_length_new_values
  });
}

export const handleFrequencyLengthCalculation = (contractionsList, frequency_length_values) => {
  return (dispatch) => {
    const latestContractionFrequency = contractionsList.length > 1 ? getLatestFrequency(contractionsList[contractionsList.length - 2], contractionsList[contractionsList.length - 1]) : 0;
    const latestContractionLength = contractionsList.length > 0 ? getLatestLength(contractionsList[contractionsList.length - 1]) : 0;
    const averageFrequency = contractionsList.length > 1 ? calculateAverageFrequency(contractionsList) : 0;
    const averageLength = contractionsList.length > 0 ? calculateAverageLength(contractionsList) : 0;

    frequency_length_new_state = {
      frequency_length_new_boolean: {
        lastestfrequency: latestContractionFrequency > frequency_length_values.lastestfrequency ? true : false,
        latestcontraction: latestContractionLength > frequency_length_values.latestcontraction ? true : false,
        averagefrequency: averageFrequency > frequency_length_values.averagefrequency ? true : false,
        averagecontraction: averageLength > frequency_length_values.averagecontraction ? true : false
      },
      frequency_length_new_values: {
        lastestfrequency: latestContractionFrequency,
        latestcontraction: latestContractionLength,
        averagefrequency: averageFrequency,
        averagecontraction: averageLength
      }
    }

    console.log('handleFrequencyLengthCalculation');
    console.log(frequency_length_new_state);

    finalCalculation(dispatch, frequency_length_new_state);
  };
}

const calculateAverageFrequency = (contractionsList) => {
  const contractionsFilter = contractionsList.map((contraction, index) => {
    // check if this is a last contraction, if not, calculate
    if (contraction !== contractionsList.slice(-1)[0]) {
      // calculate startStamp of current contraction minus the next contraction
      const diff = contractionsList[index + 1].startStamp.getTime() - contraction.startStamp.getTime();
      return diff;
    }
  }).filter((diff) => { return diff !== undefined; });

  const contractionsReduce = contractionsFilter.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  const averageFrequency = contractionsReduce / contractionsList.length;
  return averageFrequency;
};

const calculateAverageLength = (contractionList) => {
  const contractionLengths = contractionList.map((contraction) => {
    const length = contraction.endStamp.getTime() - contraction.startStamp.getTime();
    return length;
  });

  const lengthsReduce = contractionLengths.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  const averageLength = (lengthsReduce / contractionList.length);
  return averageLength;
};

const getLatestFrequency = (previousContraction, latestContraction) => {
  const diff = latestContraction.startStamp.getTime() - previousContraction.startStamp.getTime();
  return diff;
};

const getLatestLength = (latestContraction) => {
  const length = latestContraction.endStamp.getTime() - latestContraction.startStamp.getTime();
  return length;
};
