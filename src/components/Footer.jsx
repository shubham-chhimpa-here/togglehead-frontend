import { Box, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <>
        <Box bg={'blueviolet'} padding={{base:'1rem', md:'4rem'}}>

<SimpleGrid columns={{base: 1, md: 3}} gap={'1rem'}>
    <GridItem>
        <Heading fontSize={'1.5rem'}>Contact Us</Heading>
        <Text>Addres: ward this dthsdf thds ehthe</Text>
        <Text>Email: test@gamil.com</Text>
        <Text>Phone NO: 1234567890</Text>
    </GridItem>
    <GridItem >
        <Heading fontSize={'1.5rem'}>Follow Us</Heading>
        <Text>Addres: ward this dthsdf thds ehthe</Text>
        <Text>Email: test@gamil.com</Text>
        <Text>Phone NO: 1234567890</Text>
    </GridItem>
    <GridItem>
        <Heading fontSize={'1.5rem'}>Head Office</Heading>
        <Text>Addres: ward this dthsdf thds ehthe</Text>
        <Text>Email: test@gamil.com</Text>
        <Text>Phone NO: 1234567890</Text>
    </GridItem>
</SimpleGrid>
        </Box>
        </>
    )
}