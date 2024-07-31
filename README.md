# Todo App

## Overview
The Todo App is a simple task management application that allows users to add, update and search for tasks. The application is built using React for the front end, with tasks fetched from a dummyJSON API. It supports basic CRUD (Create, Read, Update, Delete) operations and includes a search functionality to filter tasks.

## System Design
- **Frontend**: The frontend is developed using React, leveraging functional components and hooks (`useState`, `useEffect`). The UI components are styled using Bootstrap for consistency and responsiveness.
- **Backend**: The application fetches tasks from a mock API (`https://dummyjson.com/todos`). For simplicity, the data is not persistent, and all modifications are local to the application state.

### Components
- **App**: The main component that manages state and coordinates interactions between other components.
- **Item**: Displays the heading of Todo Item like Id,Tasks, operation and pending/completed.
- **Items**: Displays the list of tasks, with functionalities for updating and toggling completion status.
- **AddTodo**: A component for adding new tasks.
- **ErrorMsg**: Displays error messages, such as when no tasks are available.

## Implementation
- **State Management**: The application uses React's `useState` for managing the state of tasks, editing mode, and search queries.
- **Fetching Data**: Initial tasks are fetched from a mock API and stored in the application's state.
- **Task Manipulation**: Users can add new tasks, update existing ones, and toggle their completion status. The state is updated accordingly, and the UI reflects these changes in real-time.
- **Search Functionality**: The search feature filters tasks based on user input, matching task descriptions in a case-insensitive manner.

## Setup and Running the Application

### Prerequisites
- **Node.js** and **npm** (Node Package Manager) installed on your machine.

### Installation

1. **Clone the Repository**

   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   npm install

2. **Running the Application**
   npm run dev

 ### Usage

    Add a Task: Enter a task description in the input field and press "Add".
    Edit a Task: Click the "Update" button next to a task, modify the description, and click "Save".
    Toggle Completion: Click the "Mark Completed" or "Mark Pending" button to change the task's completion status.
    Search: Enter a keyword in the search field to filter tasks by description.  

