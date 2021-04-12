import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import { Form, withFormik } from "formik";
import "rsuite/lib/styles/index.less";
import ProgressBar from "components/progress";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Flex,
  Text,
  Select,
  Heading,
  HStack,
  Divider,
  Checkbox,
} from "@chakra-ui/react";

const MyForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    formContent,
    handleSubmit,
    showProgress,
    newsLetter,
    isSubmitting,
    setSubmitting,
    setHiddenForm,
    submitted,
  } = props;

  const [hiddenFormValues, setHiddenFormValues] = useState([]);
  const [numSignupTarget, setNumSignupTarget] = useState(100000);
  const [numResponses, setNumResponses] = useState(0);

  const mobileCountryCode = [
    { label: "+852", value: "852" },
    { label: "+853", value: "853" },
  ];
  const progress = [
    { bgcolor: "#62cbd7", completed: numResponses, target: numSignupTarget },
  ];
  const [birthDateYear, setBirthDateYear] = useState([]);
  const space = 4;

  const labelStyle = {
    fontSize: "xs",
    color: "gray.400",
  };

  const inputStyle = {};

  useEffect(() => {
    const getHiddenFields = document.querySelectorAll(
      'input[value][type="hidden"]:not([value=""])'
    );
    const signupTarget = document.querySelector(
      "input[name='numSignupTarget']"
    );
    const numResponses = document.querySelector("input[name='numResponses']");

    setHiddenFormValues(
      [...getHiddenFields].reduce(
        (obj, e) => ({ ...obj, [e.name]: e.value }),
        {}
      )
    );

    if (signupTarget) {
      setNumSignupTarget(signupTarget.value);
    }
    if (numResponses) {
      setNumResponses(numResponses.value);
    }
    //
    let optionYear = [];
    async function fetchOptionYear() {
      let nowYear = new Date().getFullYear();
      let targetYear = nowYear - 110;
      for (var i = nowYear - 20; i >= targetYear; i--) {
        await optionYear.push({ label: i, value: i.toString() });
      }
      setBirthDateYear(optionYear);
    }
    fetchOptionYear(optionYear);
  }, []);

  useEffect(() => {
    setHiddenForm(hiddenFormValues);
  }, [hiddenFormValues]);

  useEffect(() => {
    if (submitted) {
      setSubmitting(false);
    }
  }, [submitted]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Heading pt="4" pb="4" size="xl" color="gray.900">
          {formContent.form_header}
        </Heading>
        {formContent.form_description && (
          <Text pb={4}>{formContent.form_description}</Text>
        )}
        {showProgress &&
          progress.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
              target={item.target}
            />
          ))}
        <Flex direction="column">
          <Box flex="1" pb={space}>
            <FormControl id="email" isInvalid={errors.Email && touched.Email}>
              <FormLabel {...labelStyle}>{formContent.label_email}</FormLabel>
              <Input
                name="Email"
                type="email"
                placeholder={
                  errors.Email && touched.Email
                    ? errors.Email
                    : formContent.label_email
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormControl>
          </Box>

          <HStack>
            <Box pb={3} flex={1} pb={space}>
              <FormControl
                id="lastName"
                isInvalid={errors.LastName && touched.LastName}
              >
                <FormLabel {...labelStyle}>
                  {formContent.label_last_name}
                </FormLabel>
                <Input
                  name="LastName"
                  type="text"
                  placeholder={
                    errors.LastName && touched.LastName
                      ? errors.LastName
                      : formContent.label_last_name
                  }
                  onChange={handleChange}
                />
              </FormControl>
            </Box>
            <Box flex="1" pb={space}>
              <FormControl
                id="firstName"
                isInvalid={errors.FirstName && touched.FirstName}
              >
                <FormLabel {...labelStyle}>
                  {formContent.label_first_name}
                </FormLabel>
                <Input
                  name="FirstName"
                  type="text"
                  placeholder={
                    errors.FirstName && touched.FirstName
                      ? errors.FirstName
                      : formContent.label_first_name
                  }
                  onChange={handleChange}
                />
              </FormControl>
            </Box>
          </HStack>

          <FormLabel {...labelStyle}>{formContent.label_phone}</FormLabel>

          <HStack align="flex-end">
            <Box pb={space}>
              <FormControl id="mobileCountryCode">
                <Select name="MobileCountryCode" onChange={handleChange}>
                  {mobileCountryCode &&
                    mobileCountryCode.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.label}
                      </option>
                    ))}
                </Select>
              </FormControl>
            </Box>
            <Box flex="1" pb={space}>
              <FormControl
                id="mobilePhone"
                isInvalid={errors.MobilePhone && touched.MobilePhone}
              >
                <Input
                  type="number"
                  name="MobilePhone"
                  placeholder={
                    errors.MobilePhone && touched.MobilePhone
                      ? errors.MobilePhone
                      : formContent.label_phone
                  }
                  onChange={handleChange}
                />
              </FormControl>
            </Box>
          </HStack>

          <Box flex="1" pb={space}>
            <FormControl
              id="Birthdate"
              isInvalid={errors.Birthdate && touched.Birthdate}
            >
              <FormLabel {...labelStyle}>
                {formContent.label_year_of_birth}
              </FormLabel>
              <Select
                placeholder={
                  errors.Birthdate && touched.Birthdate
                    ? errors.Birthdate
                    : formContent.select
                }
                onChange={handleChange}
              >
                {birthDateYear &&
                  birthDateYear.map((d) => (
                    <option key={d.value} value={d.value}>
                      {d.value}
                    </option>
                  ))}
              </Select>
            </FormControl>
          </Box>

          <Box flex="1" pt={3} pb={3}>
            <Button
              w="100%"
              isLoading={isSubmitting}
              type="submit"
              height="48px"
              borderRadius="8"
              fontSize="xl"
              color="#FFF"
              letterSpacing={4}
              bg="#ff8100"
              _hover={{ bg: "campaign.climate" }}
            >
              立即聯署
            </Button>
          </Box>

          <Box>
            <HStack align="flex-start">
              <Box pt={5} pb={4}>
                <FormControl id="optIn">
                  {newsLetter ? (
                    <Checkbox name="OptIn" onChange={handleChange}>
                      <Text fontSize="xs">{formContent.form_remind}</Text>
                    </Checkbox>
                  ) : (
                    <Text fontSize="xs">
                      <sup>*</sup>
                      {formContent.form_remind}
                    </Text>
                  )}
                </FormControl>
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Form>
    </>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    Email: "",
    FirstName: "",
    LastName: "",
    MobileCountryCode: "852",
    MobilePhone: "",
    Birthdate: "",
    OptIn: false,
  }),

  validate: (values, { formContent }) => {
    const errors = {};

    if (!values.Email) {
      errors.Email = formContent.empty_data_alert;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = formContent.invalid_email_alert;
    }

    if (!values.FirstName) {
      errors.FirstName = formContent.empty_data_alert;
    }

    if (!values.LastName) {
      errors.LastName = formContent.empty_data_alert;
    }

    if (!values.MobilePhone) {
      errors.MobilePhone = formContent.empty_data_alert;
    } else if (values.MobilePhone.toString().length !== 8) {
      errors.MobilePhone = formContent.minimum_8_characters;
    }

    if (!values.Birthdate) {
      errors.Birthdate = formContent.empty_data_alert;
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    const { hiddenFormValue } = props.theme;
    const submitData = {
      ...hiddenFormValue,
      ...values,
      Birthdate: `${values.Birthdate}-01-01`,
    };
    props.submitForm(submitData);
  },

  displayName: "BasicForm",
})(MyForm);

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

connect(null, mapDispatchToProps)(MyForm);

export default connect(mapStateToProps, mapDispatchToProps)(MyEnhancedForm);