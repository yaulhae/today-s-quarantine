import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../reducers";
import modal from "../reducers/modal";

const SlideContactPeopleModalWrapper = styled.div<{접촉자모달:boolean}>`
    .background {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        opacity: ${props => props.접촉자모달 && '1'};
        z-index: -1;
        z-index: ${props => props.접촉자모달 && '100'};
        transition: all 0.1s;
    }
    .slide-modal-wrapper {
        padding: 3.5em 2em 1em 2em;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        transform: translateY(100%);
        transform: ${props => props.접촉자모달 && 'translateY(0)'};
        z-index: 1000;
        transition: all 0.3s;
        background: white;
        overflow-y: auto;
        height: 100vh;

        .title-wrapper {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2.5em;
            .left {
                .title-icon {
                    background-image: url(/static/modal/modal_ico_person_9565d9bf81.svg);
                    width: 27px;
                    height: 27px;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: center center;
                    margin-right: 0.4em;
                }
                >h1 {
                    font-size: 30px;
                    font-weight: 800;
                    line-height: 1.2;
                }
                >p {
                    color: rgba(0, 0, 0, 0.35);
                    font-size: 12px;
                }
            }

            .right {
                .X-icon {
                    background-image: url(/static/modal/close-icon.svg);
                    width: 27px;
                    height: 27px;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: center center;
                    cursor: pointer;
                }
            }
        }

        .content-wrapper {
            .description-1 {
                display: flex;
                align-items: center;
                padding-bottom: 0.5em;
                border-bottom: 1px solid black;
                margin-bottom: 2em;
                >h2 {
                    font-size: 15px;
                    font-weight: 500;
                    margin-bottom: 0.2em;
                }
                .noti-icon {
                    width: 25px;
                    height: 25px;
                    background-image: url(static/modal_noti.svg);
                    background-size: 19px;
                    background-position: 0px center;
                    background-repeat: no-repeat;
                }
            }
            .description-2-title,
            .description-3-title,
            .description-4-title {
                font-size: 18px;
                margin-bottom: 0.5em;
                font-weight: bold;
            }

            .description-2 {
                margin-bottom: 2em;
                border-bottom: 1px solid rgba(0,0,0,0.07);
                padding-bottom: 1.5em;
                display: flex;
                .left {
                    .people-face-icon {
                        background-image: url(static/ico_modal_abroad_1_0e240957a1.svg);
                        width: 44px;
                        height: 44px;
                        background-repeat: no-repeat;
                        background-size: 100%;
                        background-position: center top;
                        margin-right: 1em;
                        margin-top: 0.3em;
                    }
                }
                .right{
                    .description-title {
                    margin-bottom: 0.5em;
                        > h2 {
                            font-size: 20px;
                            font-weight: 500;
                        }
                    }
                    >p {
                        font-size: 0.9rem;
                        margin-bottom: 0.5em;
                        font-weight: 300;
                    }
                    >p::before {
                        content: "";
                        display: inline-block;
                        border-radius: 10px;
                        width: 4px;
                        vertical-align: middle;
                        margin-right: 0.5em;
                        height: 4px;
                        background-color: black;
                    }
                }
            }

            .description-3 {
                margin-bottom: 2em;

                .description-3-wrapper1,
                .description-3-wrapper2 {
                    display: flex;
                    .left {
                        .people-face-icon {
                            background-image: url(static/ico_modal_isolation_1_bda4338d8b.svg);
                            width: 44px;
                            height: 44px;
                            background-repeat: no-repeat;
                            background-size: 100%;
                            background-position: center top;
                            margin-right: 1em;
                            margin-top: 0.3em;
                        }
                    }
                    .right{
                        .description-title {
                        margin-bottom: 0.5em;
                            > h2 {
                                font-size: 20px;
                                font-weight: 500;
                            }
                        }
                        >p {
                            font-size: 0.9rem;
                            margin-bottom: 0.7em;
                            font-weight: 300;
                        }
                        >p:nth-child(3){
                            margin-left: 1em;
                        }
                        >p:nth-child(4){
                            margin-left: 1em;
                        }
                    }
                }
                .description-3-wrapper1 {
                    margin-bottom: 1em;
                }
                .description-3-wrapper2 {
                    padding-bottom: 1em;
                    border-bottom: 1px solid rgba(0,0,0,0.07);
                    .people-face-icon {
                        background-image: url(static/ico_modal_isolation_3_548c759794.svg) !important;
                    }
                    .right {
                        > p {
                            margin-left: 0 !important; 
                        }
                        >p::before {
                        content: "";
                        display: inline-block;
                        border-radius: 10px;
                        width: 4px;
                        vertical-align: middle;
                        margin-right: 0.5em;
                        height: 4px;
                        background-color: black;
                    }
                    }
                }
            }
            

            .description-4 {
                margin-bottom: 2em;
                padding-bottom: 1.5em;
                display: flex;
                .left {
                    .people-face-icon {
                        background-image: url(static/ico_modal_isolation_4_ea71b011a1.svg);
                        width: 44px;
                        height: 44px;
                        background-repeat: no-repeat;
                        background-size: 100%;
                        background-position: center top;
                        margin-right: 1em;
                        margin-top: 0.3em;
                    }
                }
                .right{
                    .description-title {
                    margin-bottom: 0.5em;
                        > h2 {
                            font-size: 20px;
                            font-weight: 500;
                        }
                    }
                    >p {
                        font-size: 0.9rem;
                        margin-bottom: 0.5em;
                        font-weight: 300;
                    }
                    >p::before {
                        content: "";
                        display: inline-block;
                        border-radius: 10px;
                        width: 4px;
                        vertical-align: middle;
                        margin-right: 0.5em;
                        height: 4px;
                        background-color: black;
                    }
                }
            }

        }
    }
`

