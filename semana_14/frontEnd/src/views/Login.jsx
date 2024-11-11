import { useState } from "react";

const Login = () =>{
    const [ formData, setFormData  ] = useState({ email: '', password: ''});

    const handleChange = ( event ) => {
        const { name, value } = event.target;
        setFormData( { ...formData, [name]: value } )
    }
    // Evitamos la recarga de la página
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Enviando Formulario');
            console.log( formData);
            const endPoint = 'http://127.0.0.1:3000/api/users/login';
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
            <h2> Login</h2>
            <form onSubmit={ handleSubmit }  className="card p-4">

                <label htmlFor="">Email</label>
                <input type="email" name="email" onChange={handleChange} value={ formData.email}/>

                <label htmlFor="">Contraseña</label>
                <input type="password" name="password" onChange={handleChange} value={ formData.password}/>

                <button type="submit" className="m-2">Iniciar sesión</button>
            </form>
        </div>
    )
}

export default Login;