import { Actions } from 'react-native-router-flux';
import {
  SUBSCRIBE_USER_SUCCESS,
  SUBSCRIBE_USER_FAIL,
  UPDATE_EMAIL_FORM,
  SUBSCRIBE_USER_DECLINE
} from './types';

const list_id = 'blahblah';
const api_key = 'blahblah';
const mailchimp_api_url = `https://us8.api.mailchimp.com/3.0/lists/${list_id}/members/`;

const updateSubscriberState = (dispatch, subscriber) => {
  if (subscriber.status === 'decline') {
    dispatch({
      type: SUBSCRIBE_USER_DECLINE,
      subscriber,
    });
    Actions.stopwatch();
  } else if (subscriber.status === true) {
    dispatch({
      type: SUBSCRIBE_USER_SUCCESS,
      subscriber,
    });
    Actions.stopwatch();
  } else {
    dispatch({
      type: SUBSCRIBE_USER_FAIL,
      subscriber: subscriber
    });
  }
}

const updateFormState = (dispatch, form) => {
  dispatch({
    type: UPDATE_EMAIL_FORM,
    form: form,
  })
}

export const handleFormUpdate = (text) => {
  const newForm = {
    email: text,
  }
  return (dispatch) => {
    updateFormState(dispatch, newForm);
  } // dispatch
}

export const handleDeclineUser = () => {
  console.log('running handleDeclineUser');
  return (dispatch) => {
    const subscriber = {
      status: 'decline',
      email: null
    }
    updateSubscriberState(dispatch, subscriber);
  }
}

export const handleSubscribeUser = (email_address) => {
  return (dispatch) => {
    const mailchimp_subscribe_body = {
      method: 'POST', 
      headers: {
        'Authorization': `Basic ${api_key}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email_address": `${email_address}`,
        "status": "subscribed",
      })
    }
    
    try {
      fetch(mailchimp_api_url, mailchimp_subscribe_body)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          const subscriber = {
            status: true,
            email: email_address
          }
          updateSubscriberState(dispatch, subscriber);
        }
        else {
          const subscriber = {
            status: false,
            email: email_address
          }
          updateSubscriberState(dispatch, subscriber);
        }
      })
      .catch((error) => {
        const subscriber = {
          status: false,
          email: email_address
        }
        updateSubscriberState(dispatch, subscriber);
      }); 
    } catch (error) {
      const subscriber = {
        status: false,
        email: email_address
      }
      updateSubscriberState(dispatch, subscriber);
    }  
  }
} // handleSubscribeUser

