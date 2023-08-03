function Append_Childs(childs, container)
{
	childs.forEach((child) => {
		container.appendChild(child);
	});
}

function Create_Recipe(properties)
{
	const recipe_template = RECIPE_TEMPLATE.content.cloneNode(true);
	recipe_template.querySelector(".Recipe_Image").src = properties.image;
	recipe_template.querySelector(".Recipe_Name").innerHTML = properties.name;
	recipe_template.querySelector(".Recipe_Author").innerHTML =
		`Written by @${properties.author}.`;
	Append_Childs(
		properties.categories.map((category) => {
			const element = document.createElement("li");
			element.classList.add("Recipe_Category");
			element.innerHTML = category;
			return (element);
		}),
		recipe_template.querySelector(".Recipe_Categories")
	);
	return (recipe_template);
}

const recipes = [
	Create_Recipe({
		name: "Noodle And Shrimp",
		categories: ["Pasta", "Sea Food", "Vegetables"],
		author: "juliana_pereira",
		image: "assets/noodle-and-shrimp.webp"
	}),
	Create_Recipe({
		name: "Shrimp Soup",
		categories: ["Pasta", "Sea Food"],
		author: "mauro_santos",
		image: "assets/shrimp-soup.webp"
	}),
	Create_Recipe({
		name: "Pepperoni Lasagna",
		categories: ["Pasta", "Meat"],
		author: "marcus_silva",
		image: "assets/lasagna.webp"
	})
];

Append_Childs(recipes, RECIPES_CONTAINER);
