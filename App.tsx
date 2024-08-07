import Card from "./components/Card";//ruta del componente q se ejecuta en la funcion

function App(){
  
  return <Card titulo={"siete de agosto..."} texto={"miercoles..."}/>;
  /*el componente Card envia las props titulo y texto con sus respectivos valores*/
}
export default App;