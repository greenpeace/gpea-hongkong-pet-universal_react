import React from 'react';
import { Box, Text, Heading, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';

import ImageCarousel from 'components/banner/imageCarousel';
import ParallaxBackground from '../../../components/ParallaxBanner/ParallaxBanner';

import kv from '../assets/images/GP1SU5JN_Medium_res.jpg';
import img0 from '../assets/images/GP0STUG5D_Medium_res.jpg';
import img1 from '../assets/images/GP1STT80_Medium_res.jpg';

import animal1 from '../assets/images/GP0STU04Y_Medium_res.jpg';
import animal2 from '../assets/images/GP1SUEHO_High_res.jpg';
import animal3 from '../assets/images/GP04SB0_High_res.jpg';
import animal4 from '../assets/images/GP04SF8_High_res.jpg';

import banner1 from '../assets/images/forest_petition.jpg';
import banner2 from '../assets/images/argen.jpg';
import banner3 from '../assets/images/amazon.jpg';
import banner4 from '../assets/images/indonesia.jpg';

const SwiperData = [banner1, banner2, banner3, banner4];

const AnimalData = [animal1, animal2, animal3, animal4];

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
      <ImageCarousel swiperData={SwiperData} />

      <Stack py={6}>
        <TextWrapper>
          <Heading
            as='h1'
            fontSize={{ base: '3xl', md: '4xl' }}
            lineHeight={1.3}
          >
            全球僅餘 15% 森林被完整保存
          </Heading>
          <Text>
            熱帶森林、溫帶雨林和北方森林，調節氣候、提供淡水和氧氣，更是地球約三分之二陸生動植物的棲息地。
          </Text>
          <Text>
            但不法分子、無良企業非法砍伐與毁林，加上氣候危機加劇森林大火，令
            <strong>
              全球每2秒就有相約1個足球場面積的森林消失、僅餘 15%森林被完整保護。
            </strong>
          </Text>
          <Text>
            綠色和平正發起全球守護森林行動，要求各國政府訂立與加強護林政策、制止企業毁林行為，為森林提供復原空間。
          </Text>
        </TextWrapper>

        <ImageCarousel swiperData={AnimalData} />

        <TextWrapper>
          <Heading as='h3' fontSize={'3xl'}>
            守護動物們的關鍵棲息地
          </Heading>
          <Text>
            聯合國報告指出：
            <strong>全球八百多萬物種中，就有一百多萬面臨滅絕危機</strong>
            ，包含美洲豹、蘇門答臘犀牛、紅毛猩猩等...
          </Text>
        </TextWrapper>
      </Stack>
    </Box>
  );
};

export default Content;
