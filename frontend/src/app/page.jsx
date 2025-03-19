'use client'

import HomeBanner from './Components/Home/HomeBanner/HomeBanner';
import MiddleSection from './Components/Home/MidSection/Middle'
import {Provider} from 'react-redux';
import {Store} from '../Redux-Store/Store';
import { useSession ,SessionProvider} from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";


export default function Home() {


  return (
      <div>
        <Provider store={Store}>
          <HomeBanner></HomeBanner>
          <MiddleSection></MiddleSection>
        </Provider>
      </div>
  )
}