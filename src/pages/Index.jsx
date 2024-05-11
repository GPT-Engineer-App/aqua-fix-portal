import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, IconButton, Input, Link, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaChevronRight } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Header */}
        <Box as="header" bg="blue.600" color="white" py={4} px={8} position="fixed" top={0} left={0} right={0} zIndex={1}>
          <Flex justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold">
              AquaFix
            </Text>
            <Stack direction="row" spacing={4} align="center">
              <Link href="#services">Services</Link>
              <Link href="#testimonials">Testimonials</Link>
              <Link href="#contact">Contact</Link>
              <Button colorScheme="orange" onClick={() => document.getElementById("contact").scrollIntoView()}>
                Book Service
              </Button>
            </Stack>
          </Flex>
        </Box>

        {/* Main Content */}
        <VStack spacing={10} mt="100px" align="stretch" p={8}>
          {/* Service Overview */}
          <Box id="services" as="section">
            <Heading mb={4}>Our Services</Heading>
            <Stack spacing={4}>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Pool Cleaning</Heading>
                <Text mt={4}>Comprehensive cleaning and maintenance to ensure your pool is sparkling and safe.</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Equipment Repair</Heading>
                <Text mt={4}>Expert repair services for pumps, heaters, and filters to keep your pool in perfect working condition.</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Regular Maintenance</Heading>
                <Text mt={4}>Scheduled maintenance services to prolong the life of your pool and equipment.</Text>
              </Box>
            </Stack>
          </Box>

          {/* Testimonials */}
          <Box id="testimonials" as="section">
            <Heading mb={4}>Testimonials</Heading>
            <Stack spacing={4}>
              <Text as="i">"AquaFix transformed our old pool into a modern paradise! Highly recommend their services." - Jane Doe</Text>
              <Text as="i">"Professional, timely, and effective. The best pool service we've ever had." - John Smith</Text>
            </Stack>
          </Box>

          {/* Contact Form */}
          <Box id="contact" as="section" bg="gray.50" p={8}>
            <Heading mb={4}>Request a Service</Heading>
            <form>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Your Name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="your-email@example.com" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Service Required</FormLabel>
                  <Input placeholder="Type of Service" />
                </FormControl>
                <FormControl>
                  <FormLabel>Additional Details</FormLabel>
                  <Textarea placeholder="Describe your needs" />
                </FormControl>
                <Button colorScheme="blue" type="submit">
                  Submit Request
                </Button>
              </Stack>
            </form>
          </Box>
        </VStack>

        {/* Footer */}
        <Box as="footer" bg="gray.800" color="gray.400" py={4} mt={10}>
          <Flex justify="space-between" px={8}>
            <Text>&copy; {new Date().getFullYear()} AquaFix. All rights reserved.</Text>
            <Stack direction="row" spacing={4}>
              <IconButton aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton aria-label="Instagram" icon={<FaInstagram />} />
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
