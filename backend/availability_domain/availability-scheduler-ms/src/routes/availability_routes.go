package routes

import (
	"availability-scheduler-ms/src/controllers"

	"github.com/gorilla/mux"
)

// RegisterAvailabilityRoutes registers all endpoints related to availability scheduling
func RegisterAvailabilityRoutes(router *mux.Router) {
	router.HandleFunc("/status", controllers.StatusHandler).Methods("GET")
	router.HandleFunc("/availability", controllers.CreateAvailability).Methods("POST")
	router.HandleFunc("/availability/{field_id}", controllers.GetAvailability).Methods("GET")
}
