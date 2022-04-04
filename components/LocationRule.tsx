import moment from "moment";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Template from "../common/Templete";
import 'moment/locale/ko';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import modal from "../reducers/modal";
import axios from "axios";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import Spinner from "./Spiner";
import { off } from "process";

const LocationRuleWrapper = styled.div`
    margin-bottom: 4em;

    .location-rule-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        .title {
        font-size: 19px;
        font-weight: bold;
        margin-bottom: 1em;
        }

        .location-rule-filter-wrapper {
            position: relative;
            display: flex;
            .filter-time {
                display: flex;
                align-items: center;
                margin-right: 10px;
                > span:nth-child(1){
                    font-size: 14px;
                    font-weight: 300;
                    cursor: pointer;
                }
                .filter-icon {
                    width: 13px;
                    height: 13px;
                    background-image: url(static/select-arrow.svg);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: center center;
                    display: block;
                    margin-top: 2px;
                    margin-left: 2px;
                }
            }
            .filter-pass {
                display: flex;
                align-items: center;
                margin-right: 10px;
                > span:nth-child(1){
                    font-size: 14px;
                    font-weight: 300;
                    cursor: pointer;
                }
                .filter-icon {
                    width: 13px;
                    height: 13px;
                    background-image: url(static/select-arrow.svg);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: center center;
                    display: block;
                    margin-top: 2px;
                    margin-left: 2px;
                }
            }
            .filter-time-list {
                width: 150px;
                border-radius: 12px;
                background: white;
                position: absolute;
                z-index: 1000;
                bottom: -150px;
                right: 115px;
                .filter-time-list-wrapper {
                    padding: 1em 0;
                    .filter-time-selected {
                        color: rgb(0, 0, 0);
                        font-weight: 500;
                    }
                    > p {
                        font-size: 14px;
                        color: rgba(0, 0, 0, 0.5);
                        padding: 8px 20px;
                        width: 100%;
                        text-align: left;
                        cursor: pointer;
                    }
                }
            }
            .filter-방역-list {
                width: 150px;
                border-radius: 12px;
                background: white;
                position: absolute;
                z-index: 1000;
                bottom: -150px;
                right: 15px;
                .filter-방역-list-wrapper {
                    padding: 1em 0;
                    .filter-방역-selected {
                        color: rgb(0, 0, 0);
                        font-weight: 500;
                    }
                    > p {
                        font-size: 14px;
                        color: rgba(0, 0, 0, 0.5);
                        padding: 8px 20px;
                        width: 100%;
                        text-align: left;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .location-rule {
        position: relative;
        
        .left-arrow  {
                display: block;
                position: absolute;
                top: 20px;
                left: -30px;
                bottom: 0px;
                width: 15px;
                z-index: 10;
                height: 15px;
                background-image: url(/static/now-arrow.svg);
                background-repeat: no-repeat;
                background-size: auto 100%;
                background-position: center center;
                -webkit-transform: rotate(180deg);
                -ms-transform: rotate(180deg);
                transform: rotate(180deg);
                cursor: pointer;
            }
            .right-arrow {
                display: block;
                position: absolute;
                top: 20px;
                right: -30px;
                bottom: 0px;
                width: 15px;
                z-index: 10;
                height: 15px;
                background-image: url(/static/now-arrow.svg);
                background-repeat: no-repeat;
                background-size: auto 100%;
                background-position: center center;
                cursor: pointer;
            }

        .location-rule-container {
            width: 100%;
            border-bottom: 1px solid rgba(0,0,0,0.07);
            overflow: hidden;
            margin-bottom: 1.5em;
            .location-rule-list {
                transform: translateX(0px);
                transition: all 0.1s;
                margin-bottom: 1.5em;
                display: flex;
                .selected .location-img {
                    border: 2px solid #4880ee;
                }
                .selected > span {
                    color: #4880ee;
                }
                .location-rule-item {
                    text-align: center;
                    white-space: nowrap;
                    margin-right: 1.5em;
                    .location-img {
                        width: 60px;
                        height: 60px;
                        background-color: rgb(255, 255, 255);
                        background-image: url(/static/location/all.c3d4c7ac.svg);
                        background-repeat: no-repeat;
                        background-size: 37px;
                        background-position: center center;
                        border-radius: 50%;
                        margin-bottom: 0.6em;
                    }
                    .img2 {
                        background-image: url(/static/location/ico_cafe_a22279abd6.svg);
                    }
                    .img3 {
                        background-image: url(/static/location/ico_event_4574995da3.svg);
                    }
                    .img4 {
                        background-image: url(/static/location/ico_gym_9b09ffaf16.svg);
                    }
                    .img5 {
                        background-image: url(/static/location/ico_study_1ea64bdeaf.svg);
                    }
                    .img6 {
                        background-image: url(/static/location/ico_shopping_d4ef2d6763.svg);
                    }
                    .img7 {
                        background-image: url(/static/location/ico_movie_217267ee91.svg);
                    }
                    .img8 {
                        background-image: url(/static/location/Property_1_ico_accommodation_7065f51414.svg);
                    }
                    .img9 {
                        background-image: url(/static/location/ico_game_1ac6aff00b.svg);
                    }
                    .img10 {
                        background-image: url(/static/location/ico_bar_7b4944e721.svg);
                    }
                    .img11 {
                        background-image: url(/static/location/ico_amusement_7cb0c98b2e.svg);
                    }
                    .img12 {
                        background-image: url(/static/location/ico_hair_39a34ef60c.svg);
                    }            
                    .img13 {
                        background-image: url(/static/location/ico_bath_5dd0d74cad.svg);
                    }
                    .img14 {
                        background-image: url(/static/location/ico_religion_0d54ab08c8.svg);
                    }
                    .img15 {
                        background-image: url(/static/location/ico_sports_79462c9b18.svg);
                    }
                    .img16 {
                        background-image: url(/static/location/ico_etc_cd396c5f75.svg);
                    }


                    >span {
                        font-size: 14px;
                    }
                }
            }

        }
    }

    .location-rule-cards {

        .noti {
            display: flex;
            align-items: center;
            margin-bottom: 1em;
            .noti-img {
                background-image: url(/static/card-noti.04e59d41.svg);
                display: block;
                width: 18px;
                height: 18px;
                background-size: 100%;
                margin-right: 0.2em;
            }
            > p {
              font-size: 14px;
              color: rgba(0,0,0,0.7);
            }
        }

        .location-rule-cards-item {
            background-color: white;
            border-radius: 16px;
            padding: 1.5em 2em;
            margin-bottom: 0.8em;
            > h1 {
                font-size: 22px;
                font-weight: bold;
                margin-bottom: 8px;
            }
            > p {
                font-size: 12px;
                color: rgba(0,0,0,0.4);
                margin-bottom: 2em;
            }
            .content {
                margin-bottom: 1.5em;
                > div {
                    display: flex;
                    align-items: center;
                    margin-bottom: 0.625em;

                    > span {
                        background-repeat: no-repeat;
                        background-size: 100%;
                        background-position: center center;
                        display: block;
                        min-width: 28px;
                        width: 28px;
                        height: 28px;
                        margin-right: 0.3em;
                    }
                    .img {
                        background-image: url(/static/location-rule/Property_1_person_b7014513fa.svg);
                    }

                    .img2 {
                        background-image: url(/static/location-rule/Property_1_time_37cbe010d2.svg);
                    }
                    .img3 {
                        background-image: url(/static/location-rule/Property_1_pass_83f14cb31a.svg);
                    }
                    .img4 {
                        background-image: url(/static/location-rule/Property_1_food_cdb87ec2a3.svg);
                    }
                    .img5 {
                        background-image: url(/static/location-rule/place_795ed1117e.svg);
                    }
                    .img6 {
                        background-image: url(/static/location-rule/Property_1_other_6cf20d6527.svg);
                    }

                    > p {
                        font-size: 14px;
                        > span {
                            color: rgb(153, 153, 153);
                            margin-left: 0.2em;
                        }
                    }
                }
            }
            .food-noti {
                font-size: 12px;
                color: rgb(153, 153, 153);
            }
        }
    }

    .add-post-button {
        margin: 0px auto;
        padding: 0px 23px 0px 26px;
        display: block;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 100px;
        background: rgb(242, 244, 246);
        font-size: 13px;
        height: 40px;
        &::after {
            content: "";
            min-width: 16px;
            min-height: 12px;
            background-image: url(static/arrow_more.svg);
            background-size: 100%;
            display: inline-block;
            margin-left: 3px;
            background-repeat: no-repeat;
            background-position: center center;
        }
    }
`

