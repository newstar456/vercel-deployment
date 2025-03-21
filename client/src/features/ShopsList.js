import React, {useEffect, useState} from 'react'
import { useSelector } from "react-redux"
import { useGetShopsQuery, selectAllShops} from './api/shopsSlice'
import {Box, Typography, Stack, Button} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import styled, { ThemeConsumer } from "styled-components"
 import axios from "axios"


const ShopsMenu = styled(Box) (function () {
  const theme = useTheme();
  return {
    padding: `15px`,
    paddingTop: `100px`,
    minWidth: `200px`,
    maxWidth: `250px`,
    position: 'fixed',
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


const ShopsList = () => {

  let contentShops;
  const [shops, setShops] = useState([]);
  useEffect(() => {
      const fetchShops = async () => {
          try {
            await axios.get("https://vercel-deployment-five-xi.vercel.app")
              .then((response) => {
                  const obj = JSON.parse(response.data)
                setShops(obj);
              });
          } catch (error) {
            console.error(error);
          }
      };
      fetchShops();
     
  }, []);


 contentShops = shops.map(shop => <Button variant='outlined' size="large" key={shop.name}>{shop.name}</Button>)

       
  return(
    <ShopsMenu>
      <ShopsTitle variant='h5'>SHOPS:</ShopsTitle>
      <ShopsStack direction='column'>{contentShops}</ShopsStack>

    </ShopsMenu>
  );
}

export default ShopsList






