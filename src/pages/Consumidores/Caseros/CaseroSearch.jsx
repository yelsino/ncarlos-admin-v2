import { useState } from "react";
import { Link } from "react-router-dom";
import { IconArrow, IconClean, IconSearch } from "../../../components/Icons";

const ClienteSearch = () => {
  const [textsearch, setTextSearch] = useState('');


  return (
    <div className=" w-11/12 pt-10">
      <div className="flex  justify-center">

        <div className="relative flex items-center  ">
          <input
            autoComplete={"off"}
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
    </div>
  );
}

export default ClienteSearch;