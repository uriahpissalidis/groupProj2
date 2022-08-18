import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import AvailabilityForm from '../components/AvailabilityForm'
import Spinner from '../components/Spinner'
import { getAvailabilities } from '../features/availabilities/availabilitySlice'
import {getAvailabilities, reset} from '../features/availabilities/availabilitySlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {availabilities, isLoading, isError, message} = useSelector((state) => state.availabilities)

  useEffect(() => {
    if(isError) {
      console.log(message);
    }
    if(!user) {
      navigate('/login')
    }
    dispatch(getAvailabilities())
    
    //clears the dashboard upon exit
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Availability Dashboard</p>
      </section>

      <AvailabilityForm />

      <section className='content'>
        {availabilities.length > 0 ? (
          <div className='availabilities'>
            {availabilities.map((availability) => (
              <AvailabilityItem key={availability._id} availability={availability} />
            ))}
          </div>
        ) : (
          <h3>You have not set any available times</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
