# HealthFuel365 
The health foods platform named “HealthFuel365” is an online store that offers foods retailing and recommends suitable products. It aims to help individuals to stay committed to a healthy diet. The platform name “HealthFuel365” is consistent with this goal, because our year-round platform aims to offer a curated selection of high-quality, nutritious foods and products from reputable suppliers. Based on healthy foods retailing with a recommendation mechanism, the platform promotes a healthy lifestyle, supporting the immune system and aiding in supporting a good diet and weight loss.
<p align="center">
  <img src="frontend/src/assets/images/logo.png" alt="logo" width="200">
</p>
The customer journey is mainly divided into 7 parts, namely browsing our welcome page, creating a profile, browsing our homepage, searching products page, browsing the product detail page, adding the product into the shopping cart, and selecting the packing and shipping services.
<p align="center">
  <img src="images/homepage.png" alt="homepage" width="600">
</p>

# Backend Documentation

## Installition
1. Before running the application, ensure you have the installed the following:

   [Node.js](https://nodejs.org/en) (version 18.16.0)

2. Install dependencies by run the following command in Terminal:

```bash
   npm install
```
## Database Connection
Before proceeding, please make sure you have correctly installed [MongoDB](https://www.mongodb.com/try/download/community-kubernetes-operator) on your system.

After that, you can open your MongoDB Compass dashboard, click on "New Connection +," and copy and paste the following provided MongoDB URI:

```bash
  mongodb+srv://Healthfuel365:HEALTHFUEL365-team33@cluster0.qlftusn.mongodb.net/
```
## Usage

After completing the environment configuration and dependency installation, you can run:

```bash
   npm run build
```

If no error occurs, then you can run:

```bash
   npm run start
```

App is now running at [http://localhost:8081](http://localhost:8081) in development mode

## Folder structure

```bash
└── src
    ├── controllers
    ├── middleware
    ├── models
    ├── routes
    └── services
└── data_clean
    ├── all_product_with_price.py
    ├── merge_all_product.py
    ├── merge_all_product_detail.py
    ├── product_detail.py
    └── product.py
```

controllers comprise the controller functions for resolving, providing, updating, adding and deleting of products, user and order information.

middleware contains the methods to authenticate the user through the token included in the request and to add the id of the user to the request before he passes it on.

models includes interfaces describing the composition of data types like the data structure of a product in the database.

routes determine how a response to a client request at a particular endpoint will respond. It contains the Uniform Resource Identifier (URI) and the specific HTTP request method.

services contains methods regarding getting, adding, updating and deleting product, user, order information from the database.

data_clean  is a set of functions designed to process product data obtained from OpenFoodFacts. It performs a series of essential operations, such as format transformation, preprocessing, and other data cleaning tasks. The goal is to convert the raw product data into a format suitable for storage in MongoDB.

# Frontend Documentation

## Installition
1. Before running the application, ensure you have the installed the following:

   [Node.js](https://nodejs.org/en) (version 18.16.0)

2. Install dependencies by run the following command in Terminal:
```bash
   npm install
```
## Usage
After completing the environment configuration and dependency installation, you can run:
```bash
   npm start
```
The app will run in the development mode.\
To access the user login page, open [http://localhost:3000](http://localhost:3000) in your browser.\
To access the admin login page, open [http://localhost:3000/admin](http://localhost:3000/admin) in your browser.

## Test Accounts

### Customer Account

- Username: Julia
- Password: Julia

### Admin Account

- Username: admin
- Password: admin123

### Test PayPal Accounts

- Account: sb-pxqax26409036@personal.example.com
- Password: cL5W_-{P

## Folder Structure

```bash
├── public
└── src
    ├── assets
    │   ├── font
    │   └── images
    │       ├── category
    │       ├── homepage [store images of homepage]
    │       │   ├── junkfood [store images in the alternative block]
    │       │   └── suppliers [store images of suppliers]
    │       ├── myaccount [store images of myaccount]
    │       ├── nova_score
    │       └── nutri_score
    ├── components
    │   ├── add_to_sc_button
    │   ├── category
    │   ├── footer
    │   ├── layout
    │   ├── loading
    │   ├── nutri
    │   ├── product
    │   └── topnav
    ├── models
    ├── routers
    ├── services
    │   ├── adminService.js [communicate with the backend and implement functions related to the management system such as admin log in, CRUD the product, promo code etc.]
    │   ├── alternativeService.js [communicate with the backend and get alternatives product list]
    │   ├── orderService.js [communicate with the backend and implement functions related to orders such as creating orders, processing Paypal, getting order info etc.]
    │   ├── productDetailService.js [communicate with the backend and get product detail by product id]
    │   ├── productService.js [communicate with the backend and impelement functions realted to products such as getting all products, get product by name and add product to shopping cart etc.]
    │   ├── recommendationService.js [communicate with backend and get recommended product list]
    │   ├── shoppingCartService.js [communicate with the backend and implement functions related to shopping carts such as getting product list and summary price, deleting product items/managing the quantity, validating and removing promo code etc.]
    │   └── userService.js [communicate with backend and implement functions related to users such as register, log in, profile management, address management and so on ]
    │
    ├── util
    │   ├── avatar.js [util functions used to deal with avatars, like compression, encoding and decoding]
    │   ├── constants.js [used to store route]
    │   ├── cookie.js [util functions used to manage cookies]
    │   └── request.js [util functions used to sets up an Axios instance with request and response interceptors for handling API requests and responses]
    │
    └── views
        ├── admin
        │   ├── component
        │   │   ├── addProduct
        │   │   ├── layout
        │   │   ├── topnav
        │   │   └── updateProduct
        │   ├── login
        │   ├── orderManagement
        │   │   └── orderDetail
        │   ├── productManagement
        │   ├── promoCodeManagement
        │   │   └── components
        │   │       ├── add_promocode
        │   │       └── edit_promocode
        │   └── userManagement
        ├── allproducts
        │   └── components
        │       ├── filter
        │       ├── product_list
        │       └── sort
        ├── faqs
        ├── homepage
        │   └── components
        │       ├── alternatives
        │       ├── carousel
        │       └── recommendation
        ├── login
        │   └── components
        ├── me
        │   ├── addressmanagement
        │   ├── components
        │   │   ├── me_address
        │   │   ├── me_info
        │   │   ├── me_nav
        │   │   ├── me_order
        │   │   ├── me_order_product
        │   │   └── me_profile
        │   ├── myaccount
        │   ├── myorder
        │   ├── myprofile
        │   ├── orderdetail
        │   │   └── component
        │   │       ├── order_detail_address
        │   │       ├── order_detail_product
        │   │       └── order_detail_service
        │   └── profileedit
        │       └── component
        ├── order
        │   └── components
        │       ├── or_add_address
        │       ├── or_additional_service
        │       ├── or_address
        │       ├── or_delivery
        │       └── or_summary
        ├── productdetail
        │   └── components
        │       ├── content_level
        │       └── nova
        ├── register
        │   └── components
        ├── shoppingcart
        │   └── components
        │       ├── sc_item_counter
        │       ├── sc_summary
        │       └── shoppingcart_item
        └── welcomepage
```
