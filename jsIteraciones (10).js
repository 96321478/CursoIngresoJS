function mostrar()
{

	var contador = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0; 
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var contadorCeros=0;
	var contadorPares=0;
	var promedioPositivo;
	var promedioNegativo;


	var numero;
	//declarar contadores y variables 
	
	var respuesta=true;

		while(respuesta==true)
	{
			numero = prompt("Ingrese un numero: ");
			numero = parseInt(numero);

			if(numero>0)	
	{
			contadorPositivos++;
			acumuladorPositivos += numero;
	}
				else
		{
		
					if (numero<0) 
			{
						contadorNegativos++;	
						acumuladorNegativos += numero;
					}
					else
					{
						contadorCeros++;
					}

		}
	
		if (numero%2==0) 
		{
			contadorPares++;	
		}

			respuesta = confirm("Desea ingresar otro número? ");
	
	}
	
		if (contadorPositivos != 0) 
		{
			
			promedioPositivo = acumuladorPositivos/contadorPositivos;

		}
	else{
			promedioPositivo = "No se ingresaron números positivos";
	}
		if (contadorNegativos !=0) {
			
			promedioNegativo = "No se ingresaron números negativos";

		
			promedioNegativo = acumuladorNegativos/contadorNegativos;
		}





		document.write("1.suma de positivos: " +  acumuladorPositivos) + "<br>";
		document.write("2.suma de negativo: " +  acumuladorNegativos) + "<br>";
		document.write("3.cantidad de Positivos" +  contadorPositivos) + "<br>";
		document.write("4.cantidad de Negativos" +  contadorNegativos) + "<br>";
		document.write("5.contador de ceros " +  contadorCeros) + "<br>";
		document.write("6. cantidad de pares " +  contadorPares) + "<br>";
		document.write("7. promedio de positivos" +  promedioPositivo) + "<br>";
		document.write("8. promedio de negativos" +  promedioNegativo) + "<br>";


		
}//FIN DE LA FUNCIÓN