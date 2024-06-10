import { Box, VStack, Icon, Text, Switch } from "@chakra-ui/react";
import { FaTachometerAlt, FaDatabase, FaTree, FaMoneyBill, FaCog, FaQuestionCircle, FaMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box bg="gray.900" color="white" w="250px" h="100vh" p={4}>
      <VStack spacing={4} align="start">
        <Box>
          <Text fontSize="2xl" fontWeight="bold">Bang Jamin</Text>
        </Box>
        <Box>
          <Icon as={FaTachometerAlt} boxSize={6} />
          <Text ml={2}>Dashboard</Text>
        </Box>
        <Box>
          <Icon as={FaDatabase} boxSize={6} />
          <Text ml={2}>Master Data</Text>
        </Box>
        <Box>
          <Icon as={FaTree} boxSize={6} />
          <Text ml={2}>Agent Tree</Text>
        </Box>
        <Box>
          <Icon as={FaMoneyBill} boxSize={6} />
          <Text ml={2}>My Income</Text>
        </Box>
        <Box>
          <Icon as={FaCog} boxSize={6} />
          <Text ml={2}>Settings</Text>
        </Box>
        <Box>
          <Icon as={FaQuestionCircle} boxSize={6} />
          <Text ml={2}>Help Center</Text>
        </Box>
        <Box>
          <Text>Dark Mode</Text>
          <Switch colorScheme="teal" size="lg" />
        </Box>
      </VStack>
    </Box>
  );
};

export default Navbar;