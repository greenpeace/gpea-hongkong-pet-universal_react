import 'swiper/swiper.scss';
import React from 'react';
import {
  Box,
  Text,
  Stack,
  useColorModeValue,
  Circle,
  Icon,
} from '@chakra-ui/react';
import { BiTime } from 'react-icons/bi';
import { GoBook } from 'react-icons/go';
import { BiCalendar } from 'react-icons/bi';
import { MdOutlineOndemandVideo } from 'react-icons/md';

const Webinar = ({ content }) => {
  const subHeadline = {
    color: 'gray.700',
    fontSize: 'sm',
    lineHeight: '1.5',
    mt: '10',
    mb: '4',
    pl: '2',
    borderLeft: '4px solid #00b474',
  };

  const triangle = {
    // borderBottom: '6px solid #66cc00',
    // borderLeft: '6px solid transparent',
    height: 14,
    width: 2,
    backgroundColor: '#66cc00',
    // borderRadius: '50%',
    position: 'absolute',
    right: -1,
    bottom: 12,
  };

  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Box marginLeft={-2} pos={`relative`}>
          <Circle size='40px' color='white' bg={iconBg}>
            {icon}
          </Circle>
          <Box style={triangle} />
        </Box>
        <Text fontSize='lg' color='gray.900'>
          {text}
        </Text>
      </Stack>
    );
  };

  return (
    <Box>
      {content.title && <Text {...subHeadline}>{content.title}</Text>}
      <Stack spacing={2}>
        <Feature
          icon={<Icon as={BiCalendar} color={'brand.500'} w={7} h={7} />}
          // iconBg={useColorModeValue('brand.100', 'brand.900')}
          text={content.date}
        />
        <Feature
          icon={<Icon as={BiTime} color={'brand.500'} w={7} h={7} />}
          // iconBg={'brand.500'}
          text={content.time}
        />
        <Feature
          icon={
            <Icon as={MdOutlineOndemandVideo} color={'brand.500'} w={7} h={7} />
          }
          // iconBg={'green.900'}
          text={content.description}
        />
        {content.other && (
          <Feature
            icon={<Icon as={GoBook} color={'brand.500'} w={7} h={7} />}
            // iconBg={'gray.500'}
            text={content.other}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Webinar;
