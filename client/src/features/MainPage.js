// import { MedsList } from '../meds/MedsList'
import ShopsList from "./ShopsList"
import { createContext, useState, useEffect} from "react"
import {Stack, Button, Box} from '@mui/material'
import axios from "axios"
import React from 'react'
import Med from './Med'

const MainPage = () => {

  // let contentShops;
  let contentMeds;
  const [data, setData] = useState([]);
  useEffect(() => {
      const fetchShops = async () => {
          try {
            await axios.get("https://vercel-deployment-five-xi.vercel.app")
              .then((response) => {
                  const obj = JSON.parse(response.data)
                setData(obj);
              });
          } catch (error) {
            console.error(error);
          }
      };
      fetchShops();
     
  }, []);
// console.log(data);


 let contentShops = data.map(med => med['Shops'].title)
 let constentShopsModified = new Set(contentShops);
 let newContentShops = [...constentShopsModified];
// console.log(newContentShops);
 let contentShopsFinal = newContentShops.map(shop => <Button variant='outlined' size="large" key={shop}>{shop}</Button>)
 contentMeds = data.map(med => <Med med={med}/>)


  return (
    <Stack direction={{xs:'row', sm:'row'}} spacing={{ xs:1, sm:2 }}>
      <ShopsList contentShops={contentShopsFinal}/>
      <Box>{contentMeds}</Box>
    </Stack>
  )
}

export default MainPage


// const ShopChosen = createContext('hello');

// export const MainPage = () => {

//   const [shop, setShop] = useState('default');
//   const [byPrice, setByPrice] = useState(false);

//   return (
//     <ShopChosen.Provider value={shop}>
//       <Stack direction={{xs:'column', md:'row'}} spacing={{ xs:1, sm:2 }} >
//         <ShopsList setShop={setShop}/>
//         <MedsList shop={shop} byPrice={byPrice} />
//       </Stack>
//      </ShopChosen.Provider>
//   )
// }

// export {ShopChosen}