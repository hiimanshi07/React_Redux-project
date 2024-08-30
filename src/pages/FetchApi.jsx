import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../redux/DashboardSlice";
import { useNavigate } from "react-router-dom";

function FetchApi() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    name: yup.string().required("required"),
    username: yup.string().required(),
    email: yup.string().required("required"),
    phone: yup.string().required("required"),
    website: yup.string().required(),
  });

  const {
    handleSubmit,
    setValue,
    register,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
    localStorage.setItem("data", JSON.stringify(data));
    dispatch(fetchUserData([data]));

    reset();
    navigate("/fetchdata");
  };
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const data = await response.json();
        console.log("api data", data);
        // dispatch(fetchUserData([data]));
        // setValue("name", data[0].name);
        // setValue("username", data[0].username);
        // setValue("email", data[0].email);
        // setValue("company", data[0].company.name);
        // setValue("phone", data[0].phone);
        // setValue("website", data[0].website);
        Object.keys(data[3]).forEach((key) => {
          setValue(key, data[3][key]);
        });
      } catch (error) {
        console.error("Error while fetching the data", error);
      }
    };
    fetchData();
  }, []); //empty array means that this effect will work for once only so that it will not let api call again and again

  return (
    <div>
      <Center fontSize={"3xl"} fontWeight={"bold"}>
        {" "}
        React hook form using Fetch API
      </Center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box height={96} w={"full"} bg={"white"}>
          <Flex direction={"column"} gap={2} mx={96}>
            <FormControl isInvalid={!!errors.name}>
              Name
              <Input
                {...register("name")}
                defaultValue={getValues("name")}
                placeholder="name"
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.username}>
              <Text>Username</Text>
              <Input
                {...register("username")}
                defaultValue={getValues("username")}
                placeholder="username"
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email}>
              Email
              <Input
                {...register("email")}
                defaultValue={getValues("email")}
                placeholder="email"
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.company?.name}>
              Company Name
              <Input
                {...register("company.name")}
                defaultValue={getValues("company.name")}
                placeholder="company name"
              />
              <FormErrorMessage>
                {errors.company?.name && errors.company.name.message}
              </FormErrorMessage>
            </FormControl>

            {/* <FormControl isInvalid={!!errors.company?.catchPhrase}>
              Company Name
              <Input
                {...register("company.catchPhrase")}
                defaultValue={getValues("company.catchPhrase")}
              />
              <FormErrorMessage>
                {errors.company?.catchPhrase &&
                  errors.company.catchPhrase.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.company?.bs}>
              Company Name
              <Input
                {...register("company.bs")}
                defaultValue={getValues("company.bs")}
              />
              <FormErrorMessage>
                {errors.company?.bs && errors.company.bs.message}
              </FormErrorMessage>
            </FormControl> */}
            <FormControl isInvalid={!!errors.phone}>
              Phone
              <Input
                {...register("phone")}
                defaultValue={getValues("phone")}
                placeholder="phone"
              />
              <FormErrorMessage>
                {errors.phone && errors.phone.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.website}>
              Website
              <Input
                {...register("website")}
                defaultValue={getValues("website")}
                placeholder="website"
              />
              <FormErrorMessage>
                {errors.website && errors.website.message}
              </FormErrorMessage>
            </FormControl>
            <Button type="submit">Submit</Button>
          </Flex>
        </Box>
      </form>
    </div>
  );
}

export default FetchApi;
