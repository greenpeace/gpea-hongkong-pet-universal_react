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
import ToggleFormButton from 'components/button/toggleFormButton';
import themeConfig from '../../../theme';

import Content from './content';

const Landing = ({ submitted, togglePanel }) => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 564px)' });

  return (
    <ChakraProvider theme={themeConfig}>
      <SEO />
      <Nav showButton={false} />
      <Box>
        <Flex
          pos='relative'
          zIndex={2}
          style={{ maxWidth: '1400px', margin: '0 auto' }}
        >
          <Box className='wrap' flex='1' style={{ minWidth: '0px' }}>
            <Content />
          </Box>
          <Box
            w={{ base: 0, md: '50%', lg: '440px', xl: '520px' }}
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
        zIndex='999'
        px={6}
        py={2}
        bottom={0}
        left={0}
        w={'100%'}
        bg='rgba(255,255,255,0.95)'
        d={{ base: 'flex', md: 'none' }}
      >
        <ToggleFormButton content={content.submit_text} />
      </Box>
      <Panel formContent={content}>
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
    submitted: theme.submitted,
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
