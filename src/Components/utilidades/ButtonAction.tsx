const ButtonAction = (props: any) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="text-color_green_3 mb-3 w-full rounded-full bg-black  p-4 text-2xl shadow-sm transition duration-300 ease-in hover:shadow-xl "
    >
      {props.text}
    </button>
  )
}

export default ButtonAction
