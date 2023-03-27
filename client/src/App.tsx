import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAppSelector } from "./hooks"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

function App() {
  const token = useAppSelector((state) => state.auth.token)

  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginPage /> } />
          <Route path="/home" element={ token ? <HomePage /> : <Navigate to="/" /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
