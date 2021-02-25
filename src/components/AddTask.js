import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [place, setPlace] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      if (!text) {
        alert('Please add a task')
        return
      }
  
      onAdd({ text,place,time, day, reminder })
  
      setText('')
      setPlace('')
      setDay('')
      setTime('')
      setReminder(false)
    }
  
    return (
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Sprawa do załatwienia</label>
          <input
            type='text'
            placeholder='Add Task'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Miejsce</label>
          <input
            type='text'
            placeholder='Miejsce'
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Kiedy?</label>
          <input
            type='text'
            placeholder='Dzień'
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>O której?</label>
          <input
            type='text'
            placeholder='Godzina'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className='form-control form-control-check'>
          <label> Przypomnienie</label>
          <input
            type='checkbox'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
  
        <input type='submit' value='Zapisz' className='btn btn-block' />
      </form>
    )
  }
  
  export default AddTask