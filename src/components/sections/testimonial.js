import { Avatar, chakra, Flex, SimpleGrid, useColorModeValue} from '@chakra-ui/react';

const pStyle = {
  as: "p",
  marginTop: "20px",
  color: "gray.900",
  lineHeight: "1.7",
  fontSize: "16px",
};

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`
];

function TestmonialCard(props) {
  const { name, role, content, avatar, index } = props;
  return (
    <Flex
      boxShadow={'lg'}
      direction={{ base: 'column', xl: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        // maxW: '640px',
        width: 'full',
        filter: 'blur(10px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
        backgroundImage: backgrounds[index % 4],
      }}>
      <Avatar
        src={avatar}
        height={'160px'}
        width={'160px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 50px 0 0' }}
      />
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}>
        <chakra.p
          {...pStyle}
          pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontWeight={'bold'} fontSize={18}>
          {name}
          <chakra.span
            fontFamily={'Inter'}
            fontWeight={'medium'}
            color={'gray.500'}>
            {' '}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>

    </Flex>
  );
}

export default function GridBlurredBackdrop({content}) {
  return (
    <Flex
      textAlign={'center'}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}>
      <SimpleGrid
        columns={{ base: 1 }}
        spacing={'20'}
        mt={16}
        mx={'auto'}>
        {content.map((cardInfo, index) => (
          <TestmonialCard {...cardInfo} index={index} key={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}