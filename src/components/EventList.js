import React from 'react'

const EventList = ({ increment, decrement, count }) =>  {
  return(
    <div>
      <h2>カウンター</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <div>
        Count: {count}
      </div>
    </div>
  )
}

export default EventList
