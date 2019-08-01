function mostrar()
{
    var planeta = prompt("ingrese un planeta ");

    switch (planeta) {
        
            
            case Tierra:
            
                alert("Vivimos acá!! ");

                break;
            
            case Mercurio:
        
            case    Venus:
        
            alert("Acá hace mas calor");

                break;

             case Pluton:
             case Saturno:
             case Neptuno:
             case  Urano:
            
                alert("Acá hace mas frío");

                 break;

             default:

                alert("no es un planeta ");

            break;
    }
}
