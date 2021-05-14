import "swiper/swiper.scss";
import React from "react";
import { connect } from "react-redux";
import Landing from "./pages/landing"
import Download from "./pages/download"
import * as themeActions from "store/actions/action-types/theme-actions";

const Index = ({ submitted }) => {
  return (
    submitted ? (<Download/>) : (<Landing/>)
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
