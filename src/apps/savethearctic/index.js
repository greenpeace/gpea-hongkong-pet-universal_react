import './app.less'
import React, { useEffect } from 'react'
import * as swiperActions from 'store/actions/action-types/swiper-actions'
import * as themeActions from 'store/actions/action-types/theme-actions'
import { connect } from 'react-redux'

import { ChakraProvider, Box, Heading, Text, Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from '../../theme'

import SEO from './SEO'
import RegistrationForm from 'components/form/registrationForm'
import SubmittedForm from 'components/form/submittedForm'
import SlideScreen from './components/main/slideScreen'
import Aside from './components/aside'
import Header from './components/header'
import Panel from 'components/panel'
import MiniDonateForm from 'components/donate/miniDonateForm'

import formContent from './data/formContent.json'

const DonateWrapper = styled.div`
  padding: 20px 20px 0 20px;
`

const Index = ({
  initState,
  fakeSubmit,
  submitted,
  activeABTesting,
  setVariant,
}) => {
  useEffect(() => {
    async function activateABTesting() {
      console.log(
        'process.env.REACT_APP_EXPERIMENT_ID--',
        process.env.REACT_APP_EXPERIMENT_ID
      )

      // active AB Testing
      activeABTesting(true)
      if (window.dataLayer) {
        await window.dataLayer.push({ event: 'optimize.activate' })
      }

      const intervalId = setInterval(() => {
        if (window.google_optimize !== undefined) {
          const variant = window.google_optimize.get(
            process.env.REACT_APP_EXPERIMENT_ID
          )
          if (variant === 0 || variant === undefined) {
            setVariant(0)
            document.querySelector("input[name='CampaignData1__c']").value =
              'Version A'
          } else {
            setVariant(1)
            document.querySelector("input[name='CampaignData1__c']").value =
              'Version B'
          }
          clearInterval(intervalId)
        }
      }, 500)
    }

    activateABTesting()
  }, [])

  return (
    <ChakraProvider resetCSS='true' theme={theme}>
      <>
        <SEO />
        <div id='main'>
          <Header />
          <Aside />
          <div id='wrapper'>
            <div className='content full-height' data-pagetitle='Home slider'>
              <SlideScreen />
            </div>
          </div>
        </div>
        <div className='custom-form-wrap'>
          {submitted ? (
            <Stack h={'100%'} overflowY='auto'>
              <DonateWrapper>
                <Box mb={4}>
                  <Heading
                    color={'#fff'}
                    mb={4}
                    fontSize={'3xl'}
                    textAlign='left'
                  >
                    感謝您的加入！
                  </Heading>
                  <Text color={'#fff'} fontSize={'md'} textAlign='left'>
                    綠色和平堅持以行動守護北極，揭露並制止企業與政府，在北極鑽油與過度捕撈惡行、推動全球攜手淘汰化石能源，將升溫控制至1.5°C，守護北極，減輕北極熊生存壓力。
                  </Text>
                </Box>
                <MiniDonateForm />
              </DonateWrapper>
              <SubmittedForm formContent={formContent} />
            </Stack>
          ) : (
            <RegistrationForm formContent={formContent} />
          )}
        </div>
        <Panel formContent={formContent} />
      </>
    </ChakraProvider>
  )
}

const mapStateToProps = ({ swiper, theme }) => {
  return {
    swiper: swiper.data,
    slideIndex: swiper.slideIndex,
    theme: theme,
    submitted: theme.submitted,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fakeSubmit: () => {
      dispatch({ type: themeActions.SUBMIT_FORM_SUCCESS })
    },
    initState: () => {
      dispatch({ type: themeActions.INIT_STATE })
    },
    updateSwiperSlide: (data) => {
      dispatch({ type: swiperActions.UPDATE_SWIPER_SLIDE, data })
    },
    activeABTesting: (bol) => {
      dispatch({ type: themeActions.ACTIVE_AB_TESTING, bol })
    },
    setVariant: (value) => {
      dispatch({ type: themeActions.SET_VARIANT, value })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
