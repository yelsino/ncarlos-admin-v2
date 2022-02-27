const Parrafo = (props) => {
  return (
    <p className="break-words text-center text-color_green_6 font-poppins w-60 text-sm mx-auto leading-6">
      {props.text}
    </p>
  );
}

export default Parrafo;