import { Box, Button, Text, Center, Wrap, WrapItem } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CarRental, Gym } from "src/assets/img";
import CardTil from "./CardTil";
// import { CarRental, Gym } from "src/assets/img";
// import car from "../assets/img/car_rental.jpg";

export default function Work() {
  const cards = [
    {
      title: "ArrowExpress Tracking",
      img: "/img/traking.jpg",
      desc: "ArrowExpress offers comprehensive logistics solutions, including secure shipping, timely delivery, and supply chain management, ensuring efficient, cost-effective, and reliable services.",
    },
    {
      title: "Ab Cars",
      img: "/img/car_rental.jpg",
      desc: "Ab Cars provide one-stop destination for quality pre-owned and new cars, offering diverse EMI choices to suit your budget.",
    },
    {
      title: "Virtual Gym",
      img: "/img/gym.jpg",
      desc: "Ab Cars provide one-stop destination for quality pre-owned and new cars, offering diverse EMI choices to suit your budget.",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger the animation once
  });

  const [x, setX] = useState(-100);
  useEffect(() => {
    AOS.init({
      // Customize AOS options here
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1730) {
        setX(-100);
      } else {
        setX(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const svgBackground = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1234' height='527' viewBox='0 0 1234 527' fill='none'%3E%3Crect opacity='0.75' x='1126' y='64' width='232' height='232' rx='50' fill='%2315803D'/%3E%3Crect opacity='0.75' x='1017' y='325' width='202' height='202' rx='30' fill='%23A21CAF'/%3E%3Crect opacity='0.75' x='756' y='325' width='130' height='130' rx='30' fill='%23B45309'/%3E%3Crect opacity='0.75' x='457' width='161' height='161' rx='50' fill='%230369A1'/%3E%3Crect opacity='0.75' y='207' width='271' height='271' rx='50' fill='%23BE185D'/%3E%3C/svg%3E")`;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ base: "space-between" }}
      flexDir="column"
      textAlign={{ base: "center", lg: "left" }}
      className="gd"
    >
      <Box>
        <Box
          display={{ base: "column", md: "flex" }}
          justifyContent={{ base: "space-between" }}
          alignItems="center"
          w={{ base: "100%", md: "95%" }}
          mx="auto"
          mt="4"
        >
          <Text fontWeight="bold" fontSize={{ base: "4xl" }} color="white">
            The best of the best
          </Text>
          <Button borderColor="white" color="white" variant="outline">
            Sign up now
          </Button>
        </Box>

        <Box
          py="4"
          background={svgBackground}
          backgroundSize={{ base: "auto", md: "cover" }}
          backgroundRepeat="no-repeat"
        >
          <Wrap
            px={{ base: 2, md: 6, lg: 4, xl: 14 }}
            mt="4"
            ref={ref}
            spacing="40px"
            justify="center"
          >
            {cards.map((item, i) => (
              <WrapItem
                key={i}
                width={{
                  base: "100%",
                  sm: "80%",
                  md: "40%",
                  lg: "40%",
                  xl: "30%",
                }}
              >
                <Center>
                  <CardTil
                    description={item.desc}
                    imageSrc={item.img}
                    title={item.title}
                    name={item.title}
                    image={item.img}
                    source_code_link="https://test.com/"
                    index={i}
                  />
                </Center>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Box>
    </Box>
  );
}
