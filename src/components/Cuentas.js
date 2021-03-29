const Cuentas = (props) => {
    const titulo = 'Netflix'
    const usuario = 'KAZUMA02'
    const foto = 'https://www.adl-logistica.org/wp-content/uploads/2019/07/imagen-perfil-sin-foto.png'
    const usuario2 = 'ROXSTAR12'
    const foto2 = 'https://www.adslzone.net/app/uploads-adslzone.net/2020/09/Foto-de-perfil-en-WhatsApp-930x487.jpg'
    const usuario3 = 'KAMINA'
    const foto3 = 'https://pm1.narvii.com/6872/f5c54fef8f73e2f35e242f9808843f9c43cf2980r1-1536-2048v2_hq.jpg'

    return(
        <div className="container">

            <div> 
                <center>
                    <h2>{titulo}</h2>
                </center>
            </div>

            <div className="card-deck">

                <div className="card">
                    <img className="card-img-top" src={foto}></img>
                    <div className="card-body">
                        <h5 className="card-title">{usuario}</h5>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src={foto2}></img>
                    <div className="card-body">
                        <h5 className="card-title">{usuario2}</h5>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src={foto3}></img>
                    <div className="card-body">
                        <h5 className="card-title">{usuario3}</h5>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Cuentas;