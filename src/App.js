import React, { Component } from "react";
import "./App.css";
import Nav from "./pages/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ForgetPass from "./pages/ForgetPass";
import { Provider } from "react-redux";
import store from "./store";
import User from "./pages/User";
import Error from "./Error";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import FetchApi from "./pages/FetchApi";
import AxiosApi from "./pages/AxiosApi";
import FetchData from "./pages/FetchData";
import UserCSV from "./pages/UserCSV";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ChakraProvider>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path="/logout" element={<Login />} />
              <Route path="*" element={<Error />} />
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/user" element={<User />} />
                <Route path="/profile" element={<Profile />} />{" "}
                <Route path="/forgetPass" element={<ForgetPass />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/register" element={<Register />} />
                <Route path="/fetchapi" element={<FetchApi />} />
                <Route path="/axiosapi" element={<AxiosApi />} />
                <Route path="/fetchData" element={<FetchData />} />
                <Route path="/userCSV" element={<UserCSV />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </Provider>
    );
  }
}

export default App;
