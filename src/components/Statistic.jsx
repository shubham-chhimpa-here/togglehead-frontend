import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Box,
} from '@chakra-ui/react'


export default function Statistic() {
    return (
        <>
        <Box padding={{base:'1rem', md: '4rem'}} bg={'#ddd'}>

            <StatGroup gap={'1rem'}>
                <Stat minW={'120px'}>
                    <StatLabel>Lorem Ipsum</StatLabel>
                    <StatNumber fontSize={'2rem'}>123+</StatNumber>
                    <StatHelpText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum beatae explicabo rerum minus optio quasi officiis voluptatum. Vitae eaque 
                    </StatHelpText>
                </Stat>
                <Stat minW={'120px'}>
                    <StatLabel>Lorem Ipsum</StatLabel>
                    <StatNumber fontSize={'2rem'}>12+</StatNumber>
                    <StatHelpText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum beatae explicabo rerum minus optio quasi officiis voluptatum. Vitae eaque ipsum porro,
                    </StatHelpText>
                </Stat>
              
                <Stat minW={'120px'}>
                    <StatLabel>Lorem Ipsum</StatLabel>
                    <StatNumber fontSize={'2rem'}>12+</StatNumber>
                    <StatHelpText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum beatae explicabo rerum minus optio quasi officiis voluptatum. Vitae eaque ipsum
                    </StatHelpText>
                </Stat>
                <Stat minW={'120px'}>
                    <StatLabel>Lorem Ipsum</StatLabel>
                    <StatNumber fontSize={'2rem'}>123</StatNumber>
                    <StatHelpText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum beatae explicabo rerum minus optio quasi officiis voluptatum. Vitae eaque
                    </StatHelpText>
                </Stat>


            </StatGroup>
        </Box>
        </>
    )
}