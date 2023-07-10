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
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import AOS from "aos";
import { MdPhone, MdEmail, MdFax } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MotionSlideUp } from "src/utils/motion";

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
      <Box ref={ref} p={20} mx="20">
        <Grid templateColumns={{ sm: "1fr", md: "2fr 2fr" }} gap={8}>
          <GridItem color="white">
            <Heading data-aos="fade-up">
              Get in{" "}
              <Text as="span" color="#8EAEFF">
                Touch
              </Text>
            </Heading>
            <Text color="white" my="8" data-aos="fade-up">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </Text>
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
            <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
              <Stack
                mt={{ base: 6 }}
                pl={0}
                direction="row"
                spacing={3}
                alignItems="flex-start"
              >
                <Box
                  size="md"
                  height="48px"
                  width="200px"
                  variant="ghost"
                  color="#DCE2FF"
                  //_hover={{ border: "2px solid #1C6FEB" }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="4"
                    data-aos="fade-up"
                  >
                    <MdPhone color="#fff" size="30px" />
                    <Box>
                      <Text>PHONE</Text>
                      <Text>+91-988888888</Text>
                    </Box>
                  </Box>
                </Box>
                <Box
                  size="md"
                  height="48px"
                  width="200px"
                  variant="ghost"
                  color="#DCE2FF"
                  //_hover={{ border: "2px solid #1C6FEB" }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="4"
                    data-aos="fade-up"
                  >
                    <MdFax color="#fff" size="30px" />
                    <Box>
                      <Text>FAX</Text>
                      <Text>329-39484</Text>
                    </Box>
                  </Box>
                </Box>
                <Box
                  size="md"
                  height="48px"
                  width="200px"
                  variant="ghost"
                  color="#DCE2FF"
                  //_hover={{ border: "2px solid #1C6FEB" }}
                >
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
                </Box>
              </Stack>
            </Box>
          </GridItem>

          <GridItem>
            <Box
              ref={mapRef}
              width="100%"
              height={690}
              marginBottom="4"
              borderRadius="2xl"
              data-aos="fade-up"
            />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
