import React from 'react'
import Main from '../component/section/Main'

import { LogButton } from '../component/componentStyles/button/Button.styles'
import { Loginlogo, MainLogo} from '../component/componentStyles/images/Images.styles'
import { BasicInputField, PasswordInputField } from '../component/componentStyles/input/InputField.styles'

const Home = () => {
  return (
    <Main>
      <section id='logBg'>
        <div className='logBoxWrap'>
          <div className='contents'>
            <div className='leftBox'>'
              <ul>
                <li>
                  <BasicInputField
                    type="text"
                    name="id"
                    placeholder='아이디를 입력하세요'
                   />
                </li>
                <li>
                  <PasswordInputField
                    type="text"
                    name="pw"
                    placeholder='비밀번호를  입력하세요.'
                  />
                </li>
                <LogButton>LOGIN</LogButton>
                <li className='copyright'>Copyrights(C) <span>2023 SK on.</span> All Rights Reserved.</li>
              </ul>
            </div>
            <div className='rightBox'>
              <Loginlogo>
                <div className='logFaImg'></div>
              </Loginlogo>
              <MainLogo>
                <button className='mainlogs' />
              </MainLogo>
            </div>
          </div>
        </div>
      </section>
    </Main>
  )
}

export default Home