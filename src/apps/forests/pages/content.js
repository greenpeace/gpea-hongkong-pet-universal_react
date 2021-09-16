import React from 'react';
import {
  Box,
  Button,
  Image,
  Text,
  Heading,
  SimpleGrid,
  Stack,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import ParallaxBackground from '../../../components/ParallaxBanner/ParallaxBanner';

import kv from '../assets/images/GP0STU04Y_Medium_res.jpg';
import img0 from '../assets/images/GP0STUG5D_Medium_res.jpg';
import img1 from '../assets/images/GP1STT80_Medium_res.jpg';
import img2 from '../assets/images/GP1SU5AH_Medium_res.jpg';

import banner from '../assets/images/GP1SU5JN_Medium_res.jpg';

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

const Content = () => {
  return (
    <Box>
      <Image mt={{ base: 0, md: 4 }} src={kv} loading='lazy' />
      <Stack spacing={4} py={6}>
        <TextWrapper>
          <Heading
            as='h1'
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight='bold'
            lineHeight={1.1}
          >
            全球僅餘 15%森林被完整保存
          </Heading>
          <Text>
            熱帶森林、溫帶雨林和北方森林，調節氣候、提供淡水和氧氣，更是地球約三分之二陸生動植物的棲息地。
          </Text>
          <Text>
            但不法分子、無良企業非法砍伐與毁林，加上氣候危機加劇森林大火，令全球每2秒就有相約1個足球場面積的森林消失、僅餘
            15%森林被完整保護。
          </Text>
          <Text>
            綠色和平正發起全球守護森林行動，要求各國政府訂立與加強護林政策、制止企業毁林行為，為森林提供復原空間。
          </Text>
          <Text>
            森林關乎人類、野生動植物，以至整個地球的健康與福祉，令企業與政府無法忽視我們的護林訴求，讓森林得到及時保護，請立即加入聯署！
          </Text>
        </TextWrapper>

        <ParallaxBackground image={img0} />

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
