import { Box, Avatar, Text } from "@chakra-ui/react";

const UserProfile = () => {
  return (
    <Box display="flex" alignItems="center" p={4} bg="gray.800" justifyContent="flex-end">
      <Box display="flex" alignItems="center">
        <Avatar name="Uroos Fatima" src="https://bit.ly/broken-link" />
        <Box ml={3}>
          <Text color="white">Uroos Fatima</Text>
          <Text color="gray.400">uroos.design@gmail.com</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfile;