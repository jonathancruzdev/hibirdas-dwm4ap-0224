// Para recibir los params importamos un hooks
import { useParams } from "react-router-dom";

const Details = () =>{

    const { id } = useParams();

    return (
        <>
            <h2> Detalle de { id }</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, soluta velit porro maxime sed eius exercitationem sint corporis adipisci optio ea officiis nobis quae, voluptatibus expedita tempore ipsum, praesentium pariatur.
            </p>
        </>
    )
}

export default Details;