import { getAuth } from "firebase/auth"

const Barra = ({ setVentana }) => {
	return (
		<div>
			<p>Usuario {getAuth().currentUser.email}</p>
			<button onClick={() => {
				getAuth().signOut()
				setVentana("Login")
			}} >Cerrar sesión</button>
			<button onClick={() => {
				setVentana("Imagenes")
			}} >Todas las pujas</button>
			<button onClick={() => {
				setVentana("MisImagenes")
			}} >Mis pujas</button>
			<button onClick={() => {
				setVentana("SubirImagen")
			}} >Subir puja</button>
		</div>
	)
}

export default Barra