package models

// Availability represents a field availability schedule
type Availability struct {
	FieldID     string `json:"field_id"`
	AvailableAt string `json:"available_at"` // Example: "2025-07-01T14:00:00"
	Status      string `json:"status"`       // Example: "available", "reserved"
}
