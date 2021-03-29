import Principal from './Principal';
import Cards from './Cards';

const Content = (props) => {

    const titulo1 = 'Pelicula de la Semana'
    const descripcion1 = 'larum peliculasasdsa fosdfkjdsnfkdsnf mdsnfkjsfhj ebfdnmsfdsbfnmdsbfrmitenda tulafor mea'
    const titulo2 = 'Catalogo de Peliculas'
    const descripcion2 = 'Aqui encontraras tus peliculas favoritalarum laskld,mweijskej,n,mcss'

    return (
        <div className="container">
            <div className="peliculaone bg-white">
                <center>
                <h2>{titulo1}</h2>
                <p><b>{descripcion1}</b></p>
                </center>
            </div>

            <Principal datos={props.datos[0]}/>

            <div className="catalogo"> 
                <center>
                    <h2>{titulo2}</h2>
                    <p><b>{descripcion2}</b></p>
                </center>
            </div>

                <div className="card-deck">
                    <Cards datos={props.datos[1]}/>
                    <Cards datos={props.datos[2]}/>
                    <Cards datos={props.datos[3]}/>
                </div>

                <div className="card-deck">
                    <Cards datos={props.datos[4]}/>
                    <Cards datos={props.datos[5]}/>
                    <Cards datos={props.datos[6]}/>
                </div>
                
                <div className="card-deck">
                    <Cards datos={props.datos[7]}/>
                    <Cards datos={props.datos[8]}/>
                    <Cards datos={props.datos[9]}/>
                </div>
        </div>
    )
  }
export default Content;