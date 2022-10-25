# Welcome to Clothify! ✨

An ecommerce application that allows people to buy clothes online

## Features and Functionalities 😃

**User features**

- Full featured shopping cart
- Product reviews and ratings
- Filtering (short by, category, & price range)
- Account Verification (2 factor authentication using email)
- Password Reset (Forget Password)
- Token based authentication using JWT
- Product search feature
- User profile with orders
- Save Cart
- Delete Cart
- Choose quantity (No of items to be ordered)
- Checkout process (shipping, payment method, etc)
- Order summary
- PayPal / credit card integration
- Database seeder (products, users, reviews, & orders)
- Print User orders as pdf/excel
- Print UserList as pdf/excel
- Print OrderList as pdf/excel

## Tech Stack 💻

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Material UI](https://material-ui.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Redux](https://redux.js.org/)

## API :man_technologist:

- [PayPal API](https://developer.paypal.com/)
- [Esewa API](https://developer.esewa.com.np)
- [Send Grid API](https://sendgrid.com/)
- [Cloudinary API](https://cloudinary.com/)

## Installation:

**1. Clone this repo by running the following command :-**

```bash
 git clone https://github.com/NyashaKarata/Clothify
 cd Clothify
```

**2. Now install all the required packages(frontend & backend) by running the following commands :-**

```
cd api 
npm install
cd client
npm install
```

**2. Create a config.env file in config folder and add the following**

```

PAYPAL_CLIENT_ID=your paypal client id

FILE_UPLOAD_PATH=./public/uploads/product
FILE_UPLOAD_SIZE=1000000

JWT_SECRET=your key
JWT_EXPIREIN=30d

CLOUD_NAME=your cloudinary name
API_KEY=your cloudinary api key
API_SECRET=your cloudinary api secret key

SEND_GRID_KEY=your sendgrid api key

FROM_EMAIL=your sender email
FROM_NAME=Clothify

```

**3. Seed Database**

```
# Import data
node seeder -i

# Destroy data
node seeder -d
```

**4. Now start the react and node server by running the following command :-**

```
#Start the server
node app.js

#Start the client side app
cd client

npm start
```

**5.** **🎉 Open your browser and go to `https://localhost:3000`**

## 🤩 Don't forget to give this repo a ⭐ if you like it and want to appreciate our efforts


## Nyasha Karata
