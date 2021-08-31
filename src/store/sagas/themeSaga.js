import { call, put } from 'redux-saga/effects';
// import qs from "qs";
// import axios from "axios";
import * as Actions from '../actions/action-types/theme-actions';
import * as helper from '../../helper';

const FORM_URL = helper.getPostURL();
const CAMPAIGN_ID = helper.getCampaignID();

export function* submitForm(actions) {
  const formData = {
    ...actions.form,
    CampaignId: `${CAMPAIGN_ID}`,
  };

  var postData = new FormData();
  for (var k in formData) {
    postData.append(k, formData[k]);
  }

  // const postData = Object.keys(formData).reduce((postData, key) => {
  //   postData.append(key, formData[key])
  //   return postData
  // }, new FormData())

  try {
    const response = yield call(() =>
      fetch(`${FORM_URL}`, {
        method: 'POST',
        body: postData,
      })
        .then((response) => response.json())
        .then((response) => response)
    );

    // console.log('response-', response)
    // response: {
    //   "Status": 201,
    //   "Supporter": {
    //     "Email": "kfclone1@gmail.com",
    //     "Lead": {
    //       "Records_Updated": 0,
    //       "New_Record_Created": 0,
    //       "Converted": false
    //     },
    //     "Contact": {
    //       "Records_Updated": 1,
    //       "Contact_Record_Created": 0
    //     }
    //   }
    // }

    if (response.Supporter) {
      yield put({
        type: Actions.SUBMIT_FORM_SUCCESS,
      });
      // Tracking
      console.log('submitted:', `${process.env.REACT_APP_PROJECT}`);
      helper.sendPetitionTracking(`${process.env.REACT_APP_PROJECT}`);
    } else {
      yield put({ type: Actions.SUBMIT_FORM_FAIL });
    }
  } catch (e) {
    yield put({ type: Actions.SUBMIT_FORM_FAIL });
  }
}
