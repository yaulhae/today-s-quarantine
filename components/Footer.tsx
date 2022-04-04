import styled from "styled-components";
import Template from "../common/Templete";

const FooterWrapper = styled.div`
    text-align: center;
    background-color: rgb(230, 232, 234);
    padding: 30px;
    .footer-content {
        p:nth-child(1){
            font-size: 11px;
            color: rgba(0, 0, 0, 0.3);
            margin-bottom: 1em;
        }
        p:nth-child(2){
            font-size: 11px;
            color: rgba(0, 0, 0, 0.5);
            font-weight: bold;
        }
    }
`  

const Footer = () => {
    return (
        <FooterWrapper>
            <Template>
                <div className="footer-content">
                    <p>
                    본 사이트에서 제공하는 방역수칙 정보는 대한민국 질병관리 본부 및 관련 부처<br/> 보도자료, 언론 기사 등을 토대로 업데이트 되지만, 개인이 취합한 내용이므로<br/> 정보의 정확성에 대해 책임질 수 없으며, 공식적인 근거 자료로 활용될 수<br/> 없습니다. 본 사이트에서 제공하는 내용의 인용과 사용에 대한 책임은 전적으로<br/> 인용자 및 사용자에게 있음을 알립니다.
                    </p>
                    <p>BY 오늘의 방역</p>
                </div>
            </Template>
        </FooterWrapper>
    )
}

export default Footer;