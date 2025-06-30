package services

import (
	"context"
	"encoding/json"
	"fmt"

	"availability-scheduler-ms/src/config"
	"availability-scheduler-ms/src/models"
)

// SaveAvailability saves an availability object in Redis using FieldID as the key
func SaveAvailability(avail models.Availability) error {
	data, err := json.Marshal(avail)
	if err != nil {
		return fmt.Errorf("error marshalling availability: %v", err)
	}

	err = config.RedisClient.Set(context.Background(), avail.FieldID, data, 0).Err()
	if err != nil {
		return fmt.Errorf("error saving availability to Redis: %v", err)
	}

	return nil
}

// GetAvailability retrieves an availability object from Redis by FieldID
func GetAvailability(fieldID string) (*models.Availability, error) {
	val, err := config.RedisClient.Get(context.Background(), fieldID).Result()
	if err != nil {
		return nil, fmt.Errorf("error getting availability from Redis: %v", err)
	}

	var avail models.Availability
	err = json.Unmarshal([]byte(val), &avail)
	if err != nil {
		return nil, fmt.Errorf("error unmarshalling availability: %v", err)
	}

	return &avail, nil
}
