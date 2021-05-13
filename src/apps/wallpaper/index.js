import React, { useEffect } from "react";
import * as themeActions from "store/actions/action-types/theme-actions";
import { connect } from "react-redux";
import Header from "components/header";
import Thanks from "./components/thanks";
import "styles/theme.less";
import "./app.less";
import Panel from "components/panel";
import Footer from "components/footer";

const URL = `https://api.greenpeace.org.hk/2021/universal/`;

const Index = ({ initState, fakeSubmit, submitted, petition }) => {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get("page") === "download") {
      fakeSubmit();
    } else {
      initState();
    }
  }, []);

  return (
    <>
      <div id="main" className="custom-main">
        <Header />
        <div className="content">
          <article className="prose lg:prose-lg">
            <Thanks />
          </article>
          <br clear="both" />
          <Footer />
        </div>
      </div>
      <div className="custom-form-wrap">
        <div className="custom-gp-form custom-gp-form-wrap">
          <div
            className="custom-bg"
            style={{
              backgroundImage: "url(" + `${URL}${petition.selectedImage}` + ")",
            }}
          ></div>
        </div>
      </div>
      {/* <Panel closePanel={submitted} /> */}
    </>
  );
};

const mapStateToProps = ({ theme, petition }) => {
  return {
    theme: theme,
    petition: petition,
    submitted: theme.submitted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fakeSubmit: () => {
      dispatch({ type: themeActions.SUBMIT_FORM_SUCCESS });
    },
    initState: () => {
      dispatch({ type: themeActions.INIT_STATE });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
