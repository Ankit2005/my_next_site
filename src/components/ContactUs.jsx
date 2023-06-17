import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactUs() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });
  return (
    <Container
      id="contact-section"
      className="gd"
      maxW="full"
      mt={10}
      centerContent
      overflow="hidden"
    >
      <Flex>
        <Box
          bg="primary"
          color="white"
          border="1px"
          borderColor="primaryBorder"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 20 }}
          p={{ sm: 5, md: 5, lg: 16 }}
          mt="20"
        >
          <Box p={4}>
            <Wrap ref={ref} spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box
                  as={motion.div}
                  initial="hidden"
                  whileInView="visible"
                  // as={motion.div}
                  // whileInView={{
                  //   scale: inView ? 1.1 : 1,
                  // }}
                  //  viewport={{ once: true }}
                  transition={{ delay: 1 * 0.8, duration: 1.5 }}
                  variants={{
                    visible: {
                      opacity: inView ? 1 : 0,
                      scale: inView ? 1 : 0,
                      //  x: 0,
                    },
                    hidden: {
                      opacity: inView ? 1 : 0,
                      scale: inView ? 1 : 0,
                      // x: 100,
                    },
                  }}
                >
                  <Heading>
                    Get in{" "}
                    <Text color="secondary" as="span">
                      Touch
                    </Text>{" "}
                  </Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box
                    as={motion.div}
                    initial="hidden"
                    whileInView="visible"
                    // as={motion.div}
                    // whileInView={{
                    //   scale: inView ? 1.1 : 1,
                    // }}
                    //  viewport={{ once: true }}
                    transition={{ delay: 1 * 0.8, duration: 1.5 }}
                    variants={{
                      visible: {
                        opacity: inView ? 1 : 0,
                        scale: inView ? 1 : 0,
                        //  x: 0,
                      },
                      hidden: {
                        opacity: inView ? 1 : 0,
                        scale: inView ? 1 : 0,
                        // x: 100,
                      },
                    }}
                    py={{ base: 5, sm: 5, md: 8, lg: 10 }}
                  >
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        +91-988888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        hello@abc.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Ahmedabad, IN
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "secondary" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "secondary" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "secondary" }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
