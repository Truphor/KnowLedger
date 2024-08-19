# Use an official Rust image as a base
FROM rust:latest AS builder

# Install necessary dependencies
RUN apt-get update && apt-get install -y \
    cmake \
    build-essential \
    curl \
    pkg-config \
    libssl-dev \
    bash

# Install DFX CLI
RUN curl -fsSL https://internetcomputer.org/install.sh

# Set environment variables for DFX
ENV PATH=/root/bin:$PATH

# Set the working directory inside the container
WORKDIR /app

# Copy the entire project into the container
COPY . .

# Run a debug build to get more detailed output
RUN cargo build

# The final stage, creating a minimal image with the compiled binaries
FROM debian:buster-slim

# Copy the compiled canister binaries from the builder stage
COPY --from=builder /app/target/debug /usr/local/bin

# Set the working directory
WORKDIR /app

# Copy the project files needed for runtime (e.g., Wasm modules, etc.)
COPY . .

# Run DFX to deploy the canisters
CMD ["dfx", "deploy"]
