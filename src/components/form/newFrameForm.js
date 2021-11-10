import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as themeActions from 'store/actions/action-types/theme-actions';
import { Form, withFormik } from 'formik';
import 'rsuite/lib/styles/index.less';
import ProgressBar from 'components/progress';

import Mailcheck from 'mailcheck';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
  Flex,
  Text,
  Select,
  Stack,
  Heading,
  HStack,
  Checkbox,
} from '@chakra-ui/react';

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
    birthDate = true,
    activeABTesting,
    variant,
    togglePanel,
    initSuggestion,
    suggestion,
    setSuggestion,
    setFieldValue,
  } = props;

  const [hiddenFormValues, setHiddenFormValues] = useState([]);
  const [numSignupTarget, setNumSignupTarget] = useState(100000);
  const [numResponses, setNumResponses] = useState(0);

  const mobileCountryCode = [
    { label: '+852', value: '852' },
    { label: '+853', value: '853' },
  ];
  const progress = [
    { bgcolor: '#62cbd7', completed: numResponses, target: numSignupTarget },
  ];
  const [birthDateYear, setBirthDateYear] = useState([]);
  const space = 4;

  const labelStyle = {
    fontSize: 'xs',
    color: 'gray.400',
  };

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
      for (var i = nowYear - 18; i >= targetYear; i--) {
        await optionYear.push({ label: i, value: i.toString() });
      }
      setBirthDateYear(optionYear);
    }
    fetchOptionYear(optionYear);
    initSuggestion();
  }, []);

  useEffect(() => {
    setHiddenForm(hiddenFormValues);
  }, [hiddenFormValues]);

  useEffect(() => {
    if (submitted) {
      setSubmitting(false);
    }
  }, [submitted]);

  const mailSuggestion = (value) => {
    const domains = [
      'me.com',
      'outlook.com',
      'netvigator.com',
      'cloud.com',
      'live.hk',
      'msn.com',
      'gmail.com',
      'hotmail.com',
      'ymail.com',
      'yahoo.com',
      'yahoo.com.tw',
      'yahoo.com.hk',
    ];
    const topLevelDomains = ['com', 'net', 'org'];

    if (value) {
      Mailcheck.run({
        email: value,
        domains: domains, // optional
        topLevelDomains: topLevelDomains, // optional
        // secondLevelDomains: secondLevelDomains, // optional
        // distanceFunction: superStringDistance,  // optional
        suggested: function (suggestion) {
          if (value !== suggestion.full) {
            setSuggestion(suggestion.full);
          }
        },
      });
    }
  };

  return (
    <Box
      borderTop={{ base: null, sm: '4px solid #66cc00' }}
      boxShadow={{ base: null, sm: 'lg' }}
      p={{ base: 2, sm: 6 }}
      rounded={{ base: 0, sm: 'md' }}
      bg='white'
      overflow='hidden'
    >
      <Form onSubmit={handleSubmit}>
        <Stack spacing={4} mb={4}>
          <Heading as='h2' variant='heading' fontSize='2xl' color='gray.900'>
            <span
              dangerouslySetInnerHTML={{ __html: formContent.form_header }}
            />
          </Heading>
          {formContent.form_description && (
            <Text
              dangerouslySetInnerHTML={{ __html: formContent.form_description }}
            />
          )}
        </Stack>
        {showProgress &&
          progress.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
              target={item.target}
            />
          ))}
        <Flex direction='column'>
          <Box flex='1' pb={space}>
            <FormControl id='email' isInvalid={errors.Email && touched.Email}>
              <FormLabel {...labelStyle}>{formContent.label_email}</FormLabel>
              <Input
                name='Email'
                type='email'
                placeholder={formContent.label_email}
                onChange={handleChange}
                onBlur={(e) => {
                  // call the built-in handleBur
                  handleBlur(e);
                  // and do something about e
                  mailSuggestion(e.target.value);
                }}
                value={values.Email}
                _placeholder={{ fontSize: 16 }}
              />
              <FormErrorMessage color='red'>{errors.Email}</FormErrorMessage>
              {suggestion && (
                <Box
                  onClick={() => {
                    setFieldValue('Email', suggestion);
                    initSuggestion();
                  }}
                  pt={2}
                  pl={0}
                  cursor={`pointer`}
                >
                  <Text fontSize={`sm`}>
                    {formContent.suggestion_message}
                    <Text
                      as={'span'}
                      textDecoration={`underline`}
                      color={`#66cc00`}
                      fontWeight={`bold`}
                    >
                      {suggestion}
                    </Text>
                  </Text>
                </Box>
              )}
            </FormControl>
            {/* <FormControl id='email' isInvalid={errors.Email && touched.Email}>
              <FormLabel {...labelStyle}>{formContent.label_email}</FormLabel>
              <Input
                name='Email'
                type='email'
                placeholder={formContent.label_email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage color='red'>{errors.Email}</FormErrorMessage>
            </FormControl> */}
          </Box>

          <HStack>
            <Box flex={1} pb={space}>
              <FormControl
                id='lastName'
                isInvalid={errors.LastName && touched.LastName}
              >
                <FormLabel {...labelStyle}>
                  {formContent.label_last_name}
                </FormLabel>
                <Input
                  name='LastName'
                  type='text'
                  placeholder={formContent.label_last_name}
                  onChange={handleChange}
                />
                <FormErrorMessage color='red'>
                  {errors.LastName}
                </FormErrorMessage>
              </FormControl>
            </Box>
            <Box flex='1' pb={space}>
              <FormControl
                id='firstName'
                isInvalid={errors.FirstName && touched.FirstName}
              >
                <FormLabel {...labelStyle}>
                  {formContent.label_first_name}
                </FormLabel>
                <Input
                  name='FirstName'
                  type='text'
                  placeholder={formContent.label_first_name}
                  onChange={handleChange}
                />
                <FormErrorMessage color='red'>
                  {errors.FirstName}
                </FormErrorMessage>
              </FormControl>
            </Box>
          </HStack>

          <FormControl>
            <FormLabel {...labelStyle}>
              {activeABTesting && variant == 0
                ? formContent.label_phone
                : formContent.label_phone_optional}
            </FormLabel>
          </FormControl>

          <HStack align='flex-end'>
            <Box
              pb={space}
              mb={errors.MobilePhone && touched.MobilePhone ? '28px' : 0}
            >
              <FormControl id='mobileCountryCode'>
                <Select name='MobileCountryCode' onChange={handleChange}>
                  {mobileCountryCode &&
                    mobileCountryCode.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.label}
                      </option>
                    ))}
                </Select>
              </FormControl>
            </Box>
            <Box flex='1' pb={space}>
              <FormControl
                id='mobilePhone'
                isInvalid={errors.MobilePhone && touched.MobilePhone}
              >
                <Input
                  type='number'
                  name='MobilePhone'
                  placeholder={formContent.label_phone}
                  onChange={handleChange}
                />
                <FormErrorMessage color='red'>
                  {errors.MobilePhone}
                </FormErrorMessage>
              </FormControl>
            </Box>
          </HStack>

          {birthDate && (
            <Box flex='1' pb={space}>
              <FormControl
                id='Birthdate'
                isInvalid={errors.Birthdate && touched.Birthdate}
              >
                <FormLabel {...labelStyle}>
                  {activeABTesting && variant == 0
                    ? formContent.label_year_of_birth
                    : formContent.label_year_of_birth_optional}
                </FormLabel>
                <Select
                  placeholder={formContent.select}
                  onChange={handleChange}
                >
                  {birthDateYear &&
                    birthDateYear.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.value}
                      </option>
                    ))}
                </Select>
                <FormErrorMessage color='red'>
                  {errors.Birthdate}
                </FormErrorMessage>
              </FormControl>
            </Box>
          )}

          <Box flex='1' pt={3} pb={3}>
            <Button
              w='100%'
              isLoading={isSubmitting}
              type='submit'
              height='48px'
              borderRadius='md'
              fontSize='lg'
              color='#fff'
              bg='orange.500'
              letterSpacing={2}
            >
              {formContent.submit_text}
            </Button>
          </Box>

          <Box>
            <Box pt={4} pb={4}>
              <FormControl id='optIn'>
                {newsLetter ? (
                  <Checkbox
                    name='OptIn'
                    defaultChecked
                    iconColor='brand.500'
                    onChange={handleChange}
                    alignItems={'flex-start'}
                  >
                    <Text fontSize='xs'>{formContent.form_remind}</Text>
                  </Checkbox>
                ) : (
                  <Text fontSize='xs' lineHeight={1.5} color='gray.700'>
                    <sup> * </sup>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: formContent.form_remind,
                      }}
                    />
                  </Text>
                )}
              </FormControl>
            </Box>
          </Box>
        </Flex>
      </Form>
    </Box>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    Email: '',
    FirstName: '',
    LastName: '',
    MobileCountryCode: '852',
    MobilePhone: '',
    Birthdate: '',
    OptIn: true,
  }),

  validate: (values, { formContent, variant, activeABTesting, birthDate }) => {
    const errors = {};

    if (!values.Email) {
      errors.Email = formContent.empty_data_alert;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = formContent.invalid_email_alert;
    }
    // else {
    //   TODO: NEED CONFIRM ERROR MSG
    //   Mailcheck.run({
    //     email: values.Email,
    //     domains: domains,
    //     topLevelDomains: topLevelDomains,
    //     suggested: function(suggestion) {
    //       if(values.Email !== suggestion.domain)
    //       errors.Email = `您是否想輸入${suggestion.full}`
    //     }
    //   })
    // }

    if (!values.FirstName) {
      errors.FirstName = formContent.empty_data_alert;
    }

    if (!values.LastName) {
      errors.LastName = formContent.empty_data_alert;
    }

    if (activeABTesting && variant == 0) {
      if (!values.MobilePhone) {
        errors.MobilePhone = formContent.empty_data_alert;
      } else if (values.MobilePhone.toString().length !== 8) {
        errors.MobilePhone = formContent.minimum_8_characters;
      }

      if (
        values.MobilePhone.toString().length === 8 &&
        values.MobileCountryCode === '852'
      ) {
        const regex = /^[2,3,5,6,8,9]{1}[0-9]{7}$/i;
        if (!regex.test(values.MobilePhone)) {
          errors.MobilePhone = formContent.invalid_format_alert;
        }
      }

      if (
        values.MobilePhone.toString().length === 8 &&
        values.MobileCountryCode === '853'
      ) {
        const regex = /^[6]{1}[0-9]{7}$/i;
        if (!regex.test(values.MobilePhone)) {
          errors.MobilePhone = formContent.invalid_format_alert;
        }
      }

      if (birthDate && !values.Birthdate) {
        errors.Birthdate = formContent.empty_data_alert;
      }
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    const { hiddenFormValue } = props.theme;
    let birthdateValue = values.Birthdate ? `${values.Birthdate}-01-01` : '';
    const submitData = {
      ...hiddenFormValue,
      ...values,
      Birthdate: birthdateValue,
    };
    props.submitForm(submitData);
  },

  displayName: 'BasicForm',
})(MyForm);

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme,
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
    activeABTesting: theme.abTesting,
    variant: theme.variant,
    suggestion: theme.suggestion,
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
    setSuggestion: (value) => {
      dispatch({ type: themeActions.SET_SUGGESTION, data: value });
    },
    initSuggestion: () => {
      dispatch({ type: themeActions.INIT_SUGGESTION });
    },
  };
};

connect(null, mapDispatchToProps)(MyForm);

export default connect(mapStateToProps, mapDispatchToProps)(MyEnhancedForm);
