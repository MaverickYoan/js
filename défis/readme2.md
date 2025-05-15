🎯 Défi JavaScript n°2 — Afficher / Cacher un mot de passe
🧩 Objectif
Lorsque l’utilisateur saisit un mot de passe, celui-ci est masqué par défaut (••••••). L’objectif est de permettre à l’utilisateur de révéler ou masquer ce mot de passe en cochant une case.

🛠️ Cadre de travail
Crée deux fichiers :

index.html (structure HTML)
main.js (script JavaScript)
Copie ce code dans le fichier index.php :

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Show/Hide Password</title>
	</head>
	<body>
		<form action="">
			<label for="password">Password</label>
			<input type="password" name="password" id="input" />
			<input id="checkbox" type="checkbox" />
			<span id="display">Show</span><br />
			<input type="button" value="Send" />
		</form>

		<script type="text/javascript" src="main.js"></script>
	</body>
</html>
👉 Ne modifie pas ce fichier HTML. Toute la logique se fera dans main.js.

🧠 Instructions pour le fichier main.js
Commence par récupérer les éléments nécessaires : Exemple :

const input = document.getElementById('input')
Ensuite, ajoute un évènement click sur la case à cocher (checkbox). Dans cet évènement, tu écriras une condition pour modifier l'affichage du mot de passe.

💡 Indice
Le champ input du mot de passe a un attribut type. Ce type détermine son comportement : - Quand input.type vaut "password", les caractères sont masqués (•••••). - Quand input.type vaut "text", les caractères sont visibles normalement.

👉 En JavaScript, tu peux lire et modifier cet attribut avec input.type.

Tu dois donc : - Vérifier si input.type est "password" ou "text", - Inverser sa valeur quand l’utilisateur clique sur la case.

Tu peux utiliser une structure conditionnelle (if) pour basculer entre les deux.

🌟 Bonus (facultatif)
Lorsque le mot de passe est visible, le texte du change en "Hide". Lorsqu’il est caché, il affiche "Show".

Variante avancée : le mot de passe ne s'affiche que pendant que la case est maintenue cliquée (évènements mousedown / mouseup au lieu de click).