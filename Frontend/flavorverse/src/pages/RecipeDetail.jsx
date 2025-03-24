import React from 'react';
import { useParams } from 'react-router-dom';


const RecipeDetail = () => {
    const { recipeId } = useParams();

    const recipes = [
        { id: '1', title: 'Fresh Salad', img: '/salad.svg', ingredients: ['Lettuce', 'Tomatoes'], instructions: 'Mix ingredients.' },
        { id: '2', title: 'Spaghetti', img: '/ndole.jpg', ingredients: ['Pasta', 'Tomato Sauce'], instructions: 'Boil pasta.' },
        { id: '3', title: 'Tacos', img: '/nyama.jpg', ingredients: ['Tortillas', 'Meat', 'Lettuce'], instructions: 'Assemble tacos.' },
        { id: '4', title: 'Sushi', img: '/plantain.jpg', ingredients: ['Rice', 'Fish', 'Seaweed'], instructions: 'Roll the ingredients together.' },
        { id: '5', title: 'Chocolate Cake', img: '/chick.jpg', ingredients: ['Flour', 'Cocoa', 'Sugar'], instructions: 'Bake at 350°F for 30 minutes.' },
        // Add more recipes 
    ];

    const recipeData = recipes.find(recipe => recipe.id === recipeId);

    if (!recipeData) {
        return <div>Recipe not found.</div>;
    }

    return (
        <div className="mx-5 my-10">
            <div className="flex  justify-around md:justify-normal">
            <button className='className=" md:mx-2 border border-[#B84A62] text-[#B84A62] transition-all duration-300 font-bold p-2 hover:shadow-md text-center rounded-sm text"'>Video</button>
            <button className='className=" md:mx-2 transition-all duration-300 bg-[#b84a62ea] hover:bg-[#b84a62d7] hover:shadow-md text-white  font-bold p-3 rounded-sm text-center inline-block"'>Recipe</button>
            <button className='className=" md:mx-2 border border-[#B84A62] text-[#B84A62] transition-all duration-300 font-bold p-2 hover:shadow-md text-center rounded-sm text"'>Add to Cart</button>
            </div>
            <div className="my-10 w-[300px] md:w-[600px]">
            <h1 className="text-3xl font-bold">How to make {recipeData.title}</h1>
            <img src={recipeData.img} alt={recipeData.title} className=" h-64  object-cover" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quidem soluta earum porro repellat velit aliquam accusamus maiores saepe alias nostrum obcaecati ad aperiam, officiis labore distinctio! Quod, saepe accusamus?</p>
            <h2 className="text-2xl font-semibold">Ingredients</h2>
            </div>
            <ul className="list-disc pl-5 my-2">
                {recipeData.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2 className="text-2xl font-semibold">Instructions</h2>
            <p className="my-2">{recipeData.instructions}</p>
        
        </div>
    );
};

export default RecipeDetail;