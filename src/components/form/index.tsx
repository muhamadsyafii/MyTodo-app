import React from 'react'
import './index.css'
type Props = {}

const Form = (props: Props) => {
  return (
    <div className='form-todo'>
      <form action='submit'>
        <div className='input-group'>
          <label htmlFor='todo'>Todo</label>
          <input type='text' name='todo' id='todo' />
          </div>
          <div className='input-group'>
            <label htmlFor='description'>Description</label>
            <input type='text' name='description' />
            </div>
            <button type='submit' className='btn-submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default Form