import { useEffect, useMemo, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useGoal } from '../context/goalContext'
import HeaderBackBtn from '../components/HeaderBackBtn'
import DatePicker from '../components/DatePicker'
import NoTask from "../assets/task-empty.png"
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { getRandomDate } from '../utils'
import { format } from 'date-fns'

const SelectGoalDetails = () => {
    const params=useParams()
    const {selectedGoals}=useGoal()

    const [goalDetails, setGoalDetails] = useState(null)
    const [dateWiseTask, setDateWiseTask] = useState([])
    const [selectedDate, setSelectedDate] = useState({ 
        startDate: format(new Date(), 'yyyy-MM-dd'),
        endDate: format(new Date(), 'yyyy-MM-dd')
    }); 
        
    const handleValueChange = (newValue) => {

        const tasks=goalDetails.tasks.filter(goal=>{
            return goal.date === newValue.startDate
        })
        setDateWiseTask(tasks)
        setSelectedDate(newValue); 
    } 

    useEffect(()=>{
        const goalDetails=selectedGoals.find(goal=>goal.id === params.id)
        if(!goalDetails) return 
        const putDateInTasks = goalDetails.tasks.map(task => ({
            ...task,
            date: getRandomDate(goalDetails.startDate, goalDetails.endDate)
          }));
          setGoalDetails({...goalDetails,tasks:putDateInTasks});
    },[params.id,selectedGoals])


    const completedTask=useMemo(()=>{
        return dateWiseTask.reduce((prev,cur)=>{
            return prev+=cur.istaskCompleted ? 1 : 0
        },0)
    },[dateWiseTask])
    
  return (
    <div className='p-4'>
        <HeaderBackBtn/>
        <h2 className='font-bold text-2xl mt-4 mb-2'>Hi User! check your routine</h2>
        <h4>Your task is staring from <span className='bg-lime-400 rounded-md p-1.5 mx-1'>{goalDetails?.startDate}</span> and will end on <span className='bg-lime-400 rounded-md p-1.5 mx-1'>{goalDetails?.endDate}</span></h4>
        <div className='flex justify-center  items-center w-40 mx-auto mt-6'>
            <DatePicker 
                useRange={false} 
                asSingle={true}
                value={{  
                    startDate: selectedDate.startDate ,
                    endDate: selectedDate.endDate 
                }} 
                placeholder={"Select Date "} 
                handleValueChange={handleValueChange}
            />
        </div>
    
        {dateWiseTask.length >0 && 
            <div className='text-xl mt-4  py-1 flex '>
                <div className='flex gap-2'>
                    <label  className='text-xl font-semibold '>Completed Task</label>
                    <span className='h-8 w-8 rounded-full bg-lime-400  flex items-center justify-center font-semibold'>{completedTask}</span>
                </div>
            </div>
        }
        
        <div className='mt-4 flex gap-4 flex-col'>
                {dateWiseTask.length >0 && dateWiseTask.map((goal)=>{
                    return <div key={goal.id} className='w-full bg-gray-200 rounded-lg h-20 flex'>
                                <div className='w-4/12 h-full bg-lime-400 text-white rounded-xl flex justify-center items-center'>
                                    {goal.time}
                                </div>
                                <div className='flex w-full flex-col p-4'>
                                    <p className='font-bold'> {goal.name}</p>
                                    <p className='text-xs'>{goal.description}</p>
                                </div>
                                <div className='flex w-32 h-full justify-center items-center'>
                                    <IoCheckmarkDoneCircle className={`text-4xl ${goal.istaskCompleted ? "text-lime-500" :"text-gray-800"}`}/>
                                </div>
                            </div>
                })}
        </div>

        {!dateWiseTask.length > 0  && <div className='w-full flex justify-center items-center mt-16' >
            <div className='h-60 w-60 text-center'>
                <img src={NoTask} />
                <p className='font-bold'>There is no task for this Date</p>
            </div>
        </div>}
    </div>
  )
}

export default SelectGoalDetails