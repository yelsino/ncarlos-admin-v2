import { IconCar } from "Components/Icons"

export const SubTitulo = () => {
	
	return (
    <div className="font-poppins text-color_green_4 absolute top-5  right-5  hidden items-center justify-center gap-x-2 text-lg font-extrabold sm:top-10 sm:right-10 sm:flex">
      <span>
        <IconCar />
      </span>
      <h2>Administrador</h2>
    </div>
  )
}