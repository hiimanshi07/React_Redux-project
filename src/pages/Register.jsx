import {
  Button,
  Card,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Center
      alignItems={"center"}
      h={{ base: "100vh", xl: "100vh" }}
      // bg={"whitesmoke"}
      bgGradient="linear(to-r, #7928CA, #FF0080)"
    >
      <VStack bg={"white"} p={1} borderRadius={"xl"}>
        <RiAccountCircleFill size={96} color={"whitesmoke"} />

        <Heading fontSize={'3xl'}>Register With Us!!</Heading>

        <Card
          bg={"white"}
          variant={"outlilne"}
          w={{ sm: "40vw", lg: "30vw" }}
          px={2}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.username} >
              <FormLabel>Username </FormLabel>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                {...register("username", {
                  required: "field required",
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message:
                      "username should include alphabets and numbers , minlength should be 6",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.number} >
              <FormLabel>Mobile Number</FormLabel>
              <Input
                // type="number"
                id="number"
                name="number"
                placeholder="Mobile Number"
                {...register("number", {
                  required: "field required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Enter valid Number",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.number && errors.number.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email} >
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                {...register("email", {
                  required: "field required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[COM]{2,4}$/i,
                    message: "*Enter Valid Email",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password} >
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="Password"
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
              Sign in
            </Button>
          </form>
        </Card>
      </VStack>
    </Center>
  );
}

export default Register;
