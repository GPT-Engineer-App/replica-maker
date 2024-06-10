import { Box, Input } from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <Box bg="gray.800" p={4} display="flex" justifyContent="center">
      <Input placeholder="Search here..." size="lg" bg="gray.700" color="white" />
    </Box>
  );
};

export default SearchBar;