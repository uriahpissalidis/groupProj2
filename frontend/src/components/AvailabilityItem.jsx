import { useDispatch } from 'react-redux'
import { deleteAvailability } from '../features/availabilities/availabilitySlice'

function AvailabilityItem({availability}) {
  const dispatch = useDispatch()
  
    return (
    <div className="availability">
        <div>
            {new Date(availability.createdAt).toLocaleString('en-US')}
        </div>

        <h2>{availability.text}</h2>
        <button onClick={() => dispatch(deleteAvailability(availability._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default AvailabilityItem