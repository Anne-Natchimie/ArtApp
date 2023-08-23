import React from 'react'
import { Link } from 'react-router-dom'

const Colors = ({data}) => {
  return (
    <div>
            <Link to={`/details/+data.id}`}>
                <img src={data.image} alt={data.name} className='w-[282px] h-[282px]' />
                <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'> {data.name}
                </p>
            </Link>
    </div>
  )
}

export default Colors