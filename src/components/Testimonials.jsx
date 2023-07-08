import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { BsStarFill } from "react-icons/bs";

const Testimonials = () => {
  const list = [
    {
      img: "/img/rounde_first.svg",
      title: ` “You can even send emails to Evernote and gatherall of the
        things you need in a single place.”`,
      name: " JURGEN K. / Senior Marketing At Brator",
    },
    {
      img: "/img/setting.svg",
      title: `“Notero - 1st my choice for notes app. Awesome”`,
      name: " JURGEN K. / Senior Marketing At Brator",
    },
    {
      img: "/img/tech-zone.svg",
      title: `“.This app is seriously good. It’s simple, clean anda real joy to use.”`,
      name: " JURGEN K. / Senior Marketing At Brator",
    },
  ];
  return (
    <Box px={{ base: "10", lg: 20 }} py="10" bg="#060B27">
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <Button bg="#242841" color="white" _hover={{}}>
          Testimonials
        </Button>
      </Box>

      <Box display={{ base: "column", xl: "flex" }}>
        <Box w="full">
          <Box
            color="white"
            fontWeight="bold"
            px="1"
            mt="2"
            fontSize={{ base: "2xl", lg: "4xl" }}
          >
            Loved From{" "}
            <Text
              as="span"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
            >
              Customers
            </Text>{" "}
          </Box>
          <Text w={{ base: "100%", xl: "76%" }} mx="1" color="gray.600">
            Notero loved from thoudsands customer worldwide and get trusted from
            big companies.
          </Text>

          <Box>
            <Box
              display={{ base: "column", sm: "flex" }}
              alignItems="center"
              p={{ base: 4, lg: 8 }}
            >
              <Box w={{ base: "100%", sm: "100%", xl: "40%" }}>
                <Box
                  borderRight={{ base: "1px" }}
                  borderColor="#494949"
                  // border="1px"
                >
                  <Image
                    //   borderRadius={10}
                    src={"/img/list.svg"}
                    mx={{ base: "auto" }}
                    boxSize="160px"
                    // objectFit="cover"
                    alt={"ewrwe"}
                  />
                </Box>
                <Box>
                  <Text
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="5xl"
                    color="white"
                  >
                    2,5M+
                  </Text>
                  <Text
                    mx="auto"
                    w={{ base: "100%", xl: "66%" }}
                    textAlign={{ base: "center ", xl: "left" }}
                    color="gray.600"
                  >
                    Downloaded and Installation
                  </Text>
                </Box>
              </Box>
              <Box mt={{ base: 4, lg: 0 }} w={{ base: "100%", xl: "34%" }}>
                <Image
                  //   borderRadius={10}
                  src={"/img/app-store.svg"}
                  mx="auto"
                  boxSize="140px"
                  // objectFit="cover"
                  alt={"ewrwe"}
                />
                <Box>
                  <Text
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="5xl"
                    color="white"
                    mt="2"
                  >
                    4.8/5
                  </Text>
                  <Box
                    mx="auto"
                    w={{ base: "100%", xl: "60%" }}
                    pl="1"
                    display="flex"
                    alignItems="center"
                    justifyContent={{ base: "center", xl: "flex-start" }}
                  >
                    {[1, 2, 3, 4, 5].map((rating, i) => (
                      <BsStarFill
                        key={i}
                        style={{ marginLeft: "1" }}
                        color={i < rating ? "#E7A600" : "teal.500"}
                      />
                    ))}
                  </Box>
                  <Text
                    //mx="auto"
                    mt="2"
                    pl={{ base: 0, xl: "10" }}
                    // w="80%"
                    textAlign={{ base: "center ", xl: "left" }}
                    color="gray.600"
                  >
                    Based on 1,258 reviews
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              mx={{ base: "", xl: 10 }}
              display={{ base: "column", md: "flex", xl: "flex" }}
              alignItems="center"
              justifyContent={{ base: "center", xl: "" }}
              gap={4}
            >
              <Button
                _hover={{}}
                borderRadius={20}
                color="white"
                bg="secondary"
              >
                See Reviews on app store
              </Button>
              <Box
                display="flex"
                justifyContent={{ base: "center", lg: "" }}
                gap="3"
                my={{ base: 4, lg: 0 }}
                alignItems="center"
              >
                <Image
                  //   borderRadius={10}
                  src={"/img/play.svg"}
                  mx={{ base: 0, xl: "auto" }}
                  boxSize="50px"
                  // objectFit="cover"
                  alt={"ewrwe"}
                />
                <Text color="gray.600">View Promotion</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box mt={{ base: 14, xl: 0 }}>
          {list.map((item, i) => (
            <Box
              key={i}
              ml={i % 2 ? "8" : 0}
              mb="10"
              bg={i === 0 ? "" : "#121839"}
              p="4"
              borderRadius={14}
            >
              <Stack direction={"row"} spacing={4} align={"center"}>
                <Avatar size="xl" src={item.img} alt={"Author"} />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Box
                    // mx="auto"
                    w="66%"
                    display="flex"
                    alignItems="center"
                    gap="1"
                    justifyContent="flex-start"
                    mb="2"
                  >
                    {[1, 2, 3, 4, 5].map((rating, i) => (
                      <BsStarFill
                        key={i}
                        style={{ marginLeft: "1" }}
                        color={i < rating ? "#E7A600" : "teal.500"}
                      />
                    ))}
                  </Box>
                  <Text mb="2" color="white" fontWeight={600}>
                    {item.title}
                  </Text>
                  <Text color={"gray.600"}>{item.name}</Text>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
