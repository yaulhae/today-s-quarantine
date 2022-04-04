import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Template from "../common/Templete";
import logo from '../public/logo.svg'

const HeaderWrapper = styled.div`
    background-color: #F2F4F6;
    .로고-출처-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em 0em;
    }
    .출처 {
        font-size: 0.8rem;
        color: rgba(0, 0, 0, 0.4);
    }
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Template>
                <div className="로고-출처-container">
                    <Link href='http://ncov.mohw.go.kr/' >
                        <a target='_blank'>
                            <Image src={logo}
                            width={124}
                            height={35}
                            alt='오늘의방역로고'/>
                        </a>
                    </Link>
                    <span className="출처">
                        출처-보건복지부 보도자료 &gt;
                    </span>
                </div>
            </Template>
        </HeaderWrapper>
    )
}

export default Header;