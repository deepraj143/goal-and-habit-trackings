import { ROUTES } from "../constant";
import { useGoal } from "../context/goalContext";
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate  = useNavigate();
  const {selectedGoals}=useGoal()

  const handleViewTask=(id)=>{
    navigate(`${ROUTES.SELECTEDGOALS}/${id}`)
  }

  return (
    <div className="p-8">
    <div className='text-xl py-1 flex justify-between'>
      <div className='flex flex-col '>
          <p className='text-2xl font-bold'> Your goals ...</p>
          <p className='text-lg font-medium'>Here is your goals go and complete it!</p>
      </div>
      <div className='flex gap-2'>
          <label className="font-bold">Count</label>
          <span className='h-8 w-8 rounded-full bg-lime-400  flex items-center justify-center font-bold'>{selectedGoals.length}</span>
      </div>
    </div>

    <div className="flex mt-4 gap-4 flex-wrap w-full justify-center pb-60 items-center sm:gap-32 ">
      {selectedGoals.length > 0 && selectedGoals.map(goal=>{
        return <Link to={`/select-goals/${goal.id}`}  key={goal.id}>
                  <div className={`flex justify-end`}>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                          <img className="p-8 rounded-t-lg" src={goal.imgUrl} alt="product image" />
                          <div className="px-5 pb-5 flex gap-2 flex-col">
                            <h2 className="text-2xl font-semibold tracking-tight text-lime-400">{goal.name}</h2>
                            <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">{goal.description}</h5>
                            <div className="flex flex-col items-center justify-between w-full gap-2">
                              <div>
                                  <div className="flex  gap-3">
                                    <span className="text-md font-bold text-gray-900 dark:text-white">{goal.startDate}</span>
                                    <span className="text-md font-bold text-gray-900 dark:text-white">To</span>
                                    <span className="text-md font-bold text-gray-900 dark:text-white">{goal.endDate}</span>
                                  </div>
                              </div>
                              <button type="button" className={`text-white w-[100%] bg-gradient-to-r from-lime-500 via-lime-500 to-lime-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 `} onClick={()=>handleViewTask(goal.id)}>
                                View Task
                              </button>
                            </div>
                          </div>
                      </div>
                  </div>
        </Link>
       
        })
      }
    </div>

    </div>
  )
}

export default Home