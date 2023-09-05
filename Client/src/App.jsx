import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { publicRoutes } from './routes'
import { DefaultLayout } from './components/Layout'
import ShopContextProvider from './context/shop-context'


function App() {

  return (
    <>
      <ShopContextProvider>
        <Router>
          <div className="App">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Layout = route.layout === null ? Fragment : DefaultLayout;
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />;
              })}
            </Routes>
          </div>
        </Router>
      </ShopContextProvider>
    </>

  )
}

export default App
