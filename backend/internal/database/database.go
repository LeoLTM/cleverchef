package database

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"log"
	"os"
	"time"

	_ "github.com/joho/godotenv/autoload"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Service interface {
	Health() map[string]string
}

type service struct {
	db *mongo.Client
}

var (
	host     = os.Getenv("DB_HOST")
	port     = os.Getenv("DB_PORT")
	username = os.Getenv("DB_USER")
	password = os.Getenv("DB_ROOT_PASSWORD")
)

func New(developMode bool) Service {
	clientURI := fmt.Sprintf("mongodb://%s:%s@%s:%s/?authSource=admin&authMechanism=SCRAM-SHA-256", username, password, host, port)

	fmt.Println(clientURI)

	// Connect to MongoDB
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI(clientURI))

	if err != nil {
		log.Fatal(err)

	}
	s := &service{
		db: client,
	}

	if developMode {
		db, collection := s.CreateTestDatabaseAndCollection()
		err = s.CreateTestUsers(context.Background(), db, collection)
	}

	if err != nil {
		log.Fatalf("Failed to create database: %v", err)
	}
	return s
}

func (s *service) Health() map[string]string {
	ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
	defer cancel()

	err := s.db.Ping(ctx, nil)
	if err != nil {
		log.Fatalf(fmt.Sprintf("db down: %v", err))
	}

	return map[string]string{
		"message": "It's healthy",
	}
}

func (s *service) CreateDatabase(ctx context.Context, dbName string) (*mongo.Database, error) {
	db := s.db.Database(dbName)
	// MongoDB creates a database lazily, only when the first collection is created
	return db, nil
}

func (s *service) CreateCollection(ctx context.Context, db *mongo.Database, collectionName string) error {
	// Check if the collection already exists
	collections, err := db.ListCollectionNames(ctx, bson.M{"name": collectionName})
	if err != nil {
		log.Printf("Failed to list collections: %v", err)
		return err
	}

	// If the collection already exists, return an error
	for _, name := range collections {
		if name == collectionName {
			log.Printf("Warning: Collection %s already exists in database %s", collectionName, db.Name())
			return nil
		}
	}

	// Create the collection if it doesn't exist
	err = db.CreateCollection(ctx, collectionName)
	if err != nil {
		log.Printf("Failed to create collection %s in database %s: %v", collectionName, db.Name(), err)
		return err
	}

	log.Printf("Collection %s created in database %s", collectionName, db.Name())
	return nil
}

func (s *service) CreateTestDatabaseAndCollection() (*mongo.Database, string) {
	const databaseName = "TestDataBase"
	const collection = "users"

	db, err := s.CreateDatabase(context.Background(), databaseName)
	if err != nil {
		log.Fatalf("Failed to create database: %v", err)
	}
	err = s.CreateCollection(context.Background(), db, collection)
	if err != nil {
		log.Fatalf("Failed to create collection: %v", err)
	}
	return db, collection
}

func (s *service) CreateTestUsers(ctx context.Context, db *mongo.Database, collectionName string) error {
	collection := db.Collection(collectionName)

	// Insert some test users
	users := []interface{}{
		User{
			ID:        "1",
			Firstname: "John",
			Lastname:  "Doe",
			Email:     "john.doe@example.com",
			FoodPreferences: FoodPreferences{
				DietaryRestrictions: []string{"Vegan"},
				FavoriteFoods:       []string{"Salad", "Tofu"},
				DislikedFoods:       []string{"Meat", "Fish"},
			},
			LikedRecipes: []Recipe{
				{
					ID:   "recipe1",
					Name: "Vegan Salad",
					RequiredIngredients: []Ingredient{
						{Name: "Lettuce", Amount: 2},
						{Name: "Tomato", Amount: 3},
					},
					Instructions: "Mix ingredients and serve fresh.",
					UserOwnerID:  "1",
				},
			},
			AvailableIngredients: AvailableIngredients{
				Ingredients: []Ingredient{
					{Name: "Lettuce", Amount: 5},
					{Name: "Tomato", Amount: 4},
				},
			},
			UserLocation: UserLocation{
				Street: "123 Vegan Street",
				City:   "Vegantown",
				State:  "CA",
				Zip:    "90001",
			},
		},
		User{
			ID:        "2",
			Firstname: "Jane",
			Lastname:  "Smith",
			Email:     "jane.smith@example.com",
			FoodPreferences: FoodPreferences{
				DietaryRestrictions: []string{"Gluten-Free"},
				FavoriteFoods:       []string{"Quinoa", "Avocado"},
				DislikedFoods:       []string{"Bread", "Pasta"},
			},
			LikedRecipes: []Recipe{
				{
					ID:   "recipe2",
					Name: "Gluten-Free Pizza",
					RequiredIngredients: []Ingredient{
						{Name: "Gluten-Free Flour", Amount: 1},
						{Name: "Cheese", Amount: 2},
					},
					Instructions: "Bake at 400°F for 20 minutes.",
					UserOwnerID:  "2",
				},
			},
			AvailableIngredients: AvailableIngredients{
				Ingredients: []Ingredient{
					{Name: "Quinoa", Amount: 10},
					{Name: "Avocado", Amount: 3},
				},
			},
			UserLocation: UserLocation{
				Street: "456 Gluten-Free Avenue",
				City:   "Celiacity",
				State:  "NY",
				Zip:    "10001",
			},
		},
		User{
			ID:        "3",
			Firstname: "Alice",
			Lastname:  "Johnson",
			Email:     "alice.johnson@example.com",
			FoodPreferences: FoodPreferences{
				DietaryRestrictions: []string{"Keto"},
				FavoriteFoods:       []string{"Bacon", "Eggs"},
				DislikedFoods:       []string{"Bread", "Sugar"},
			},
			LikedRecipes: []Recipe{
				{
					ID:   "recipe3",
					Name: "Keto Bacon & Eggs",
					RequiredIngredients: []Ingredient{
						{Name: "Bacon", Amount: 4},
						{Name: "Eggs", Amount: 3},
					},
					Instructions: "Fry bacon and eggs together.",
					UserOwnerID:  "3",
				},
			},
			AvailableIngredients: AvailableIngredients{
				Ingredients: []Ingredient{
					{Name: "Bacon", Amount: 8},
					{Name: "Eggs", Amount: 6},
				},
			},
			UserLocation: UserLocation{
				Street: "789 Keto Lane",
				City:   "Ketoville",
				State:  "TX",
				Zip:    "75001",
			},
		},
	}

	_, err := collection.InsertMany(ctx, users)
	if err != nil {
		// Check if the error is due to duplicate keys (e.g., users already exist)
		if mongo.IsDuplicateKeyError(err) {
			log.Printf("Warning: Test users already exist in collection %s", collectionName)
			return nil // Do not return an error, since it's not critical
		}

		// Log and return other types of errors
		log.Printf("Failed to insert test users: %v", err)
		return err
	}

	log.Printf("Test users created in collection %s", collectionName)
	return nil
}
