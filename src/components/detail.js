import { useLocation } from "react-router-dom";

export default function Detail() {

  const location = useLocation();    
  const nombre = location.state?.nombre; 
  const foto = location.state?.foto; 
  const raza= location.state?.raza;
  return (
    <div>
      <h1> {nombre}</h1>
      
      <img src={foto} alt="..." style={{ width: "30%", height: "auto" }} />

      <h2> {raza}</h2>
    </div>
  );
}
