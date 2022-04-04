import styled from "styled-components";
import Template from "../common/Templete";


const CoronaReportWrapper = styled.div`
    .corona-support-wrapper {
        text-align: center;
        padding-bottom: 2em;
        > p {
            font-size: 13px;
            color: rgba(0,0,0,0.6);
            margin-bottom: 1em;
        }
        > a {
            display: inline-block;
            padding: 14px 26px;
            background: rgb(127, 132, 147);
            border-radius: 10px;
            color: rgb(255, 255, 255);
            font-size: 13px;
        }
    }
`

const CoronaReport = () => {
    return (
        <CoronaReportWrapper>
            <Template>
                <div className="corona-support-wrapper">
                        <p>
                            오늘의 방역에서 제공하는 정보가 도움이 되었나요?
                            <br/>
                            의견을 주시면 더 나은 서비스를 만드는데 도움이 됩니다!
                        </p>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSexc2z2VLIHd_utn6kdnATEAYbeE3glKCU4OZ3cU3r9WbdmZQ/viewform' target='_blank' rel="noreferrer">오늘의 방역에 의견 제보</a>
                    </div>
            </Template>
        </CoronaReportWrapper>
    )
}

export default CoronaReport;