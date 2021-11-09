import * as themeActions from 'store/actions/action-types/theme-actions';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Box } from '@chakra-ui/react';

const ToggleFormButton = ({ content = '立即聯署', submitted, togglePanel }) => {
  // if(submitted){
  //   return <Box></Box>
  // }
  return (
    <Button
      w='100%'
      color='white'
      bg='orange.500'
      borderRadius='md'
      fontSize='xl'
      letterSpacing={2}
      style={{ zIndex: 999 }}
      onClick={() => togglePanel(true)}
    >
      {content}
    </Button>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleFormButton);
