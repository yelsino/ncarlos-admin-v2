const ButtonNext = (props: any) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="text-color_green_3 mb-3 flex h-16 w-16  items-center justify-center rounded-full bg-black  p-4 text-4xl font-extrabold shadow-sm transition duration-300  ease-in hover:shadow-xl "
    >
      <span className="">{props.text}</span>
    </button>
  )
}

export default ButtonNext
