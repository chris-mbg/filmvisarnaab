import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const loggedInCheck = async () => {
    let loggedIn = await fetch("/api/v1/users/whoami");
    loggedIn = await loggedIn.json();
    loggedIn ? setLoggedInUser(loggedIn) : setLoggedInUser(null);
  };
  // On application render, checks if user saved to session
  useEffect(() => loggedInCheck(), []);

  // Registration for new user.
  const register = async (userInformation) => {
    try {
      const response = await fetch(`/api/v1/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: userInformation.firstName,
          lastName: userInformation.lastName,
          phoneNumber: userInformation.phone,
          email: userInformation.email,
          password: userInformation.password,
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

  const login = async (userInformation) => {
    const response = await fetch(`/api/v1/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userInformation.email,
        password: userInformation.password,
      }),
    });
    const result = await response.json();

    if (result.status === "error") {
      return false;
    } else {
      setLoggedInUser(result.loggedInUser);
      return true;
    }
  };

  // Log the user out.
  const logout = async () => {
    // Checks if user is logged in or not. If user is not logged in, then "return".
    if (!loggedInUser) return;

    const { status } = await fetch("/api/v1/users/logout");

    // If logout is successful. Set loggedInUser to "null".
    if (status === 200) {
      setLoggedInUser(null);

      return true;
    }
  };

  return (
    <UserContext.Provider
      value={{ loggedInUser, setLoggedInUser, register, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
