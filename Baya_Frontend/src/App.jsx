
import FooterComp from './components/footer/FooterComp'
import HeaderComp from './components/header/HeaderComp'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <HeaderComp />
      <div className='body_home'>
        <div className='main_container'>
          <Outlet />
        </div>
      </div>
      <FooterComp />
    </>

  )


}

export default App
