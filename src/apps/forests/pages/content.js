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
      <Box mt={{ base: 0, md: 4 }}>
        <Image src={kv} objectFit='cover' loading='lazy' />
      </Box>
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
          <Text>
            熱帶森林、溫帶雨林和北方森林，調節氣候、提供淡水和氧氣，更是地球約三分之二陸生動植物的棲息地，
            但因人類破壞令森林大火四起，並以驚人的速度消失...
          </Text>
          <Text>
            您的捐助，幫助綠色和平督促全球政府加強森林保護政策，要求企業終止砍伐、焚燒等毀林行為，採用生態友善且永續的方式管理森林。
            過去50年，綠色和平堅持不接受政商界捐助，以公正獨立的身份守護全球森林，因為您，綠色和平守護環境的使命得以延續！
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
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Image borderRadius='4px' src={banner} />
            <Stack spacing={4}>
              <Heading as='h3' fontSize='lg' style={{ lineHeight: '1.2' }}>
                世上僅餘 15%
                <br />
                森林完好無損
              </Heading>
              <Text>
                熱帶森林、溫帶雨林和北方森林，調節氣候、提供淡水和氧氣，更是地球約三分之二陸生動植物的棲息地，
              </Text>
              <Text>但因人類破壞令森林大火四起，並以驚人的速度消失...</Text>
              <Text>
                您的捐助，幫助綠色和平督促全球政府加強森林保護政策，要求企業終止砍伐、焚燒等毀林行為，採用生態友善且永續的方式管理森林。
                過去50年，綠色和平堅持不接受政商界捐助，以公正獨立的身份守護全球森林，因為您，綠色和平守護環境的使命得以延續！
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
            </Stack>
          </SimpleGrid>
        </TextWrapper>
      </Stack>
    </Box>
  );
};

export default Content;
