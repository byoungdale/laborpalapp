import React, { Component } from 'react';
import {
  Text,
  Card,
  CardItem,
  Button
}
from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ContractionRatingSection from './ContractionRatingSection';
import ContractionNote from './ContractionNote';
import ContractionOverview from './ContractionOverview';

const ContractionCard = (props) => {
  return (
    <Card>
      <CardItem
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
      <CardItem header><Text>Contraction {props.contraction.id}</Text></CardItem>
      </CardItem>
      <ContractionOverview contraction={props.contraction} />
      <ContractionRatingSection contraction={props.contraction} />
      <ContractionNote contraction={props.contraction} />
    </Card>
  );
};


export default ContractionCard;
