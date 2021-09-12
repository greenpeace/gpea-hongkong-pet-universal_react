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
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import SEO from '../SEO';
import content from '../data/content';
import Nav from '../components/header/nav';
import HeroSwiper from '../components/feature/heroSwiper';
import Footer from '../components/footer';
import NewFrameForm from 'components/form/newFrameForm';
import NewFrameSubmittedForm from 'components/form/newFrameSubmittedForm';
import Panel from 'components/panel/newFormPanel';
import themeConfig from '../../../theme';

import kv from '../assets/images/GP02KCC_High_res.jpg';

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
                  緩解氣候危機 刻不容緩
                </Text>
              </Box>
            </Stack>

            <Flex direction={{ base: 'column', sm: 'row' }}>
              <Box flex='1'>
                <Text {...pStyle}>
                  氣候危機已經對全球構成威脅，聯合國政府間氣候變化專門委員會（IPCC）發表最新氣候報告，指出如果人類無法將全球升溫控制在1.5°C內，我們將可能面對更強、更頻繁的極端天氣事件。綠色和平作為IPCC的官方觀察員，除了出席氣候報告審核會議，更無間斷地督促各地政府堅守1.5°C臨界值目標，落實減碳目標。
                </Text>
                <Text {...pStyle}>
                  這份報告是人類生存的「紅色警報」，緩解氣候危機刻不容緩，我們必須在更多破壞發生前力挽狂瀾。立即行動，加入聯署，一同攜手拯救氣候。
                </Text>
                <Divider />
                <Text {...pStyle}>
                  綠色和平一直敦促全球各地政府、企業減排節能，推動成立綠色政策。過去，我們成功在不少氣候行動中取得成果，例如：
                </Text>
                <OrderedList>
                  <ListItem>
                    推動韓國成為東亞區內首個支持「綠色新政」的地方，並於2021年通過電氣法修法，加速企業能源轉型；
                  </ListItem>
                  <ListItem>
                    勝出法國世紀氣候訴訟，此勝利為法國司法部門首次承認該國應對氣候危機負有責任；
                  </ListItem>
                  <ListItem>
                    歷史性勝出訴訟化石能源企業Shell，法庭判決Shell須為氣候危機負責，其2030年的碳排放量，要從2019年的水平大幅減少45％。
                  </ListItem>
                </OrderedList>
                <Divider />
                <Text {...pStyle}>
                  綠色和平致力推動全球於2050年達致淨零碳排放，並就氣候政策向香港政府提出多項建議，其中包括：
                </Text>
                <OrderedList>
                  <ListItem>
                    要求政府將「氣候行動藍圖」列為首要落實的環保政策，盡快訂立清晰的碳中和路線圖；
                  </ListItem>
                  <ListItem>
                    2022年或之前，制定具有法律約束力並以科學為基礎的氣候目標，展示聯同國際社會將全球暖化限制在1.5°C的決心；
                  </ListItem>
                  <ListItem>
                    2030年或之前實現使用至少10%可再生能源的目標。
                  </ListItem>
                </OrderedList>
                <Text {...pStyle}>
                  推動綠色政策需要你我力量達成！立即聯署，守護氣候。
                </Text>
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
          bg='orange'
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
