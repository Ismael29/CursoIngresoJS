function mostrar()
{
	var notaRandom;

	notaRandom=numeroRandom=Math.floor(Math.random() * 11);
	alert(notaRandom);
	if(notaRandom >=9)
	{
		alert("Exelente!!");
	}
		else if(notaRandom > 4)
		{
			alert("APROBO!!")
		}
			else if (notaRandom < 4)
			{
				alert("Vamos, la proxima se puede!!")
			}

}