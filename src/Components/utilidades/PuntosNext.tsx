import { NavLink } from 'react-router-dom'

const PuntosNext = (props:any) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex gap-5">
        {
          props.puntos.map((v:any) => (
            <NavLink key={v.id} to={v.link} className={({ isActive }) => (`relative navitem  w-3 h-3  rounded-full transition ease-in duration-100 flex justify-center items-center border ${isActive ? 'bg-black' : 'bg-color_green_2 border-color_green_7'}`)} >

            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default PuntosNext
