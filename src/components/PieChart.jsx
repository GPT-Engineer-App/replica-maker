import { Box } from "@chakra-ui/react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jakarta", value: 400 },
  { name: "Medan", value: 300 },
  { name: "Surabaya", value: 300 },
  { name: "Bali", value: 200 },
  { name: "Pekan Baru", value: 278 },
  { name: "Semarang", value: 189 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384", "#36A2EB"];

const CustomPieChart = () => {
  return (
    <Box bg="gray.800" p={4} borderRadius="md" color="white" w="full" h="400px">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CustomPieChart;