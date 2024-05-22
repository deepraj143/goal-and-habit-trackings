import { createContext, useContext, useEffect, useState } from 'react'
import { GOALSDATA } from '../constant'
import PropTypes from 'prop-types';

export const GoalContext=createContext()

export const useGoal=()=>{
    return useContext(GoalContext)
}
export const GoalProvider = ({children}) => {
    const allGoalsDetails =GOALSDATA
    const [selectedGoals, setSelectedGoals] = useState([])

    const updateGoals=(goals)=>{
        console.log(goals)
        localStorage.setItem("SelectedGoals",JSON.stringify(goals))
        setSelectedGoals(goals)
    }

    useEffect(() => {
        const selectedGoals=JSON.parse(localStorage.getItem("SelectedGoals"))
        setSelectedGoals(selectedGoals || [])
    }, [])
   

  return (
    <GoalContext.Provider value={{allGoalsDetails,selectedGoals,setSelectedGoals,updateGoals}}>
        {children}
    </GoalContext.Provider>
  )
}

GoalProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
