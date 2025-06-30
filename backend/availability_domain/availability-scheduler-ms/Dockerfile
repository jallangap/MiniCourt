# Use Go base image
FROM golang:1.20

# Set working directory
WORKDIR /app

# Copy go.mod and download dependencies
COPY go.mod ./
RUN go mod download

# Copy the rest of the application
COPY . .

# Build the Go app
RUN go build -o main .

# Expose the port
EXPOSE 5010

# Run the executable
CMD ["./main"]
