# Summary: Code Architecture

## Tips and Recommendations
1. **Separation of Concerns**:
   - Maintain code separation into layers such as business logic, data presentation, and data access.
   - **Tip**: Use "Smart" components for business logic and "Dumb" components for data display.

2. **Hierarchical Project Structure**:
   - Organize files and folders by modules and features, so each feature is in its own folder with relevant files.
   - **Tip**: Use structures like `components`, `services`, `hooks`, and `pages`.

3. **DRY Code (Don’t Repeat Yourself)**:
   - Avoid code duplication by creating reusable functions and tools.
   - **Tip**: Use Custom Hooks and utility functions.

4. **Leverage TypeScript**:
   - Use TypeScript for better code safety and reduced errors through static typing.


## Example of Separation of Concerns in React:

## Let’s say we have an application that displays a list of users, where there is business logic for fetching data from the server and a component for presenting the data.

## The component responsible for handling business logic and managing the state. : 

## “Smart” Component Example :

<!-- import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import { fetchUsers } from '../services/userService';

const UserContainer: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <UserList users={users} />;
}; -->

<!-- export default UserContainer; -->


## Dumb Component Example : 

<!-- import React from 'react';

type UserListProps = {
  users: string[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
};

export default UserList; -->




## Explanation:

## 	•	UserContainer Component: This is the “smart” component that manages the state, handles data fetching, and passes the data as props to the child component.
## 	•	UserList Component: This is the “dumb” component, which only displays the data it receives as props, without any business logic.

## Benefits of This Approach:
## 	•	Modularity and Readability: Each component has a clear, specific role, making the code easier to understand and maintain.
## 	•	Reusability: The UserList component can be reused in different parts of the project without any dependencies on the data-fetching logic.

## This approach supports the Separation of Concerns principle, leading to more structured, modular, and maintainable code architecture.