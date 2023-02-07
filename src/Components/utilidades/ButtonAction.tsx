import { motion } from 'framer-motion';

interface Props {
  esperando?: boolean;
  type: "button" | "reset" | "submit";
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonAction = (props: Props) => {
  return (
    <div className="w-full text-center">
      <motion.button
        whileTap={{ scale: 0.95 }}
        type={props.type}
        onClick={props.onClick}
        className="text-color_green_ text-white hover:shadow-lg mb-3  rounded-lg bg-black  p-4 shadow-sm transition duration-300 ease-in  font-poppins font-black"
    >
      {props.esperando ? "cargando...": props.text}
    </motion.button>
    </div>
  )
}

export default ButtonAction
