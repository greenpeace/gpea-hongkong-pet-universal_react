import React from 'react';
import {
  Box,
  Button,
  Image,
  Text,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  OrderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import ParallaxBackground from '../../../components/ParallaxBanner/ParallaxBanner';

import kv from '../assets/images/20210913_climate_launchvisual-01.jpg';
import img0 from '../assets/images/GP0STTB7D_High_res.jpg';
import img1 from '../assets/images/GP0STRAJX_High_res.jpg';
import img2 from '../assets/images/GP0STQF5I_High_res.jpg';

import icon1 from '../assets/images/Asset1-earth.png';
import icon2 from '../assets/images/Asset1-icemelt.png';
import icon3 from '../assets/images/Asset1-moneybag.png';

import banner from '../assets/images/GP0STT4OQ_High_res.jpg';

const TextWrapper = styled.div`
  padding: 20px;
  text-align: justify;
  letter-spacing: 0.022em;
  p {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 20px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

const Feature = ({ title, text, icon }) => {
  const numberFont = {
    fontFamily:
      "'Montserrat', 'Open Sans', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: '36px',
    fontWeight: 900,
    letterSpacing: '2px',
  };
  return (
    <Stack alignItems={'center'}>
      <Flex
        w={20}
        h={20}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
      >
        {icon}
      </Flex>
      <Heading {...numberFont} pt={6} pb={4}>
        {title}
      </Heading>
      <Text fontSize={'sm'} textAlign='center' lineHeight='2'>
        {text}
      </Text>
    </Stack>
  );
};

const Content = () => {
  return (
    <Box>
      <Image mt={4} src={kv} loading='lazy' />
      <Stack spacing={4} py={6} backgroundColor={'#333333'} color={'#ffffff'}>
        <TextWrapper>
          <Heading
            as='h1'
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight='bold'
            lineHeight={1.1}
            color='#ffc700'
          >
            緩解氣候危機 刻不容緩
          </Heading>
          <Text>
            氣候危機已經對全球構成威脅，聯合國政府間氣候變化專門委員會（IPCC）發表最新氣候報告，指出如果人類無法將全球升溫控制在1.5°C內，我們將可能面對更強、更頻繁的極端天氣事件。綠色和平作為IPCC的官方觀察員，除了出席氣候報告審核會議，更無間斷地督促各地政府堅守1.5°C臨界值目標，落實減碳目標。
          </Text>
          <Text>
            這份報告是人類生存的「紅色警報」，緩解氣候危機刻不容緩，我們必須在更多破壞發生前力挽狂瀾。立即行動，加入聯署，一同攜手拯救氣候。
          </Text>
        </TextWrapper>

        <ParallaxBackground image={img0} />

        <TextWrapper>
          <Heading as='h3' mb={6} color='#ffc700'>
            氣候危機影響 無孔不入
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 3 }} pt={8} pb={2} spacing={8}>
            <Feature
              icon={<Image src={icon1} w={20} />}
              title={'200萬'}
              text={'大氣中的二氧化碳是至少 200 萬年來的最高濃度'}
            />
            <Feature
              icon={<Image src={icon2} w={20} />}
              title={'2050'}
              text={'2050年前，北極可能經歷最少一次「9月無海冰」'}
            />
            <Feature
              icon={<Image src={icon3} w={20} />}
              title={'7,240億'}
              text={
                '海平面上升威脅下，亞洲7個城市未來或有1,500萬人與7,240億美元GDP受影響'
              }
            />
          </SimpleGrid>
        </TextWrapper>

        {/* <TextWrapper>
          <Heading as='h3' color='#ffc700'>
            拯救氣候 迎難而上
          </Heading>

          <Text>
            綠色和平一直敦促全球各地政府、企業減排節能，推動成立綠色政策。過去，我們成功在不少氣候行動中取得成果，例如：
          </Text>
          <OrderedList spacing={4} px={4}>
            <ListItem>
              北極「年度海冰最小值」已經錄得歷來第二低點。參考各種溫室氣體濃度情境，北極可能在2050年前經歷最少一次「9月無海冰」。
            </ListItem>
            <ListItem>
              根據綠色和平
              <Link
                href='https://www.greenpeace.org/hongkong/issues/climate/update/28869/%e9%a2%a8%e9%ab%98%e6%b5%aa%e6%80%a5%ef%bc%8c%e6%b5%b7%e5%b9%b3%e9%9d%a2%e4%b8%8a%e5%8d%87%e8%a1%9d%e6%93%8a%e4%ba%9e%e6%b4%b2%e7%9a%84%e7%9c%9f%e7%9b%b8/'
                target='_blank'
                color={'blue'}
              >
                調查報告
              </Link>
              ，海平面上升或於2030年衝擊亞洲，若不採取緊急行動，7個主要城市將有1,500萬人與7,240億美元GDP受威脅。
            </ListItem>
            <ListItem>
              氣候變化或會導致主糧產量下跌33%，當中包括我們賴以為生的小麥、大米、大麥等；大米及小麥等主糧在二氧化碳濃度高的環境下種植，營養成分亦會受影響。
            </ListItem>
          </OrderedList>
        </TextWrapper> */}

        <ParallaxBackground image={img1} />

        <TextWrapper>
          <Heading as='h3' color='#ffc700'>
            拯救氣候 迎難而上
          </Heading>

          <Text>
            綠色和平一直敦促全球各地政府、企業減排節能，推動成立綠色政策。過去，我們成功在不少氣候行動中取得成果，例如：
          </Text>
          <OrderedList spacing={4} px={4}>
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
        </TextWrapper>

        <ParallaxBackground image={img2} />

        <TextWrapper>
          <Heading as='h3' color='#ffc700'>
            立即聯署
            <br />
            推動香港2050年達致碳中和
          </Heading>

          <Text>
            綠色和平致力推動全球於2050年達致淨零碳排放，並就氣候政策向香港政府提出多項建議，其中包括：
          </Text>

          <OrderedList spacing={4} px={4}>
            <ListItem>
              要求政府將「氣候行動藍圖」列為首要落實的環保政策，盡快訂立清晰的碳中和路線圖；
            </ListItem>
            <ListItem>
              2022年或之前，制定具有法律約束力並以科學為基礎的氣候目標，展示聯同國際社會將全球暖化限制在1.5°C的決心；
            </ListItem>
            <ListItem>2030年或之前實現使用至少10%可再生能源的目標。</ListItem>
          </OrderedList>

          <Text fontWeight={'bold'}>
            推動綠色政策需要你我力量達成！立即聯署，守護氣候。
          </Text>
        </TextWrapper>

        <TextWrapper>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Image borderRadius='4px' src={banner} />
            <Stack spacing={4}>
              <Heading
                as='h3'
                size='md'
                color='brand.500'
                style={{ lineHeight: '1.2' }}
              >
                推動守護氣候
                <br />
                需要你的熱心支持！
              </Heading>
              <Text>
                氣候危機逼在眉睫，冰川融化、海平面上升、導致更多極端天氣等都是其帶來的惡果。甚至影響我們賴以為生的食物，直接影響您我的生活，我們必須關注並以實質行動應對氣候問題。
              </Text>
              <Text>
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
                onClick={() =>
                  window.open(
                    'https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK&campaign=climate&ref=climate-challenge-thankyou'
                  )
                }
              >
                立即捐助
              </Button>
              <Text>
                綠色和平成立50年以來，堅持不接受政府、企業捐助，您捐助的一分一毫，能支持我們以公正獨立的身份，持續推動環境工作！
              </Text>
            </Stack>
          </SimpleGrid>
        </TextWrapper>
      </Stack>
    </Box>
  );
};

export default Content;
