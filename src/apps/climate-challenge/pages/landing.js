import * as themeActions from 'store/actions/action-types/theme-actions';
import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Sticky from 'react-sticky-el';
import {
  ChakraProvider,
  Box,
  Button,
  Divider,
  Image,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Stack,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { MdDateRange, MdAccessTime, MdLocalPlay } from 'react-icons/md';
import SEO from '../SEO';
import content from '../data/content';
import Nav from '../components/header/nav';
import HeroSwiper from '../components/feature/heroSwiper';
import Footer from '../components/footer';
import NewFrameForm from 'components/form/newFrameForm';
import NewFrameSubmittedForm from 'components/form/newFrameSubmittedForm';
import Panel from 'components/panel/newFormPanel';
import themeConfig from '../../../theme';

import kv from '../assets/images/kv.jpg';
import desktopflow from '../assets/images/climate-challenge-flow-desktop.jpg';
import mobileflow from '../assets/images/climate-challenge-flow.jpg';

const Landing = ({ submitted, togglePanel }) => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 564px)' });

  const pStyle = {
    as: 'p',
    marginTop: '20px',
    color: 'gray.900',
    lineHeight: '1.5',
    fontSize: '16px',
  };

  return (
    <ChakraProvider theme={themeConfig}>
      <SEO />
      <Nav showButton={false} />
      <Flex
        pos='relative'
        zIndex={2}
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        <Box className='wrap' flex='1' style={{ minWidth: '0px' }}>
          <Box px={{ base: 4 }} py={{ base: 4 }}>
            <Box>
              <Image src={kv} borderRadius={'md'} />
            </Box>

            <Stack pt={8} pb={4}>
              <Box>
                <Text
                  as='h1'
                  fontSize={{ base: '2xl', sm: '3xl', xl: '4xl' }}
                  fontWeight='bold'
                  color='gray.900'
                  lineHeight={1.1}
                >
                  您有想過，
                  <br />
                  香港人也可以為氣候危機出一分力嗎？
                </Text>
              </Box>
            </Stack>

            <Flex direction={{ base: 'column', sm: 'row' }}>
              <Box flex='1'>
                <Flex direction='row' align='center'>
                  <Box>
                    <Text {...pStyle}>
                      美加熱浪、洪水侵襲歐洲、亞洲多國...從前看似遠在天邊的氣候危機，其實已日漸影響香港人的日常生活。身處香港，我們都可以出一分力，為地球減緩氣候危機！
                    </Text>
                    <Text {...pStyle}>
                      今年9月，綠色和平將舉辦「減碳生活節」，帶領更多市民在日常中實踐減碳生活。現只需在網上登記，即能參與「減碳生活節」，並送您更多日常減碳小貼士！
                    </Text>
                    <Text {...pStyle}>
                      同時，
                      <b>
                        為答謝您對地球減碳的承諾，您將獲邀參加「Coffee Meets
                        Climate」體驗日。
                      </b>
                    </Text>
                    <Text {...pStyle} fontSize={'xl'}>
                      活動詳情：
                    </Text>
                    <List spacing={4} px={4} pt={8} pb={4} fontSize={'lg'}>
                      <ListItem alignItems={'center'}>
                        <ListIcon
                          as={MdDateRange}
                          color={'gray.700'}
                          mb={1}
                          mr={'4'}
                        />
                        日期：10月1日及2日
                      </ListItem>
                      <ListItem>
                        <ListIcon
                          as={MdAccessTime}
                          color={'gray.700'}
                          mb={1}
                          mr={'4'}
                        />
                        時間：上午11時至下午7時
                      </ListItem>
                      <ListItem>
                        <ListIcon
                          as={MdLocalPlay}
                          color={'gray.700'}
                          mb={1}
                          mr={'4'}
                        />
                        地點：美孚饒宗頤文化館
                      </ListItem>
                    </List>
                    <Text {...pStyle}>
                      屆時會以多項有趣活動，讓您及公眾感受怎樣在日常生活中輕鬆地減低碳足跡，及認識眾多您不知道有關食物及氣候變化的關係，
                      <b>
                        趕在9月28日前登記，免費體驗減碳生活，給地球一個coffee
                        break！
                      </b>
                    </Text>
                    <List px={4} pt={8} pb={4} spacing={4} fontSize={'lg'}>
                      <ListItem>- 太陽能咖啡店</ListItem>
                      <ListItem>- 環保單車</ListItem>
                      <ListItem>- 咖啡品嘗班</ListItem>
                      <ListItem>- 氣候危機知多啲 展覽及攤位遊戲</ListItem>
                      <ListItem>- 咖啡渣環保手作工作坊</ListItem>
                      <ListItem>- 「童您講故事」氣候與環境繪本共讀會</ListItem>
                      <ListItem>
                        - 「氣候危機警告現正生效：點樣影響香港人？」氣候講座
                      </ListItem>
                    </List>
                    <Image
                      mt={'md'}
                      borderRadius='4px'
                      src={mobileflow}
                      alignSelf='center'
                    />

                    {/* <Image
                      className='pure-visible-desktop'
                      mt={'md'}
                      borderRadius='4px'
                      src={desktopflow}
                      alignSelf='center'
                    /> */}
                  </Box>
                </Flex>
              </Box>
            </Flex>

            <Divider my={{ base: 8, lg: 10 }} />

            <SimpleGrid mt='4' columns={{ base: 1, xl: 2 }} spacing={10}>
              <Flex direction='column'>
                <Image
                  borderRadius='4px'
                  src={
                    'https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/07/20200721-GP0STP8RO_PressMedia.jpg'
                  }
                  alignSelf='center'
                />
              </Flex>
              <Stack spacing={4}>
                <Heading
                  as='h2'
                  size='lg'
                  color='brand.500'
                  style={{ lineHeight: '1.2' }}
                >
                  推動守護氣候
                  <br />
                  需要你的熱心支持！
                </Heading>
                <Text {...pStyle}>
                  氣候危機逼在眉睫，冰川融化、海平面上升、導致更多極端天氣等都是其帶來的惡果。甚至影響我們賴以為生的食物，直接影響您我的生活，我們必須關注並以實質行動應對氣候問題。
                </Text>
                <Text {...pStyle}>
                  綠色和平一直積極採取應對氣候危機的行動，今年請攜手推動各國企業、政府實現能源轉型，加速發展可再生能源，設法讓全球暖化控制在攝氏1.5度，減緩影響一代又一代人類、物種存亡的氣候危機。
                </Text>
                <Button
                  mt='2'
                  color='#fff'
                  bg='brand.500'
                  _hover={{ bg: 'brand.400', textDecoration: 'none' }}
                  borderRadius='4px'
                  fontSize='md'
                  letterSpacing={2}
                  w={'120px'}
                  onClick={() =>
                    window.open(
                      'https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK&campaign=climate&ref=climate-challenge-thankyou'
                    )
                  }
                >
                  立即捐助
                </Button>
                <Text {...pStyle}>
                  綠色和平成立50年以來，堅持不接受政府、企業捐助，您捐助的一分一毫，能支持我們以公正獨立的身份，持續推動環境工作！
                </Text>
              </Stack>
            </SimpleGrid>
          </Box>
        </Box>
        <Box
          w={{ base: 0, md: '50%', lg: '500px' }}
          px='4'
          py={{ base: 4, md: 8 }}
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
