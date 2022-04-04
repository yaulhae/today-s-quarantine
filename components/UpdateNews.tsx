import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Template from "../common/Templete";
import { RootState } from "../reducers";
import modal from "../reducers/modal";

const UpdateNewsWrapper = styled.div`
    .update-news {
        background-color: white;
        border-radius: 16px;
        padding: 1em 1.5em;
        margin-bottom: 2.5em;
        height: 56px;
        height: ${props => props.새로운소식모달 && '230px'};
        transition: all 0.2s;
        .update-news-wrapper {
            cursor: pointer;
            > p {
                float: left;
                font-size: 15px;
                animation-duration: 3s;
                animation-name: slidein;
                animation-iteration-count: infinite;
            }
            button {
                margin-left: auto;
                display: block;
                width: 24px;
                height: 24px;
                background-image: url(/static/notice_arrow.svg);
                background-position: center center;
                background-repeat: no-repeat;
                background-size: 32px 28px;
                transform: rotate(180deg);
            }
        }
    }
    .news-wrapper {
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 1em;
            border-bottom: 1px solid rgba(0,0,0,0.1);

            p {
                font-weight: 500;
            }
        }
        > p {
            font-size: 16px;
            padding: 0.8em 0;
            font-weight: 400;
            cursor: pointer;
        }
        > p :not(:last-child) {
            border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        button {
                margin-left: auto;
                display: block;
                width: 24px;
                height: 24px;
                background-image: url(/static/notice_arrow.svg);
                background-position: center center;
                background-repeat: no-repeat;
                background-size: 32px 28px;
                transform: rotate(180deg);
        }
    }

    @keyframes slidein {
        0% {
            transform: translateY(10px);
            opacity: 0;
        }

        30% {
            transform: translateY(0);
            opacity: 1;
        }

        95% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
`

const UpdateNews = () => {
    const dispatch = useDispatch();
    const {새로운소식모달} = useSelector((state : RootState) => state.modal);
    const [selectedNews, setSelectedNews] = useState('news1');
    const [delay, setDelay] = useState(3000);

    function handleDelayChange(n : number) {
        setDelay(n);
    }


    function useInterval(callback : any, delay : any) {
        const savedCallback = useRef();
      
        useEffect(() => {
          savedCallback.current = callback;
        });
      
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
      
          let id = setInterval(tick, delay);
          return () => clearInterval(id);
        }, [delay]);
    }

    useInterval(() => {
    if(selectedNews==='news1'){
        return setSelectedNews('news2');
    } else if(selectedNews==='news2'){
        return setSelectedNews('news3');
    } else if(selectedNews==='news3'){
        return setSelectedNews('news1');
    }},delay)
    

    const change새로운소식모달 = useCallback(() => {
        if(새로운소식모달){
            setDelay(3000);
        } else {
            setDelay(10000000);
        }
        dispatch(modal.actions.set새로운소식모달(null))
    },[dispatch, 새로운소식모달,setDelay])

    const change소식1Modal = useCallback(() => {
        dispatch(modal.actions.set소식1모달(null))
    },[dispatch])

    const change소식2Modal = useCallback(() => {
        dispatch(modal.actions.set소식2모달(null))
    },[dispatch])

    const change소식3Modal = useCallback(() => {
        dispatch(modal.actions.set소식3모달(null))
    },[dispatch])

    return(
        <UpdateNewsWrapper 새로운소식모달={새로운소식모달}>
            <Template>
                {/* <div className="update-news">
                    <div className="update-news-wrapper">
                        <p>새로운 소식</p>
                        <button></button>
                    </div>
                    <div className={selectedNews==='news1' ?  'update-news-wrapper news1' : 'update-news-wrapper'}>
                        <p>3월 21일부터 사적모임 8인으로 완화 (운영시간 23시 유지)</p>
                        <button></button>
                    </div>
                    <div className={selectedNews==='news2' ?  'update-news-wrapper news2' : 'update-news-wrapper'}>
                        <p>3월 21일부터 해외입국자 격리 면제 (접종완료자에 한해)</p>
                        <button></button>
                    </div>
                    <div className={selectedNews==='news3' ?  'update-news-wrapper news3' : 'update-news-wrapper'}>
                        <p>사이트 업데이트 내역</p>
                        <button></button>
                    </div>
                </div> */}
                <div className="update-news">
                    {!새로운소식모달 ? <div className='update-news-wrapper' onClick={change새로운소식모달}>
                        {selectedNews ==='news1' ? <p>3월 21일부터 사적모임 8인으로 완화 (운영시간 23시 유지)</p> :
                        selectedNews === 'news2' ?
                        <p>3월 21일부터 해외입국자 격리 면제 (접종완료자에 한해)</p> :
                        <p>사이트 업데이트 내역</p>}
                        <button></button>
                    </div> : (
                        <div className='news-wrapper'>
                            <div className="header">
                                <p>새로운 소식</p>        
                                <button onClick={change새로운소식모달}></button>      
                            </div>               
                            <p onClick={change소식1Modal}>3월 21일부터 사적모임 8인으로 완화 (운영시간 23시 유지)</p> 
                            <p onClick={change소식2Modal}>3월 21일부터 해외입국자 격리 면제 (접종완료자에 한해)</p> 
                            <p onClick={change소식3Modal}>사이트 업데이트 내역</p>
                        </div>)}
                </div>
            </Template>
        </UpdateNewsWrapper>
    )
}

export default UpdateNews;