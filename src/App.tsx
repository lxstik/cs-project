import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProtectedRoutes from './utils/ProtectedRoutes'


function App() {
  return (
    <>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
      </Routes>


    </>
  )
}

export default App



{/* <Route path="/login" render={() =>{
            return user ? <Navigate to ="/" /> : <LoginPage />
          }>
          </Route> */}