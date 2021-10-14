import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Matheus Allan</Text>
        <Text color="gray.300" fontSize="small">matheusrpd@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Matheus Allan" src="https://github.com/matheusrpd.png" />
    </Flex>
  );
}