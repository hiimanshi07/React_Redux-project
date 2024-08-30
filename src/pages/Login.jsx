// import {
//   Button,
//   Card,
//   Center,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Heading,
//   Input,
//   VStack,
// } from "@chakra-ui/react";
// import React from "react";
// import { RiAccountCircleFill } from "react-icons/ri";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   return (
//     <Center
//       alignItems={"center"}
//       h={{ base: "100vh", xl: "100vh" }}
//       bg={"whitesmoke"}
//     >
//       <VStack bg={"white"} p={1} borderRadius={"xl"}>
//         <RiAccountCircleFill size={96} color={"whitesmoke"} />

//         <Heading>Login</Heading>

//         <Card
//           bg={"white"}
//           variant={"outlilne"}
//           w={{ sm: "40vw", lg: "30vw" }}
//           px={2}
//         >
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <FormControl isInvalid={!!errors.email}>
//               <FormLabel>Email</FormLabel>
//               <Input
//                 type="text"
//                 id="email"
//                 name="email"
//                 placeholder="Email"
//                 {...register("email", {
//                   required: "field required",
//                   pattern: {
//                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[COM]{2,4}$/i,
//                     message: "*Enter Valid Email",
//                   },
//                 })}
//               />
//               <FormErrorMessage>
//                 {errors.email && errors.email.message}
//               </FormErrorMessage>
//             </FormControl>
//             <FormControl isInvalid={!!errors.password}>
//               <FormLabel>Password</FormLabel>
//               <Input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 {...register("password", {
//                   required: "field required",
//                   pattern: {
//                     value:
//                       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$*?&!])[A-Za-z\d@$*?&!]{6,}$/,
//                     message:
//                       "it should 6 digits,contain 1 capital,small,special character,number",
//                   },
//                 })}
//               />
//               <FormErrorMessage>
//                 {errors.password && errors.password.message}
//               </FormErrorMessage>
//             </FormControl>
//             <Link to="/dashboard">
//               <Button
//                 bg={"#1da1f2"}
//                 type="submit"
//                 mt={2}
//                 w={"full"}
//                 borderRadius={"3xl"}
//               >
//                 Log in
//               </Button>
//             </Link>
//           </form>
//         </Card>
//       </VStack>
//     </Center>
//   );
// }

// export default Login;

import React, { useEffect } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
  useToast,
} from "@chakra-ui/react";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   const authkey = localStorage.getItem("auth");
  //   if (authkey) {
  //     navigate("/dashboard");
  //   }
  // }, [navigate]);

  const toast = useToast();

  const setAuth = () => {
    localStorage.setItem("auth", "abcd");
  };

  const onSubmit = (data) => {
    if (data.email === "himanshi2003@gmail.com" && data.password === "Hh@123") {
      setAuth();
      // localStorage.setItem("auth", "abcd");
      toast({
        title: "Login Successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      // window.location.href = "/dashboard";
      navigate("/dashboard");
    } else {
      console.log("Invalid credentials");
      // Displaying error toast
      toast({
        title: "Login Failed",
        description: " Please check your email and password.",
        status: "error",
        duration: 2000,
        isClosable: true,
        // position:"top-right"
      });
    }
  };

  return (
    <Center
      alignItems={"center"}
      h={{ base: "100vh", xl: "90vh" }}
      bg={"whitesmoke"}
    >
      <VStack bg={"white"} p={1} borderRadius={"xl"}>
        <RiAccountCircleFill size={96} color={"whitesmoke"} />
        <Heading>Login</Heading>

        <Card
          bg={"white"}
          variant={"outline"}
          w={{ sm: "40vw", lg: "30vw" }}
          px={2}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.email}>
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

            <FormControl isInvalid={!!errors.password}>
              {" "}
              {/* Add this block */}
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
                      "it should 6 digits, contain 1 capital, small, special character, number",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              bg={"#1da1f2"}
              type="submit"
              mt={2}
              w={"full"}
              borderRadius={"3xl"}
            >
              Log in
            </Button>
          </form>
        </Card>
      </VStack>
    </Center>
  );
}

export default Login;
