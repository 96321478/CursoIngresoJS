function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje = ""
        switch (mesDelAño) {
           
            case Enero:

                mensaje="Que comiences bien el año "
                break;
           
                case  Marzo:

                mensaje="A clases!!"
                break;



           
                case  Julio:
             
                mensaje="Se vienen las vacaciones "

                break;

           
                case Diciembre:


                mensaje="felices fiestas"

                break;
            
            
           
                default:
           
        }

                   alert (mensaje);


}//FIN DE LA FUNCIÓN