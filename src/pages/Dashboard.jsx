import { Box, SimpleGrid, GridItem, Text, IconButton } from "@chakra-ui/react";
import { FaArrowRight, FaFilter, FaSyncAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import UserProfile from "../components/UserProfile";
import SummaryCard from "../components/SummaryCard";
import CustomLineChart from "../components/LineChart";
import CustomBarChart from "../components/BarChart";
import CustomPieChart from "../components/PieChart";
import CustomDonutChart from "../components/DonutChart";

const Dashboard = () => {
  return (
    <Box display="flex">
      <Navbar />
      <Box flex="1" bg="gray.900" color="white">
        <SearchBar />
        <UserProfile />
        <Box p={4}>
          <Text fontSize="2xl" mb={4}>Arista Insurance Sales Performance</Text>
          <SimpleGrid columns={4} spacing={4} mb={4}>
            <SummaryCard bg="yellow.400" title="Total Premium (YTD)" value="Rp 200M" subtitle="YTD" />
            <SummaryCard bg="yellow.300" title="Total Premium (MTD)" value="Rp 120M" subtitle="MTD" />
            <SummaryCard bg="purple.400" title="Total Policy Sold (MTD)" value="250 Unit" subtitle="MTD" />
            <SummaryCard bg="blue.300" title="Total Unpaid Policy (MTD)" value="50 Unit" subtitle="MTD" />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={4} mb={4}>
            <GridItem colSpan={2}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Text fontSize="lg">Sales Throughout Time</Text>
                <Box>
                  <IconButton icon={<FaFilter />} size="sm" aria-label="Filter" mr={2} />
                  <IconButton icon={<FaSyncAlt />} size="sm" aria-label="Refresh" />
                </Box>
              </Box>
              <CustomLineChart />
            </GridItem>
            <GridItem>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Text fontSize="lg">Total Salesforce</Text>
                <Box>
                  <IconButton icon={<FaFilter />} size="sm" aria-label="Filter" mr={2} />
                  <IconButton icon={<FaSyncAlt />} size="sm" aria-label="Refresh" />
                </Box>
              </Box>
              <CustomBarChart />
            </GridItem>
            <GridItem>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Text fontSize="lg">Contributing Branches</Text>
                <Box>
                  <IconButton icon={<FaFilter />} size="sm" aria-label="Filter" mr={2} />
                  <IconButton icon={<FaSyncAlt />} size="sm" aria-label="Refresh" />
                </Box>
              </Box>
              <CustomPieChart />
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={4}>
            <GridItem>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Text fontSize="lg">Active Salesforce</Text>
                <Box>
                  <IconButton icon={<FaFilter />} size="sm" aria-label="Filter" mr={2} />
                  <IconButton icon={<FaSyncAlt />} size="sm" aria-label="Refresh" />
                </Box>
              </Box>
              <CustomDonutChart />
            </GridItem>
            <GridItem>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Text fontSize="lg">Active Branch</Text>
                <Box>
                  <IconButton icon={<FaFilter />} size="sm" aria-label="Filter" mr={2} />
                  <IconButton icon={<FaSyncAlt />} size="sm" aria-label="Refresh" />
                </Box>
              </Box>
              <CustomDonutChart />
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;