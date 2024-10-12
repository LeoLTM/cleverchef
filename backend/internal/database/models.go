package database

type User struct {
	ID                   string               `bson:"_id,omitempty"` // The `omitempty` tag ensures that if the ID is empty, it will not be sent to MongoDB when inserting a new document. This allows MongoDB to automatically generate a unique ObjectID for the document. If the ID is provided, it will be used as the document's `_id`.
	Firstname            string               `bson:"firstname"`
	Lastname             string               `bson:"lastname"`
	Email                string               `bson:"email"`
	FoodPreferences      FoodPreferences      `bson:"food_preferences,omitempty"`
	LikedRecipes         []Recipe             `bson:"liked_recipes,omitempty"`
	AvailableIngredients AvailableIngredients `bson:"available_ingredients,omitempty"`
	UserLocation         UserLocation         `bson:"location,omitempty"`
}

type FoodPreferences struct {
	DietaryRestrictions []string `bson:"dietary_restrictions,omitempty"`
	FavoriteFoods       []string `bson:"favorite_foods,omitempty"`
	DislikedFoods       []string `bson:"disliked_foods,omitempty"`
}

type AvailableIngredients struct {
	Ingredients []Ingredient `bson:"ingredients,omitempty"`
}

type Ingredient struct {
	ID     string `bson:"_id,omitempty"`
	Name   string `bson:"name"`
	Amount int    `bson:"amount"`
}

type Recipe struct {
	ID                  string       `bson:"_id,omitempty"`
	Name                string       `bson:"name"`
	RequiredIngredients []Ingredient `bson:"required_ingredients,omitempty"`
	Instructions        string       `bson:"instructions"`
	UserOwnerID         string       `bson:"owner"` // Reference to the User's ID who owns the recipe.
}

type UserLocation struct {
	Street string `bson:"street"`
	City   string `bson:"city"`
	State  string `bson:"state"`
	Zip    string `bson:"zip"`
}
