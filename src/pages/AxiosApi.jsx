import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function AxiosApi() {
  const toast = useToast();
  const schema = yup.object().shape({
    name: yup.string().required("required"),
    username: yup.string().required(),
    email: yup.string().email().required("required"),
    company: yup.object().shape({
      name: yup.string().required("Company name is required"),
    }),
    phone: yup.string().required("required"),
    website: yup.string().required(),
  });

  const {
    handleSubmit,
    reset,
    setValue,
    getValues,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        const data = await response.data;
        console.log("api data", data);

        Object.keys(data[5]).forEach((key) => {
          setValue(key, data[5][key]);
        });
      } catch (error) {
        console.error("Error while fetching the data", error);
      }
    };
    fetchData();
  }, []); //empty array means that this effect will work for once only so that it will not let api call again and again

  const onSubmit = (data) => {
    console.log("datafffffffffffff", data);
    localStorage.setItem("formData", JSON.stringify(data));
    reset();
    toast({
      title: "Successfully submitted",
      description: "Your form details have been submited successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <div>
      {" "}
      <Text fontSize={"2xl"} textColor={"gray"} fontWeight={"bold"}>
        {" "}
        React hook form using Axios
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {errors.company?.catchPhrase && errors.company.catchPhrase.message}
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
      </form>
    </div>
  );
}

export default AxiosApi;
