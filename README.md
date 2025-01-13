
# Project Management System (PMS)

A **Project Management System** built with **GraphQL**, **React**, **Apollo Client**, and **Express.js**. This application allows users to manage clients and projects effectively, with features like adding, deleting, and updating project details.

## Features

- Add, view, update, and delete projects.
- Manage clients linked to projects.
- Interactive user interface with React and Bootstrap.
- Backend powered by GraphQL API for efficient data querying.
- Integrated Apollo Client for state and data management.

## Demo

Add screenshots or a link to your live project demo here (if applicable).

---

## Technologies Used

### Frontend:
- **React**: For building the user interface.
- **Bootstrap**: For responsive styling.
- **Apollo Client**: For GraphQL integration and state management.

### Backend:
- **Node.js** and **Express.js**: For server-side logic.
- **GraphQL**: For defining the API schema and querying data.
- **MongoDB**: For database management using **Mongoose** ORM.

---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14.x or higher)
- **npm** or **yarn**
- **MongoDB**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AnushaLavanuru5/PMS-GraphQL.git
   cd PMS-GraphQL
   ```

2. Install dependencies:
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

3. Configure the environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=<Your_MongoDB_Connection_URI>
   ```

4. Start the development server:
   ```bash
   # Start the backend
   npm run dev

   # Start the frontend
   cd client
   npm start
   ```

---

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the frontend.
2. The backend GraphQL API is available at `http://localhost:5000/graphql`.

---

## GraphQL API Endpoints

### Queries:
- `GET_CLIENTS`: Fetch all clients.
- `GET_PROJECTS`: Fetch all projects.

### Mutations:
- `ADD_CLIENT`: Add a new client.
- `ADD_PROJECT`: Add a new project.
- `DELETE_PROJECT`: Delete an existing project.

---

## Project Structure

```plaintext
PMS-GraphQL/
├── client/                 # React frontend
│   ├── public/             # Static files
│   ├── src/                # Source code
│       ├── components/     # Reusable components (e.g., Header, Clients)
│       ├── pages/          # Application pages (e.g., Home, Project)
│       ├── queries/        # GraphQL queries
│       ├── mutations/      # GraphQL mutations
│       └── App.js          # Main app component
├── config/                 # Backend configuration (e.g., database connection)
├── models/                 # Mongoose models (e.g., Project, Client)
├── resolvers/              # GraphQL resolvers
├── schema/                 # GraphQL schema definition
├── server.js               # Express server entry point
├── package.json            # Backend dependencies
└── README.md               # Project documentation
```

---

## Future Enhancements

- Add user authentication and role-based access control.
- Integrate project deadlines and progress tracking.
- Implement search and filtering functionality for projects and clients.

---

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [GraphQL Documentation](https://graphql.org/)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [React Bootstrap](https://react-bootstrap.github.io/)

---

## Live demo
- [Project Management System](https://youtu.be/GpvsD5m0HLw)
