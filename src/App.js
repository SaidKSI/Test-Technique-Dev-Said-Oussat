import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import LoginForm from "./pages/LoginForm";
import DashLayout from "./components/DashLayout";
import Welcome from "./pages/Welcome";
import PostList from "./pages/PostList";
import { UserContext } from "./Context/UserContext";
import PrivateRoute from "./components/PrivateRoute";
import { useEffect, useMemo, useState } from "react";
function App() {
  const navigate = useNavigate()
  const [isLoding, setIsLoading] = useState(true);
  function getUser() {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      

      if (user) return user;
      else return null;
    } catch (error) {
      return null;
    }
  }
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
      navigate('/index')
    }
    setIsLoading(false);

   
  }, []);

  return (
    <UserContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginForm />} />

          <Route path="/index" element={<DashLayout />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <Welcome />
                </PrivateRoute>
              }
            />

            <Route path="posts">
              <Route
                index
                element={
                  <PrivateRoute>
                    <PostList />
                  </PrivateRoute>
                }
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
