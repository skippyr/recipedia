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
	if (properties.can_edit) {
		const element = document.createElement("button");
		element.classList.add("Recipe_Button", "fa-solid", "fa-pencil");
		element.title = "Edit Your Recipe";
		recipe_template.querySelector(".Recipe_Buttons").appendChild(element);
	}
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
		can_edit: true,
		image: "assets/noodle-and-shrimp.webp"
	}),
	Create_Recipe({
		name: "Shrimp Soup",
		categories: ["Pasta", "Sea Food"],
		author: "mauro_santos",
		can_edit: false,
		image: "assets/shrimp-soup.webp"
	}),
	Create_Recipe({
		name: "Pepperoni Lasagna",
		categories: ["Pasta", "Meat"],
		author: "marcus_silva",
		can_edit: false,
		image: "assets/lasagna.webp"
	})
];

Append_Childs(recipes, RECIPES_CONTAINER);