const LocationRule = () => {
    const dispatch = useDispatch();
    const [locationRules,setLocationRules] = useState(null);
    const [locationCategory,setLocationCategory] = useState([
        '전체','식당·카페','경조사','체육시설','학습시설','쇼핑·마트','영화·공연','숙박시설','오락시설','유흥시설','유원시설','미용실','목욕마사지','종교시설','스포츠관람','기타'
    ])
    const [filter,setFilter] = useState({카테고리:'전체', 시간제한:'전체', 방역패스여부:'전체'});
    const [더보기Clicked,set더보기Clikded] = useState(false);
    const [loading,setLoading] = useState(false);
    const slideRef = useRef<HTMLInputElement>(null);
    const slideLengthRef = useRef<number>(0);
    const autoScrollRef = useRef(null);
    let limitCount = useRef(12);
    const {운영시간모달} = useSelector((state : RootState) => state.modal);
    const {방역패스모달} = useSelector((state : RootState) => state.modal);

    moment.locale('ko');
    const today = moment().format('YYYY.MM.DD') + ' 현재 적용'


    const toLeftSlide = () => {
        if(slideLengthRef.current === 0){
            return;
        }
        slideLengthRef.current -= 100;
        slideRef.current.style.transform = `translate(-${slideLengthRef.current}px)`;
    }
    const toRightSlide = () => {
        if(slideLengthRef.current === 600){
            return;
        }
        slideLengthRef.current += 100;
        slideRef.current.style.transform = `translate(-${slideLengthRef.current}px)`;
    }

    const changeLocation = useCallback((l) => {
        if(l !== '전체'){
            window.removeEventListener('scroll', onScroll);
        } else {
            window.addEventListener('scroll',onScroll);
        }
        const categoryIndex = locationCategory.indexOf(l)+1;
        const selectedCategoryIndex = locationCategory.indexOf(filter.카테고리) +1;
        console.log(categoryIndex);
        if(categoryIndex <= 5){
            slideLengthRef.current = 0;
            slideRef.current.style.transform = `translate(0px)`;
        }
        if(selectedCategoryIndex <= 5 && 5 < categoryIndex && categoryIndex < 12){
            const slideLength = (categoryIndex - 5) * 100;
            slideLengthRef.current = slideLength;
            slideRef.current.style.transform = `translate(-${slideLength}px)`;
        }
        if(selectedCategoryIndex >= 6 && categoryIndex <= 11 && selectedCategoryIndex < categoryIndex){
            const slideLength = (categoryIndex - selectedCategoryIndex) * 100;
            slideLengthRef.current += slideLength;
            slideRef.current.style.transform = `translate(-${slideLengthRef.current}px)`;
        }
        if(selectedCategoryIndex <= 11 && categoryIndex >= 6 && selectedCategoryIndex > categoryIndex){
            const slideLength = (selectedCategoryIndex- categoryIndex) * 100;
            slideLengthRef.current -= slideLength;
            slideRef.current.style.transform = `translate(-${slideLengthRef.current}px)`;
        }
        if(selectedCategoryIndex >= 12 && 5 < categoryIndex && categoryIndex < 12){
            const slideLength = (categoryIndex - 6) * 100;
            slideLengthRef.current = slideLength;
            slideRef.current.style.transform = `translate(-${slideLength}px)`;
        }
        if(categoryIndex >= 12){
            slideLengthRef.current = 600;
            slideRef.current.style.transform = `translate(-600px)`;
        }
        var location = autoScrollRef.current.offsetTop - 10;
        window.scrollTo({top:location,behavior:'smooth'})

        const newLocation = {...filter, 카테고리:l};
        setFilter(newLocation);
    },[setFilter,filter])

    const changeTimeFilterSelected = useCallback((selected) => {
        const newFilter = {...filter,시간제한:selected};
        setFilter(newFilter);
        dispatch(modal.actions.set운영시간(null));
    },[setFilter, dispatch, filter])

    const change방역FilterSelected = useCallback((selected) => {
        const newFilter = {...filter,방역패스여부:selected};
        setFilter(newFilter);
        dispatch(modal.actions.set방역패스(null));
    },[setFilter, dispatch, filter])

    const set운영시간모달 = useCallback(() => {
        dispatch(modal.actions.set운영시간(null));
    },[dispatch])

    const set방역패스모달 = useCallback(() => {
        dispatch(modal.actions.set방역패스(null));
    },[dispatch])

    
    const loadLocationRules = async () => {
        try {
            if(filter.카테고리 === '전체'){
                if(!더보기Clicked){
                    const response = await axios.get('http://localhost:4000/locationRule?_limit=2');
                    let noFilteredLocationRules = response.data;
                    const 카테고리filtered = noFilteredLocationRules;
                    if(filter.시간제한 ==='전체'){
                        const 시간제한filtered = 카테고리filtered;
                        if(filter.방역패스여부==='전체'){
                            const 방역패스여부filtered = 시간제한filtered;
                            return setLocationRules(방역패스여부filtered);
                        }
                        else if(filter.방역패스여부 ==='방역패스 의무 적용 아님'){
                            const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무 적용 아님');
                            return setLocationRules(방역패스여부filtered);
                        }
                        else {
                            const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무');
                            return setLocationRules(방역패스여부filtered);
                        }
                    }
                    else if(filter.시간제한 ==='23시까지 운영'){
                        const 시간제한filtered = 카테고리filtered.filter((l:any,i:any) => l.시간 === '23시까지 운영');
                        if(filter.방역패스여부==='전체'){
                            const 방역패스여부filtered = 시간제한filtered;
                            return setLocationRules(방역패스여부filtered);
                        }
                        else if(filter.방역패스여부 ==='방역패스 의무 적용 아님'){
                            const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무 적용 아님')
                            return setLocationRules(방역패스여부filtered);
                        }
                        else {
                            const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무');
                            return setLocationRules(방역패스여부filtered);
                        }
                    } else {
                        const 시간제한filtered = 카테고리filtered.filter((l:any,i:any) => l.시간 === '운영 시간 제한 없음')
                        if(filter.방역패스여부==='전체'){
                            const 방역패스여부filtered = 시간제한filtered;
                            return setLocationRules(방역패스여부filtered);
                        }
                        else if(filter.방역패스여부 ==='방역패스 의무 적용 아님'){
                            const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무 적용 아님')
                            return setLocationRules(방역패스여부filtered);
                        }
                        else {
                            const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무');
                            return setLocationRules(방역패스여부filtered);
                        }
                    }
                } else {
                    const response = await axios.get(`http://localhost:4000/locationRule?_limit=${limitCount.current}`);
                    let noFilteredLocationRules = response.data;
                    const 카테고리filtered = noFilteredLocationRules;
                    if(filter.시간제한 ==='전체'){
                        const 시간제한filtered = 카테고리filtered;
                        if(filter.방역패스여부==='전체'){
                            const 방역패스여부filtered = 시간제한filtered;
                            return setLocationRules(방역패스여부filtered);
                        }
                        else if(filter.방역패스여부 ==='방역패스 의무 적용 아님'){
                            const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무 적용 아님');
                            return setLocationRules(방역패스여부filtered);
                        }
                        else {
                            const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무');
                            return setLocationRules(방역패스여부filtered);
                        }
                    }
                    else if(filter.시간제한 ==='23시까지 운영'){
                        const 시간제한filtered = 카테고리filtered.filter((l:any,i:any) => l.시간 === '23시까지 운영');
                        if(filter.방역패스여부==='전체'){
                            const 방역패스여부filtered = 시간제한filtered;
                            return setLocationRules(방역패스여부filtered);
                        }
                        else if(filter.방역패스여부 ==='방역패스 의무 적용 아님'){
                            const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무 적용 아님')
                            return setLocationRules(방역패스여부filtered);
                        }
                        else {
                            const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무');
                            return setLocationRules(방역패스여부filtered);
                        }
                    } else {
                        const 시간제한filtered = 카테고리filtered.filter((l:any,i:any) => l.시간 === '운영 시간 제한 없음')
                        if(filter.방역패스여부==='전체'){
                            const 방역패스여부filtered = 시간제한filtered;
                            return setLocationRules(방역패스여부filtered);
                        }
                        else if(filter.방역패스여부 ==='방역패스 의무 적용 아님'){
                            const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무 적용 아님')
                            return setLocationRules(방역패스여부filtered);
                        }
                        else {
                            const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무');
                            return setLocationRules(방역패스여부filtered);
                        }
                    }
                }
                // const 카테고리filtered = noFilteredLocationRules;
                // if(filter.시간제한 ==='전체'){
                //     const 시간제한filtered = 카테고리filtered;
                //     if(filter.방역패스여부==='전체'){
                //         const 방역패스여부filtered = 시간제한filtered;
                //         return setLocationRules(방역패스여부filtered);
                //     }
                //     else if(filter.방역패스여부 ==='방역패스 의무 적용 아님'){
                //         const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무 적용 아님');
                //         return setLocationRules(방역패스여부filtered);
                //     }
                //     else {
                //         const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무');
                //         return setLocationRules(방역패스여부filtered);
                //     }
                // }
                // else if(filter.시간제한 ==='23시까지 운영'){
                //     const 시간제한filtered = 카테고리filtered.filter((l:any,i:any) => l.시간 === '23시까지 운영');
                //     if(filter.방역패스여부==='전체'){
                //         const 방역패스여부filtered = 시간제한filtered;
                //         return setLocationRules(방역패스여부filtered);
                //     }
                //     else if(filter.방역패스여부 ==='방역패스 의무 적용 아님'){
                //         const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무 적용 아님')
                //         return setLocationRules(방역패스여부filtered);
                //     }
                //     else {
                //         const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무');
                //         return setLocationRules(방역패스여부filtered);
                //     }
                // } else {
                //     const 시간제한filtered = 카테고리filtered.filter((l:any,i:any) => l.시간 === '운영 시간 제한 없음')
                //     if(filter.방역패스여부==='전체'){
                //         const 방역패스여부filtered = 시간제한filtered;
                //         return setLocationRules(방역패스여부filtered);
                //     }
                //     else if(filter.방역패스여부 ==='방역패스 의무 적용 아님'){
                //         const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무 적용 아님')
                //         return setLocationRules(방역패스여부filtered);
                //     }
                //     else {
                //         const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무');
                //         return setLocationRules(방역패스여부filtered);
                //     }
                // }
            } else {
                const response = await axios.get('http://localhost:4000/locationRule');
                const 카테고리filtered = response.data.filter((l:any,i:any) => l.카테고리 === filter.카테고리);
                if(filter.시간제한 ==='전체'){
                    const 시간제한filtered = 카테고리filtered;
                    if(filter.방역패스여부==='전체'){
                        const 방역패스여부filtered = 시간제한filtered;
                        return setLocationRules(방역패스여부filtered);
                    }
                    else if(filter.방역패스여부 ==='방역패스 의무 적용 아님'){
                        const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무 적용 아님');
                        return setLocationRules(방역패스여부filtered);
                    }
                    else {
                        const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무');
                        return setLocationRules(방역패스여부filtered);
                    }
                }
                else if(filter.시간제한 ==='23시까지 운영'){
                    const 시간제한filtered = 카테고리filtered.filter((l:any,i:any) => l.시간 === '23시까지 운영');
                    if(filter.방역패스여부==='전체'){
                        const 방역패스여부filtered = 시간제한filtered;
                        return setLocationRules(방역패스여부filtered);
                    }
                    else if(filter.방역패스여부 ==='방역패스 의무 적용 아님'){
                        const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무 적용 아님')
                        return setLocationRules(방역패스여부filtered);
                    }
                    else {
                        const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무');
                        return setLocationRules(방역패스여부filtered);
                    }
                } else {
                    const 시간제한filtered = 카테고리filtered.filter((l:any,i:any) => l.시간 === '운영 시간 제한 없음')
                    if(filter.방역패스여부==='전체'){
                        const 방역패스여부filtered = 시간제한filtered;
                        return setLocationRules(방역패스여부filtered);
                    }
                    else if(filter.방역패스여부 ==='방역패스 의무 적용 아님'){
                        const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무 적용 아님')
                        return setLocationRules(방역패스여부filtered);
                    }
                    else {
                        const 방역패스여부filtered = 시간제한filtered.filter((l:any,i:any) => l.방역패스 ==='방역패스 의무');
                        return setLocationRules(방역패스여부filtered);
                    }
                }
            }
        } catch (e) {
                console.error(e);
        }
    }
    const onScroll = useCallback(async() => {
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement
        if (scrollTop + clientHeight >= scrollHeight - 80) {
            limitCount.current += 12;
            console.log('엥?');
            setLoading(true);
            try{
            const response = await axios.get(`http://localhost:4000/locationRule?_limit=${limitCount.current}`);
            const end = response.data.length;
            setLocationRules(response.data);
            if(end === 37){
                limitCount.current = 37;
                window.removeEventListener('scroll', onScroll);
                console.log('끝')
                return;
            }
            } catch(e){
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
    },[])


    const addPost = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/locationRule?_limit=${limitCount.current}`);
            setLocationRules(response.data);
            set더보기Clikded(true);
            window.addEventListener('scroll', onScroll);
        } catch (e){
            console.error(e);
        }
    }

    useEffect(() => {
        loadLocationRules();
    },[filter])

    return(
        <LocationRuleWrapper >
            <Template>
                <div className="location-rule-header" ref={autoScrollRef}>
                    <h1 className="title">
                        장소별 수칙
                    </h1>
                    <div className="location-rule-filter-wrapper">
                        <div className="filter-time">
                            <span onClick={set운영시간모달}>{filter.시간제한 === '전체' ? '전체 운영 시간' : filter.시간제한}</span>
                            <span className="filter-icon"></span>
                        </div>
                        <div className="filter-pass">
                            <span onClick={set방역패스모달}>{filter.방역패스여부 === '전체' ? '방역패스 전체' : filter.방역패스여부}</span>
                            <span className="filter-icon"></span>
                        </div>
                        {운영시간모달 && 
                        <div className="filter-time-list">
                            <div className="filter-time-list-wrapper">
                                <p className={ filter.시간제한==='전체' ? 'filter-time-selected': ''} onClick={() => changeTimeFilterSelected('전체')}>전체</p>
                                <p className={ filter.시간제한==='운영 시간 제한 없음' ? 'filter-time-selected': ''} onClick={() => changeTimeFilterSelected('운영 시간 제한 없음')}>시간 제한 없음</p>
                                <p className={ filter.시간제한==='23시까지 운영' ? 'filter-time-selected': ''} onClick={() => changeTimeFilterSelected('23시까지 운영')}>23시까지 운영</p>
                            </div>
                        </div>}
                        {방역패스모달 && 
                        <div className="filter-방역-list">
                            <div className="filter-방역-list-wrapper">
                                <p className={ filter.방역패스여부==='전체' ? 'filter-방역-selected': ''} onClick={() => change방역FilterSelected('전체')}>전체</p>
                                <p className={ filter.방역패스여부==='방역패스 의무' ? 'filter-방역-selected': ''} onClick={() => change방역FilterSelected('방역패스 의무')}>방역패스 적용</p>
                                <p className={ filter.방역패스여부==='방역패스 의무 적용 아님' ? 'filter-방역-selected': ''} onClick={() => change방역FilterSelected('방역패스 의무 적용 아님')}>방역패스 미적용</p>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="location-rule">
                    <div className="left-arrow" onClick={toLeftSlide}></div>
                    <div className="location-rule-container">
                        <div className="location-rule-list" ref={slideRef}>
                        {locationCategory.map((l,i) => {
                            i+=1;
                            return(
                            <div className={(filter.카테고리 === l) ? 'location-rule-item selected' :'location-rule-item'} key={i} onClick={() => changeLocation(l)}>
                                <div className={`location-img img${i}`}>
                                </div>
                                <span>{l}</span>
                            </div>
                            )
                        })}
                        </div>
                    </div>
                    <div className="right-arrow" onClick={toRightSlide}></div>
                </div>

                <div className="location-rule-cards">
                    <div className="noti">
                        <span className="noti-img"></span>
                        <p>전국 사적모임 8인 제한 + 모든 시설 방역 패스 해제</p>
                    </div>
                    <div className="location-rule-cards-list">

                        {locationRules?.map((l:any,i:any) => {
                                return (
                                <div className="location-rule-cards-item" key={i}>
                                    <h1>{l.장소}</h1>
                                    <p>{today}</p>
                                    <div className="content">
                                        <div>
                                            <span className="img"></span>
                                            <p>{l.접종여부}
                                                <span>{l?.접종여부추가사항}
                                                </span>
                                            </p>
                                        </div>
                                        <div>
                                            <span className="img2"></span>
                                            <p>{l.시간}
                                                <span>{l?.시간추가사항}
                                                </span>
                                            </p>
                                        </div>
                                        <div>
                                            <span className="img3"></span>
                                            <p>{l.방역패스}
                                            </p>
                                        </div>
                                        {l.취식여부 && <div>
                                            <span className="img4"></span>
                                            <p>{l.취식여부}
                                                <span>{l?.취식여부추가사항}
                                                </span>
                                            </p>
                                        </div>}
                                        <div>
                                            <span className="img5"></span>
                                            <p>{l.범위}
                                            </p>
                                        </div>
                                        {l.주의사항 && <div>
                                            <span className="img6"></span>
                                            <p>{l.주의사항}
                                                <span>{l?.주의사항추가사항}
                                                </span>
                                            </p>
                                        </div>}
                                    </div>
                                    <div className="food-noti">{l?.추가주의사항}</div>
                                </div>
                                )
                            }
                        )}
                    </div>
                    {!더보기Clicked && filter.카테고리 === '전체' && <div>
                        <button className="add-post-button" onClick={addPost}>더보기</button>   
                    </div>}
                </div>
                {loading && <Spinner />}
            </Template>
        </LocationRuleWrapper>    
    )
}



export default LocationRule;