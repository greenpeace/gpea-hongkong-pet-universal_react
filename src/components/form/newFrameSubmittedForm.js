import React, { useEffect, useState } from "react";
import whatsapp from "assets/images/social/whatsapp_icon.svg";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import { mainShare, whatsAppShare } from "../../share";
import content from "./newFormContent.json";
import {
  Button,
  Flex,
  Fade,
  ScaleFade,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import DonateForm from "./donateForm";

const MyForm = ({ formContent = content }) => {
  const [numSignupTarget, setNumSignupTarget] = useState(100000);
  const [numResponses, setNumResponses] = useState(0);
  const [showDonate, setShowDonate] = useState(false);

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
    <Box
      borderTop={{ base: null, sm: "4px solid #66cc00" }}
      boxShadow={{ base: null, sm: "lg" }}
      px={4}
      py={4}
      rounded={{ base: 0, sm: "md" }}
      bg='white'
      overflow='auto'
    >
      {showDonate && (
        <Fade in={showDonate}>
          <DonateForm />
        </Fade>
      )}
      {!showDonate && (
        <Flex direction='column'>
          <Text
            variant='heading'
            dangerouslySetInnerHTML={{ __html: formContent.thanks_title }}
          />
          <Text
            as='p'
            variant='paragraph'
            py={2}
            dangerouslySetInnerHTML={{
              __html: formContent.thanks_content_top_section,
            }}
          />
          <Text
            as='p'
            variant='paragraph'
            py={2}
            dangerouslySetInnerHTML={{
              __html: formContent.thanks_content_center_section,
            }}
          />
          {/* CTAs */}
          <Stack direction={"row"} align={"center"} spacing='12px'>
            <Button
              variant='donateButton'
              px={8}
              style={{ backgroundColor: "#3b5998" }}
              onClick={() =>
                mainShare(
                  formContent.shareMessage,
                  formContent.fbURL,
                  formContent.mainURL
                )
              }
              rel='noreferrer'
              mb={2}
            >
              {formContent.share_button}
            </Button>
            <Button
              variant='donateButton'
              px={8}
              style={{ backgroundColor: "#eee" }}
              onClick={() =>
                whatsAppShare(formContent.shareMessage, formContent.whatsappURL)
              }
              rel='noreferrer'
            >
              <img
                loading='lazy'
                src={whatsapp}
                alt='whatsapp'
                style={{ height: "32px" }}
              />
            </Button>
          </Stack>
          <Text as='p' variant='paragraph' py={2}>
            <span
              dangerouslySetInnerHTML={{
                __html: formContent.thanks_content_bottom_section,
              }}
            />
          </Text>
          {/* <DonateForm /> */}
          <Button
            variant='donateButton'
            style={{ backgroundColor: "#66cc00" }}
            target='_blank'
            rel='noreferrer'
            /* onClick={() => window.open(formContent.donateURL)} */
            onClick={() => {
              setShowDonate(true);
            }}
          >
            {formContent.donate_button}
          </Button>
        </Flex>
      )}
    </Box>
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
