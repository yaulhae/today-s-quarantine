import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../reducers";
import modal from "../reducers/modal";

const SlideEntryPeopleModalWrapper = styled.div<{해외입국자모달:boolean}>`
    .slide-modal-wrapper {
        padding: 3.5em 2em 1em 2em;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        transform: translateY(100%);
        transform: ${props => props.해외입국자모달 && 'translateY(0)'};
        z-index: 0;
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
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 0.2em;
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
                .left {
                    .people-face-icon {
                        background-image: url(static/ico_modal_pcr_3_39b6ac6c27.svg);
                        width: 44px;
                        height: 44px;
                        background-repeat: no-repeat;
                        background-size: 100%;
                        background-position: center top;
                        margin-right: 1em;
                        margin-top: 0.4em;
                    }
                }
                .right{
                    .description-title {
                    margin-bottom: 0.5em;
                        > h2 {
                            font-size: 20px;
                            font-weight: 600;
                        }
                    }
                        > button {
                            font-weight: 400;
                            font-size: 14px;
                            padding: 11px 16px;
                            border-radius: 5px;
                            border: 1px solid rgba(0, 0, 0, 0.12);
                            color: rgba(0, 0, 0, 0.7);
                        }
                }
            }

            .description-3 {
                margin-bottom: 2em;
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
                        margin-top: 0.5em;
                    }
                }
                .right{
                    .description-title {
                    margin-bottom: 0.5em;
                        > h2 {
                            font-size: 20px;
                            font-weight: 600;
                        }
                    }
                    >p {
                        font-size: 0.9rem;
                        margin-bottom: 0.7em;
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
            .description-4 {
                margin-bottom: 2em;
                display: flex;
                .left {
                    .people-face-icon {
                        background-image: url(static/ico_modal_abroad_2_b3bc458b78.svg);
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
                            font-weight: 600;
                        }
                    }
                    >p {
                        font-size: 0.9rem;
                        margin-bottom: 0.7em;
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
                    >p:nth-child(3){
                        margin-bottom: 0;
                    }
                    a {
                        color: rgb(72, 128, 238);
                        text-decoration: underline;
                        font-size: 14px;
                    }
                }
            }
        }
    }
`

const SlideEntryPeopleModal = () => {
    const dispatch = useDispatch();
    const {해외입국자모달} = useSelector((state: RootState) => state.modal)
    
    const change해외입국자Modal = useCallback(() => {
        dispatch(modal.actions.set해외입국자모달(null))
    },[dispatch])

    const changePcr확인서모달 = useCallback(() => {
        dispatch(modal.actions.setPcr확인서모달(null))
    },[dispatch])

    return(
        <SlideEntryPeopleModalWrapper 해외입국자모달={해외입국자모달}>
            <div className="slide-modal-wrapper">
                <div className="title-wrapper">
                    <div className="left">
                        <h1>해외입국자 <br/>방역수칙</h1>
                        <p>2022년 03월 21일 - 현재</p>
                    </div>
                    <div className="right" onClick={change해외입국자Modal}>
                        <div className="X-icon"></div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="description-1">
                        <div className="noti-icon"></div>
                        <h2>3월 21일부터 적용된 해외입국자 방역수칙</h2>
                    </div>
                    <div className="description-2">
                        <div className="left">
                            <div className="people-face-icon"></div>
                        </div>
                        <div className="right">
                            <div className="description-title">
                                <h2>PCR 음성확인서 소지</h2>
                            </div>
                            <button onClick={changePcr확인서모달}>입국용 PCR 음성확인서 기준 &#62;</button>
                        </div>
                    </div>
                    <div className="description-3">
                        <div className="left">
                            <div className="people-face-icon"></div>
                        </div>
                        <div className="right">
                            <div className="description-title">
                                <h2>격리면제 (접종 완료자에 한해)</h2>
                            </div>
                            <p>3월21일부터 국내 입국하는 국내 예방접종자와 해외 접종자 중 국내 보건소에서 접종이력을 등록한 자는 격리 면제</p>
                            <p>4월1일부터 국내에서 접종이력을 등록하지 않은 해외 예방접종완료자도 격리 면제 가능</p>
                            <p>접종완료자: 2차 접종(얀센은 1차) 후 14일이 경과 180일 미만인 경우와 3차 접종을 한 경우</p>
                            <p>미접종자의 경우 7일 격리</p>
                            <p>파키스탄, 우즈베키스탄, 우크라이나, 미얀마로부터 입국하는 경우 접종여부 관계없이 7일 격리</p>
                        </div>
                    </div>
                    <div className="description-4">
                        <div className="left">
                            <div className="people-face-icon"></div>
                        </div>
                        <div className="right">
                            <div className="description-title">
                                <h2>방역교통망 의무 이용</h2>
                            </div>
                            <p>공항에서 이동 시 자차 또는 방역 교통망을 의무적으로 이용해야 함</p>
                            <p>4월1일부터 해외입국자 방역 교통망 의무 이용 폐지</p>
                            <a href="http://nqs.kdca.go.kr/nqs/quaStation/gimhae.do?gubun=notice&fromMainYn=Y&ctx=BB1&contentid=225955" rel="noreferrer" target='_blank'>질병관리청&#62;방역교통망안내</a>
                        </div>
                    </div>
                </div>
            </div>
        </SlideEntryPeopleModalWrapper>
    )
}

export default SlideEntryPeopleModal;