📋 Défi JavaScript n°6 — Navbar "intelligente" au scroll
🎯 Objectif
Créer une barre de navigation (navbar) disponible au chargement, qui :

se cache automatiquement lorsque l’utilisateur fait défiler vers le bas,
réapparaît lorsqu’il scroll vers le haut.
Cela permet d’optimiser l’espace à l’écran tout en gardant une navigation rapide accessible.

🛠️ Cadre de travail
Crée les fichiers suivants :

index.html
style.css
main.js
📄 Fichier index.html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Navbar Smart Scroll</title>
		<link rel="stylesheet" href="style.css" />
	</head>
	<body>
		<div id="navbar">
			<a href="#home">Home</a>
			<a href="#news">News</a>
			<a href="#contact">Contact</a>
		</div>
		<div class="lorem">
			<!-- Insérez ici un looooooong texte (exemple: du Lorem Ipsum (environ 100 paragraphes, avec emmet on peut taper "lorem*100") -->
		</div>
		<script src="main.js"></script>
	</body>
</html>
📄 Fichier style.css
body {
	margin: 0;
}

#navbar {
	background-color: black;
	position: fixed;
	top: 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	transition: top 0.3s;
}

#navbar a {
	color: white;
	padding: 16px;
	text-decoration: none;
}

#navbar a:hover {
	background-color: lightgrey;
	color: black;
}
📄 Fichier main.js
// Ton code ici
🧠 Consigne
La navbar est visible au chargement.
Elle se cache quand on scroll vers le bas.
Elle réapparaît quand on scroll vers le haut.
🔧 Aide technique
Utilise window.onscroll pour surveiller le défilement.
Stocke la position précédente dans une variable.
Compare window.scrollY avec la position précédente :
si le scroll augmente → l’utilisateur descend → cache la navbar,
si le scroll diminue → l’utilisateur remonte → affiche la navbar.
Modifie dynamiquement navbar.style.top.
💡 Exemple logique (à ne pas copier tel quel)
if (currentScroll < previousScroll) {
	// montrer la navbar
} else {
	// cacher la navbar
}
🧪 Résultat attendu
Action utilisateur	Effet attendu
Scroll vers le bas	La navbar disparaît
Scroll vers le haut	La navbar réapparaît en haut de l’écran