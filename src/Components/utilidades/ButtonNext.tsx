const ButtonNext = (props:any) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="hover:shadow-xl shadow-sm transition ease-in duration-300  flex justify-center items-center font-extrabold  bg-black p-4 text-color_green_3 text-4xl rounded-full mb-3  w-16 h-16 ">
      <span className="">
        {props.text}
      </span>
    </button>
  )
}

export default ButtonNext
