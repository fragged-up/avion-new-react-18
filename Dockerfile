# Use Node.js base image
FROM node:18

# Create a non-root user
RUN useradd -ms /bin/bash appuser

# Switch to the non-root user
USER appuser

# Set working directory inside the container
WORKDIR /home/appuser/app

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the frontend code
COPY . .

# Expose port 5173 for frontend service
EXPOSE 5173

# Start the frontend in development mode
CMD ["yarn", "run", "dev"]