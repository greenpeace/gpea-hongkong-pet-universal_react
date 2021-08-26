import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import Sticky from 'react-sticky-el'
import {
  ChakraProvider,
  Box,
  Button,
  Image,
  Text,
  Heading,
  Link,
  SimpleGrid,
  Center,
  VStack,
  HStack,
  Stack,
  Avatar,
  Flex,
  Skeleton,
} from '@chakra-ui/react'
import Nav from '../components/header/nav'
import Footer from '../components/footer'
import * as themeActions from 'store/actions/action-types/theme-actions'
import themeConfig from '../../../theme'
import { animateScroll as scroll, scroller } from 'react-scroll'
import { DownloadIcon } from '@chakra-ui/icons'

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'

import LazyLoad from 'react-lazyload'

import shing from '../assets/images/shing_2x_icon.png'
import wallpaper from '../../../data/wallpaper.json'

import '../index.css'

const Index = ({ selectedImage }) => {
  const [biodiversity, setBiodiversity] = useState([])
  const [current, setCurrent] = useState(
    wallpaper.data.find((d) => d.issue === 'Biodiversity')
  )
  const [displayCate, setDisplayCate] = useState(false)
  const [isShown, setIsShown] = useState(false)
  const [download, setDownload] = useState(
    wallpaper.data[3].content.wallpaperList[0].source
  )
  const isMobile = useMediaQuery({ query: '(max-device-width: 564px)' })
  const scrollTo = (d) => {
    scroller.scrollTo(d, {
      duration: 800,
      delay: 0,
      smooth: true,
      offset: -200, // TODO: Need double check the value
    })
  }

  const handleSetDownload = (d) => {
    setDownload(d)
    selectedImage(d)
    scrollTo(d)
  }

  const whatsAppShare = () => {
    var w = 'https://act.gp/39fBmX6'
    window.open(w)
  }
  const mainShare = () => {
    // WEB SHARE API
    if (navigator.share) {
      navigator
        .share({
          title: '',
          text: '精選香港動物奇妙時刻：桌布 / 視像會議寫真大放送！立即免費下載！👉 ',
          url: 'https://act.gp/2YaXfQW',
        })
        .then()
        .catch()
    } else {
      whatsAppShare()
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setBiodiversity(wallpaper.data.find((d) => d.issue === 'Biodiversity'))
    // setForests(wallpaper.data.find((d) => d.issue === "Forests"));
    // setOceans(wallpaper.data.find((d) => d.issue === "Oceans"));
  }, [])

  useEffect(() => {
    const getFirstItem = biodiversity.content?.wallpaperList[0]
    setCurrent(biodiversity)
    selectedImage(getFirstItem)
  }, [biodiversity])

  const downloadButtonStyle = {
    top: '0px',
    left: '0px',
    borderTop: '80px solid #66cc00',
    borderRight: '80px solid transparent',
  }

  const photoCaption = {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(255,255,255,0.65)',
    padding: '2px',
  }

  return (
    <ChakraProvider theme={themeConfig}>
      <Nav showButton={false} />
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Box flex='1' pt={10} px='4'>
          <Heading size='xl' mb={8}>
            感謝您的登記！
          </Heading>
          <Text as='p' fontSize='md'>
            您願意進一步行動，捐助支持綠色和平更多環境項目嗎？
          </Text>
          <Text as='p' fontSize='md'>
            守護香港野！我們需要您的支持為環境堅持努力。
            <br />
            綠色和平不接受政府、企業捐款，請立刻加入我們的1%會員計畫，以您的1%收入，支持我們的100%財政獨立。
          </Text>

          <HStack align='center' pt='6' pb='4' spacing='4'>
            <Link
              href='https://supporter.ea.greenpeace.org/hk/s/donate?language=zh_HK&ref=wallpaper-thankyou'
              isExternal
            >
              <Button backgroundColor='orange' color='white' px='10' py='4'>
                捐助支持
              </Button>
            </Link>
            <Button
              backgroundColor='brand.500'
              color='white'
              px='10'
              py='4'
              onClick={() => mainShare()}
            >
              分享
            </Button>
          </HStack>
          <Sticky
            stickyClassName={'sticky-wallpaper-image'}
            z-index='99'
            onFixedToggle={() => setDisplayCate(!displayCate)}
          >
            <Heading size='lg' pt={4} mb={8}>
              點擊確認下載圖片
            </Heading>
            <Box
              pos='relative'
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              my={4}
              bgColor='gray.300'
              w='100%'
              // minH="300px"
            >
              <Link
                href={`${process.env.PUBLIC_URL}${download}`}
                download={download.split('/').pop()}
                isExternal
              >
                {isShown && (
                  <Box
                    pos='absolute'
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    bgColor='rgba(0, 0, 0, .25)'
                  >
                    <Center w='100%' h='100%'>
                      <VStack>
                        <Text as='h3' color='#fff'>
                          <strong>點擊確認下載圖片</strong>
                        </Text>
                        <small style={{ color: '#fff' }}>
                          * 如果下載程序沒有自動開始，請長按圖片並選擇下載圖片
                        </small>
                      </VStack>
                    </Center>
                  </Box>
                )}
                <Box pos='absolute' left='8px' top='8px' zIndex='1'>
                  <DownloadIcon color='#fff' w={8} h={8} />
                </Box>
                <Box pos='absolute' {...downloadButtonStyle}></Box>
                <LazyLoad height={200} once offset={100}>
                  <Image
                    className='fade-in'
                    src={`${process.env.PUBLIC_URL}${download}`}
                    w='100%'
                  />
                </LazyLoad>
              </Link>
            </Box>
          </Sticky>
        </Box>
        <Box flex='1' pt='10' pb='4' px='4'>
          <Heading size='xl' mb={8}>
            揀選你喜愛的環境照片
          </Heading>
          {isMobile ? (
            <SimpleGrid columns={2} spacing='12px'>
              {current.content?.wallpaperList.map((d, i) => {
                return (
                  <Box
                    pos='relative'
                    key={i}
                    _hover={{ cursor: 'pointer', opacity: 0.8 }}
                    onClick={() => handleSetDownload(d.source)}
                  >
                    <LazyLoad height={240} once offset={100}>
                      <Image src={`${process.env.PUBLIC_URL}${d.source}`} />
                    </LazyLoad>
                    <Text as='span' {...photoCaption}>
                      {d.label_zh}
                    </Text>
                  </Box>
                )
              })}
            </SimpleGrid>
          ) : (
            <SimpleGrid minChildWidth='180px' spacing='20px'>
              {current.content?.wallpaperList.map((d, i) => (
                <Box pos='relative' key={i}>
                  <Box
                    name={d}
                    key={i}
                    bgImage={`url(${process.env.PUBLIC_URL}${d.source})`}
                    bgSize='cover'
                    height={{ base: '240px', sm: '180px' }}
                    _hover={{ cursor: 'pointer', opacity: 0.8 }}
                    onClick={() => handleSetDownload(d.source)}
                    bgColor='gray.300'
                  />
                  <Text as='span' {...photoCaption}>
                    {d.label_zh}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          )}

          <Text
            mt='4'
            px='4'
            py='10'
            fontSize='md'
            align='center'
            color='gray.500'
          >
            - 持續更新中 -
          </Text>
          <Box py={4}>
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
                  <Avatar size='xl' name={'Shing'} src={shing} />
                  <Box pt={4}>
                    <Heading fontSize='2xl' mb={2}>
                      <Text color='brand.900'>馮漢城（阿城）</Text>
                    </Heading>
                    <Heading color='gray.500' fontSize='md'>
                      香港生態攝影師
                    </Heading>
                  </Box>
                </Stack>

                <Text variant='paragraph' pb={4}>
                  獨立生態紀錄片製作人。香港電台本地生態紀錄片節目《大自然大不同》第二季單元編導、攝影、剪接。
                </Text>
                <Flex
                  justifyContent='flex-end'
                  fontSize={{ base: '10px', sm: '12px' }}
                >
                  <HStack spacing={1} pr={4}>
                    <FaInstagram />
                    <Box>
                      <Text>fhs.f</Text>
                    </Box>
                  </HStack>
                  <HStack spacing={1}>
                    <FaFacebookSquare />
                    <Box>
                      <Text>FHS Wildlife</Text>
                    </Box>
                  </HStack>
                </Flex>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </SimpleGrid>
      <Footer />
    </ChakraProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme,
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol })
    },
    selectedImage: (src) => {
      dispatch({ type: themeActions.SWITCH_SELECTED_IMAGE, src })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
