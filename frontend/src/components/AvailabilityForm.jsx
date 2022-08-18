import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAvailability } from '../features/availabilities/availabilitySlice'

function AvailabilityForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createAvailability({ text }))
    setText('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Availability</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Availability
          </button>
        </div>
      </form>
    </section>
  )
}

export default AvailabilityForm