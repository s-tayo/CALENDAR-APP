FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
