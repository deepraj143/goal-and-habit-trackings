import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import{Routes,Route} from 'react-router-dom'
import { ROUTES } from './constant';
import {Home,Login,SelectGoalDetails,SelectGoals,SelectGoalTime} from "./pages"

function App() {

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home/>}/>
      <Route path={ROUTES.LOGIN} element={<Login/>}/>
      <Route path={ROUTES.SELECTEDGOALS} element={<SelectGoals/>}/>
      <Route path={ROUTES.SELECTGOALSTIMELINE} element={<SelectGoalTime/>}/>
      <Route path={ROUTES.SELECTEDGOALS+"/:id"} element={<SelectGoalDetails/>}/>
    </Routes>
  )
}

export default App
