# Ecommerce-site-demo-backend

Simple Express.js backend for an e-commerce demo project.

## Description

This repository provides a minimal REST API for product management (CRUD) using Express and MongoDB. It's intended as a learning/demo backend for a small e-commerce app.

## Prerequisites

- Node.js (v14+ recommended)
- npm
- A MongoDB database (Atlas or local)

## Setup

1. Clone the repository and install dependencies:

   ```bash
   npm install
   ```

2. Configure the database connection:

- By default the project connects in `database/database.js`. Replace the hard-coded connection string with your own MongoDB URI or update the file to read from an environment variable such as `MONGODB_URI`.
- Do not commit credentials to the repository.

## Run

Start the server:

```bash
node server.js
```

For development you can use `nodemon` if installed:

```bash
npx nodemon server.js
```

The server entrypoint is `server.js`.

## API Endpoints

Base routes are defined in `routes/Ecom-routes.js` and map to the product controller in `controllers/EcomControllers.js`.

- GET /get — Get all products
- GET /get/:id — Get a single product by id
- POST /add — Add a new product
- PUT /update/:id — Update a product by id
- DELETE /delete/:id — Delete a product by id

Example curl to list products:

```bash
curl http://localhost:3000/get
```

## Project Structure

- `server.js` — application entry
- `routes/` — Express routes (`Ecom-routes.js`)
- `controllers/` — request handlers (`EcomControllers.js`)
- `model/` — Mongoose models (e.g. `product.js`)
- `database/` — database connection helper (`database.js`)

## Notes

- The current `database/database.js` contains a connection string example — replace it and prefer environment variables for credentials.
- Consider adding a `.env` and using a package like `dotenv` to manage sensitive config.

## Contributing

PRs and issues are welcome. Keep changes focused and include tests if appropriate.

## License

This project has no license file. Add one if you intend to publish or share broadly.
