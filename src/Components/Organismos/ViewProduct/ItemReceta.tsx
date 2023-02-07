import { motion } from 'framer-motion'

interface Props {
  index: number
}
const ItemReceta = ({ index }: Props) => {
  return (
    <motion.div
      custom={index}
      variants={variants}
      className="
        h-44 w-36 break-all rounded-lg  p-2 shadow-lg
        "
    >
      <img src="https://content21.sabervivirtv.com/medio/2021/10/05/ensalada-de-naranja-y-bacalao_f9c0d282_1200x709.jpg" />
      <p className="mt-1">Lorem ipsum dolor sit amet consectetur </p>
    </motion.div>
  )
}

export default ItemReceta

const variants = {
  visible: (i: number) => ({
    scale: 1,
    transition: {
      delay: i * 0.1
    }
  }),
  hidden: { scale: 0 }
}
