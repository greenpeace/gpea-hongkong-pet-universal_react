import "swiper/swiper.scss";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Sticky from "react-sticky-el";
import { ChakraProvider, Box, Button, Divider, Image, Flex, Text, Heading, Link, SimpleGrid, Stack, Center, useColorModeValue, Circle, Icon} from "@chakra-ui/react";
import SEO from "../SEO";
import content from "../data/content";
import Nav from "../components/header/nav";
import HeroSwiper from "../components/feature/heroSwiper";
import Footer from "../components/footer";
import NewFrameForm from "components/form/newFrameForm";
import NewFrameSubmittedForm from "components/form/newFrameSubmittedForm";
import Panel from "components/panel/newFormPanel";
import * as themeActions from "store/actions/action-types/theme-actions";
import themeConfig from "../theme.js";

import banner from "../assets/images/PFC-webinar-banner-5.png";
import Ann from "../assets/images/Ann.png";
import Dalu from "../assets/images/Dalu.png";
import Kaman from "../assets/images/Kaman.png";
import Leanne from "../assets/images/Leanne.png";
import subImage from "../assets/images/wallpaper_removed.jpg";
import { IoCalendarOutline, IoTimeSharp, IoVideocam } from "react-icons/io5";

const Landing = ({ submitted, togglePanel }) => {
  const isMobile = useMediaQuery({ query: "(max-device-width: 564px)" });
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={"row"} align={"center"}>
        <Circle size="40px" color="white" bg={iconBg}>
          {icon}
        </Circle>
        <Text pl="2" fontSize="lg" color="gray.900">
          {text}
        </Text>
      </Stack>
    );
  };
  const pStyle = {
    as: "p",
    marginTop: "20px",
    color: "gray.900",
    lineHeight: "1.7",
    fontSize: "16px",
  };

  const switchButton = {
    borderRadius: "50%", 
    overflow: "hidden", 
    pos: "relative", 
    w: {base: '50px', sm: '90px'}, 
    h: {base: '50px', sm: '90px'}, 
    border: "2px solid #FFF",
    pb: 10
  }

  const switchButtonWrap = {
    bgColor: "#FFF", 
    roundedTop: 'md',
    px: {base: 4, sm: 14}, 
    pt:{base: 2, sm: 4}, 
    pb:{base: 2, sm: 4},
    boxShadow: 'xl',
    cursor: 'pointer',
    roundedTop: 'md',
    h: {base: 'auto', sm: 'auto'}, 
    align: 'center'
  }

  const authorContent = [
    {name: 'Dalu', avatar: Dalu, title: '大埔街坊暨社區營造行動連桷璋', content: '大埔街坊暨社區營造行動者，前大埔區議員，關注議題包括大埔公共空間發展、環保生態、社區經濟圈等。致力為街坊提供個案跟進、組織社區互助活動如社區回收站「不是垃圾站 X 不是修理站」、廚餘回收計劃及文化活動如中秋節大型月亮裝置藝術、政策倡議等。'},
    {name: 'Ann', avatar: Ann, title: '「日常豊作」裸買店店主李秀平', content: '裸買店「日常豊作」店主，主張「祼買生活．無塑可能」環保健康豐足的生活哲學、鄰里互助與文化教育，建立裸買店聯盟，聚集一群有裸買店夢想的人，一同學習及分享開店心得。'},
    {name: 'Leanne', avatar: Leanne, title: '綠色和平項目主任譚穎琳', content: '全城走塑項目主任，倡議及推動走塑的無限可能，積極關心企業塑膠問題及香港塑膠政策。過去活躍於社區回收活動，看到源頭減廢的重要性，更加堅定了走塑的目標。希望廣招戰友一同打拼，一齊學一齊試，一齊達到無塑社區的願景!'},
    {name: 'Kaman', avatar: Kaman, title: '綠色和平社區外展主任柯家文', content: '全城走塑社區外展主任，與「走塑小隊」捐窿捐罅，發掘社區走塑小店。疫情下，講環保，搞走塑，看似天方夜譚，但是我們「走塑小隊」發現，社區仍有好多街坊及小店堅持走塑。我們相信，落手落腳，邊玩邊學，今天一小步，社區一大步。成為我地走塑小隊一員啦，預埋你啦！！'},
  ]

  const [current, setCurrent] = useState(authorContent[0]);

  return (
    <ChakraProvider theme={themeConfig}>
      <SEO />
      <Nav showButton={false} />
      <Flex>
        <Box flex="1" style={{ minWidth: "0px" }}>
          <Box px={4} py={{ base: 4, md: 8 }} bgColor="#F9BC81">
            <Box >
              {!submitted && <Image src={banner} borderRadius="8px" />}
              {submitted && !isMobile && (
                <HeroSwiper isMobile={isMobile} swiperHeight="480px" />
              )}{" "}
              {/** Fixed swiper desktop version height, background image will keep ratio and center center position */}
            </Box>
          </Box>

          {/** https://getwaves.io/ */}
          <Box mt={0}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140"><path fill="#F9BC81" d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,53.3C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
          </Box>

            <Box px={8}>
            <Box>
              <Text
                as="h1"
                fontSize={{ base: "2xl", sm: "3xl", xl: "4xl" }}
                fontWeight="bold"
                color="gray.900"
                lineHeight={1.2}
              >
                <Text color="brand.500" mt={4} mb={2}>「綠色社區點做起？達人同你渾身解塑」網上共學教室</Text>
              </Text>
            </Box>
            <Flex direction={{ base: "column", sm: "row" }}>
                <Box flex="1">
                  <Heading fontSize="2xl">覺得自己只是被動的一方？見到社會好多事都看似沒可能改變？</Heading>

                  <Divider my={{ base: 8 }} />
                    <Box>
                      <Stack spacing={4}>
                        <Feature
                          icon={
                            <Icon
                              as={IoCalendarOutline}
                              color={"yellow.500"}
                              w={5}
                              h={5}
                            />
                          }
                          iconBg={useColorModeValue("yellow.100", "yellow.900")}
                          text={"日期：2021年6月7日（星期一）"}
                        />
                        <Feature
                          icon={
                            <Icon as={IoTimeSharp} color={"yellow.500"} w={5} h={5} />
                          }
                          iconBg={useColorModeValue("yellow.100", "yellow.900")}
                          text={"時間：晚上8時至9時"}
                        />
                        <Feature
                          icon={
                            <Icon as={IoVideocam} color={"brand.400"} w={5} h={5} />
                          }
                          iconBg={useColorModeValue("green.100", "green.900")}
                          text={
                            "線上分享會平台：Zoom（網上登記後會獲得相關鏈結和密碼）"
                          }
                        />
                      </Stack>
                    </Box>

                    <Divider my={{ base: 8 }} />



                  <Text as="p" {...pStyle}>
                    自己社區自己救！走塑不是一個人的事，是整個社區的事！我們的日常生活與社區密不可分，每人都是社區不可或缺的一分子。想自備餐盒買外賣？想走塑購物？總不能單靠個人力量，還需餐廳、企業的合作，一起建構走塑社區，讓大家日常生活都「有得揀」！
                    <br/><br/>
                    實現理想走塑社區這個終極目標好像很遙遠，不知如何開始第一步？綠色和平將於6月7日（星期一），舉辦網上共學教室「綠色社區點做起？達人同你渾身解塑」，邀請兩位積極連結街坊來改變社區的「社區達人」來分享：大埔街坊暨前區議員連桷璋，以及「日常豊作」裸買店店主李秀平Ann。談談過去的社區實驗，必定有成功有失敗，一起分享如何在社區推動議題，如何見招拆招！而要在社區推動走塑，嘉賓又有何想法？
                    <br/><br/>
                    有你，有可能！集齊腦袋，集思廣益！
                    <br/><br/>
                    是次共學教室只是頭炮活動！目標是召集各路人馬加入「全城走塑社區小隊」，一起討論、研究、分享、交流，一起設計社區走塑計劃，改變膠運，共建全城走塑的理想社區。想知道之後一連串的全城走塑社區小隊共學活動及行動？想跟綠色和平一起推動社區項目？6月7日，約定你！
                  </Text>
                </Box>
              </Flex>


              <Box pt={10}>
                <Flex direction="column">
                  <Center>
                  <Stack direction="row" spacing={{base: 0, sm: 4}} px={{base: 4, sm: 8}}>
                  {authorContent.map((d,i)=><Box
                  onClick={()=> setCurrent(d)}  
                  {...switchButtonWrap}
                  bgColor={`${current.name === d.name ? "#F9BC81" : "#FFF"}`}
                  key={i}>
                      <Box>
                        <Box {...switchButton}>
                          <Image src={d.avatar} pos="absolute"/>
                        </Box>
                        <Box d={{base: 'none', xl: 'block'}} align="center"><Text fontSize={'xl'} pt={2} fontWeight={700} color={`${current.name === d.name ? "#FFF" : "#F9BC81"}`}>{d.name}</Text></Box>
                        {/* <Box d={{base: 'none', xl: 'block'}} align="center"><Text fontSize={'md'} fontWeight={500} color={`${current.name === d.name ? "#FFF" : "#F9BC81"}`}>{d.title}</Text></Box> */}
                      </Box>
                    </Box>)}
                  </Stack>
                  </Center>
                  <Box bgColor="#F9BC81" py={8} px={{base: 6, sm: 16}} borderRadius={8}>
                    <Box color="#FFF" py={{base: 4, sm: 12}}>
                      <Heading fontSize={'2xl'} mb={4}>{current.title}</Heading>
                      <Text as="p" fontSize={'xl'}>
                        {current.content}
                      </Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>



            </Box>

            <Box px={{base: 4, sm: 8}} pb={12}>
            <Divider my={{ base: 8, lg: 10 }} />

<SimpleGrid mt="4" columns={{ base: 1, xl: 2 }} spacing={10}>
  <Flex direction="column">
    <Image
      borderRadius="8px"
      src={
        "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/0f48c407-gif_reg_ty_page.gif"
      }
    />
  </Flex>
  <Stack spacing={4}>
    <Heading
      as="h2"
      size="lg"
      color="brand.500"
      style={{ lineHeight: "1.5" }}
    >
      一起守護
      <br />
      香港珍貴的自然資源！
    </Heading>
    <Text {...pStyle}>
      在高樓與繁忙都市之外，香港蘊含著豐富的生物多樣性，自然山野與遼闊海岸是眾多野生生物的居所。
    </Text>
    <Text {...pStyle}>
      請支持綠色和平以科學角度、調查研究及行動，奮力守護大嶼及保衛郊野，守護香港珍貴的自然資源，為下一代建設宜居的生活環境！
    </Text>
    <Link href="https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK&campaign=biodiversity&utm_campaign=biodiversity">
      <Button
        mt="2"
        color="#FFF"
        bg="brand.500"
        _hover={{ bg: "brand.400" }}
        borderRadius="4px"
        fontSize="md"
        type="button"
        letterSpacing={4}
      >
        立即捐助
      </Button>
    </Link>
    <Text {...pStyle}>
      綠色和平成立50年，從不接受政商界捐助，在環境工作上維持公正獨立！
    </Text>
  </Stack>
</SimpleGrid>
            </Box>

        </Box>


        <Box
          w={{ base: 0, md: "50%", lg: "500px" }}
          px="4"
          py={{ base: 4, md: 8 }}
          d={{ base: "none", md: "block" }}
        >
          <Sticky stickyStyle={{ zIndex: 10 }}>
            <Box
              borderTop="4px solid #66cc00"
              boxShadow="lg"
              p="6"
              rounded="md"
              bg="white"
              overflow="hidden"
            >
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
            </Box>
          </Sticky>
        </Box>
      </Flex>
      <Box
        pos="fixed"
        bottom={0}
        zIndex={9}
        p="4"
        w="100%"
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
          w="80%"
          color="#FFF"
          bg="orange"
          borderRadius="24px"
          fontSize="xl"
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
          <HeroSwiper isMobile={isMobile} swiperHeight="480px" />
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
