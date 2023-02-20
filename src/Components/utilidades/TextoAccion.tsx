import { Link } from "react-router-dom";

interface Props {
	texto: string;
	direccion: string;
}

export const TextoAccion = ({texto, direccion}:Props) => {

	return (
		<Link to={direccion}>
		<p className="text-color_green_6 hover:text-color_green_7 ease-in-out duration-300 cursor-pointer text-center">
		  {texto}
		</p>
	  </Link>
	)
}
