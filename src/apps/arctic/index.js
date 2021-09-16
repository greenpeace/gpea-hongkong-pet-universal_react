import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Sticky from 'react-sticky-el';
import content from './data/content';
import {
  ChakraProvider,
  Circle,
  Box,
  Button,
  Divider,
  Image,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  SimpleGrid,
  Stack,
  Icon,
  Link,
  Center,
  VStack,
} from '@chakra-ui/react';
import SEO from './SEO';
import Nav from './components/header/nav';
import Footer from './components/footer';
import NewFrameForm from 'components/form/newFrameForm';
import NewFrameSubmittedForm from 'components/form/newFrameSubmittedForm';
import Panel from 'components/panel/newFormPanel';

import * as themeActions from 'store/actions/action-types/theme-actions';
import themeConfig from './theme.js';
import ImageWithColumn from './components/feature/imageWithColumn';

import { IoCalendarOutline, IoTimeSharp, IoVideocam } from 'react-icons/io5';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Index = ({ submitted, togglePanel }) => {
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Circle size='40px' color='white' bg={iconBg}>
          {icon}
        </Circle>
        <Text pl='2' fontSize='lg' color='gray.900'>
          {text}
        </Text>
      </Stack>
    );
  };

  const isMobile = useMediaQuery({ query: '(max-device-width: 564px)' });

  const captionStyle = {
    as: 'span',
    borderLeft: '4px solid #66cc00',
    paddingLeft: '12px',
    size: 'sm',
    color: 'gary.500',
  };

  const pStyle = {
    as: 'p',
    marginTop: 8,
    color: 'gray.700',
    fontSize: { base: 'sm', sm: 'md' },
    lineHeight: '1.7',
  };

  const flexBoxStyle = {
    align: 'center',
    justify: 'center',
    color: 'white',
    rounded: 'full',
    bg: 'gray.100',
    mb: 1,
  };

  return (
    <ChakraProvider theme={themeConfig}>
      <SEO />
      {isMobile && <Nav />}
      <Flex>
        <Box flex='1' bgColor='campaign.arctic' px={20}>
          <Box h='95vh'>
            <Center h='100%'>
              <Flex>
                <Box>
                  <Center h='100%'>
                    <Heading
                      fontSize='140px'
                      lineHeight='160px'
                      letterSpacing='-4px'
                      pos='absolute'
                      color='#fff'
                    >
                      救氣候
                      <br />
                      阻止北極破壞！
                    </Heading>
                    <Box>
                      <Image src={'https://source.unsplash.com/random'} />
                    </Box>
                  </Center>
                </Box>
              </Flex>
            </Center>
          </Box>
          <Box mb={10}>
            <Flex>
              <Box flex='1' bgColor='#0E5A62' color='#fff' p={4}>
                <Center p={10}>
                  <VStack>
                    <Heading mb={0} alignSelf='self-start'>
                      密切跟進！北極漏油事故
                    </Heading>
                    <Box fontSize={18} my={6}>
                      <Text as='p'>
                        氣候危機加劇，高溫令永久凍土融化，增加漏油風險，嚴重威脅北極生態！
                      </Text>
                      <Text as='p'>
                        2020年5月29日，俄羅斯爆發2萬噸柴油洩漏事故，綠色和平到訪現場追查真相，過程被當局處處阻撓，令水土樣本無法運送至實驗室。
                      </Text>
                      <Text as='p'>
                        我們必須追究企業責任，否則類似事故將有增無減！
                      </Text>
                    </Box>
                  </VStack>
                </Center>
              </Box>
              <Box
                w='320px'
                bgSize='cover'
                bgImage="url('https://change.greenpeace.org.tw/2020/petition/zh-hk.2020.polar.savethearctic/img/img5.jpg')"
              ></Box>
            </Flex>
          </Box>
        </Box>
        <Box
          w={{ base: 0, md: '540px' }}
          p={10}
          pr={14}
          d={{ base: 'none', md: 'block' }}
        >
          <Sticky stickyStyle={{ zIndex: 10 }}>
            <Box>
              {submitted ? (
                <NewFrameSubmittedForm formContent={content} />
              ) : (
                <NewFrameForm
                  formContent={content}
                  showProgress={false}
                  newsLetter={false}
                />
              )}
            </Box>
          </Sticky>
        </Box>
      </Flex>
      <Box
        pos='fixed'
        bottom={0}
        zIndex={9}
        p='4'
        w='100%'
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          borderColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 10%)',
          paddingTop: '6px',
          paddingBottom: '8px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        d={{ base: 'flex', md: 'none' }}
      >
        <Button
          w='80%'
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
      <Panel formContent={content} />
      {/* <Footer /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);
