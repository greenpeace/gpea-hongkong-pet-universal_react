import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as themeActions from 'store/actions/action-types/theme-actions'
import {
  Box,
  Button,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
} from '@chakra-ui/react'

const buttonStyle = {
  h: '48px',
  fontWeight: '400',
}

// Donation types
const TYPES = [
  { label: '每月捐款', value: 'monthly' },
  { label: '單次捐款', value: 'single' },
]
const AMOUNT_ONETIME = [
  { label: 'HKD 500', value: 500 },
  { label: 'HKD 700', value: 700 },
  { label: 'HKD 900', value: 900 },
  { label: '其他金額', value: '' },
]
const AMOUNT_MONTHLY = [
  { label: 'HKD 100', value: 100 },
  { label: 'HKD 150', value: 150 },
  { label: 'HKD 200', value: 200 },
  { label: '其他金額', value: '' },
]

const MiniDonateForm = (props) => {
  const [donateType, setDonateType] = useState('monthly')
  const [amount, setAmount] = useState(100)
  const [url, setURL] = useState({ type: donateType, amount: amount })
  const amountOption =
    donateType === 'monthly' ? AMOUNT_MONTHLY : AMOUNT_ONETIME

  const handleSetDonateType = (value) => {
    setDonateType(value)
    setAmount(
      value === 'monthly' ? AMOUNT_MONTHLY[0].value : AMOUNT_ONETIME[0].value
    )
    setURL({ ...url, type: value })
  }

  const targetDonateURL =
    'https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK&campaign=arctic'

  const handleOpenLink = (value) => {
    window.open(`${targetDonateURL}&donate_amt=${donateType}:${amount}`)
  }

  return (
    <Box>
      <Box py={2}>
        <Stack
          direction='row'
          spacing={0}
          borderRadius={'md'}
          overflow={'hidden'}
        >
          {TYPES.map((d, i) => (
            <Button
              key={d.value}
              flex='1'
              h='40px'
              fontWeight='400'
              borderRadius={0}
              bg={donateType === d.value ? 'brand.500' : '#fff'}
              color={donateType === d.value ? '#fff' : 'brand.500'}
              onClick={() => handleSetDonateType(d.value)}
            >
              {d.label}
            </Button>
          ))}
        </Stack>
      </Box>
      <Box py={4} overflow='hidden'>
        <Flex direction='column'>
          <Box>
            <Grid templateColumns='repeat(3, 1fr)' gap={2}>
              {amountOption.map((d, i) => {
                const colSpan = amountOption.length === i + 1 ? 3 : 1

                return (
                  <GridItem colSpan={colSpan} key={i}>
                    <Button
                      key={d.value}
                      flex='1'
                      bg={amount === d.value ? 'brand.500' : '#fff'}
                      color={amount === d.value ? '#fff' : 'gray.500'}
                      borderRadius={'md'}
                      _hover={{ bg: 'brand.500', color: '#fff' }}
                      onClick={() => setAmount(d.value)}
                      w='100%'
                      {...buttonStyle}
                    >
                      {d.label}
                    </Button>
                  </GridItem>
                )
              })}
            </Grid>
          </Box>
          <Box align='center' py={6}>
            {props.mode === 'dark' ? (
              <Text fontSize={'md'} color={'#fff'}>
                您的捐款，將幫助綠色和平為環境問題找到出路，並在全球各地落實環保工作。謝謝！
              </Text>
            ) : (
              <Text fontSize={'md'}>
                您的捐款，將幫助綠色和平為環境問題找到出路，並在全球各地落實環保工作。謝謝！
              </Text>
            )}
          </Box>
          <Box onClick={() => handleOpenLink()}>
            <Button
              variant='formSubmitButton'
              {...buttonStyle}
              fontWeight={700}
              fontSize={'lg'}
              letterSpacing={'2px'}
            >
              立即捐款
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
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
    toggleTheme: (bol) => {
      dispatch({ type: themeActions.TOGGLE_FORM, bol })
    },
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol })
    },
    setForm: (value) => {
      dispatch({ type: themeActions.SET_FORM_VALUE, value })
    },
    setHiddenForm: (value) => {
      dispatch({ type: themeActions.SET_HIDDEN_FORM_VALUE, value })
    },
    submitForm: (form) => {
      dispatch({ type: themeActions.SUBMIT_FORM, form })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniDonateForm)
