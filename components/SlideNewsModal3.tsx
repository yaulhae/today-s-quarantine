import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../reducers";
import modal from "../reducers/modal";

const SlideNewsModal3Wrapper = styled.div<{소식3모달:boolean}>`
    .background {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        transition: all 1s;
        z-index: -1;
        z-index: ${props => props.소식3모달 && '100'};
        opacity: 0;
        opacity: ${props => props.소식3모달 && '1'};
    }
    .slide-modal-wrapper {
        padding: 1.5em 2em 1em 2em;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        background: white;
        z-index: 1000;
        transform: translateY(100%);
        transform: ${props => props.소식3모달 && 'translateY(0)'};
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
                    background-image: url(/static/modal/modal_ico_pass_3e2d003158.svg);
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
            max-height: 650px;
            overflow-y: auto;
            .description-0 {
                margin-bottom: 1em;
                >strong {
                    display: block;
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 1.8em;
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
                >p:nth-child(2)::before{
                    display: none;
                }
            }
            .description-1,
            .description-2,
            .description-3,
            .description-4,
            .description-5,
            .description-6,
            .description-7,
            .description-8 {
                margin-bottom: 2em;
                >h2 {
                    font-weight: 500;
                    margin-bottom: 0.6em;
                }
                >p {
                    font-size: 0.9rem;
                    font-weight: 300;
                    margin-bottom: 0.5em;
                }
                /* >p::before {
                    content: "";
                    display: inline-block;
                    border-radius: 10px;
                    width: 4px;
                    vertical-align: middle;
                    margin-right: 0.5em;
                    height: 4px;
                    background-color: black;
                } 
                >p:nth-child(2)::before{
                    display: none;
                } */
            }
            .description-4 {
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
                >p:nth-child(2)::before{
                    display: none;
                } 
                >p:nth-child(6) {
                    margin-bottom: 2em;
                }
                >p:nth-child(6)::before{
                    display: none;
                } 
                >p:nth-child(7)::before{
                    display: none;
                } 
            }
        }
    }
    .mb-2 {
        margin-bottom: 2em !important;
    }
`

const SlideNewsModal3 = () => {
    const dispatch = useDispatch();
    const {소식3모달} = useSelector((state: RootState) => state.modal)
    
    const set소식3모달 = useCallback(() => {
        dispatch(modal.actions.set소식3모달(null))
    },[dispatch])

    return(
        <SlideNewsModal3Wrapper 소식3모달={소식3모달}>
            <div className="background" onClick={set소식3모달}>
            </div>
            <div className="slide-modal-wrapper">
                <div className="title-wrapper">
                    <div className="left">
                        <h1>사이트 업데이트 내역</h1>
                    </div>
                    <div className="right" onClick={set소식3모달}>
                        <div className="X-icon"></div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="description-0">
                        <strong>✔️오늘의 방역의 새로운 업데이트 내역 및 공지사항을 알려드릴게요!</strong>
                        <p>(2022년 3월 21일 업데이트)</p>
                    </div>
                    <div className="description-1">
                        <h2>3월 21일부터 적용되는 방역수칙으로 업데이트 되었어요</h2>
                        <p className="mb-2">3.21(월)부터 기존 6인까지였던 사적모임 제한이 8명까지로 완화되었어요. 또, 해외입국자에 대한 격리지침도 변경(접종완료자 격리면제)되었어요. 이 내용이 사이트 전반에 업데이트 되었으니 확인해보세요.</p>
                        <p>(2022년 3월 5일 업데이트)</p>
                    </div>
                    <div className="description-2">
                        <h2>3월 5일부터 적용되는 방역수칙으로 업데이트 되었어요</h2>
                        <p className="mb-2">3.5(토)부터 기존 운영제한 22시까지였던 시설들의 운영시간이 23시까지로 완화되었어요. 이 내용이 사이트 전반에 업데이트 되었으니 확인해보세요.</p>
                        <p>(2022년 2월 20일 업데이트)</p>
                    </div>
                    <div className="description-3">
                        <h2>2월 19일부터 적용되는 방역수칙으로 업데이트 되었어</h2>
                        <p>2.19(토)부터 3.13(일)까지 약 3주간의 새로운 방역수칙이 발표되었어요. 이 내용이 사이트 전반에 업데이트 되었으니 확인해보세요.</p>
                    </div>
                    <div className="description-4">
                        <h2>상황별 수칙이 추가되었어요 🎉</h2>
                        <p>드디어 많은 분들이 요청해 주신 정보를 추가했어요!</p>
                        <p>해외입국자 방역수칙</p>
                        <p>확진자·접촉자 격리기준</p>
                        <p>PCR검사 기준</p>
                        <p>앞으로는 위 내용에 대한 최신 정보도 오늘의 방역에서 확인해보세요.</p>
                        <p>(2022년 2월 7일 업데이트)</p>
                    </div>
                    <div className="description-5">
                        <h2>2월 7일부터 적용되는 방역수칙으로 업데이트 되었어요</h2>
                        <p>정부가 현행 사회적 거리두기 방안을 2.20(일)까지 2주 연장하기로 했어요. 그리고 몇 가지 시설에 대해서는 추가적인 방역수칙이 적용되었어요. 사이트 전반에 이 내용이 업데이트 되었으니 확인해보세요.</p>
                    </div>
                    <div className="description-6">
                        <h2>달라진 PCR 검사 체계도 확인해보세요</h2>
                        <p>2월 3일부터 고위험군은 현장에서 바로 PCR 검사를 실시하고, 저위험군은 자가검사키트 현장 검사를 하는 방식으로 검사 체계가 바뀌었어요. 새로운소식 영역에 이 내용도 추가해두었어요.</p>
                    </div>
                    <div className="description-7">
                        <h2>미용실, 유원시설 카테고리가 새로 추가되었어요</h2>
                        <p>이제 미용실, 이용원, 키즈카페의 방역수칙도 확인할 수 있어요!</p>
                    </div>
                    <div className="description-8">
                        <h2>자세한 용어설명이 추가되었어요</h2>
                        <p>“접종완료자 등”이 무슨 뜻인지 이해하기 힘드셨죠? 저도 이해하기 어려웠어요...장소별 수칙 내 각 카드의 하단에 용어 설명을 해두었어요.</p>
                    </div>
                </div>
            </div>
        </SlideNewsModal3Wrapper>
    )
}

export default SlideNewsModal3;