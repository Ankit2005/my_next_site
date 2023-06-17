import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Textarea,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CustomModal = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <>
      <Modal onClose={onClose} size={"md"} isOpen={isOpen}>
        <ModalOverlay isOpen={isOpen} />
        <ModalContent>
          <ModalCloseButton color="white" />
          <ModalBody bg="bgPrimary">
            {isSuccess ? (
              <Success />
            ) : (
              <Stack
                color="white"
                spacing={8}
                mx={"auto"}
                maxW={"lg"}
                py={12}
                px={6}
              >
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"}>Sign in</Heading>
                </Stack>
                <Box rounded={"lg"} bg="bgPrimary" boxShadow={"lg"}>
                  <Stack spacing={4}>
                    <FormControl id="email">
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" />
                    </FormControl>
                    <FormControl id="query">
                      <FormLabel>Write Your Query</FormLabel>
                      <Textarea />
                    </FormControl>
                    <Stack spacing={10}>
                      <Button
                        onClick={() => setIsSuccess(true)}
                        bg="primaryBlueBtn"
                        color={"white"}
                        _hover={{}}
                      >
                        Send
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;

const Success = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Box display={"flex"} justifyContent="center">
        <TikSvg />
      </Box>
      <Heading color="green.400" as="h2" size="xl" mt={6} mb={2}>
        Thank You
      </Heading>
    </Box>
  );
};

const TikSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="144px"
      height="144px"
    >
      <linearGradient
        id="I9GV0SozQFknxHSR6DCx5a"
        x1="9.858"
        x2="38.142"
        y1="9.858"
        y2="38.142"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#21ad64" />
        <stop offset="1" stop-color="#088242" />
      </linearGradient>
      <path
        fill="url(#I9GV0SozQFknxHSR6DCx5a)"
        d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
      />
      <path
        d="M32.172,16.172L22,26.344l-5.172-5.172c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0l13-13c0.781-0.781,0.781-2.047,0-2.828L35,16.172	C34.219,15.391,32.953,15.391,32.172,16.172z"
        opacity=".05"
      />
      <path
        d="M20.939,33.061l-8-8c-0.586-0.586-0.586-1.536,0-2.121l1.414-1.414c0.586-0.586,1.536-0.586,2.121,0	L22,27.051l10.525-10.525c0.586-0.586,1.536-0.586,2.121,0l1.414,1.414c0.586,0.586,0.586,1.536,0,2.121l-13,13	C22.475,33.646,21.525,33.646,20.939,33.061z"
        opacity=".07"
      />
      <path
        fill="#fff"
        d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0	L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414l-13,13	C22.317,33.098,21.683,33.098,21.293,32.707z"
      />
    </svg>
  );
};
