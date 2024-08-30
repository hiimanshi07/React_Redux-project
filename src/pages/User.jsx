import React from "react";
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Heading,
  Center,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";

function User() {
  const data = useSelector((state) => state.Himanshi.userData);

  if (!data || data.length === 0) {
    return <p>Please call api from Dashboard</p>;
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = React.useState(null);

  const handleModal = async (userId) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setUser(res.data);
      onOpen();
    } catch (error) {
      console.log("errroorrr fetching the api data", error);
    }
  };

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Watch</Th>
              <Th>Website</Th>
              <Th>Address</Th>
              <Th>Company </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.username}</Td>
                <Td>{item.email}</Td>
                <Td>{item.phone}</Td>
                <Td>
                  {" "}
                  <FaRegEye onClick={() => handleModal(item.id)} />
                </Td>
                <Td>{item.website}</Td>
                <Td>
                  {item.address.street},{item.address.suite},
                  {item.address.zipcode},{item.address.city}
                </Td>
                <Td>
                  {item.company.name},{item.company.bs},
                  {item.company.catchPhrase}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent p={8}>
          <ModalHeader>User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody letterSpacing={"wider"}>
            {user && (
              <>
                <Center fontSize={"xl"} fontWeight={"bold"}>
                  User-{user.id}
                </Center>
                <Text>Id:{user.id}</Text>
                <Text>Name:{user.name}</Text>
                <Text>Username:{user.username}</Text>
                <Text>Email:{user.email}</Text>
                <Text>Phone:{user.phone}</Text>
                <Text>
                  Address: {user.address.street},{user.address.suite},
                  {user.address.zipcode},{user.address.city}
                </Text>
                <Text>
                  Company: {user.company.name},{user.company.bs},
                  {user.company.catchPhrase}
                </Text>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default User;

// import React, { useState } from "react";
// import {
//   Table,
//   TableContainer,
//   Thead,
//   Tr,
//   Th,
//   Tbody,
//   Td,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   Text,
//   Center,
// } from "@chakra-ui/react";
// import { useSelector } from "react-redux";
// import { FaRegEye } from "react-icons/fa";
// import axios from "axios";

// function User() {
//   const data = useSelector((state) => state.Himanshi.userData);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [selectedUser, setSelectedUser] = useState(null);

//   const handleModal = async (userId) => {
//     try {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/users/${userId}`
//       );
//       setSelectedUser(response.data);
//       onOpen();
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   return (
//     <>
//       <TableContainer>
//         <Table variant="simple">
//           <Thead>
//             <Tr>
//               <Th>Id</Th>
//               <Th>Name</Th>
//               <Th>Username</Th>
//               <Th>Email</Th>
//               <Th>Phone</Th>
//               <Th>Watch</Th>
//               <Th>Website</Th>
//               <Th>Address</Th>
//               <Th>Company</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {data.map((item) => (
//               <Tr key={item.id}>
//                 <Td>{item.id}</Td>
//                 <Td>{item.name}</Td>
//                 <Td>{item.username}</Td>
//                 <Td>{item.email}</Td>
//                 <Td>{item.phone}</Td>
//                 <Td>
//                   <FaRegEye onClick={() => handleModal(item.id)} />
//                 </Td>
//                 <Td>{item.website}</Td>
//                 <Td>
//                   {item.address.street}, {item.address.suite},{" "}
//                   {item.address.zipcode}, {item.address.city}
//                 </Td>
//                 <Td>
//                   {item.company.name}, {item.company.bs},{" "}
//                   {item.company.catchPhrase}
//                 </Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       </TableContainer>

//       <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
//         <ModalOverlay />
//         <ModalContent p={8}>
//           <ModalHeader>User Details</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody letterSpacing={"wider"}>
//             {selectedUser && (
//               <>
//                 <Center fontSize={"xl"} fontWeight={"bold"}>
//                   User - {selectedUser.id}
//                 </Center>
//                 <Text>Id: {selectedUser.id}</Text>
//                 <Text>Name: {selectedUser.name}</Text>
//                 <Text>Username: {selectedUser.username}</Text>
//                 <Text>Email: {selectedUser.email}</Text>
//                 <Text>Phone: {selectedUser.phone}</Text>
//                 <Text>
//                   Address: {selectedUser.address.street},{" "}
//                   {selectedUser.address.suite}, {selectedUser.address.zipcode},{" "}
//                   {selectedUser.address.city}
//                 </Text>
//                 <Text>
//                   Company: {selectedUser.company.name},{" "}
//                   {selectedUser.company.bs},{" "}
//                   {selectedUser.company.catchPhrase}
//                 </Text>
//               </>
//             )}
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// export default User;
