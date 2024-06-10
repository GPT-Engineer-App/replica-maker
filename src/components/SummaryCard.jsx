import { Box, Text, IconButton } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const SummaryCard = ({ bg, title, value, subtitle }) => {
  return (
    <Box bg={bg} p={4} borderRadius="md" color="white" w="full" position="relative">
      <Text fontSize="xl">{value}</Text>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      <IconButton
        icon={<FaArrowRight />}
        size="sm"
        position="absolute"
        top="4"
        right="4"
        aria-label="Next"
      />
    </Box>
  );
};

export default SummaryCard;