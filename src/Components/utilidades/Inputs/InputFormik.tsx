import { Field, FormikErrors, FormikTouched } from "formik"

interface Props {
	children?: React.ReactNode
	titulo: string
	nombre: string
	type?: string
	errors: FormikErrors<any>,
	touched: FormikTouched<any>,
  handleChange: (value:any) => void
  handleChangePesonalizado?: (value:any) => void
  value?: any
}

export const InputFormik = (props:Props) => {

	const { children, titulo, nombre, errors, touched, type ,handleChange, handleChangePesonalizado, value} = props

	return (
    // <div className=" relative w-72 sm:w-80">
    <div className="relative w-full">
      <div className="flex gap-x-1">
        <label
          htmlFor="documento"
          className={`first-letter:uppercase lowercase ${
            errors[nombre] && touched[nombre]
              ? 'text-red-500'
              : 'text-color_green_6'
          }`}
        >
          {titulo}
        </label>
        {errors[nombre] && touched[nombre] ? (
          <div className="text-red-500">{`${errors[nombre]}`}</div>
        ) : null}
      </div>
      <div className="flex relative items-center">
        <Field
          autoComplete={'off'}
          className=" text-color_green_7 bg-color_green_3 w-full   rounded-md p-4 text-base  outline-none sm:text-lg  appearance-none"
          name={nombre}
          id={nombre}
          type={type}
          value={value}
          onChange={(evento)=>{

            handleChange(evento)

            if(handleChangePesonalizado) 
              handleChangePesonalizado(evento)
          }}          
        />

        {children && (
          <label
            htmlFor={nombre}
            className="text-color_green_7 bg-color_green_3  -translate-x-10 p-2"
          >
            {children}
          </label>
        )}
      </div>
    </div>
  )
}