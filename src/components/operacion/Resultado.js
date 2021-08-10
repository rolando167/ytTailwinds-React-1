import { useContext } from 'react';
import {OperacionContext} from '../../context/OperacionContext'

const Resultado = () => {

	const {resultado, restablecer} = useContext(OperacionContext);

	return (
		<section className="text-gray-400 bg-gray-900 body-font">
			<div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
				<div className="lg:w-full md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full  ">
				<h2 className="text-white text-lg font-medium title-font mb-5">Resultado en Componente Hermano</h2>
				<div className="relative mb-4">
					<label for="full-name" className="leading-7 text-sm text-gray-400">😃▶️: {resultado}</label>
				</div>
				<button 
					onClick={() => restablecer()}
					className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Restablecer</button>

				</div>
			</div>
		</section>
	 );
}

export default Resultado;