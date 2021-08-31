// import "swiper/swiper.scss";
import * as themeActions from 'store/actions/action-types/theme-actions'
import React from 'react'
import { connect } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import Sticky from 'react-sticky-el'
import {
  ChakraProvider,
  Avatar,
  Box,
  Button,
  Divider,
  Image,
  Flex,
  Text,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Icon,
} from '@chakra-ui/react'
import SEO from '../SEO'
import content from '../data/content'
import Nav from '../components/header/nav'
import HeroSwiper from '../components/feature/heroSwiper'
import Footer from '../components/footer'
import NewFrameForm from 'components/form/newFrameForm'
import NewFrameSubmittedForm from 'components/form/newFrameSubmittedForm'
import Panel from 'components/panel/newFormPanel'
import TestmonialCard from 'components/sections/testimonial'
import themeConfig from '../../../theme'

import amos from '../assets/images/8.png'
import tom from '../assets/images/9.png'
import info01 from '../assets/images/info-01.jpeg'
import info02 from '../assets/images/info-02.jpg'

import { IoTimeSharp } from 'react-icons/io5'
import { SiAirplayvideo } from 'react-icons/si'
import { BiCalendar } from 'react-icons/bi'

const amosContent = [
  {
    name: '戴沛權 Amos',
    role: '大氣科學家、中文大學地球系統科學課程副教授',
    content:
      '大氣科學家、中文大學地球系統科學課程副教授，曾獲聯合國頒發「世界氣象組織青年科學家研究獎」，是全港首位奪得此獎的科學家。Amos專門研究氣候變化、空氣污染、農業與人類健康的關係，同時探究如何以可持續森林與土地管理等方法，緩解氣候危機。Amos曾於去年與綠色和平和少年氣候行動者Lance合作，拍攝氣候變化課堂。今年，Amos繼續向大眾推廣氣候教育，網上分享氣候變化對香港的影響。',
    avatar: amos,
  },
]

const tomContent = [
  {
    name: '伍漢林 Tom',
    role: '綠色和平氣候項目主任',
    content:
      '綠色和平項目主任，倡議及推動政府尋求應對氣候危機的方案。亦希望集合社會各界的每一份力量，為拯救脆弱的氣候出一分力，一起發聲，壯大守護氣候的聲音。',
    avatar: tom,
  },
]

