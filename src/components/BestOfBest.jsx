import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const BestOfBest = () => {
  return (
    <Box px="10">
      <Box w={{ base: "100%", md: "96%" }} mx="auto">
        <Box
          display={{ base: "column", md: "flex" }}
          justifyContent={{ base: "space-between" }}
          alignItems="center"
        >
          <Text fontWeight="bold" fontSize={{ base: "4xl" }} color="white">
            The best of the best
          </Text>
          <Button borderColor="white" color="white" variant="outline">
            Sign up now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BestOfBest;
