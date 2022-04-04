import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../reducers";
import modal from "../reducers/modal";

const SlidePcrModalWrapper = styled.div<{pcr모달:boolean}>`
    .background {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        opacity: ${props => props.pcr모달 && '1'};
        z-index: -1;
        z-index: ${props => props.pcr모달 && '100'};
        transition: all 0.1s;
    }
    .slide-modal-wrapper {
        padding: 3.5em 2em 1em 2em;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        transform: translateY(100%);
        transform: ${props => props.pcr모달 && 'translateY(0)'};
        z-index: 1000;
        transition: all 0.3s;
        background: white;
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

            .description-2 {
                margin-bottom: 2em;
                display: flex;
                align-items: center;
                .left {
                    .people-face-icon {
                        background-image: url(static/ico_modal_pcr_1_9bf838222d.svg);
                        width: 44px;
                        height: 44px;
                        background-repeat: no-repeat;
                        background-size: 100%;
                        background-position: center top;
                        margin-right: 1em;
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
                        margin-bottom: 0.2em;
                        font-weight: 300;
                    }
                }
            }

            .description-3 {
                margin-bottom: 2em;
                display: flex;
                .left {
                    .people-face-icon {
                        background-image: url(static/ico_modal_pcr_2_a9b8befaa1.svg);
                        width: 44px;
                        height: 44px;
                        background-repeat: no-repeat;
                        background-size: 100%;
                        background-position: center top;
                        margin-right: 1em;
                        margin-top: 0.5em;
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
        }
    }
`

const SlidePcrModal = () => {
    const dispatch = useDispatch();
    const {pcr모달} = useSelector((state: RootState) => state.modal)
    
    const changePcrModal = useCallback(() => {
        dispatch(modal.actions.setPcr모달(null))
    },[dispatch])

    return(
        <SlidePcrModalWrapper pcr모달={pcr모달}>
            <div className="background" onClick={changePcrModal}>
            </div>
            <div className="slide-modal-wrapper">
                <div className="title-wrapper">
                    <div className="left">
                        <h1>PCR<br/>검사 기준</h1>
                        <p>2022년 03월 14일 - 현재</p>
                    </div>
                    <div className="right" onClick={changePcrModal}>
                        <div className="X-icon"></div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="description-1">
                        <div className="noti-icon"></div>
                        <h2>3월 14일부터 전문가용 신속항원검사 양성 시 의사 판단하에 확진으로 간주하여 PCR검사 양성 확진과 동일하게 관리</h2>
                    </div>
                    <div className="description-2">
                        <div className="left">
                            <div className="people-face-icon"></div>
                        </div>
                        <div className="right">
                            <div className="description-title">
                                <h2>고위험군만 PCR 검사 가능</h2>
                            </div>
                            <p>고위험군이란? 역학연관자, 의사유소견자, 60세이상, 자가검사키트양성, 요양병원 등</p>
                        </div>
                    </div>
                    <div className="description-3">
                        <div className="left">
                            <div className="people-face-icon"></div>
                        </div>
                        <div className="right">
                            <div className="description-title">
                                <h2>저위험군 코로나 검사 방법</h2>
                            </div>
                            <p>저위험군이 코로나 검사를 받는 2가지 방법</p>
                            <p>1. 선별진료소(무료)에서 자가검사키트로 검사</p>
                            <p>2. 호흡기 클리닉(5천원)에서 전문가용 신속항원검사를 통해 코로나 검사 가능</p>
                        </div>
                    </div>
                </div>
            </div>
        </SlidePcrModalWrapper>
    )
}

export default SlidePcrModal;