import { Box, GridItem, HStack, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { MdOutlineTimer } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTrain } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedin, FaQuora, FaTwitter, FaYoutube } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <Box bg={'blueviolet'} padding={{ base: '1rem', md: '4rem' }} color={'white'}>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={'1rem'}>
                    <GridItem>
                        <Heading fontSize={'1.5rem'}>Contact Us</Heading>
                        <VStack paddingBlock={'1rem'} gap={'.7rem'} align={'left'}>

                            <Text>Addres: ward this dthsdf thds ehthe</Text>
                            <Text>Email: test@gamil.com</Text>
                            <Text>Phone NO: 1234567890</Text>
                        </VStack>
                    </GridItem>
                    <GridItem >
                        <Heading fontSize={'1.5rem'}>Follow Us</Heading>

                        <HStack gap={'1.5rem'} paddingBlock={'1rem'}>
                            <FaFacebookF cursor={'pointer'}/>
                            <FaLinkedin cursor={'pointer'}/>
                            <FaInstagram cursor={'pointer'}/>
                            <FaTwitter cursor={'pointer'}/>
                            <FaYoutube cursor={'pointer'}/>
                            <FaQuora cursor={'pointer'}/>
                        </HStack>
                    </GridItem>
                    <GridItem>
                        <Heading fontSize={'1.5rem'}>Head Office</Heading>
                        <VStack gap={'.7rem'} align={'left'} paddingBlock={'1rem'}>

                            <HStack>

                                <FaLocationDot />
                                <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Text>
                            </HStack>
                            <HStack>

                                <MdOutlineTimer />
                                <Text>
                                    Lorem ipsum dolor sit amet, consetetru sadipscing elitr</Text>
                            </HStack>
                            <HStack>

                                <MdOutlineTimer />
                                <Text>
                                    Lorem ipsum dolor sit amet, consetetru sadipscing elitr</Text>
                            </HStack>
                            <HStack>
                                <IoMdTrain />
                                <Text>Lorem ipsum asd asdsaweep Lorem Ipsum</Text>
                            </HStack>
                        </VStack>
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    )
}