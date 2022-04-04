import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import { RootState } from "../reducers";
import modal from "../reducers/modal";

const SlidePeopleModalWrapper = styled.div<{limitPeopleModal:boolean}>`
    .background {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: -1;
        z-index: ${props => props.limitPeopleModal && '100'};
        opacity: 0;
        opacity: ${props => props.limitPeopleModal && '1'};
        transition: all 0.4s;
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
        transform: ${props => props.limitPeopleModal && 'translateY(0)'};
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
            .description-1 {
                margin-bottom: 2em;
                >h2 {
                    font-weight: 500;
                    margin-bottom: 0.4em;
                }
                >p {
                    font-size: 0.9rem;
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

            .description-2 {
                .description-title {
                    margin-bottom: 0.3em;
                    > h2 {
                        font-size: 15px;
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
        }
    }
`

const SlidePeopleModal = () => {
    const dispatch = useDispatch();
    const {limitPeopleModal} = useSelector((state: RootState) => state.modal);
    let [modalShow,setModalShow] = useState(false);
    const peopleModal = useCallback(() => {
        setModalShow(false);
        setTimeout(() => dispatch(modal.actions.setPeoPleModal(null)),400);
    },[dispatch])

    useEffect(() => {
        setTimeout(() => {setModalShow(true)}, 4)
    },[]);

    return(
        <SlidePeopleModalWrapper limitPeopleModal={modalShow ? limitPeopleModal : false}>
            <div className="background" onClick={peopleModal}>
            </div>
            <div className="slide-modal-wrapper">
                <div className="title-wrapper">
                    <div className="left">
                        <div className="title-icon"></div>
                        <h1>사적모임 인원제한 수칙</h1>
                    </div>
                    <div className="right" onClick={peopleModal}>
                        <div className="X-icon"></div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="description-1">
                        <h2>사적모임 8인제한</h2>
                        <p>접종여부 관계없이 전국 8인까지 가능</p>
                    </div>
                    <div className="description-2">
                        <div className="description-title">
                            <h2>⚠️ 예외적 허용</h2>
                        </div>
                        <p>주공간이 동일한 가족 등이 모이는 경우</p>
                        <p>아동(만 12세 이하), 노인, 장애인 등 돌봄이 필요한 경우</p>
                        <p>임종 가능성이 있어 가족/지인 등이 모이는 경우</p>
                        <p>다중이용시설 등의 진행요원, 종사자 등 &#40;단, 유흥종사자는 포함&#41;</p>
                    </div>
                </div>
            </div>
        </SlidePeopleModalWrapper>
    )
}

export default SlidePeopleModal;