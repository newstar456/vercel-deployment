import React, {useEffect, useState} from 'react'
import {Box, Typography, Stack} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import styled from "styled-components"



const ShopsMenu = styled(Box) (function () {
  const theme = useTheme();
  return {
    padding: `15px`,
    paddingTop: `100px`,
    minWidth: `200px`,
    maxWidth: `250px`,
    // position: 'fixed',
  }
})
const ShopsTitle = styled(Typography) (function () {
  const theme = useTheme();
  return {
    color:`${theme.palette.text.secondary}`,
    textAlign:"center",
    position: "relative",
   [theme.breakpoints.up("mobile")]: {
      paddingBottom:'16px',
      fontSize:'12px'
    },
    [theme.breakpoints.up("laptop")]: {
      margin:'15px',
      fontSize:'16px'
    }
  }
})
const ShopsStack = styled(Stack) (function () {
  const theme = useTheme();
  return {
   [theme.breakpoints.up("mobile")]: {
      gap:'10px',
    
    },
    [theme.breakpoints.up("laptop")]: {
     gap:'15px',
    }
  }
})


const ShopsList = ({contentShops}) => {
  
  return(

    <ShopsMenu>
      <ShopsTitle variant='h5'>SHOPS:</ShopsTitle>
      <ShopsStack direction='column'>{contentShops}</ShopsStack>
    </ShopsMenu>

  );
}

export default ShopsList






