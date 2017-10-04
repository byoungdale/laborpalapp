import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Button, Body, Text, View } from 'native-base';
import { connect } from 'react-redux';
const formatTime = require('minutes-seconds-milliseconds');

const calculateAverageFrequency = (contractionsList) => {
  const contractionsFilter = contractionsList.map((contraction, index) => {
    // check if this is a last contraction, if not, calculate
    if (contraction !== contractionsList.slice(-1)[0]) {
      // calculate startStamp of current contraction minus the next contraction
      const diff = contractionsList[index + 1].startStamp.getTime() - contraction.startStamp.getTime();
      return diff;
    }
  }).filter((diff) => { return diff !== undefined });

  const contractionsReduce = contractionsFilter.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  const averageFrequency = formatTime(contractionsReduce / contractionsList.length);
  return averageFrequency;
}

const calculateAverageLength = (contractionList) => {
  const contractionLengths = contractionList.map((contraction) => {
    const length = contraction.endStamp.getTime() - contraction.startStamp.getTime();
    return length;
  });

  const lengthsReduce = contractionLengths.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  const averageLength = formatTime(lengthsReduce / contractionList.length);
  return averageLength;
}

const getLatestFrequency = (previousContraction, latestContraction) => {
  console.log(previousContraction.startStamp);
  console.log(latestContraction.startStamp);
  const diff = latestContraction.startStamp.getTime() - previousContraction.startStamp.getTime();
  return formatTime(diff);
}

const getLatestLength = (latestContraction) => {
  const length = latestContraction.endStamp.getTime() - latestContraction.startStamp.getTime();
  return formatTime(length);
}

const ContractionStats = (contractions) => {

  // will use this function to compare previous state to current
  // and then change the arrow to up or down and gree or red

  // componentWillUpdate(nextProps, nextState)

  /*
    * The props will be contractions.
    * I need to use that to calculate the whether:
    * A)
    * * 1) the average frequency of contractions has gone up or down
    *        - if up: show average in green w/ green arrow-up
    *        - if down: show average in red w/ red arrow-down
    * * 2) the average length of contractions is going up or down:
    *        - if up: show average in green w/ green arrow-up
    *        - if down: show average in red w/ red arrow-down
    * B)
    * * 1) the latest frequency of contractions has gone up or down
    *        - if up: show average in green w/ green arrow-up
    *        - if down: show average in red w/ red arrow-down
    * * 2) the latest length of contractions is going up or down:
    *        - if up: show average in green w/ green arrow-up
    *        - if down: show average in red w/ red arrow-down
  */
  const contractionsList = contractions.contractions;

  const averageFrequency = contractionsList.length > 1 ? calculateAverageFrequency(contractionsList) : formatTime(0);
  const averageLength = contractionsList.length > 0 ? calculateAverageLength(contractionsList) : formatTime(0);
  const latestContractionFrequency = contractionsList.length > 1 ? getLatestFrequency(contractionsList[contractionsList.length - 2], contractionsList[contractionsList.length - 1]) : formatTime(0);
  const latestContractionLength = contractionsList.length > 0 ? getLatestLength(contractionsList[contractionsList.length - 1]) : formatTime(0);

  console.log(`averageFrequency: ${averageFrequency}`);
  console.log(`averageLength: ${averageLength}`);
  console.log(`latestContractionLength: ${latestContractionLength}`);
  console.log(`latestContractionFrequency: ${latestContractionFrequency}`);

  return (
    <View>
      <Text>Contraction Stats will go here.</Text>
    </View>
  )
}

export default ContractionStats;
