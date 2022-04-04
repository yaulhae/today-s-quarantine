import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../reducers";
import modal from "../reducers/modal";

const SlidePcrConfirmModalWrapper = styled.div<{pcr확인서모달:boolean}>`
    .background {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: -1;
        z-index: ${props => props.pcr확인서모달 && '1001'};
        opacity: 0;
        opacity: ${props => props.pcr확인서모달 && '1'};
        transition: all 0.4s;
    }
    .slide-modal-wrapper {
        padding: 1.5em 2em 2em 2em;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        background: white;
        z-index: 1002;
        transform: translateY(100%);
        transform: ${props => props.pcr확인서모달 && 'translateY(0)'};
        transition: all 0.4s;
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
            }

            .description-2 {
                margin-bottom: 3em;
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
                font-size: 15px;
                color:#4880ee;
            }
        }
    }
`

const SlidePcrConfirmModal = () => {
    const dispatch = useDispatch();
    const {pcr확인서모달} = useSelector((state: RootState) => state.modal)
    
    const changePcr확인서모달 = useCallback(() => {
        dispatch(modal.actions.setPcr확인서모달(null))
    },[dispatch])

    return(
        <SlidePcrConfirmModalWrapper pcr확인서모달={pcr확인서모달}>
            <div className="background" onClick={changePcr확인서모달}>
            </div>
            <div className="slide-modal-wrapper">
                <div className="title-wrapper">
                    <div className="left">
                        <h1>입국용 PCR음성확인서 기준</h1>
                    </div>
                    <div className="right" onClick={changePcr확인서모달}>
                        <div className="X-icon"></div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="description-1">
                        <h2>검사 및 발급시점</h2>
                        <p>출발일 0시 기준 48시간(2일) 이내 검사한 음성확인서일 것 (예시. ‘22.1.22. 10:00시 출발 시 ’22.1.20. 0시 이후 검사한 것으로 확인된 PCR음성확인서만 인정)</p>
                    </div>
                    <div className="description-1">
                        <h2>검사방법</h2>
                        <p>NAATs(Nucleic acid amplification tests) 기법에 기초한 검사 (항원(Antigen, AG)·항체(Antibody) 검출검사(RAT, ELISA 등)는 인정하지 않음, 검사기법과 상관없이 검체채취를 스스로 실시하는 경우는 인정하지 않음)</p>
                    </div>
                    <div className="description-1">
                        <h2>필수기재</h2>
                        <p>성명(여권 기재 내용과 동일, 미들네임 생략 가능), 생년월일 (또는 여권번호, ID카드번호), 검사방법, 검사일자, 검사결과, 발급일자, 검사기관명</p>
                    </div>
                    <div className="description-1">
                        <h2>언어</h2>
                        <p>‘검사방법’항목은 한글 또는 영문으로 발급되어야 할 것 검사방법이 한글이나 영문이 아닌 경우, 한글 또는 영문 번역본과 번역인증 서류를 제출 시 인정 (단, 개인번역본의 경우 공증기관이나 대사관의 인증을 받아야 함)</p>
                    </div>
                    <div className="description-2">
                        <div className="description-title">
                            <h2>PCR 음성확인서 제출 예외 대상</h2>
                        </div>
                        <p>출발일 기준 10일 전 및 40일 이내 확진되고, 치료이력이 있는 내국인</p>
                        <p>만 6세 미만(입국일 기준) 영/유아(동반 일행이 전원 음성확인서를 제출한 경우에 한함)</p>
                        <p>인도적(장례식 참석) 공무출장 목적의 격리면제서 소지자</p>
                        <p>항공기 승무원</p>
                        <p>한국에서 출국하였으나 상대국에서 입국불허 등으로 해외 공항에서 입국절차를 거치지 않고 귀국한 경우</p>
                        <p>싱가포르에서 입국한 내국인 선원(‘대한민국 선원수첩	&#39;소지자에 한함)</p>
                        <p>우크라이나에서 입국한 ‘내국인	&#39;/’내국인의 외국적 배우자/직계존비속	&#39;</p>
                    </div>
                    <a href='https://www.kdca.go.kr/board/board.es?mid=a20504000000&bid=0014&act=view&list_no=718868' 
                    rel="noreferrer"
                    target='_blank'>질병관리청 	&#62; 해외입국자 PCR음성확인서 제출/적합기준 안내	&#62;</a>
                </div>
            </div>
        </SlidePcrConfirmModalWrapper>
    )
}

export default SlidePcrConfirmModal;