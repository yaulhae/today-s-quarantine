import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../reducers";
import modal from "../reducers/modal";

const SlideLocationModalWrapper = styled.div<{locationTimeModal:boolean}>`
    .background {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        opacity: ${props => props.locationTimeModal && '1'};
        z-index: -1;
        z-index: ${props => props.locationTimeModal && '100'};
        transition: all 0.4s;
    }
    .slide-modal-wrapper {
        padding: 1.5em 2em 1em 2em;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        transform: translateY(100%);
        transform: ${props => props.locationTimeModal && 'translateY(0)'};
        z-index: 1000;
        transition: all 0.1s;
        background: white;
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
                    line-height: 1.5;
                }
            }

            .description-2 {
                margin-bottom: 2em;
                .description-title {
                    margin-bottom: 0.5em;
                    > h2 {
                        font-size: 15px;
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
    }
`

const SlideLocationModal = () => {
    const dispatch = useDispatch();
    const {locationTimeModal} = useSelector((state: RootState) => state.modal)
    let [modalShow,setModalShow] = useState(false);

    const locationModal = useCallback(() => {
        dispatch(modal.actions.set배경화면모달(null));
        setModalShow(false);
        setTimeout(() => dispatch(modal.actions.setLocationTimeModal(null)),400);
    },[dispatch])

    useEffect(() => {
        dispatch(modal.actions.set배경화면모달(null))
        setTimeout(() => {setModalShow(true)}, 4)
    },[]);

    return(
        <SlideLocationModalWrapper locationTimeModal={modalShow ?locationTimeModal : false}>
            <div className="background" onClick={locationModal}>
            </div>
            <div className="slide-modal-wrapper">
                <div className="title-wrapper">
                    <div className="left">
                        <h1>시설 운영시간 수칙</h1>
                    </div>
                    <div className="right" onClick={locationModal}>
                        <div className="X-icon"></div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="description-1">
                        <h2>23시까지 운영하는 시설</h2>
                        <p>식당·카페, 유흥시설 &#40;유흥주점, 단란주점, 클럽·나이트, 감성주점, 헌팅포차, 콜라텍·무도장&#41;, 노래	&#40;코인&#41;연습장, 목욕장업, 실내 체육시설, 카지노,<br/> PC방, 학원	&#40;평생직업교육학원만 적용&#41;, 멀티방, 마사지 업소·안마소, 파티룸, 오락실</p>
                    </div>
                    <div className="description-2">
                        <div className="description-title">
                            <h2>⚠️ 영화관 · 공연장</h2>
                        </div>
                        <p>영화 또는 공연 시작시각 23시까지 입장 가능</p>
                        <p>종료시각은 익일 01시까지</p>
                    </div>
                    <div className="description-1">
                        <h2>운영시간 제한 없는 시설</h2>
                        <p>실내스포츠경기(관람)장, 독서실·스터디카페, 도서관, 학원(평생직업교육학원 제외), 박물관·미술관·과학관, 백화점·대형마트, 놀이공원·워터파크, 키즈카페, 미용실·이용원, 실외체육시설, 전시회·박람회, 국제회의·학술행사, 결혼식·돌잔치·장례식, 종교시설, 숙박시설</p>
                    </div>
                </div>
            </div>
        </SlideLocationModalWrapper>
    )
}

export default SlideLocationModal;