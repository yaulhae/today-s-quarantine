import '../styles/globals.css'
import type { AppProps } from 'next/app'
import wrapper from '../store/configureStore'
import { createGlobalStyle } from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const {limitPeopleModal,locationTimeModal,quarantineModal, 소식1모달, 소식2모달, 소식3모달, pcr모달, 접촉자모달, 해외입국자모달, pcr확인서모달, 배경화면모달} = useSelector((state:RootState)  => state.modal)

  const GlobalStyle = createGlobalStyle`
    /* body {
      overflow: ${(limitPeopleModal || locationTimeModal || quarantineModal || 소식1모달 || 소식2모달 || 소식3모달 || pcr모달 || 접촉자모달 || 해외입국자모달 || pcr확인서모달) ? 'hidden' : ''}
    }   */
    body {
      overflow: ${(배경화면모달 || 소식1모달 || 소식2모달 || 소식3모달 || pcr모달 || 접촉자모달 || 해외입국자모달 || pcr확인서모달) ? 'hidden' : ''}
    }  
  ` 

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

  
export default wrapper.withRedux(MyApp);
