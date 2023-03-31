import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import { useAppSelector } from "./hooks"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import MyProfile from "./pages/MyProfile"
import AllUsers from "./pages/AllUsers"

function App() {
  const token = useAppSelector((state) => state.auth.token)

  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginPage /> } />
          <Route element={ token ? <Layout /> : <Navigate to="/" /> } >
            <Route path="/home"  element={ <HomePage /> } />
            <Route path="/my-profile"  element={ <MyProfile /> } />
            <Route path="/all-users" element={ <AllUsers /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
