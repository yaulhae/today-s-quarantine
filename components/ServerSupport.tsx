import styled from "styled-components"
import Template from "../common/Templete"

const ServerSupportWrapper = styled.div`
    margin-bottom: 2em;
    .server-support-wrapper {
        text-align: center;
        padding-bottom: 2em;
        border-bottom: 1px solid rgba(0,0,0,0.07);
        > p {
            font-size: 13px;
            color: rgba(0,0,0,0.6);
        }
        > a {
            display: inline-block;
            padding: 0px 26px;
            background-color: rgb(67, 120, 255);
            border-radius: 10px;
            margin-top: 16px;
            color: rgb(255, 255, 255);
            font-size: 13px;
            height: 40px;
            line-height: 40px;
        }
    }
    
`

const ServerSupport = () => {
    return (
        <ServerSupportWrapper>
            <Template>
                    <div className="server-support-wrapper">
                        <p>서비스를 지속할 수 있도록 서버 비용을 후원 받고 있습니다.</p>
                        <a>후원하기</a>
                    </div>
            </Template>
        </ServerSupportWrapper>
    )
}

export default ServerSupport