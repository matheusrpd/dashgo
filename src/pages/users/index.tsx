import { Box, Flex, Heading, Icon, Table, Button, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex         
        w="100%"
        my="6"
        mx="auto"
        px="6"
        maxWidth={1480}
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon
                as={RiAddLine}
                fontSize="20"
              />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} w="8" color="gray.300">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuários</Th>
                { isWideVersion && <Th>Data de cadastro</Th> }
                { isWideVersion && <Th w="8"></Th> }
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Matheus Allan</Text>
                    <Text fontSize="sm" color="gray.300">matheusrpd@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>13 de Outubro, 2021</Td> }
                { isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon
                        as={RiPencilLine}
                        fontSize="16"
                      />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}