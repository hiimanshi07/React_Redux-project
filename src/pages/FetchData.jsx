import { Box, Center, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

function FetchData() {
  const fetchedData = JSON.parse(localStorage.getItem("data")); //parse convert the string into the js object

  return (
    <div>
      <Center fontSize={"3xl"} fontWeight={"bold"}>
        The Data from the FetchApi Form
      </Center>
      <Box w={"full"}>
        <Flex direction={"column"} bg={"whitesmoke"} mx={96} gap={3}>
          <Text>Name:</Text>
          <Input defaultValue={fetchedData.name} readOnly />

          <Text>Username:</Text>
          <Input defaultValue={fetchedData.username} readOnly />

          <Text>Email:</Text>
          <Input defaultValue={fetchedData.email} readOnly />

          <Text>Company Name:</Text>
          <Input defaultValue={fetchedData.company.name} readOnly />

          <Text>Company Name:</Text>
          <Input defaultValue={fetchedData.company.catchPhrase} readOnly />

          <Text>Company Name:</Text>
          <Input defaultValue={fetchedData.company.bs} readOnly />

          <Text>Phone:</Text>
          <Input defaultValue={fetchedData.phone} readOnly />

          <Text>Website:</Text>
          <Input defaultValue={fetchedData.website} readOnly />
        </Flex>
      </Box>
    </div>
  );
}

export default FetchData;
