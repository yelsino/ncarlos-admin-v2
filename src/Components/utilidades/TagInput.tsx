import React, { useState } from "react";
import classNames from "classnames";
import { InputFormik } from "./Inputs/InputFormik";
import { NuevoProducto } from "pages/productos/NuevoProducto";

interface Props {
  setNuevoProducto: (value: React.SetStateAction<NuevoProducto>) => void;
  tags: string[];
}

const TagInput = ({setNuevoProducto, tags}: Props) => {
  // const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const handleKeyPress = (event) => {
    event.stopPropagation();
    if (event.key === "Enter" && newTag !== "") {
      // setTags([...tags, newTag]);
      setNuevoProducto((prev) => ({
        ...prev,
        tags: [...tags, newTag],
      }));
      setNewTag("");
    }
  };

  const handleAddition = (event) => {
    event.stopPropagation();
    if (newTag !== "") {
      // setTags([...tags, newTag]);
      setNuevoProducto((prev) => ({
        ...prev,
        tags: [...tags, newTag],
      }));
      setNewTag("");
    }
  }

  const handleChange = (event) => {
    setNewTag(event.target.value);
  };

  const handleDelete = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    // setTags(newTags);
    setNuevoProducto((prev) => ({
      ...prev,
      palabrasClaves: newTags,
    }));
  }

  return (
    <div className="flex flex-wrap flex-col  w-80 gap-y-3"
     onClick={(e)=>{
      e.stopPropagation()
    }}>
      <div onClick={(e)=>{
      e.stopPropagation()
    }}>
      <div className="flex justify-between"><label className="text-color_green_6">Palabras claves de producto</label>
      <button 
        type="button"
        onClick={handleAddition}
        className="bg-green-400 px-3 py-1">Agregar</button></div>
      <input
        placeholder="Ej: amarillo, vegetal, etc"
        className="text-color_green_7 bg-color_green_3 w-full   rounded-md p-4 text-base  outline-none sm:text-lg  appearance-none placeholder:text-green-400"
        type="text"
        value={newTag}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      
      </div>

     <div className="flex flex-wrap w-full gap-1">
     {tags.map((tag, index) => (
        <button
          type="button"
          onClick={() => handleDelete(index)}
        key={index}
        className={classNames(
          "bg-color_green_3 text-color_green_7 rounded p-2 mr-2 cursor-crosshair hover:bg-red-500 hover:text-white select-none ease-in-out duration-400",
          {
            "bg-black text-color_green_7": index % 2 === 0,
            "bg-color_green_7 text-white": index % 2 !== 0,
          }
        )}
      >
        {tag}
      </button>
      ))}
     </div>
    </div>
  );
};

export default TagInput;