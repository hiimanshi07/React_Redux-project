import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function ForgetPass() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Flex
      //   alignItems={"center"}
      h={{ base: "60vh", xl: "60vh" }}
      bg={"whitesmoke"}
      justify={"start"}
      p={6}
    >
      <VStack bg={"white"} p={1} borderRadius={"xl"}>
        <Heading fontSize={'2xl'}>Reset Password</Heading>

        <Card bg={"transparent"} w={{ sm: "40vw", lg: "30vw" }} px={2}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.number} isRequired>
              <FormLabel>Mobile Number/Email</FormLabel>
              <Input
                // type="number"
                id="number"
                name="number"
                placeholder="Mobile Number/Email"
                {...register("number", {
                  required: "field required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Enter valid format",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.number && errors.number.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password} isRequired>
              <FormLabel>Create Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="Create Password"
                {...register("password", {
                  required: "field required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$*?&!])[A-Za-z\d@$*?&!]{6,}$/,
                    message:
                      "it should 6 digits,contain 1 capital,small,special character,number",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                id="cpassword"
                placeholder="Confirm Password"
                {...register("cpassword")}
              />
            </FormControl>

            <Button
              bg={"#1da1f2"}
              type="submit"
              mt={2}
              w={"full"}
              borderRadius={"3xl"}
            >
              Set Password
            </Button>
          </form>
        </Card>
      </VStack>
    </Flex>
  );
}

export default ForgetPass;
