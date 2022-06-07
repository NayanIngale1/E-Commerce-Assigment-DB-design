## E-Commerce DB Design Assignment

#### Here I have designed the database structure, Schema and routes for the E commerce

    - Users endpoint
    - Brands endpoint
    - Products endpoint

---

### Note : This API is not deploy yet. So if you want to use it, clone the repository and run server side on local terminal you will get home end point as : `http://locahost:5555/`. Now you can use the following endpoints

---

## Here are some API endpoints and there work :

### home : `http://locahost:5555/`

## - User

- For getting all Users data. **( GET )**
  - `/users`
- For getting single User by id **( GET )**
  - `/users/:id`
- For gettiing all addresses of User **( GET )**
  - `/users/:id/addresses`
- For create new User **( POST )**
  - `/users/create`
- For adding new address to User **( Patch )**
  - `/users/:id/addresses/create`
- For edit User details **( Patch )**
  - `/users/:id/edit`
- For edit existing address of User **( Patch )**
  - `/users/:id/addresses/:idx/edit`
  - _here `:id` is for user ID and `:idx` is for address ID which you want to edit_
- For delete single user data **( DELETE )**
    - `/users/:id/delete`

## - Brands

- For getting all Brands data. **( GET )**
  - `/brands`
- For getting single brand by id **( GET )**
  - `/brands/:id`
- For create new brand **( POST )**
  - `/brands/create`
- For edit brand details **( Patch )**
  - `/brands/:id/edit`
- For delete single brand data **( DELETE )**
    - `/brands/:id/delete`

## - Products

- For getting all Products data. **( GET )**
  - `/products`
- For getting single product by id **( GET )**
  - `/products/:id`
- For create new product **( POST )**
  - `/products/create`
- For edit product details **( Patch )**
  - `/products/:id/edit`
- For delete single product data **( DELETE )**
    - `/products/:id/delete`

