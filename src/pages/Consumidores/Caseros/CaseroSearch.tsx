import { IconArrow, IconClean, IconSearch } from 'Components/Icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ClienteSearch = () => {
  const [textsearch, setTextSearch] = useState('')

  return (
    <div className="  w-full px-7 ">

      <div className="relative flex items-center  w-full mx-auto">
        <input
          autoComplete={'off'}
          name="password"
          id='text'
          onChange={(e) => {
            setTextSearch(e.target.value)
          }}
          value={textsearch}
          type="text"
          placeholder="Buscar clientes"
          className='rounded-md p-4 outline-none my-7 text-base sm:text-lg  placeholder-green-400 text-color_green_7 w-full bg-color_green_3 pl-11'
        />
        <label
          htmlFor='email'
          className="absolute text-green-400 left-3">
          <IconSearch />
        </label>
        {
          textsearch.length > 0 &&
          <button
            onClick={() => setTextSearch('')}
            className="absolute text-green-400 right-3">
            <IconClean />
          </button>
        }

      </div>

      <Link to='/comprador/clientes' className="text-color_green_7 fixed bottom-10 right-10">
        <IconArrow />
      </Link>
    </div>
  )
}

export default ClienteSearch
