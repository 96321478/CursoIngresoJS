/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var numerouno= parseInt(document.getElementById('importe').value);
    
        var numerodos= parseInt(25);

        var numerotres= parseInt(100);

            var porcen= numerouno * numerodos / numerotres;

            var resultado= numerouno - porcen;

                document.getElementById('resultado').value = resultado;

                
}
