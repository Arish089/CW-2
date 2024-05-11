# Tata 1mg Clone

![Tata-1Mg](https://pbs.twimg.com/profile_images/1727554883124113408/gVsBLW-5_400x400.jpg)

This project is a clone of the Tata 1mg website, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Description

The Tata 1mg Clone project aims to replicate the functionality and features of the Tata 1mg website, which offers various healthcare services, including online pharmacy, doctor consultations, lab tests, and health articles. This project provides a platform for users to browse and purchase medicines .

## Features
- Product Page: Browse through a wide range of pharmaceutical products available on the platform.

- Search Functionality: Easily search for specific products using keywords or filters.

- Add to Cart: Select desired products and add them to the shopping cart for later purchase.

- Single Product Pages: View detailed information about a specific product on dedicated product pages.

- Payment Gateway Integration: Complete secure transactions using the Razorpay payment gateway.

- Firebase Authentication: Authenticate users securely using Firebase Authentication, supporting mobile number and email/password sign-in methods.

- CRUD Operations: Perform CRUD operations to manage product data (Create, Read, Update, Delete).

- Responsive design: The application is designed to be mobile-friendly and accessible on various devices.

## Technologies Used

1. Frontend:

- React.js: Frontend library for building the user interface and components.

- Vite: Used as bundler in the project.

- Deployment: Frontend deployed on Netlify.

2. Backend:

- MongoDB: Database for storing user data, product information, and other application data.

- Express.js: Backend framework for handling HTTP requests, routing, and middleware.

- Node.js: JavaScript runtime environment for server-side code execution.

- Deployment: Backend deployed on Render.com.

3. Authentication:

- Google Firebase Authentication : Firebase tokens for secure authentication and authorization.

4. Payment Gateway:

- Razorpay - Payment gateway(test mode) for Payment functionality.

5. Tools:

- Axios: HTTP client for making API requests to the backend server and performing CRUD.

- Chakra UI: React UI framework for designing responsive and customizable UI components.

## Installation

## Clone the repository:

frontend : ```git clone https://github.com/Arish089/CW-2```  

backend: ```git clone https://github.com/Arish089/CW-2-back-end-```

# Navigate to the project directory:

 ```cd TATA-mg-clone``` 


## Install server dependencies:

 ```cd backend```  

 ```npm install``` 


## Install client dependencies:

 ```cd ../frontend```  

 ```npm install``` 

## Configuration

 1. Set up environment variables:

. Create a .env file in the backend directory.
. Add necessary environment variables like database connection as 'DB_URL' , Razorpay API secret key as 'secret' and port as 'PORT'.

 2. Modify Razorpay settings:
. Obtain your Razorpay API keys from the Razorpay dashboard.
. Update the Razorpay settings in the client-side code to match your API keys.

## Usage

1. Start the server:

 ```cd backend```  

 ```npm start``` 


2. Start the client:

 ```cd ../frontend```  

 ```npm run dev``` 

Access the application in your web browser:

url  
```http://localhost:5173``` 

## Credits
This project is created by [Arish Ali] as a part of construct-week event. It is inspired by and built as a clone of the TATA-mg platform.

## License
This project is licensed under the MIT License.

