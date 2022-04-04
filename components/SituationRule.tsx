import moment from "moment";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Template from "../common/Templete";
import modal from "../reducers/modal";

const SituationRuleWrapper = styled.div`
    margin-bottom: 2em;

    .situation-rule-wrapper {
        .title {
            font-size: 19px;
            font-weight: bold;
            margin-bottom: 0.5em;
        }


        .situation-rule-list {
            display: flex;
            > div {
                margin-right: 1em;
            }
            .situation-rule-item {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 190px;
                height: 90px;
                background-color: rgb(255, 255, 255);
                border-radius: 16px;
                transition: all 0.3s;

                .situation-content {
                    > h1 {
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 19px;
                    }
                    > p {
                        font-size: 12px;
                        color: rgb(153, 153, 153);
                    } 
                }

                .situation-img {
                    width: 50px;
                    height: 50px;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-image: url("/static/ico_pcr_0c241317b2.svg");
                    margin-right: 0.4em;
                }

                .img2 {
                    background-image: url("/static/ico_confirmed_271e4da03e.svg");
                }

                .img3 {
                    background-image: url("/static/ico_airplane_e9e72f06ac.svg");
                }
            }
            .situation-rule-item:active {
                transform: scale(0.95);
            }
        }
    }
`

const SitudationRule = () => {
    const dispatch = useDispatch();

    moment.locale('ko');
    const today = moment().format('MM월 DD일 현재')

    const changePcrModal = useCallback(() => {
        dispatch(modal.actions.setPcr모달(null))
    },[dispatch])

    const change접촉자Modal = useCallback(() => {
        dispatch(modal.actions.set접촉자모달(null))
    },[dispatch])

    const change해외입국자Modal = useCallback(() => {
        dispatch(modal.actions.set해외입국자모달(null))
    },[dispatch])
    return (
        <SituationRuleWrapper>
            <Template>
                <div className="situation-rule-wrapper">
                    <h1 className="title">상황별 수칙</h1>
                    <div className="situation-rule-list">
                        <div className="situation-rule-item" onClick={changePcrModal}>
                            <div className="situation-img"></div>
                            <div className="situation-content">
                                <h1>PCR<br/> 검사 기준</h1>
                                <p>{today}</p>
                            </div>
                        </div>
                        <div className="situation-rule-item" onClick={change접촉자Modal}>
                            <div className="situation-img img2"></div>
                            <div className="situation-content">
                                <h1>확진자·<br/>접촉차<br/>격리 기준</h1>
                                <p>{today}</p>
                            </div>
                        </div>
                        <div className="situation-rule-item" onClick={change해외입국자Modal}>
                            <div className="situation-img img3"></div>
                            <div className="situation-content">
                                <h1>해외입국자<br/>방역수칙</h1>
                                <p>{today}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        </SituationRuleWrapper>
    )
}

export default SitudationRule;