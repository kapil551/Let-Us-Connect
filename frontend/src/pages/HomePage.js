import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";

const HomePage = () => {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-white flex">
        <Container>
          <Box className="bg-gray-100 my-4 p-4">
            <Tabs variant="soft-rounded">
              <TabList className="mb-1">
                <Tab className="w-1/2">Login</Tab>
                <Tab className="w-1/2">Sign Up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <SignUp />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
        <Container
          maxW=""
          className="bg-[#6749DC] text-white text-center text-4xl flex items-center justify-center"
        >
          Let us connect
        </Container>
      </div>
    </>
  );
};

export default HomePage;
