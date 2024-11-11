import { useState } from "react";

const Registro = () =>{
    // Defino los estados
    const [ formData, setFormData  ] = useState({ name: '', email: '', password: ''});

    const handleChange = ( event ) => {
        const { name, value } = event.target;
        //console.log(name, value);
        setFormData( { ...formData, [name]: value } )
    }
    // Evitamos la recarga de la página
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Enviando Formulario');
            console.log( formData);
            const endPoint = 'http://127.0.0.1:3000/api/users/';
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify( formData)
            }
            const response = await fetch(endPoint, config);

            if( ! response.ok){
                console.error( response);
            }

            const data = await response.json();

            console.log(data);
            setFormData({
                name: '',
                email: '',
                password: ''
            })

        } catch (error) {
            console.log(error);
            alert('Error del Servidor');
        }

    }
    return (
        <div >
            <h2> Registro</h2>
            <form onSubmit={ handleSubmit }  className="card p-4">
                <label htmlFor="">Nombre</label>
                <input className="" type="text" name="name" onChange={handleChange} value={formData.nombre} />

                <label htmlFor="">Email</label>
                <input type="email" name="email" onChange={handleChange} value={ formData.email}/>

                <label htmlFor="">Contraseña</label>
                <input type="password" name="password" onChange={handleChange} value={ formData.password}/>

                <button type="submit">Registrarme</button>
                {/*  Incorrecto 
                <label for=""></label>
                <input class="" type="text" /> */}
            </form>
        </div>
    )
}

export default Registro;