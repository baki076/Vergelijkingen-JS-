var start = prompt("Wil je deze game spelen? Beantwoord met Ja of Nee");
var LowerStart = start.toLowerCase();

if(LowerStart == "ja"){
	var level1 = prompt("Je ben aangekomen in altanties, kiest uit verschillende routes 1 2 of 3");
	var Lowerlevel1 = parseInt(level1)

	if(Lowerlevel1 == 1 || Lowerlevel1 == 3){
		alert("Je heb de verkeerd route gekozen");
		    document.write("Je ben bij level 1 gekomen!" + "<br>");
		    document.write("Reload jou pagina om opnieuwe te beginnnen!");
		}

		else if(Lowerlevel1 == 2){
			var level2 = prompt("Je heb de goede route gekozen!, We komen een aardige persoon tegen die graag een apple wil. ga opzoek naar een apple, Voer links of right in.");
			var lowerlevel2 = level2.toLowerCase();
        }

        if(lowerlevel2 == "links"){
        	var level3 = prompt("Je heb een apple boom gevonden maar je heb zelf honger gekrijgen. voer in eten of brengen");
        	var lowerlevel3 = level3.toLowerCase();

        }
    }
        	if(lowerlevel3 == "eten"){
        		var level5 = prompt("Je heb nu zelf gegeten en pauze gehad. Voer, Go in om verder te gaan.");
        		var lowerlevel5 = level5.toLowerCase();

        	}

        		else if(lowerlevel3 == "brengen"){
        			alert("op de terug weg ben je zelf verhongerd en dood gegaan.");
        		    document.write("Je ben zelf vergeten te eten waardoor je dood ben gegaan" + "<br>");
        		    document.write("Mee aan je zelf denken...");
        	}
        

        else if(lowerlevel2 == "right"){
        	var level4 = prompt("Je zoek al een tijdje voor apple en je krijg zelf honger. Voer: Doorzoeken of Stoppen in? ");
        	var lowerlevel4 = level4.toLowerCase();
        }
        	if(lowerlevel4 == "doorzoeken"){
        		var level6 = prompt("Je heb een apple boom gevonden, je heb apple gegeten en de persoon achter gelaten en een pauze genomen Voer. Go in om verder te gaan.")
        		var lowerlevel6 = level6.toLowerCase();
        	}
        

        else if(lowerlevel4 == "stoppen"){
        	alert("Je ben gestop met zoeken en ging terug lopen onderweg ben je uitgehonger en dood gegaan");
        	document.write("Je ben dood gegaan omdat je niet verder ben gegaan met eten zoeken!");
        	document.write("blijf altijd door gaan ook als je denk dat je het niet gaat halen.");
        }

        if(lowerlevel6 == "go" || lowerlevel5 == "go"){
        	var level7 = prompt("Je ben aangekomen bij een nieuwe stad, Ze vragen om jou hulp, Voer: Mining of Jagen in.");
        	var lowerlevel7 = level7.toLowerCase();
        	if(lowerlevel7 == "mining"){
        		var level8 = prompt("je ben aangekomen bij de mine je heb al 100 Euro verdien.Voer: Doorgaan of stoppen in.");
        		var lowerlevel8 = level8.toLowerCase();
        		if(lowerlevel8 == "doorgaan");{
        		var level9 = prompt("je ben doorgaan zoeken en je heb een diamond gevonden. Voer: kingdom opzoeken of person");
        		var lowerlevel9 = level9.toLowerCase();

        		if(lowerlevel9 == "kingdom opzoeken"){
        			var level12 = prompt("je heb een plek gevonden om een kingdom op te zetten. wat wil je als eerst neerzetten. Voer: Farms of muren?");
        			var lowerlevel12 = level12.toLowerCase();
        		}
        		else if(lowerlevel9 == "person"){
                    alert("Je heb genoeg geld verdien om nooit meer te werken en je heb gewonnen.");
                        document.write("Gefilteerd je heb gewonnen!" + "<br>");
                        document.write("Er zijn nog andere manieren om verder te gaan en om het spel op andere manieren uit te spelen");
                    }
                }

                    else if(lowerlevel8 == "stoppen"){
        		        var level10 = prompt("Je ben gestopd en terug gegaan naar de stad en je heb 100 euro. Je gaat naar een smite. Voer: Boog of zwaard in.");
        	          	var lowerlevel10 = level10.toLowerCase();
        	          }
        	        	if(lowerlevel10 == "zwaard"){
        		           	alert("Je heb leren om met een zwaard om te gaan en nu zit je in het leger en je commander van de leger");
        			        document.write("Gefilteerd je heb gewonnen en je ben nu een gezonde commander van het leger");
        	        	}

        		else if(lowerlevel10 == "boog"){
        			alert("Je heb leren boog schieten en je kan nu jagen of dieren en je heb daar je beroep van gemaakt.");
        			document("Gefilteerd je heb een beroep van jager gemaakt.")
        		}
        	
                    

                
            

        if(lowerlevel12 == "farms"){
        	alert("Je heb de farms opgebouwd en je volk is gezond en alles gaat goed als gepland");
        	document.write("Farms zijn gemaakt en het volk is gezond en alled gaat goed als gepland" + "<br>");
        	document.write("Je heb gewonnen om een gezond volk op te bouwen.");
        }
        else if(lowerlevel12 == "muren"){
        	alert("Je heb de muren gebouwd maar je was te laat om genoeg eten te maken voor je volk");
        	document.write("Je volk is verhongerd en je andere volk die het hebben overleefd hebben jou verlaten en naar andere kingdom gegaan" + "<br>");
        	document.write("Probeer het nog eens :)");
        }
    }
        

else if(LowerStart == "nee"){
	alert("Je wilde het spel niet spelen.");
	    document.write("Reload jou pagina om te beginnen!.");
    }
