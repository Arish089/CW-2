# Tata 1mg Clone

![Tata-1Mg](https://i.pinimg.com/736x/2a/61/83/2a618394e93bbdf6c4515463df2651af.jpg)

This project is a clone of the Tata 1mg website, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Description

The Tata 1mg Clone project aims to replicate the functionality and features of the Tata 1mg website, which offers various healthcare services, including online pharmacy, doctor consultations, lab tests, and health articles. This project provides a platform for users to browse and purchase medicines .

## Features

- User authentication: Users can sign up, sign in, and sign out securely.
  - Sign Up - Email/Password
  - Sign In - Mobile, Email/Password.
- Browse medicines: Users can search for medicines and browse for it the dedicated page. 
- View Details: Users can view details of every product on their respective page.
- Add to Cart: add them to the cart for purchase.
- Payment: Users can do the mock payment on the payment page powered by razorpay. 
- Responsive design: The application is designed to be mobile-friendly and accessible on various devices.

## Technologies Used

- MongoDB: Database for storing user data, product information, and other application data.
- Express.js: Backend framework for handling HTTP requests, routing, and middleware.
- React.js: Frontend library for building the user interface and components.
- Node.js: JavaScript runtime environment for server-side code execution.
- Google Firebase Authentication : JSON Web Tokens for secure authentication and authorization.
- Axios: HTTP client for making API requests to the backend server.
- Razorpay API - Payment API(test mode) for Payment functionality.
- Chakra UI: React UI framework for designing responsive and customizable UI components.

## Installation

## Clone the repository:

frontend : git clone https://github.com/Arish089/CW-2
backend: gut clone https://github.com/Arish089/CW-2-back-end-

# Navigate to the project directory:

cd TATA-mg-clone


## Install server dependencies:

cd backend
`npm install`


## Install client dependencies:

cd ../frontend
npm install

## Configuration

 1. Set up environment variables:

. Create a .env file in the backend directory.
. Add necessary environment variables like database connection as 'DB_URL' , Razorpay API secret key as 'secret' and port as 'PORT'.

 2. Modify Razorpay settings:
. Obtain your Razorpay API keys from the Razorpay dashboard.
. Update the Razorpay settings in the client-side code to match your API keys.

## Usage

1. Start the server:
cd backend
npm start


2. Start the client:

cd ../frontend
npm run dev

Access the application in your web browser:

url
http://localhost:5173

## Credits
This project is created by [Arish Ali] as a part of construct-week event. It is inspired by and built as a clone of the TATA-mg platform.

## License
This project is licensed under the MIT License.

