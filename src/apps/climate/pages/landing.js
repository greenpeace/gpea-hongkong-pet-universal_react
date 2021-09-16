import * as themeActions from 'store/actions/action-types/theme-actions';
import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Sticky from 'react-sticky-el';
import { ChakraProvider, Box, Button, Flex } from '@chakra-ui/react';
import SEO from '../SEO';
import content from '../data/content';
import Nav from '../components/header/nav';
import HeroSwiper from '../components/feature/heroSwiper';
import Footer from '../components/footer';
import NewFrameForm from 'components/form/newFrameForm';
import NewFrameSubmittedForm from 'components/form/newFrameSubmittedForm';
import Panel from 'components/panel/newFormPanel';
import themeConfig from '../../../theme';

import Content from './content';

const Landing = ({ submitted, togglePanel }) => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 564px)' });

  return (
    <ChakraProvider theme={themeConfig}>
      <SEO />
      <Nav showButton={false} />
      <Box backgroundColor={'#333333'}>
        <Flex
          pos='relative'
          zIndex={2}
          style={{ maxWidth: '1400px', margin: '0 auto' }}
        >
          <Box className='wrap' flex='1' style={{ minWidth: '0px' }}>
            <Content />
          </Box>
          <Box
            w={{ base: 0, md: '50%', lg: '450px', xl: '500px' }}
            px={{ base: 4 }}
            py='4'
            d={{ base: 'none', md: 'block' }}
            className='stickyContent'
          >
            <Sticky stickyStyle={{ zIndex: 10 }}>
              {submitted ? (
                <NewFrameSubmittedForm formContent={content} />
              ) : (
                <NewFrameForm
                  formContent={content}
                  version={true}
                  showProgress={false}
                  newsLetter={false}
                  birthDate={true}
                  thanksScreen={false}
                />
              )}
            </Sticky>
          </Box>
        </Flex>
      </Box>
      <Box
        pos='fixed'
        bottom={0}
        zIndex={9}
        p='4'
        w='100%'
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 10%)',
          paddingTop: '6px',
          paddingBottom: '8px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        d={{ base: 'flex', md: 'none' }}
      >
        <Button
          w='90%'
          color='#fff'
          bg='orange.500'
          borderRadius='24px'
          fontSize='xl'
          letterSpacing={4}
          style={{ zIndex: 999 }}
          onClick={() => togglePanel(true)}
        >
          {content.submit_text}
        </Button>
      </Box>
      <Panel
        formContent={content}
        showProgress={false}
        newsLetter={false}
        birthDate={true}
      >
        {submitted && isMobile && (
          <HeroSwiper isMobile={isMobile} swiperHeight='480px' />
        )}
      </Panel>
      <Footer />
    </ChakraProvider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
