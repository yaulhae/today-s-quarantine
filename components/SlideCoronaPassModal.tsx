import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../reducers";
import modal from "../reducers/modal";

const SlideCoronaPassModalWrapper = styled.div<{quarantineModal:boolean}>`
    .background {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        transition: all 1s;
        z-index: -1;
        z-index: ${props => props.quarantineModal && '100'};
        opacity: 0;
        opacity: ${props => props.quarantineModal && '1'};
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
        transform: ${props => props.quarantineModal && 'translateY(0)'};
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

        }
    }
`

const SlideCoronaPassModal = () => {
    const dispatch = useDispatch();
    const {quarantineModal} = useSelector((state: RootState) => state.modal)
    
    const setQuarantineModal = useCallback(() => {
        dispatch(modal.actions.setCoronaPassModal(null))
    },[dispatch])

    return(
        <SlideCoronaPassModalWrapper quarantineModal={quarantineModal}>
            <div className="background" onClick={setQuarantineModal}>
            </div>
            <div className="slide-modal-wrapper">
                <div className="title-wrapper">
                    <div className="left">
                        <div className="title-icon"></div>
                        <h1>방역패스 수칙</h1>
                    </div>
                    <div className="right" onClick={setQuarantineModal}>
                        <div className="X-icon"></div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="description-1">
                        <h2>전국 모든 시설에서 방역패스를 확인하지 않음</h2>
                        <p>이 전까지 방역패스 의무 적용 시설이었으나, 22년 3월 1일부로 방역패스를 확인하지 않는 시설:</p>
                        <p>식당·카페 등 다중이용시설 11종 방역패스 미적용</p>
                        <p>의료기관, 요양병원 등 감염취약시설 방역패스 미적용</p>
                        <p>50인 이상 300인 미만 대규모 행사 방역패스 미적용</p>
                    </div>
                </div>
            </div>
        </SlideCoronaPassModalWrapper>
    )
}

export default SlideCoronaPassModal;