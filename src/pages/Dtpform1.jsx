import React from 'react'
import Main from '../component/section/Main'
import Card from '../component/contents/Card'
import LandingListTb from '../component/form/LandingListTb'


const Dtpform1 = () => {

  return (
    <>
    <Main>
      <section className='wrapContent'>
        <Card />
        <div className='listWrap'>
          <div><LandingListTb /></div>
          <div><LandingListTb /></div>
        </div>
      </section>
    </Main>
    </>
  )
}

export default Dtpform1