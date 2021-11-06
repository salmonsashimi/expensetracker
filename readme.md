# expensetracker: Keep track of your expenses
The web app was built with React, Redux, Node.js and Firebase

[Demo](https://expensetracker-1.herokuapp.com/)

## Prerequisites
The application utilises the realtime database and built-in authentication from [Google Firebase](https://firebase.google.com/). Do have the Firebase API keys ready for installation. 

## Installation
1. Clone the project
   ```
   git clone https://github.com/salmonsashimi/expensetracker.git
   ```
2. Install NPM packages in the project directory
   ```
   npm install
   ```
3. Create .env.development file 
4. Go to your Firebase project and retrieve the Firebase configuration API keys. Fill the API keys in the .env.development file in the following format:
   ```
   FIREBASE_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   FIREBASE_AUTH_DOMAIN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   FIREBASE_DATABASE_URL=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   FIREBASE_PROJECT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   FIRE_STORAGE_BUCKET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   FIREBASE_MESSAGING_SENDER_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   FIREBASE_APP_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```
5. Start applicaton
   ```
   npm run dev-server
   ```

## Usage
