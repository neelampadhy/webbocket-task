# E-commerce Website with FakeStore Api with CRUD Operations

This is a fully responsive e-commerce shopping website project built using React and Tailwind CSS. The website utilizes the Fake Store API to fetch data and display products. The Context API is used to manage state throughout the application.


## Features

- `Home page` displays the `featured products`, which are fetched from the **Fake Store API**. Each product card displays the product image, name, and price.
- `Home page` also has a section `Create` which helps to create a product by giving the necessary information such as `product category`, `title`, `price` and `image link`
- `Product Details` page showing a detailed view of the selected product, including an image, title, description and price.
- `Product Details` page also has the options to `edit` and `delete` the selected product. 
- The `products` context gets updated everytime `Create`, `Edit` or `Delete` takes place. 

## Tech Stack

- **React**: A JavaScript library for building user interfaces
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Fake Store API**: A free API for testing and prototyping e-commerce websites
- **Context API**: A React API for managing global state in an application.