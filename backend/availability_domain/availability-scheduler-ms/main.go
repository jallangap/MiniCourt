package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"

	"availability-scheduler-ms/src/config"
	"availability-scheduler-ms/src/routes"
)

func main() {
	// Cargar variables de entorno
	err := godotenv.Load()
	if err != nil {
		log.Println("No se pudo cargar el archivo .env, usando variables por defecto")
	}

	// Inicializar Redis
	config.InitRedis()

	// Crear enrutador
	router := mux.NewRouter()

	// Cargar rutas
	routes.RegisterAvailabilityRoutes(router)

	// Puerto desde .env o default
	port := os.Getenv("PORT")
	if port == "" {
		port = "5010"
	}

	log.Printf("Servidor corriendo en http://localhost:%s", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
