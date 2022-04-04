import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../reducers";
import modal from "../reducers/modal";

const SlideNewsModal2Wrapper = styled.div<{소식2모달:boolean}>`
    .background {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: -1;
        z-index: ${props => props.소식2모달 && '100'};
        opacity: 0;
        opacity: ${props => props.소식2모달 && '1'};
        transition: all 0.1s;
    }
    .slide-modal-wrapper {
        padding: 1.5em 2em 4em 2em;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        background: white;
        z-index: 1000;
        transform: translateY(100%);
        transform: ${props => props.소식2모달 && 'translateY(0)'};
        transition: all 0.1s;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;

        .title-wrapper {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2.5em;
            .left {
                display: flex;
                align-items: center;
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
                    font-size: 22px;
                    font-weight: 600;
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
            > p {
                font-size: 0.9rem;
                font-weight: 300;
                margin-bottom: 0.2em;
            }
            .description-1 {
                margin-bottom: 2em;
                >h2 {
                    margin-top: 1.5em;
                    font-weight: 500;
                    margin-bottom: 0.4em;
                }
                >p {
                    font-size: 0.9rem;
                    font-weight: 300;
                    margin-bottom: 0.5em;
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

            .description-2 {
                margin-bottom: 1.5em;
                .description-title {
                    margin-bottom: 0.3em;
                    > h2 {
                        font-weight: 500;
                    }
                }
                >p {
                    font-size: 0.9rem;
                    margin-bottom: 0.4em;
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
            > a {
                color: #4880ee;
                font-size: 15px;
                font-weight: 300;
            }
        }
    }
`

const SlideNewsModal2 = () => {
    const dispatch = useDispatch();
    const {소식2모달} = useSelector((state: RootState) => state.modal)
    
    const change소식2Modal = useCallback(() => {
        dispatch(modal.actions.set소식2모달(null))
    },[dispatch])

    return(
        <SlideNewsModal2Wrapper 소식2모달={소식2모달}>
            <div className="background" onClick={change소식2Modal}>
            </div>
            <div className="slide-modal-wrapper">
                <div className="title-wrapper">
                    <div className="left">
                        <h1>3월 21일부터 해외입국자 격리 면제(접종완료자에 한해)</h1>
                    </div>
                    <div className="right" onClick={change소식2Modal}>
                        <div className="X-icon"></div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <p>✔️ 접종여부 관계없이 7일 격리 → 3월 21일부터 접종 완료자 7일 격리 면제</p>
                    <p>✔️ 4월부터 해외입국자 방역교통망 의무 이용 폐지</p>
                    <div className="description-1">
                        <h2>접종 완료 기준</h2>
                        <p>국내와 해외에서 접종을 완료하고 접종 이력이 등록되어 있어야 함 (해외에서 백신을 접종한 경우 보건소를 통해 해외 접종 완료 이력을 제출 할 수 있음)</p>
                        <p>2차 접종(얀센은 1차) 후 14일이 경과 180일 미만인 경우와 3차 접종을 한 경우</p>
                    </div>
                    <div className="description-2">
                        <div className="description-title">
                            <h2>격리 면제 제외 국가</h2>
                        </div>
                        <p>파키스탄, 우즈베키스탄, 우크라이나, 미얀마</p>
                    </div>
                    <a href='https://m.yna.co.kr/amp/view/AKR20220311069500530' target="_blank" rel="noreferrer">관련기사보기&#62;</a>
                </div>
            </div>
        </SlideNewsModal2Wrapper>
    )
}

export default SlideNewsModal2;