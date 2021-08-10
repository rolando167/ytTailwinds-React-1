import Formulario from "../components/operacion/Formulario"
import Resultado from "../components/operacion/Resultado"
import OperacionProvider from "../context/OperacionProvider";

const Operacion = () => {
	return ( 
		<div>
			{/* El componente Provider Encapsula a otros componentes */}
			<OperacionProvider>
				<Formulario />
				<Resultado />
			</OperacionProvider>

		</div>
	 );
}

export default Operacion;