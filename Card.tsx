interface MultProps{/*se declara la estructura de la propiedad */
  titulo: string;
  texto: string;
}
function Card(props: MultProps){/*argumentos q recibe la funcion, NombrePropiedad: tipoPropiedad */
  const { titulo,texto }=props;
  return (
  <>
    <h1>{titulo}</h1>
    <p>{texto}</p>
  </>);
}

export default Card;
