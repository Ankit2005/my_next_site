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
        <Image src={"./img/tik.svg"} />
      </Box>
      <Heading color="green.400" as="h2" size="xl" mt={6} mb={2}>
        Thank You
      </Heading>
    </Box>
  );
};
