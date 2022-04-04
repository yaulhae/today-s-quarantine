import moment from "moment";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import Template from "../common/Templete"
import modal from "../reducers/modal";

const TodayQuarantineWrapper = styled.div`
    background-color: #4880EE;
    margin-bottom: 1.5em;
    .today-quarantine-header {
        padding-top: 1.5em;
        margin-bottom: 1em;
        .header-wrapper {
            display: flex;
            align-items: center;
            .text-gif {
            width: 48px;
            height: 24px;
            border-radius: 50px;
            color: #4880EE;
            background-color: rgb(255, 255, 255);
            background-image: url("/static/ico_now_moving.gif");
            background-size: 31px;
            background-position: center center;
            background-repeat: no-repeat;
            margin-right: 0.5em;
            }

            span {
                font-size: 19px;
                font-weight: bold;
                color: white
            }
        }
    }

    .today-quarantine-content {
        padding-bottom: 1.5em;
        .content-wrapper {
            padding: 1em 0em;
            background-color: white;
            border-radius: 16px;

            .top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                padding: 0 1.5em;
                padding-bottom: 0.5em;
                margin-bottom: 1em;

                span:nth-child(1){
                    font-size: 14px;
                    font-weight: bold;
                }

                span:nth-child(2){
                    font-size: 13px;
                    color: rgba(0, 0, 0, 0.4);
                }
            }

            .body {
                padding-bottom: 1em;
                .body-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.5em 1.5em;
                    cursor: pointer;
                    .left {
                        p {
                            font-size: 12px;
                            color: rgba(0, 0, 0, 0.4);
                            font-weight: 400;
                        }
                        h1 {
                            font-weight: 700;
                            font-size: 22px;
                        }
                    }
                    .right {
                        .arrow-svg {
                            background-image: url(static/overview-link.svg);
                            background-size: 100%;
                            background-position: center center;
                            background-repeat: no-repeat;
                            width: 21px;
                            height: 21px;
                        }
                    }
                }
                .body-item:active {
                    background: rgba(0, 0, 0, 0.05);
                }
            }
        }
    }
`

const TodayQuarantine = () => {
    const dispatch = useDispatch();

    moment.locale('ko');
    const today = moment().format('YYYY년 MM월 DD일') + ' 방역수칙'

    const peopleModal = useCallback(() => {
        dispatch(modal.actions.setPeoPleModal(null))
    }, [dispatch])

    const locationModal = useCallback(() => {
        dispatch(modal.actions.setLocationTimeModal(null))
    },[dispatch]) 

    const coronaModal = useCallback(() => {
        dispatch(modal.actions.setCoronaPassModal(null))
    },[dispatch]) 

    return(
        <TodayQuarantineWrapper>
            <Template>
                <div className="today-quarantine-header">
                    <div className="header-wrapper">
                        <p className="text-gif">
                        </p>
                        <span>
                            {today}
                        </span>
                    </div>
                </div>
                <div className="today-quarantine-content">
                    <div className="content-wrapper">
                        <div className="top">
                            <span>오늘부터 7일 남음</span>
                            <span>3월 21일 - 04월 03일</span>
                        </div>
                        <div className="body">
                            <div className="body-item" onClick={peopleModal}>
                                <div className="left">
                                    <p>인원제한</p>
                                    <h1>사적모임 8인까지 가능</h1>
                                </div>
                                <div className="right">
                                    <p className="arrow-svg"></p>
                                </div>
                            </div>
                            <div className="body-item" onClick={locationModal}>
                                <div className="left">
                                    <p>시설 운영 시간</p>
                                    <h1>23시까지 운영</h1>
                                </div>
                                <div className="right">
                                    <p className="arrow-svg"></p>
                                </div>
                            </div>
                            <div className="body-item" onClick={coronaModal }>
                                <div className="left">
                                    <p>방역패스</p>
                                    <h1>모든 시설 방역패스 중단</h1>
                                </div>
                                <div className="right">
                                    <p className="arrow-svg"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        </TodayQuarantineWrapper>
    )
}

export default TodayQuarantine