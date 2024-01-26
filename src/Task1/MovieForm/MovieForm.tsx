import React from 'react'

const MovieForm = () => {
  return (
    <form className='d-flex'>
      <input type="text" className='form-control' required/>
      <button className='btn btn-primary ms-2'>Add</button>
    </form>
  )
}

export default MovieForm