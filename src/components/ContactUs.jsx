import {
  Container,
  Box,
  Heading,
  Text,
  FormControl,
  Input,
  Textarea,
  Grid,
  GridItem,
  Stack,
  Button,
  Wrap,
  Center,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import AOS from "aos";
import { MdPhone, MdEmail, MdFax } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MotionSlideUp } from "src/utils/motion";
import NextImage from "next/image";
import { MapView } from "../assets/img";

export default function ContactUs() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize Google Maps API
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    googleMapsScript.async = true;
    googleMapsScript.onload = initializeMap;
    document.body.appendChild(googleMapsScript);

    return () => {
      // Clean up the Google Maps API script
      document.body.removeChild(googleMapsScript);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      // Customize AOS options here
    });
  }, []);

  const initializeMap = () => {
    // Initialize the map
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 37.7749, lng: -122.4194 }, // Set your desired map center coordinates
      zoom: 12, // Set the initial zoom level
    });

    // Add a marker to the map
    new window.google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 }, // Set the marker position
      map,
      title: "Marker Title", // Set the marker title
    });
  };

  const handleSubmit = () => {
    console.log("dsfsd");
  };

  return (
    <Container
      id="contact-section"
      className="gd"
      maxW="full"
      mt={10}
      //centerContent
      overflow="hidden"
    >
      <Box p={{ base: 1, sm: 8, lg: 14 }} mx={{ base: 1, sm: 8, lg: 14 }}>
        <Grid
          //  templateColumns={{ base: "1fr 1fr", sm: "2fr", md: "2fr 2fr" }}
          templateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "repeat(1, 1fr)",
            lg: "repeat(1,1fr)",
            xl: "repeat(2, 1fr)",
          }} // Responsive column layout
          gap={8}
        >
          <GridItem colSpan={{ base: 2, sm: 1 }} color="white">
            <Box w={{ base: "100%" }}>
              <Heading mt="6" data-aos="fade-up">
                Get in{" "}
                <Text as="span" color="#8EAEFF">
                  Touch
                </Text>
              </Heading>
              <Text color="white" my="8" data-aos="fade-up">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </Text>
              <Box>
                <form onSubmit={handleSubmit}>
                  <FormControl id="name" marginBottom={4}>
                    <Input
                      type="text"
                      placeholder="Name"
                      _placeholder={{ color: "gray.600" }}
                      required
                      data-aos="fade-up"
                    />
                  </FormControl>

                  <FormControl id="email" marginBottom={4}>
                    <Input
                      type="email"
                      placeholder="Email"
                      _placeholder={{ color: "gray.600" }}
                      required
                      data-aos="fade-up"
                    />
                  </FormControl>

                  <FormControl id="phone" marginBottom={4}>
                    <Input
                      type="number"
                      placeholder="Phone Number"
                      _placeholder={{ color: "gray.600" }}
                      required
                      data-aos="fade-up"
                    />
                  </FormControl>

                  <FormControl id="message" marginBottom={4}>
                    <Textarea
                      rows={4}
                      placeholder="How did you find us?"
                      _placeholder={{ color: "gray.600" }}
                      required
                      data-aos="fade-up"
                    />
                  </FormControl>

                  <Button
                    w="full"
                    p="4"
                    _hover={{}}
                    bg="#8EAEFF"
                    type="submit"
                    data-aos="fade-up"
                  >
                    Submit
                  </Button>
                </form>
              </Box>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                <Wrap
                  spacing="18px"
                  justify={{ base: "flex-start", md: "space-between" }}
                >
                  <WrapItem>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-start"
                      gap="2"
                      data-aos="fade-up"
                      // w="full"
                    >
                      <MdPhone color="#fff" size="30px" />
                      <Box>
                        <Text>PHONE</Text>
                        <Text>+91 88664 88866</Text>
                      </Box>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box
                      display="flex"
                      alignItems="center"
                      gap="4"
                      data-aos="fade-up"
                    >
                      <MdFax color="#fff" size="30px" />
                      <Box>
                        <Text>Address</Text>
                        <Text>
                          66/a trade center near dadasheb jain derasar kalanala
                          Bhavnagar-364001
                        </Text>
                      </Box>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box
                      display="flex"
                      alignItems="center"
                      gap="4"
                      data-aos="fade-up"
                    >
                      <MdEmail color="#fff" size="30px" />
                      <Box>
                        <Text>EMAIL</Text>
                        <Text>abc@gmail.com</Text>
                      </Box>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 2, sm: 1 }}>
            <Box
              //ref={mapRef} // uncomment this line then show map view
              width="100%"
              // width={{ base: "sm", sm: "sm", lg: "lg", xl: "100%" }}
              //height={{ base: 300, sm: 400, lg: 400, xl: 680 }}
              marginBottom="4"
              // p="2"
              borderRadius="2xl"
              data-aos="fade-up"
              overflow="hidden"
            >
              <NextImage
                src={MapView}
                width="600"
                height="590"
                alt={"MapView"}
                placeholder="blur"
                layout="responsive"
                blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
              />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
