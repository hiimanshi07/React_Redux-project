import {
    Box,
  Button,
  Center,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { CSVDownload, CSVLink } from "react-csv";
import { MdDownload } from "react-icons/md";
import { Spinner } from "@chakra-ui/react";

function UserCSV() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const { data: res } =
          await axios.get(`https://jsonplaceholder.typicode.com/users
        `);

        console.log("reessssssssss", res);
        JSON.stringify(res);
        setData(res);
      } catch (error) {
        console.log("eroorrrr", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const tableData = () => {
    return data.map((user) => ({
      Id: user.id,
      Name: user.name,
      Username: user.username,
      Email: user.email,
      Phone: user.phone,
      Website: user.website,
      Company: user.company.name,
    }));
  };

  return (
    <div>
      UserCSV
      
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Website</Th>
              <Th>Company </Th>
            </Tr>
          </Thead>

          {loading && (
        <Box
          h="60
          vh"
          w="100vw"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner />
        </Box>
      )}
          {!loading && (
            <Tbody>
              {data.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.username}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.phone}</Td>
                  <Td>{user.website}</Td>
                  <Td>
                    {" "}
                    {user.company.name},{user.company.bs},
                    {user.company.catchPhrase}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          )}
        </Table>
      </TableContainer>
      {/* <CSVDownload
        data={data}
        text="Export CSV"
        fileName={`data_` + new Date().toLocaleString()}
        extension=".csv"
      /> */}
      <CSVLink data={tableData()}>
        <Button position={"fixed"} bottom={8}>
          <MdDownload />
          Download
        </Button>
      </CSVLink>
    </div>
  );
}

export default UserCSV;
