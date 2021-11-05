import React from 'react';
import {
  Box,
  Text,
  Heading,
  Stack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Divider,
  Flex,
  Image,
} from '@chakra-ui/react';
import tom from '../assets/images/9.png';
import TestmonialCard from 'components/sections/testimonial';
import Webinar from 'components/sections/webinarTypeTwo';
import styled from '@emotion/styled';

import ImageCarousel from 'components/banner/imageCarousel';

import info01 from '../assets/images/GP0STS01J_High_res-resize.jpg';
import info02 from '../assets/images/GP1SWCL7_High_res-resize.jpg';

import banner1 from '../assets/images/climate-food-webinar-banner-resize.jpg';

const SwiperData = [banner1];

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

const subStyle = {
  as: 'p',
  marginTop: '20px',
  color: 'gray.700',
  lineHeight: '1.7',
  fontSize: '14px',
};

const tomContent = [
  {
    name: '伍漢林 Tom',
    role: '綠色和平項目主任',
    content:
      '綠色和平項目主任，倡議及推動政府尋求應對氣候危機的方案，亦希望集合社會各界的每一份力量，為拯救脆弱的氣候出一分力，一起發聲，壯大守護氣候的聲音。',
    avatar: tom,
  },
];

const WebinarContent = {
  title: '',
  date: '日期：2021年6月19日（星期六）',
  time: '時間：晚上8時至9時',
  description: '線上分享會平台：Zoom（網上登記後會獲得相關鏈結和密碼）',
  other: '',
};

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
            COP26峰會分析暨氣候講座：全球氣候政策與未來
          </Heading>
          <Text>
            第26屆聯合國氣候變化大會（COP26）於11月中結束，會議上，各地政府評量減緩氣候變化的進展，同時議定未來的氣候政策。聯合國已經警告，如果各地拒絕推出並實施更進取氣候政策，地球在本世紀末可能升溫高達2.7°C，因此是次會議是挽救氣候的關鍵時機！
          </Text>
          <Text>
            綠色和平項目主任伍漢林（Tom）將會與大家分析COP26的會議結果，節目內容包括：
          </Text>
          <UnorderedList px={2}>
            <ListItem>分析COP26出爐政策，以及全球緩解氣候變化進度</ListItem>
            <ListItem>
              現時氣候變化實況，氣溫上升對人類各生活範疇的影響
            </ListItem>
            <ListItem>
              綠色和平的氣候倡議及其重要性，包括提高減碳目標、淘汰化石燃料等
            </ListItem>
            <ListItem>個人減碳貼士</ListItem>
          </UnorderedList>
          <Text>
            立即報名參與講座，緊貼全球氣候政策及最新發展，了解拯救氣候方法！
          </Text>
        </TextWrapper>

        <TextWrapper style={{ marginTop: 0, paddingTop: 0 }}>
          <Webinar showTitle={false} content={WebinarContent} />

          <TestmonialCard content={tomContent} />

          <Flex direction={{ base: 'column', sm: 'row' }} mb={6}>
            <Box flex={1} pr={{ base: 0, sm: 3 }}>
              <Image borderRadius='4px' marginTop='6' src={info01} />
              <Text {...subStyle}>
                綠色和平行動者要求國際領袖馬上作出氣候行動。© Greenpeace /
                Lorenzo Moscia
              </Text>
            </Box>
            <Box flex={1} pl={{ base: 0, sm: 3 }}>
              <Image borderRadius='4px' marginTop='6' src={info02} />
              <Text {...subStyle}>
                綠色和平倡議之一是立即淘汰化石燃料，敦促各地政府停止所有新的化石燃料計劃。©
                Greenpeace / Mitja Kobal
              </Text>
            </Box>
          </Flex>
        </TextWrapper>
      </Stack>
    </Box>
  );
};

export default Content;
