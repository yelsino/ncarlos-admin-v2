const ButtonAction = (props:any) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="hover:shadow-xl shadow-sm transition ease-in duration-300  w-full bg-black p-4 text-color_green_3 text-2xl rounded-full mb-3 ">
      {props.text}
    </button>
  )
}

export default ButtonAction
