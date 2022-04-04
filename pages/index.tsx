import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import Header from '../components/Header';
import TodayQuarantine from '../components/TodayQuarantine';
import UpdateNews from '../components/UpdateNews';
import SitudationRule from '../components/SituationRule';
import LocationRule from '../components/LocationRule';
import ServerSupport from '../components/ServerSupport';
import CoronaReport from '../components/CoronaReport';
import Footer from '../components/Footer';
import SlidePeopleModal from '../components/SlidePeopleModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import SlideLocationModal from '../components/SlideLocationModal';
import SlideCoronaPassModal from '../components/SlideCoronaPassModal';
import { useCallback } from 'react';
import modal from '../reducers/modal';
import SlideNewsModal1 from '../components/SlideNewsModal1';
import SlideNewsModal2 from '../components/SlideNewsModal2';
import SlideNewsModal3 from '../components/SlideNewsModal3';
import SlidePcrModal from '../components/SlidePcrModal';
import SlideContactPeopleModal from '../components/SlideContactPeopleModal';
import SlideEntryPeopleModal from '../components/SlideEntryPeopleModal';
import SlidePcrConfirmModal from '../components/SlidePcrConfirmModal';

const HomeWrapper = styled.div`
`

const Home: NextPage = () => {
 const {limitPeopleModal} = useSelector((state : RootState) => state.modal);



  return (
      <HomeWrapper>
        <Header />
        <TodayQuarantine />
        <UpdateNews />
        <SitudationRule />
        <LocationRule />
        <ServerSupport />
        <CoronaReport />
        <Footer />
        {limitPeopleModal && <SlidePeopleModal />}
        <SlideLocationModal />
        <SlideCoronaPassModal />
        <SlideNewsModal1 />
        <SlideNewsModal2 />
        <SlideNewsModal3 />
        <SlidePcrModal />
        <SlideContactPeopleModal />
        <SlideEntryPeopleModal />
        <SlidePcrConfirmModal />
      </HomeWrapper>
  )
}

export default Home
