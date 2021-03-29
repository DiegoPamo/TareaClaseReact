const Cards = (props) => {
    return (
        
            <div className="card">
                <img className="card-img-top" src={props.datos.imagen} style={{width:"100%",height:"60%"}}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.datos.pelicula}</h5>
                    <p className="card-text">{props.datos.descripcion}</p>
                    <small className="text-muted">Calificacion: {props.datos.calificacion}/10</small>
                </div>
            </div>

        )
    }
    
export default Cards;