package controllers

import (
	"encoding/json"
	"net/http"

	"availability-scheduler-ms/src/models"
	"availability-scheduler-ms/src/services"

	"github.com/gorilla/mux"
)

// StatusHandler returns the service status
func StatusHandler(w http.ResponseWriter, r *http.Request) {
	response := map[string]string{"message": "Availability Scheduler Microservice is running"}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(response)
}

// CreateAvailability handles POST /availability
func CreateAvailability(w http.ResponseWriter, r *http.Request) {
	var avail models.Availability
	err := json.NewDecoder(r.Body).Decode(&avail)
	if err != nil || avail.FieldID == "" {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	err = services.SaveAvailability(avail)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	response := map[string]string{"message": "Availability saved successfully"}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

// GetAvailability handles GET /availability/{field_id}
func GetAvailability(w http.ResponseWriter, r *http.Request) {
	fieldID := mux.Vars(r)["field_id"]
	if fieldID == "" {
		http.Error(w, "Missing field ID", http.StatusBadRequest)
		return
	}

	avail, err := services.GetAvailability(fieldID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusNotFound)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(avail)
}
