import React from 'react'

const Grid = ({title,value,icon,color}) => {
  return (
      <div className='flex items-center justify-between bg-white p-4 rounded-lg shadow-md'>
                <div>
                    <h1 className='italic text-gray-900'>{title}</h1>
                    <h2 className='text-gray-700 font-black'>{value}</h2>
                    
                </div>

                <div className={`${color} rounded-full p-1 text-white`}>{icon}</div>
      </div>
  )
}

export default Grid