import { Box, Text } from "@chakra-ui/react";

const SummaryCard = ({ bg, title, value, subtitle }) => {
  return (
    <Box bg={bg} p={4} borderRadius="md" color="white" w="full">
      <Text fontSize="xl">{value}</Text>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
    </Box>
  );
};

export default SummaryCard;