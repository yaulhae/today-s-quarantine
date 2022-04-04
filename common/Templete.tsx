import { NextPage } from "next"
import styled from "styled-components"

const TemplateWrapper = styled.div`
    max-width: 768px;
    margin: 0 auto;
    padding: 0 1em;
`

const Template : NextPage = ({children}) => {
        return (
            <TemplateWrapper>
                {children}
            </TemplateWrapper>
        )
}

export default Template 