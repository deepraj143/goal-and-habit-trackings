import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderBackBtn from '../components/HeaderBackBtn'
import { useGoal } from '../context/goalContext'
import { ROUTES } from '../constant'

const SelectGoals = () => {
    const navigate  = useNavigate();
    const {allGoalsDetails,selectedGoals,updateGoals}=useGoal()

    const handleSelect=(e)=>{
        const { value:goalId } = e.target.dataset;
        if (!goalId) return;

        if(selectedGoals.some(goal=>goal.id === goalId)){
            const removed=selectedGoals.filter(goal=>goal.id!==goalId)
            updateGoals(removed)
            return
        }
        if(selectedGoals.length === 2) return
        const findGoals=allGoalsDetails.find(goal=>goal.id === goalId)
        updateGoals([...selectedGoals,findGoals])
    }

    const getIsSelected=(id)=>{
        return selectedGoals.some(goal=>goal.id === id)
    }

    const handleProcced=()=>{
        navigate(ROUTES.SELECTGOALSTIMELINE);
    }

  return (
    <div className='px-6 py-4'>
        <HeaderBackBtn/>
        <div className='flex justify-between flex-col h-5/6'>
            <div className='mt-4'>
                <div className='text-xl py-1 flex justify-between items-center'>
                    <div className='flex flex-col '>
                        <p className='text-2xl font-bold'> Chosse your goals</p>
                        <p className='text-sm'>You can choose only 2 goals at a time</p>
                    </div>
                    <div className='flex gap-2'>
                        <label className='font-bold'>Count</label>
                        <span className='h-8 w-8 rounded-full bg-lime-400  flex items-center justify-center font-semibold'>{selectedGoals.length}</span>
                    </div>
                </div>

                <div className="mx-auto py-4"  onClick={handleSelect}>
                    <div className=" h-[65vh] pb-10 overflow-auto grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3   lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8" >
                        {allGoalsDetails.length>0 && allGoalsDetails.map((goal)=>{
                                return  <div className={` ${getIsSelected(goal.id) ? "bg-lime-500": "bg-gray-200"} max-h-96 p-4 shadow-2xl`} key={goal.id} data-value={goal.id} >
                                            <div className="aspect-h-1 rounded-md aspect-w-1 w-full overflow-hidden  xl:aspect-h-8 xl:aspect-w-7"  key={goal.id} data-value={goal.id} >
                                                <img src={goal.imgUrl} alt="task-images" className="h-full w-full object-cover object-center group-hover:opacity-75" data-value={goal.id} />
                                            </div>
                                            <h3 className="mt-2 text-md font-bold text-gray-900 text-center" data-value={goal.id} >{goal.name}</h3>
                                    <p className="mt-1 text-xs font-medium text-gray-900 text-center"data-value={goal.id} >{goal.description}</p>
                                </div>
                            })
                        }
                        
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center' >
                <button type="button" className={`text-white bg-gradient-to-r ${selectedGoals.length !==2   ? "bg-gray-300": "from-lime-500 via-lime-500 to-lime-600"} hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`} disabled={selectedGoals.length!==2 } onClick={handleProcced}>
                    Procced
                </button>
            </div>
        </div>
    </div>
  )
}

export default SelectGoals