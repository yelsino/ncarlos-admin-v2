import { IconArrow, IconClean, IconSearch } from 'Components/Icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ClienteSearch = () => {
  const [textsearch, setTextSearch] = useState('')

  return (
    <div className="  w-full px-7 ">
      <div className="relative mx-auto flex  w-full items-center">
        <input
          autoComplete={'off'}
          name="password"
          id="text"
          onChange={(e) => {
            setTextSearch(e.target.value)
          }}
          value={textsearch}
          type="text"
          placeholder="Buscar clientes"
          className="text-color_green_7 bg-color_green_3 my-7 w-full rounded-md p-4  pl-11 text-base outline-none placeholder:text-green-400 sm:text-lg"
        />
        <label htmlFor="email" className="absolute left-3 text-green-400">
          <IconSearch />
        </label>
        {textsearch.length > 0 && (
          <button
            onClick={() => setTextSearch('')}
            className="absolute right-3 text-green-400"
          >
            <IconClean />
          </button>
        )}
      </div>

      <Link
        to="/comprador/clientes"
        className="text-color_green_7 fixed bottom-10 right-10"
      >
        <IconArrow />
      </Link>
    </div>
  )
}

export default ClienteSearch
