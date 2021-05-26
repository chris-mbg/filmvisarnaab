import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);


  // Registration for new user.
  const register = async (userInformation) => {
    try {
      const response = await fetch(`/api/v1/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: userInformation.firstName,
          lastName: userInformation.lastName,
          phone: userInformation.phone,
          email: userInformation.email,
          password: userInformation.password,
          reservations: [], 
        }),
      });

      // Returns status code: 409 - if e-mail already exists in database.
      if (response.status === 409) {
        return { status: response.status };
      }
      const data = await response.json();

      // If registration was not successful, then throw new error.
      if (data.status === "error") {
        throw new Error();
      }

      // Return true, if registration was successful.
      if (data.status === "success") {
        // Registration - logs user in after registration is completed.
        setLoggedInUser(data.data);
        
        return true;
      }
    } catch (err) {
      return false;
    }
  };
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, register }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;