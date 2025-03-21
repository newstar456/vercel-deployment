import React, {useEffect, useState} from 'react'
import { useSelector } from "react-redux"
import { useGetShopsQuery, selectAllShops} from '../api/shopsSlice'
import Shop from './Shop'
import {Box, Typography, Stack} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import styled, { ThemeConsumer } from "styled-components"
 import axios from "axios"


const ShopsMenu = styled(Box) (function () {
  const theme = useTheme();
  return {
    padding: `15px`,
    minWidth: `200px`,
    position: `fixed`,
    [theme.breakpoints.up("mobile")]: {
      display:'none',
    
    },
    [theme.breakpoints.up("laptop")]: {
     display:'block',
    }
  }
})
const ShopsTitle = styled(Typography) (function () {
  const theme = useTheme();
  return {
    color:`${theme.palette.text.secondary}`,
    textAlign:"center",
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
              // await axios.get("http://localhost:3000/home")
              await axios.get("https://vercel-deployment-five-xi.vercel.app")
                .then((response) => {
                    const obj = JSON.parse(response.data)
                  // console.log(response.data);
                  setShops(obj);
                });
            } catch (error) {
              // Handle error
              console.error(error);
            }
        };
        fetchShops();
       
    }, []); // [] ensures this effect runs only once on mount


    // fetchShops();

    // console.log(shops);

//   const shops = useSelector(selectAllShops)
//   console.log(shops);
//   let contentShops = shops.map(shopId => <Shop setShop={setShop} key={shopId.id} shopId={shopId}/>)

// if(shops.length){
    
// }

 contentShops = shops.map(shop => shop.id)

       
  return(
    <ShopsMenu>
      <ShopsTitle variant='h5'>CHOOSE SHOP:</ShopsTitle>
      {/* <ShopsStack direction='column' useFlexGap flexWrap='wrap'>{contentShops}</ShopsStack> */}
      <Stack direction='column'>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      </Stack>
      {/* <h1>{contentShops}</h1> */}
    </ShopsMenu>
  );
}

export default ShopsList






