import { Box } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", policySold: 4000, premium: 2400 },
  { name: "Feb", policySold: 3000, premium: 1398 },
  { name: "Mar", policySold: 2000, premium: 9800 },
  { name: "Apr", policySold: 2780, premium: 3908 },
  { name: "May", policySold: 1890, premium: 4800 },
  { name: "Jun", policySold: 2390, premium: 3800 },
  { name: "Jul", policySold: 3490, premium: 4300 },
];

const CustomLineChart = () => {
  return (
    <Box bg="gray.800" p={4} borderRadius="md" color="white" w="full" h="400px">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="policySold" stroke="#8884d8" />
          <Line type="monotone" dataKey="premium" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CustomLineChart;