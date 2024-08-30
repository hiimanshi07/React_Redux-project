import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { isLoggedIn } from "../PublicRoute";

function Nav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  // const [login, setLogin] = useState(false);
  // // const [user,setUser]=useState()

  // useEffect(() => {
  //   setLogin(isLoggedIn());
  // }, [login]);

  const isLoggedIn = localStorage.getItem("auth");
  return (
    <>
      <Flex
        bg={"#0f3657"}
        p={4}
        gap={4}
        alignItems={"center"}
        justify={"end"}
        letterSpacing={"wider"}
        fontWeight={"medium "}
        textColor={"black"}
      >
        <Box fontSize={"2xl"} fontWeight={"bold"} textColor={"aliceblue"}>
          React Redux + Axios + Fetch + RHF
        </Box>
        <Spacer />
        {/* <Link to="/">
          <Text p={1} py={0.5} bg={"aliceblue"} borderRadius={"md"}>
            Home
          </Text>
        </Link> */}
        {/* <Link to="/login">
          {" "}
          <Button bg={"aliceblue"} borderRadius={"md"}>
            Login
          </Button>
        </Link> */}

        {!isLoggedIn && (
          <Link to="/login">
            {" "}
            <Button bg={"aliceblue"} borderRadius={"md"}>
              Login
            </Button>
          </Link>
        )}

        {isLoggedIn && (
          <>
            <Link to="/register">
              <Text
                textColor={"white"}
                _hover={{ textDecoration: "underline" }}
              >
                Register
              </Text>
            </Link>
            <Link to="/dashboard">
              <Text
                textColor={"white"}
                _hover={{ textDecoration: "underline" }}
              >
                {" "}
                Dashboard
              </Text>
            </Link>

            <Link to="/profile">
              <Text
                textColor={"white"}
                _hover={{ textDecoration: "underline" }}
              >
                {" "}
                Profile
              </Text>
            </Link>
            <Link to="/setting">
              <Text
                textColor={"white"}
                _hover={{ textDecoration: "underline" }}
              >
                {" "}
                Setting{" "}
              </Text>
            </Link>

            <Link to="/login">
              <Button
                onClick={handleLogout}
                bg={"aliceblue"}
                borderRadius={"md"}
                py={0.5}
              >
                LogOut
              </Button>
            </Link>
          </>
        )}
      </Flex>
    </>
  );
}

export default Nav;
