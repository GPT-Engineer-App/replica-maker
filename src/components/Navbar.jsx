import { Box, VStack, Icon, Text, Switch } from "@chakra-ui/react";
import { FaTachometerAlt, FaDatabase, FaTree, FaMoneyBill, FaCog, FaQuestionCircle, FaMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box bg="gray.900" color="white" w="250px" h="100vh" p={4}>
      <VStack spacing={4} align="start">
        <Box>
          <Text fontSize="2xl" fontWeight="bold">Bang Jamin</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Icon as={FaTachometerAlt} boxSize={6} />
          <Text ml={2}>Dashboard</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Icon as={FaDatabase} boxSize={6} />
          <Text ml={2}>Master Data</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Icon as={FaTree} boxSize={6} />
          <Text ml={2}>Agent Tree</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Icon as={FaMoneyBill} boxSize={6} />
          <Text ml={2}>My Income</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Icon as={FaCog} boxSize={6} />
          <Text ml={2}>Settings</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Icon as={FaQuestionCircle} boxSize={6} />
          <Text ml={2}>Help Center</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Icon as={FaMoon} boxSize={6} />
          <Text ml={2}>Dark Mode</Text>
          <Switch colorScheme="teal" size="lg" ml={2} />
        </Box>
      </VStack>
    </Box>
  );
};

export default Navbar;