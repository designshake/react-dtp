import React from 'react'
import { Link } from 'react-router-dom'

const LandingListTb = () => {
  return (
    <>
      <div id='cardBox'>
          <div className='cardCont'>
            <div className='date'>
              <ul>
                <li className='mainDate'>21</li>
                <li className='mainMmyy'>2024.07</li>
              </ul>
            </div>
            <div className='txtCont'>
              <ul className='list'>
                <li>
                  <Link to='/'>
                    새로운 공지사항 안내입니다.
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    이번주 업데이트 소식입니다.
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* list영역 */}
          <div className='detailCont'>
            <ul>
              <li>
                <Link>
                  <span className='index'>이곳에 내용이 들어갑니다.</span>
                  <span className='mmyy'>2024.12.24 <span className='time'>00:00:00</span></span>
                </Link>
              </li>
              <li>
                <Link>
                  <span className='index'>이곳에 내용이 들어갑니다.</span>
                  <span className='mmyy'>2024.12.24 <span className='time'>00:00:00</span></span>
                </Link>
              </li>
              <li>
                <Link>
                  <span className='index'>이곳에 내용이 들어갑니다.</span>
                  <span className='index'>2024.12.24 <span className='time'> 00:00:00</span></span>
                </Link>
              </li>
            </ul>
          </div>
      </div>

    </>
  )
}

export default LandingListTb