import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Sticky from "react-sticky-el";
import {
  ChakraProvider,
  Box,
  Button,
  Divider,
  Image,
  Flex,
  Text,
  Heading,
  Link,
  SimpleGrid,
  Center,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Nav from "../components/header/nav";
import Footer from "../components/footer";
import * as themeActions from "store/actions/action-types/theme-actions";
import themeConfig from "../theme.js";
import { animateScroll as scroll, scroller } from "react-scroll";
import { DownloadIcon } from "@chakra-ui/icons";

import wallpaper from "../../../data/wallpaper.json";

const Index = ({ submitted, togglePanel, selectedImage }) => {
  const [Arctic, setArctic] = useState([]);
  const [Forests, setForests] = useState([]);
  const [Oceans, setOceans] = useState([]);
  const [current, setCurrent] = useState([]);
  const [displayCate, setDisplayCate] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [download, setDownload] = useState(
    wallpaper.data[3].content.wallpaperList[0]
  );
  const campaignButton = [
    { label_zh: "北極", label: "Arctic", value: Arctic },
    { label_zh: "森林", label: "Forests", value: Forests },
    { label_zh: "海洋", label: "Oceans", value: Oceans },
  ];

  const isMobile = useMediaQuery({ query: "(max-device-width: 564px)" });

  const scrollTo = (d) => {
    scroller.scrollTo(d, {
      duration: 800,
      delay: 0,
      smooth: true,
      offset: -200, // TODO: Need double check the value
    });
  };

  const handleSwitchDownload = (cate) => {
    console.log("clicked", cate);
    const getFirstItem = cate.content?.wallpaperList[0];
    setDownload(getFirstItem);
    selectedImage(getFirstItem);
    setCurrent(cate);
  };

  const handleSetDownload = (d) => {
    setDownload(d);
    selectedImage(d);
    scrollTo(d);
  };

  const whatsAppShare = () => {
    var w = "https://act.gp/39fBmX6";
    window.open(w);
  };
  const mainShare = () => {
    // WEB SHARE API
    if (navigator.share) {
      navigator
        .share({
          title: "",
          text: "👉 ",
          url: "https://act.gp/2YaXfQW",
        })
        .then()
        .catch();
    } else {
      whatsAppShare();
      // fbShare();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setArctic(wallpaper.data.find((d) => d.issue === "Biodiversity"));
    setForests(wallpaper.data.find((d) => d.issue === "Forests"));
    setOceans(wallpaper.data.find((d) => d.issue === "Oceans"));
  }, []);

  useEffect(() => {
    const getFirstItem = Arctic.content?.wallpaperList[0];
    setCurrent(Arctic);
    selectedImage(getFirstItem);
  }, [Arctic]);

  const fontStyle = {
    fontSize: { base: "14px", sm: "18px" },
  };

  const downloadButtonStyle = {
    top: "0px",
    left: "0px",
    borderTop: "80px solid #66cc00",
    borderRight: "80px solid transparent",
  };

  const mobileDownloadButtonStyle = {
    bottom: "0px",
    right: "0px",
    borderBottom: "25px solid #66cc00",
    borderLeft: "25px solid transparent",
  };

  /*

  const SelectButtonStyle = {
    variant: "outline",
    fontWeight: 700,
    color: "brand.600",
    borderColor: "brand.600",
    _hover: {
      color: "#FFF",
      bgColor: "brand.600",
    },
    flex: "1",
    borderRadius: "20px",
  };

  const SelectedButtonStyle = {
    variant: "solid",
    fontWeight: 700,
    color: "#FFF",
    borderColor: "brand.600",
    bgColor: "brand.600",
    flex: "1",
    borderRadius: "20px",
  };

  */

  return (
    <ChakraProvider theme={themeConfig}>
      <Nav showButton={false} />
      <Flex>
        <Box flex="1" style={{ minWidth: "0px" }} py={10} px={4} maxW="1280px">
          <Heading mb={6}>感謝您的下載！</Heading>
          <Text as="p" {...fontStyle}>
            您願意進一步行動，捐助支持綠色和平更多環境項目嗎？
          </Text>
          <Text as="p" {...fontStyle}>
            守護香港野！我們需要您的支持為環境堅持努力。綠色和平不接受政府、企業捐款，請立刻加入我們的1%會員計畫，以您的1%收入，支持我們的100%財政獨立。
          </Text>
          <HStack mt={6}>
            <Link
              href="https://supporter.ea.greenpeace.org/hk/s/donate?language=zh_HK"
              isExternal
            >
              <Button>捐助支持</Button>
            </Link>
            <Button onClick={() => mainShare()}>分享</Button>
          </HStack>
          <Divider my={4} />
          <Heading align="center" my={10}>
            揀選你喜愛的環境照片
          </Heading>
          {/* <HStack mb={10}>
            {campaignButton.map(d=> <Button
              key={d.label}
              {...SelectButtonStyle}
              bgColor={current.issue===d.label ? SelectedButtonStyle.bgColor : SelectButtonStyle.bgColor}
              color={current.issue===d.label ? SelectedButtonStyle.color : SelectButtonStyle.color}
              onClick={() => handleSwitchDownload(d.value)}
              >{d.label_zh}</Button>)}
          </HStack> */}
          <Box>
            {isMobile ? (
              <SimpleGrid columns={2} spacing="20px">
                {current.content?.wallpaperList.map((d, i) => (
                  <Box pos="relative" key={i}>
                    <Link
                      href={`${process.env.PUBLIC_URL}${d}`}
                      download={d.split("/").pop()}
                    >
                      {/* <Box
                bgImage={`url(${process.env.PUBLIC_URL}${d})`}
                bgSize="cover"
                height={{base: "160px"}}
                _hover={{cursor: 'pointer', opacity: .8}}
                pos="relative"
              >
              <Box pos="absolute" bottom="6px" right="6px" zIndex={2}><DownloadIcon color="#FFF" w={4} h={4}/></Box>
              <Box pos="absolute" {...mobileDownloadButtonStyle} zIndex={1}></Box>
            </Box> */}
                      <Box pos="absolute" bottom="0px" right="2px" zIndex={2}>
                        <DownloadIcon color="#FFF" w={2} h={2} />
                      </Box>
                      <Box
                        pos="absolute"
                        {...mobileDownloadButtonStyle}
                        zIndex={1}
                      ></Box>
                      <Image src={`${process.env.PUBLIC_URL}${d}`} />
                    </Link>
                  </Box>
                ))}
              </SimpleGrid>
            ) : (
              <SimpleGrid minChildWidth="240px" spacing="20px">
                {current.content?.wallpaperList.map((d, i) => (
                  <Box
                    key={i}
                    bgImage={`url(${process.env.PUBLIC_URL}${d})`}
                    bgSize="cover"
                    height={{ base: "240px", sm: "180px" }}
                    _hover={{ cursor: "pointer", opacity: 0.8 }}
                    onClick={() => handleSetDownload(d)}
                    name={d}
                  ></Box>
                ))}
              </SimpleGrid>
            )}
          </Box>
        </Box>
        <Box
          p={4}
          w={{ base: 0, md: "500px", lg: "780px" }}
          d={{ base: "none", md: "block" }}
        >
          <Sticky
            topOffset={0}
            onFixedToggle={() => setDisplayCate(!displayCate)}
          >
            <Box
              pos="relative"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              my={4}
            >
              <Link
                href={`${process.env.PUBLIC_URL}${download}`}
                download={download.split("/").pop()}
              >
                {isShown && (
                  <Box
                    pos="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    zIndex={2}
                    bgColor="rgba(0, 0, 0, .3)"
                  >
                    <Center w="100%" h="100%">
                      <VStack>
                        <Text as="h3" color="#FFF">
                          <strong>點擊確認下載圖片</strong>
                        </Text>
                        <small style={{ color: "#FFF" }}>
                          * 如果下載程序沒有自動開始，請長按圖片並選擇下載圖片
                        </small>
                      </VStack>
                    </Center>
                  </Box>
                )}
                <Box pos="absolute" left="8px" top="8px" zIndex={2}>
                  <DownloadIcon color="#FFF" w={8} h={8} />
                </Box>
                <Box pos="absolute" {...downloadButtonStyle} zIndex={1}></Box>
                <Image src={`${process.env.PUBLIC_URL}${download}`} w="100%" />
              </Link>
            </Box>
          </Sticky>
        </Box>
      </Flex>
      <Footer />
    </ChakraProvider>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme,
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
    selectedImage: (src) => {
      dispatch({ type: themeActions.SWITCH_SELECTED_IMAGE, src });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
