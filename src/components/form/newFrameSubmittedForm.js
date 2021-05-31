import React, { useEffect, useState } from "react";
import whatsapp from "assets/images/social/whatsapp_icon.svg";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import { mainShare, whatsAppShare } from "../../share";
import content from "./newFormContent.json";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

const buttonStyle = {
  marginTop: "10px",
  marginBottom: "20px",
  padding: "12px 20px",
};

const MyForm = ({ formContent = content }) => {
  const [numSignupTarget, setNumSignupTarget] = useState(100000);
  const [numResponses, setNumResponses] = useState(0);

  useEffect(() => {
    const signupTarget = document.querySelector(
      "input[name='numSignupTarget']"
    );
    const numResponses = document.querySelector("input[name='numResponses']");

    if (signupTarget) {
      setNumSignupTarget(signupTarget.value);
    }
    if (numResponses) {
      setNumResponses(numResponses.value);
    }
  }, []);

  return (
    <Flex direction="column">
      <Text py={4} variant="heading">
        {formContent.thanks_title}
      </Text>
      <Text as="p" py={2} variant="description">
        <span dangerouslySetInnerHTML={{ __html: formContent.thanks_content }}/>
      </Text>
      <Button
        variant="donateButton"
        style={{ backgroundColor: "#fda22f", ...buttonStyle }}
        onClick={() => window.open(formContent.donateURL)}
        target="_blank"
        rel="noreferrer"
      >
        {formContent.donate_button}
      </Button>

      <Button
        variant="donateButton"
        style={{ backgroundColor: "#3b5998", ...buttonStyle }}
        onClick={() =>
          mainShare(
            formContent.shareMessage,
            formContent.fbURL,
            formContent.mainURL
          )
        }
        rel="noreferrer"
      >
        {formContent.share_button}
      </Button>
      <Button
        style={{ backgroundColor: "#25d366", ...buttonStyle }}
        onClick={() =>
          whatsAppShare(formContent.shareMessage, formContent.whatsappURL)
        }
        rel="noreferrer"
      >
        <img
          loading="lazy"
          src={whatsapp}
          alt="whatsapp"
          style={{ height: "24px" }}
        />
      </Button>
    </Flex>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme,
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: (bol) => {
      dispatch({ type: themeActions.TOGGLE_FORM, bol });
    },
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
    setForm: (value) => {
      dispatch({ type: themeActions.SET_FORM_VALUE, value });
    },
    setHiddenForm: (value) => {
      dispatch({ type: themeActions.SET_HIDDEN_FORM_VALUE, value });
    },
    submitForm: (form) => {
      dispatch({ type: themeActions.SUBMIT_FORM, form });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyForm);
