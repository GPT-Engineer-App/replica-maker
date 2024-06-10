import { Box } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", totalSalesforce: 4000 },
  { name: "Feb", totalSalesforce: 3000 },
  { name: "Mar", totalSalesforce: 2000 },
  { name: "Apr", totalSalesforce: 2780 },
  { name: "May", totalSalesforce: 1890 },
  { name: "Jun", totalSalesforce: 2390 },
  { name: "Jul", totalSalesforce: 3490 },
];

const CustomBarChart = () => {
  return (
    <Box bg="gray.800" p={4} borderRadius="md" color="white" w="full" h="400px">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalSalesforce" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CustomBarChart;