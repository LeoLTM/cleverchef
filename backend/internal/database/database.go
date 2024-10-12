package database

import (
	"context"
	"fmt"
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
	host = os.Getenv("DB_HOST")
	port = os.Getenv("DB_PORT")
	//database = os.Getenv("DB_DATABASE")
)

func New() Service {
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI(fmt.Sprintf("mongodb://%s:%s", host, port)))

	if err != nil {
		log.Fatal(err)

	}
	return &service{
		db: client,
	}
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
	// Check if the collection exists by trying to create it
	err := db.CreateCollection(ctx, collectionName)
	if err != nil {
		log.Printf("Failed to create collection: %v", err)
		return err
	}

	log.Printf("Collection %s created in database %s", collectionName, db.Name())
	return nil
}
