import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../reducers";
import modal from "../reducers/modal";

const SlideNewsModal1Wrapper = styled.div<{소식1모달:boolean}>`
    .background {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        transition: all 1s;
        z-index: -1;
        z-index: ${props => props.소식1모달 && '100'};
        opacity: 0;
        opacity: ${props => props.소식1모달 && '1'};
    }
    .slide-modal-wrapper {
        padding: 1.5em 2em 3em 2em;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        background: white;
        z-index: 1000;
        transform: translateY(100%);
        transform: ${props => props.소식1모달 && 'translateY(0)'};
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
            .description-1 {
                >h2 {
                    font-weight: 500;
                    margin-bottom: 0.6em;
                }
                >p {
                    font-size: 0.9rem;
                    font-weight: 600;
                    margin-bottom: 0.5em;
                }
                a {
                    font-size: 0.9rem;
                    color:#4880ee;
                }
            }

        }
    }
`

const SlideNewsModal1 = () => {
    const dispatch = useDispatch();
    const {소식1모달} = useSelector((state: RootState) => state.modal)
    
    const change소식1Modal = useCallback(() => {
        dispatch(modal.actions.set소식1모달(null))
    },[dispatch])

    return(
        <SlideNewsModal1Wrapper 소식1모달={소식1모달}>
            <div className="background" onClick={change소식1Modal}>
            </div>
            <div className="slide-modal-wrapper">
                <div className="title-wrapper">
                    <div className="left">
                        <h1>3월 21일부터 사적모임 8인으로 완화 (운영시간 23시 유지)</h1>
                    </div>
                    <div className="right" onClick={change소식1Modal}>
                        <div className="X-icon"></div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="description-1">
                        <p>✔️ ’22.3.21부터</p>
                        <p>✔️ 사적모임 기존 6인 → 8인으로 완화</p>
                        <p>✔️ 23시까지 운영시간 제한 유지</p>
                        <a href='http://ncov.mohw.go.kr/tcmBoardView.do?brdId=&brdGubun=&dataGubun=&ncvContSeq=370666&contSeq=370666&board_id=140&gubun=BDJ'>사회적 거리두기 큰 폭 조정 없이 사적모임 인원 6인→8인으로 소폭 조정 (3.21.~4.3.)</a>
                    </div>
                </div>
            </div>
        </SlideNewsModal1Wrapper>
    )
}

export default SlideNewsModal1;