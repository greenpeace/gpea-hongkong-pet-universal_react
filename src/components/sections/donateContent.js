import React from 'react'
import {
  Button,
  Image,
  Flex,
  Text,
  Heading,
  Link,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'

const DonateContent = () => {
  const pStyle = {
    as: 'p',
    marginTop: '20px',
    color: 'gray.900',
    lineHeight: '1.7',
    fontSize: '16px',
  }

  return (
    <SimpleGrid mt='4' columns={{ base: 1, xl: 2 }} spacing={10}>
      <Flex direction='column'>
        <Image
          borderRadius='8px'
          src={
            'https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/0f48c407-gif_reg_ty_page.gif'
          }
          alignSelf='center'
        />
      </Flex>
      <Stack spacing={4}>
        <Heading
          as='h2'
          size='lg'
          color='brand.500'
          style={{ lineHeight: '1.5' }}
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
              'https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK&campaign=biodiversity&utm_campaign=biodiversity'
            )
          }
        >
          立即捐助
        </Button>
        <Text {...pStyle}>
          綠色和平成立50年，從不接受政商界捐助，在環境工作上維持公正獨立！
        </Text>
      </Stack>
    </SimpleGrid>
  )
}

export default DonateContent
