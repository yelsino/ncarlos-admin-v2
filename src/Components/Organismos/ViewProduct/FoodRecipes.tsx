import { motion } from 'framer-motion'
import ItemReceta from './ItemReceta'

const FoodRecipes = () => {
  return (
    <div>
      <p className="mb-5 font-poppins">Recetas de mandarina</p>
      <motion.div
        transition={{
          duration: 1
        }}
        initial="hidden"
        animate="visible"
        variants={list}
        className="grid grid-cols-2 gap-5"
      >
        {[1, 2, 3, 4, 5, 6].map((i, index) => (
          <ItemReceta key={index} index={i} />
        ))}
      </motion.div>
    </div>
  )
}

export default FoodRecipes

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  }
}
