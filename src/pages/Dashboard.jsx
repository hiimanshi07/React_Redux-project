import React from "react";
import { Button, Center, Flex, Box } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../redux/DashboardSlice";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useDispatch();
  // async function apicall(id) {
  async function apicall() {
    try {
      const res = await axios.get(
        // `https://jsonplaceholder.typicode.com/users/${id}`
        `https://jsonplaceholder.typicode.com/users`
      );
      console.log("res from api", res);
      dispatch(fetchUserData(res.data));
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <>
      <Box>
        <Center fontSize={"3xl"} letterSpacing={"wider"} fontWeight={"bold"}>
          Dashboard
        </Center>
      </Box>
      <Flex gap={4} ml={12}>
        {/* <Button onClick={() => apicall(3)}>call api</Button> */}
        <Button onClick={() => apicall()}>call api</Button>
        <Link to={"/user"}>
          {" "}
          <Button>User</Button>{" "}
        </Link>
      </Flex>

      <Link to={"/fetchapi"}>
        {" "}
        <Button>call api with fetch</Button>{" "}
      </Link>

      <Link to={"/axiosapi"}>
        {" "}
        <Button>call api with axios</Button>{" "}
      </Link>
      <Link to={"/usercsv"}>
        {" "}
        <Button>User(CSV)</Button>{" "}
      </Link>

      <Outlet />
    </>
  );
}
