import React from "react";
import profile from "./Profile.png";
import { Flex, Text, VStack } from "@chakra-ui/react";

function Profile() {
  return (
    <>
      <Flex
        backgroundImage={`url(${profile})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        h={"70vh"}
        alignItems={"center"}
        justifyContent={"center"}
        p={32}
      >
        <VStack>
          <Text fontSize={"3xl"} fontWeight={"bold"} textColor={"#555555"}>
            qwertyui zxcvbnmkjh..
          </Text>
          <Text fontSize={"lg"} fontWeight={"black"} textColor={"#555555"}>
            I am a Full Stack Web Developer
            <span>
              I'm a passionate and results-driven full-stack developer with a
              flair for crafting elegant and efficient solutions. With a strong
              foundation in both front-end and back-end technologies, I bring a
              unique blend of creativity and technical expertise to every
              project. My journey in the world of development started with a
              keen interest in problem-solving, and over the years, I have honed
              my skills in areas such as JavaScript, React, Node.js, and
              MongoDB.
            </span>
          </Text>
        </VStack>
      </Flex>
    </>
  );
}

export default Profile;
