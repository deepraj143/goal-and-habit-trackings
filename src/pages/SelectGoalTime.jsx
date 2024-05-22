import { useGoal } from '../context/goalContext'
import HeaderBackBtn from '../components/HeaderBackBtn'
import DatePicker from '../components/DatePicker'
import { useNavigate } from 'react-router-dom'
import {toast   } from 'react-toastify';
import { useMemo } from 'react';
import { ROUTES } from '../constant';

const SelectGoalTime = () => {
    const navigate  = useNavigate();
    const {selectedGoals,updateGoals}=useGoal()

    const handleValueChange = (newValue,id) => {
        const newData=selectedGoals.map((goal=>{
            if(goal.id === id){
                return {
                    ...goal,
                    ...newValue
                }
            }
            return goal
        }))
        updateGoals(newData); 
    } 
    
   const handleProcced=()=>{
    toast.success("Date saved successfully")
    navigate(ROUTES.HOME);
   }

   const isDateSelected=useMemo(() =>selectedGoals.some(goal=> !goal.startDate || !goal.endDate),[selectedGoals])

  return (
    <div className='p-8'>
          <HeaderBackBtn/>
            <h2 className='font-bold text-2xl' >Select date for your goals</h2>
            <div className='flex flex-col justify-between h-[80vh]'>
                <div className='flex flex-col gap-5 mt-5 h-[68vh] overflow-auto pb-40'>
                    {selectedGoals.length >0 &&  selectedGoals.map((goal)=>{
                        return <div key={goal.id} className="flex mx-auto flex-col items-center rounded-lg shadow sm:flex-row  md:max-w-fit hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img className="object-cover w-32 rounded-t-lg h-32 rounded-s-lg m-5" src={goal.imgUrl} alt="" />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-lime-400 sm:text-left ">Noteworthy technology acquisitions 2021</h5>
                                        <p className="mb-3 font-normal text-center text-white sm:text-left ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <div className='w-full text-center  sm:text-left'>
                                            <label  className="font-normal w-full text-lime-400 -ml-1  ">Select Date range</label>
                                            <DatePicker 
                                                value={{  
                                                    startDate: goal.startDate ,
                                                    endDate: goal.endDate 
                                                }} 
                                                useRange={false} 
                                                handleValueChange={(newValue)=>{handleValueChange(newValue,goal.id)}}
                                            />
                                        </div>
                                    </div>
                            </div>
                    })}
                    
                </div>
                <div className='w-full flex justify-center'>
                    <button type="button" 
                    className={`text-white bg-gradient-to-r ${isDateSelected ? "bg-gray-300": "from-lime-500 via-lime-500 to-lime-600"} hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`} 
                    disabled={isDateSelected} 
                    onClick={handleProcced}
                        >
                        Procced
                    </button>
                </div>
            </div>

    </div>
  )
}

export default SelectGoalTime