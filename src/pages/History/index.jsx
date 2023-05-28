import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

const companyHistory = [
  {
    date: "2001",
    title: "Company Founded",
    description: "The company was founded by John Doe and Jane Smith.",
    image: "https://source.unsplash.com/random/?Cryptocurrency&",
  },
  {
    date: "2005",
    title: "Expansion to New Markets",
    description:
      "The company expanded its operations to new markets and achieved significant growth.",
    image: "https://source.unsplash.com/random/?Cryptocurrency&",
  },
  {
    date: "2010",
    title: "Acquisition of Competitor",
    description:
      "The company acquired one of its major competitors, strengthening its market position.",
    image: "https://source.unsplash.com/random/?Cryptocurrency&",
  },
  {
    date: "2015",
    title: "Product Innovation",
    description:
      "The company introduced a groundbreaking product that revolutionized the industry.",
    image: "https://source.unsplash.com/random/?Cryptocurrency&",
  },
  {
    date: "2020",
    title: "Global Recognition",
    description:
      "The company received prestigious awards and recognition for its outstanding achievements.",
    image: "https://source.unsplash.com/random/?Cryptocurrency&",
  },
];

const HistoryPage = () => {
  return (
    <Box p={4}>
      <VerticalTimeline
        contentStyle={{
          overflow: "hidden",
        }}
      >
        {companyHistory.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            contentStyle={{
              background: "#171c35",
              color: "white",
              fontWeight: "bold",
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid transparent" }}
            date={event.date}
            iconStyle={{ background: "#7214FF", color: "white" }}
            icon={
              <Box
                borderRadius="full"
                overflow="hidden"
                boxShadow="md"
                w="full"
                h="full"
              >
                <Image
                  src={`${event.image}${index}`} // Replace with the URL of the profile image
                  alt="Profile Image"
                  objectFit="fit"
                  boxSize="100%" // Make the image fill the box
                />
              </Box>
            }
          >
            <Text fontSize={120} fon color="white" fontWeight="bold">
              {event.title}
            </Text>
            <Text color="gray.500">{event.description}</Text>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default HistoryPage;