const Landing = ({ submitted, togglePanel }) => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 564px)' })
  const Speaker = ({ image, name, title, content, other }) => (
    <Box mt={6} py={4}>
      <SimpleGrid
        columns={{ base: 1 }}
        p={6}
        borderRadius={'md'}
        bordertype='solid'
        borderWidth='1px'
        borderColor='brand.400'
      >
        <Box flex='1'>
          <Stack
            direction={['column', 'row']}
            columns={{ base: 1, xl: 2 }}
            alignItems='center'
            spacing='8px'
            mb={4}
          >
            <Avatar size='xl' name={name} src={image} bgColor='#fff' />
            <Box pt={4}>
              <Heading fontSize='2xl' mb={2}>
                <Text color='brand.900'>{name}</Text>
              </Heading>
              <Heading color='gray.500' fontSize='md'>
                {title}
              </Heading>
            </Box>
          </Stack>

          <Text variant='paragraph' pb={4}>
            {content}
          </Text>
          <Flex
            justifyContent='flex-end'
            fontSize={{ base: '10px', sm: '12px' }}
          >
            {other && (
              <HStack spacing={1}>
                <Box>
                  <Text>綠色和平氣候項目主任</Text>
                </Box>
              </HStack>
            )}
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  )
  const pStyle = {
    as: 'p',
    marginTop: '20px',
    color: 'gray.900',
    lineHeight: '1.5',
    fontSize: '16px',
  }

  const subStyle = {
    as: 'p',
    marginTop: '20px',
    color: 'gray.700',
    lineHeight: '1.5',
    fontSize: '14px',
  }

  const dividerProps = {
    orientation: { base: 'horizontal', xl: 'vertical' },
    bgColor: '#fff',
    h: { base: '1px', xl: '60px' },
    w: { base: '100%', xl: '1px' },
    my: { base: 2, md: 4 },
    opacity: { base: 0.2 },
  }

  const webinarProps = {
    fontSize: { base: 18, xl: 20 },
    fontWeight: 700,
    pl: 2,
  }

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
              <Image
                src='https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/07/c35d9bc0-climate-food-webinar-banner-or.jpg'
                borderTopRightRadius='8px'
                borderTopLeftRadius='8px'
              />
            </Box>
            <Box
              bgColor='#000'
              px={4}
              py={{ base: 2, md: 6 }}
              borderBottomRightRadius={8}
              borderBottomLeftRadius={8}
            >
              <Flex
                direction={{ base: 'column', xl: 'row' }}
                justifyContent='space-around'
                color='#fff'
                align={{ base: 'left', xl: 'center' }}
              >
                <Box>
                  <Stack align='center' spacing={0}>
                    {/* {!isMobile && <Text color='#A0AEC0'>日期：</Text>} */}
                    <Flex align='center'>
                      <Icon as={BiCalendar} color={'#FA6A11'} w={5} h={5} />
                      <Text {...webinarProps}>2021年8月5日</Text>
                    </Flex>
                    <Text>(星期四)</Text>
                  </Stack>
                </Box>
                <Divider {...dividerProps} />
                <Box>
                  <Stack align='center' spacing={0}>
                    {/* {!isMobile && <Text color='#A0AEC0'>時間：</Text>} */}
                    <Flex align='center'>
                      <Icon as={IoTimeSharp} color={'#FA6A11'} w={5} h={5} />
                      <Text {...webinarProps}>晚上8時至9時</Text>
                    </Flex>

                    <Text d={{ base: 'none', xl: 'block' }}> &nbsp;</Text>
                  </Stack>
                </Box>
                <Divider {...dividerProps} />
                <Box>
                  <Stack align='center' spacing={0}>
                    {/* {!isMobile && <Text color='#A0AEC0'>線上分享會平台：</Text>} */}
                    <Flex align='center'>
                      <Icon as={SiAirplayvideo} color={'#FA6A11'} w={5} h={5} />
                      <Text {...webinarProps}>Zoom</Text>
                    </Flex>
                    <Text>(網上登記後會獲得相關鏈結和密碼)</Text>
                  </Stack>
                </Box>
              </Flex>
            </Box>

            <Stack pt={8} pb={4}>
              <Box>
                <Text
                  as='h1'
                  fontSize={{ base: '2xl', sm: '3xl', xl: '4xl' }}
                  fontWeight='bold'
                  color='gray.900'
                  lineHeight={1.2}
                >
                  <Text color='#FA6A11'>網上科學 101</Text>
                  <Text>氣候危機警告現正生效：點樣影響香港人？</Text>
                </Text>
              </Box>
            </Stack>

            <Flex direction={{ base: 'column', sm: 'row' }}>
              <Box flex='1'>
                <Flex direction='row' align='center'>
                  <Box>
                    <Text {...pStyle}>
                      氣候危機已到達不能忽視的境界！南北兩極破紀錄高溫，多地森林大火，東亞連串風災水災，我們居住的香港氣溫更屢創新高。氣候危機的影響並非遠在天邊，我們日常的食物，如咖啡豆、三文魚、蜂蜜等亦可能受氣候變化影響而消失。香港這一代人見證著連環極端天氣事件對人類的影響，更提醒了我們不能忽視氣候危機。
                    </Text>
                  </Box>
                </Flex>

                <Flex direction='row' align='center'>
                  <Box>
                    <Text {...pStyle}>
                      綠色和平邀請到大氣科學家、「世界氣象組織青年科學家研究獎」得獎者、中文大學地球系統科學課程副教授戴沛權（Amos）來與綠色和平項目主任伍漢林（Tom）
                      對談，深入淺出地講解近年氣候變化趨勢，以及為香港人帶來的生活影響。想知道氣候變化如何影響我們熟悉的食物？我們又可以做什麼拯救氣候？立即報名「氣候危機警告現正生效：點樣影響香港人？」網上分享會，一起裝備大腦，拯救地球！
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>

            <Flex direction='column'>
              <TestmonialCard content={amosContent} />
              <TestmonialCard content={tomContent} />
            </Flex>

            <Flex direction={{ base: 'column', sm: 'row' }}>
              <Box flex={1} pr={{ base: 0, sm: 3 }}>
                <Image borderRadius='4px' marginTop='6' src={info01} />
                <Text {...subStyle}>
                  綠色和平走到深水埗鬧市，展示巨型溫度計，呼籲港人正視氣候變化。
                </Text>
              </Box>
              <Box flex={1} pl={{ base: 0, sm: 3 }}>
                <Image borderRadius='4px' marginTop='6' src={info02} />
                <Text {...subStyle}>
                  經過綠色和平長達3年的推動，荷蘭法院終裁定化石能源企業SHELL須為氣候危機負責，他們必須在9年內將其碳排放量，由2019年的水平大幅減少45％。
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
                      'https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK&campaign=climate&ref=climatexfood-thankyou'
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
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
