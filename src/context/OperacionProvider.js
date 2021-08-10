import { useState } from "react";
import { OperacionContext } from "./OperacionContext";

const OperacionProvider = ({children}) => {

	const [fecha, setFecha] = useState({variable: new Date()});

	const [numero, setNumero] = useState(0);
	const [resultado, setResultado] = useState(0);


	const handleChange = (numeroParametro) => {
		setNumero(numeroParametro);
	}

	const multiplicacion = (numeroParametro) =>{
		setResultado(numero * fecha.variable.getHours());
	}

	const restablecer = () => {
		setNumero(0);
		setResultado(0);
	}

	const data = {
		fecha,
		numero,
		resultado,
		handleChange,
		multiplicacion,
		restablecer
	}

	return (
		<OperacionContext.Provider
			value = {data}
		>
			{children}
		</OperacionContext.Provider>
	 );
}

export default OperacionProvider;