const SlideContactPeopleModal = () => {
    const dispatch = useDispatch();
    const {접촉자모달} = useSelector((state: RootState) => state.modal)
    
    const change접촉자Modal = useCallback(() => {
        dispatch(modal.actions.set접촉자모달(null))
    },[dispatch])

    return(
        <SlideContactPeopleModalWrapper 접촉자모달={접촉자모달}>
            <div className="background" onClick={change접촉자Modal}>
            </div>
            <div className="slide-modal-wrapper">
                <div className="title-wrapper">
                    <div className="left">
                        <h1>확진자·접촉자<br/>격리 기준</h1>
                        <p>2022년 03월 01일 - 현재</p>
                    </div>
                    <div className="right" onClick={change접촉자Modal}>
                        <div className="X-icon"></div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="description-1">
                        <div className="noti-icon"></div>
                        <h2>3월 1일 업데이트</h2>
                    </div>
                    <h3 className="description-2-title">격리·수동감시 기간</h3>
                    <div className="description-2">
                        <div className="left">
                            <div className="people-face-icon"></div>
                        </div>
                        <div className="right">
                            <div className="description-title">
                                <h2>7일간</h2>
                            </div>
                            <p>최초 확진자의 검체 채취일로부터 기간 산정</p>
                            <p>격리기간 중 공동격리자에서 확진자 발생시 추가 확진자는 검체 채취일로부터 7일 격리, 그 외 공동격리자는 추가 격리없이 최초 확진자 격리해제시에 동시 해제됨</p>
                            <p>7일차 24시(8일차 0시) 해제</p>
                        </div>
                    </div>
                    <h3 className="description-3-title">격리대상</h3>
                    <div className="description-3">
                        <div className="description-3-wrapper1">
                            <div className="left">
                                <div className="people-face-icon"></div>
                            </div>
                            <div className="right">
                                <div className="description-title">
                                    <h2>확진자</h2>
                                </div>
                                <p>접종력과 증상 유무 관계 없이 격리</p>
                            </div>
                        </div>
                        <div className="description-3-wrapper2">
                            <div className="left">
                                <div className="people-face-icon"></div>
                            </div>
                            <div className="right">
                                <div className="description-title">
                                    <h2>감염취약시설 내 밀접접촉자</h2>
                                </div>
                                <p>감염취약시설 3종: 장기요양기관(요양병원, 요양원, 주간보호센터), 정신건강시설, 장애인시설</p>
                                <p>밀접접촉자: 확진자 또는 의심환자와 유증상기에 마스크를 쓰지 않은 채 2m 이내에서 15분이상 대화/식사를 한 사람</p>
                                <p>감염취약시설 내 밀접접촉자는 접종여부 관련없이 격리 대상</p>
                                <p>최초 확진자 격리 해제 전 PCR검사 1회 실시</p>
                            </div>
                        </div>
                    </div>
                    <h3 className="description-4-title">수동감시대상</h3>
                    <div className="description-4">
                        <div className="left">
                            <div className="people-face-icon"></div>
                        </div>
                        <div className="right">
                            <div className="description-title">
                                <h2>확진자의 동거인</h2>
                            </div>
                            <p>접종 여부 상관 없음</p>
                            <p>최초 확진자 검체 채취일로부터 기간 산정</p>
                            <p>수동감시: 스스로 발열, 호흡기 증상을 체크해 변화가 있을 경우 보건소로 연락</p>
                            <p>최초 확진자 격리 해제 전 PCR검사 1회 실시</p>
                        </div>
                    </div>
                
                    
                </div>
            </div>
        </SlideContactPeopleModalWrapper>
    )
}

export default SlideContactPeopleModal;