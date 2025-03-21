// import { MedsList } from '../meds/MedsList'
import ShopsList from "../shops/ShopsList"
import { createContext, useState} from "react"
import Stack from '@mui/material/Stack'

import React from 'react'

const MainPage = () => {
  return (
    <div>
    <ShopsList/>
    </div>
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