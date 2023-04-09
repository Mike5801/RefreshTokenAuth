import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import { useAppSelector } from "./hooks/reduxHooks"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import MyProfile from "./pages/MyProfile"
import AllUsers from "./pages/AllUsers"
import PersistLogin from "./components/PersistLogin"

function App() {
  const token = useAppSelector((state) => state.auth.token)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
          <Route element={ <PersistLogin /> }>
            <Route element={ token ? <Layout /> : <Navigate to="/" /> } >
              <Route path="/home" element={ <HomePage /> } />
              <Route path="/my-profile"  element={ <MyProfile /> } />
              <Route path="/all-users" element={ <AllUsers /> } />
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
