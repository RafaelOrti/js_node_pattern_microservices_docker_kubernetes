# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY ./services/user-service/package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY ./services/user-service .

# Expose the port the app runs on
EXPOSE 3003

# Command to run the application
CMD ["node", "src/index.js"]
