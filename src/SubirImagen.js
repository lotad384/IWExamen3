import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";

const SubirImagen = ({ setVentana }) => {

	const [file, setFile] = useState(null)
	const [imageLink, setImageLink] = useState(null)
	const [descripcion, setDescripcion] = useState("")
	const [precio, setPrecio] = useState(0);
	const [comprador, setComprador] = useState("")

	const uploadImage = (e) => {
		// TODO añadir verificacion de los campos

		const db = getFirestore()
		addDoc(collection(db, "Articulos"), {
			vendedor: getAuth().currentUser.email,
			descripcion: descripcion,
			precio: precio,  
			comprador: comprador
		}).then((docRef) => {
			const storage = getStorage();

			const storageRef = ref(storage, docRef.id);

			uploadBytes(storageRef, file).then((snapshot) => {
				console.log('Se ha creado la publicación! ', snapshot.metadata.fullPath);
				setVentana("MisImagenes")
			}).catch((e) => console.error(e));
		}).catch((e) => console.error(e))

		addDoc(collection(db, "Pujas"), {
			dineroOfrecido: precio,
			identidicador: 0 ///No encuentro la referencia al id
		})
	}

	return (
		<>
			<input type="text" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></input>
			<input type="text" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)}></input>
			<input type="text" placeholder="Comprador" value={comprador} onChange={(e) => setComprador(e.target.value)}></input>
			<input type="file" onChange={(e) => {
				const f = e.target.files[0]
				setFile(f)
				if (f) {
					const fr = new FileReader();
					fr.onload = () => {
						setImageLink(fr.result);
					}
					fr.readAsDataURL(f);
				} else {
					setImageLink(null);
				}
				
			}
			}></input>
			{imageLink != null && <img src={imageLink}></img>}
			<button onClick={uploadImage}>Subir</button>
		</>
	)
}

export default SubirImagen