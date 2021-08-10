import { useContext, useState } from "react";
import { OperacionContext } from "../../context/OperacionContext";

const Formulario = () => {
	
	//Se extrae los datos y funciones necesarios del Provider
	const {fecha, numero, resultado, handleChange ,multiplicacion} = useContext(OperacionContext);

	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex flex-col px-5 py-16 justify-center items-center">
				<p className="text-blue-800 font-bold">Fecha actual: {fecha.variable.toString()}</p>
				<p className="mb-8 leading-relaxed">El Número Ingresado será multiplicado por la Hora: {fecha.variable.getHours()}</p>
				<div className="flex w-full justify-center items-end">
					<div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
					<label for="numero" className="leading-7 text-sm text-gray-600">Ingresar Numero</label>
					<input type="text" 
					id="numero" 
					name="numero" 
					onChange={e=>handleChange(e.target.value)}
					value={numero}
					className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
					</div>
					<button onClick={()=> multiplicacion(numero)} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Multiplicar</button>
				</div>
				<div className="text-red-900 mt-10">
					Resultado en mismo Componente: {resultado}
				</div>
			</div>
		</section>
	 );
}

export default Formulario;