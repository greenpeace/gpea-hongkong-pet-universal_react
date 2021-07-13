import "swiper/swiper.scss";
import React from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Sticky from "react-sticky-el";
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
  Link,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import SEO from "../SEO";
import content from "../data/content";
import Nav from "../components/header/nav";
import HeroSwiper from "../components/feature/heroSwiper";
import Footer from "../components/footer";
import NewFrameForm from "components/form/newFrameForm";
import NewFrameSubmittedForm from "components/form/newFrameSubmittedForm";
import DonateContent from "components/sections/donateContent";
import Panel from "components/panel/newFormPanel";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import * as themeActions from "store/actions/action-types/theme-actions";
import Webinar from "components/sections/webinar";
import themeConfig from "../../../theme";

import shing from "../assets/images/shing_2x_icon.png";
import banner from "../assets/images/73.jpg";
import subImage from "../assets/images/wallpaper_removed.jpg";
import submitImage from "../assets/images/submit.png";
import videoCallImage from "../assets/images/video-call.png";
import cloudImage from "../assets/images/cloud.png";

const Landing = ({ submitted, togglePanel }) => {
  const isMobile = useMediaQuery({ query: "(max-device-width: 564px)" });
  const pStyle = {
    as: "p",
    marginTop: "20px",
    color: "gray.900",
    lineHeight: "1.7",
    fontSize: "16px",
  };
  const stepRow ={
    align: "center", 
    pb: 10,
    pt: {base: 5, md: 0},
    direction: {base: 'column', md: 'row'}
  }

  const stepImageWrapProps ={
    flex: 1,
    pb: {base: 5, md: 0},
    textAlign: '-webkit-center',
    maxWidth: '200px'
  }

  const stepImageProps = {
    maxWidth: '100px',
    flex: 1
  }

  const stepContentProps = {
    as: "h3",
    color: "gray.900",
    lineHeight: "1.7",
    fontSize: "20px",
    fontWeight: 700,
    pt: {base: 5, md: 0},
    textAlign: {base: 'center', md: 'left'}
  }

  const WebinarContent = {
    date: "日期：2021年8月5日（星期四）",
    time: "時間：晚上8時至9時",
    description: "線上分享會平台：Zoom（網上登記後會獲得相關鏈結和密碼）",
  };

  return (
    <ChakraProvider theme={themeConfig}>
      <SEO />
      <Nav showButton={false} />
      <Flex>
        <Box className='wrap' flex='1' style={{ minWidth: "0px" }}>
          <Box px='4' py={{ base: 4, md: 8 }}>
            <Box mb={6}>
              {!submitted && <Image src={banner} borderRadius='8px' />}
              {submitted && !isMobile && (
                <HeroSwiper isMobile={isMobile} swiperHeight='480px' />
              )}{" "}
              {/** Fixed swiper desktop version height, background image will keep ratio and center center position */}
            </Box>
            <Stack pb={4}>
              <Box>
                <Text
                  as='h1'
                  fontSize={{ base: "2xl", sm: "3xl", xl: "4xl" }}
                  fontWeight='bold'
                  color='gray.900'
                  lineHeight={1.2}
                >
                  <Text color='brand.500' mt={4} mb={2}>
                  「氣候危機警告現正生效：點樣影響香港人？」
                  </Text>
                  網上科學101 
                </Text>
              </Box>
            </Stack>

            <Divider my={{ base: 8 }} />

            <Webinar content={WebinarContent} />

            <Divider my={{ base: 8 }} />

            <Flex direction={{ base: "column", sm: "row" }}>
              <Box flex='1'>
                <Text {...pStyle}>
                氣候危機已到達不能忽視的境界！南北兩極破紀錄高溫，多地森林大火，東亞連串風災水災，我們居住的香港氣溫更屢創新高。氣候危機的影響並非遠在天邊，我們日常的食物，如咖啡豆、三文魚、蜂蜜等亦可能受氣候變化影響而消失。香港這一代人見證著連環極端天氣事件對人類的影響，更提醒了我們不能忽視氣候危機。
                </Text>
                {/* <Image borderRadius='8px' marginTop='8' src={subImage} /> */}
                <Text {...pStyle}>
                綠色和平邀請到大氣科學家、「世界氣象組織青年科學家研究獎」得獎者、中文大學地球系統科學課程助理教授戴沛權 (Amos) 來與綠色和平項目主任伍漢林 (Tom) 對談，深入淺出地講解近年氣候變化趨勢，以及為香港人帶來的生活影響。想知道氣候變化如何影響我們熟悉的食物？我們又可以做什麼拯救氣候？立即報名「氣候危機警告現正生效：點樣影響香港人？」網上分享會，一起裝備大腦，拯救地球！
                </Text>
              </Box>
            </Flex>

            <Flex direction="column">
            <Box mt={6} py={4}>
              <SimpleGrid
                columns={{ base: 1 }}
                p={6}
                borderRadius={"md"}
                borderType='solid'
                borderWidth='1px'
                borderColor='brand.400'
              >
                <Box flex='1'>
                  <Stack
                    direction={["column", "row"]}
                    columns={{ base: 1, xl: 2 }}
                    alignItems='center'
                    spacing='8px'
                    mb={4}
                  >
                    <Avatar size='xl' name={"Shing"} src={shing} />
                    <Box pt={4}>
                      <Heading fontSize='2xl' mb={2}>
                        <Text color='brand.900'>戴沛權 Amos</Text>
                      </Heading>
                      <Heading color='gray.500' fontSize='md'>
                      大氣科學家、中文大學地球系統科學課程助理教授
                      </Heading>
                    </Box>
                  </Stack>

                  <Text variant='paragraph' pb={4}>
                    大氣科學家、中文大學地球系統科學課程助理教授，曾獲聯合國頒發「世界氣象組織青年科學家研究獎」，是全港首位奪得此獎的科學家。Amos專門研究氣候變化、糧食安全與人類生活的關係，同時探究如何以土地利用等方法，緩解氣候危機。Amos曾於去年與綠色和平和少年氣候行動者Lance合作，拍攝氣候變化課堂。今年，Amos繼續向大眾推廣氣候教育，網上分享氣候變化對香港的影響。
                  </Text>
                  <Flex
                    justifyContent='flex-end'
                    fontSize={{ base: "10px", sm: "12px" }}
                  >
                    <HStack spacing={1}>
                      <Box>
                        <Text>綠色和平氣候項目主任</Text>
                      </Box>
                    </HStack>
                  </Flex>
                </Box>
              </SimpleGrid>
            </Box>
            <Box mt={6} py={4}>
              <SimpleGrid
                columns={{ base: 1 }}
                p={6}
                borderRadius={"md"}
                borderType='solid'
                borderWidth='1px'
                borderColor='brand.400'
              >
                <Box flex='1'>
                  <Stack
                    direction={["column", "row"]}
                    columns={{ base: 1, xl: 2 }}
                    alignItems='center'
                    spacing='8px'
                    mb={4}
                  >
                    <Avatar size='xl' name={"Shing"} src={shing} />
                    <Box pt={4}>
                      <Heading fontSize='2xl' mb={2}>
                        <Text color='brand.900'>伍漢林 Tom</Text>
                      </Heading>
                    </Box>
                  </Stack>

                  <Text variant='paragraph' pb={4}>
                  綠色和平項目主任，倡議及推動政府尋求應對氣候危機的方案。亦希望集合社會各界的每一份力量，為拯救脆弱的氣候出一分力，一起發聲，壯大守護氣候的聲音。
                  </Text>
                  <Flex
                    justifyContent='flex-end'
                    fontSize={{ base: "10px", sm: "12px" }}
                  >
                    <HStack spacing={1}>
                      <Box>
                        <Text>綠色和平氣候項目主任</Text>
                      </Box>
                    </HStack>
                  </Flex>
                </Box>
              </SimpleGrid>
            </Box>
            </Flex>

{/* 
            <Stack direction="row" align="center">
              <Divider/>
              <Box w={'100%'} textAlign="center">
                <Text
                  as='h1'
                  fontSize={{ base: "2xl", sm: "3xl", xl: "4xl" }}
                  fontWeight='bold'
                  color='gray.900'>如何使用</Text>
              </Box><Divider/>
            </Stack>

            <Flex direction="column">
              <Flex {...stepRow}>
                <Box style={stepImageWrapProps}><Image src={submitImage} style={stepImageProps}/></Box>
                <Box flex={1}><Text {...stepContentProps}>1.立即登記</Text></Box>
              </Flex>

              <Flex {...stepRow}>
                <Box style={stepImageWrapProps}><Image src={cloudImage} style={stepImageProps}/></Box>
                <Box flex={1}><Text {...stepContentProps}>2.揀選你喜愛的環境照片，下載儲存至電腦</Text></Box>
              </Flex>

              <Flex {...stepRow}>
                <Box style={stepImageWrapProps}><Image src={videoCallImage} style={stepImageProps}/></Box>
                <Box flex={1}><Text {...stepContentProps}>3.開啟視訊通話應用程式</Text>
                  <Text bgColor="gray.300" display="inline-block" px={2} my={2}>Zoom</Text><br/>
                  進入「設定」 &gt; 選擇「背景與濾鏡」 &gt; 點選「虛擬背景」 &gt; 選擇「+添加影像或影片」。<br/>
                  <Text bgColor="gray.300" display="inline-block" px={2} my={2}>Microsoft Teams</Text><br/>
                  加入會議 &gt; 點選「其他動作」 &gt; 套用「背景效果」 &gt; 新增「照片」 &gt; 點選套用」<br/>
                  <Text bgColor="gray.300" display="inline-block" px={2} my={2}>Google Meet</Text><br/>
                  點選「變更背景 」&gt; 選取照片 &gt; 新增 &gt; 「立即加入」
                </Box>
              </Flex>
              
            </Flex> */}

            <Divider my={{ base: 8, lg: 10 }} />

            <DonateContent/>
          
          </Box>
        </Box>
        <Box
          w={{ base: 0, md: "50%", lg: "500px" }}
          px='4'
          py={{ base: 4, md: 8 }}
          d={{ base: "none", md: "block" }}
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
                birthDate={false}
                thanksScreen={true}
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
          background: "rgba(255, 255, 255, 0.8)",
          borderColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 10%)",
          paddingTop: "6px",
          paddingBottom: "8px",
          alignItems: "center",
          justifyContent: "center",
        }}
        d={{ base: "flex", md: "none" }}
      >
        <Button
          w='80%'
          color='#FFF'
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
        birthDate={false}
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
    // submitted: false, // TEST submitted
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
