import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Box,
    Heading,
} from '@chakra-ui/react'
import { useState } from 'react'

import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


export default function Statistic() {
    const [state, setState] = useState(false);
    return (
        <>
            <Box padding={{ base: '1rem', md: '4rem' }} bg={'#ddd'} color={'blueviolet'}>

                <StatGroup gap={'1rem'}>
                    <Stat minW={'120px'}>
                        <StatLabel>Lorem Ipsum</StatLabel>
                        <StatNumber fontSize={'2rem'}>

                            {/* this */}

                            <ScrollTrigger onEnter={() => setState(true)}>

                                <Heading>

                                    {
                                        state ?

                                            <CountUp start={0} end={123}
                                                duration={3}

                                            /> : '0'
                                    }+
                                </Heading>

                            </ScrollTrigger>



                            {/*this  */}

                        </StatNumber>
                        <StatHelpText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum beatae explicabo rerum minus optio quasi officiis voluptatum. Vitae eaque
                        </StatHelpText>
                    </Stat>
                    <Stat minW={'120px'}>
                        <StatLabel>Lorem Ipsum</StatLabel>
                        <StatNumber fontSize={'2rem'}>
  {/* this */}

  <ScrollTrigger onEnter={() => setState(true)}>

<Heading>

    {
        state ?

            <CountUp start={0} end={12}
                duration={3}

            /> : '0'
    }+
</Heading>

</ScrollTrigger>



{/*this  */}


                        </StatNumber>
                        <StatHelpText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum beatae explicabo rerum minus optio quasi officiis voluptatum. Vitae eaque ipsum porro,
                        </StatHelpText>
                    </Stat>

                    <Stat minW={'120px'}>
                        <StatLabel>Lorem Ipsum</StatLabel>
                        <StatNumber fontSize={'2rem'}>

  {/* this */}

  <ScrollTrigger onEnter={() => setState(true)}>

<Heading>

    {
        state ?

            <CountUp start={0} end={12}
                duration={3}

            /> : '0'
    }+
</Heading>

</ScrollTrigger>



{/*this  */}

                        </StatNumber>
                        <StatHelpText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum beatae explicabo rerum minus optio quasi officiis voluptatum. Vitae eaque ipsum
                        </StatHelpText>
                    </Stat>
                    <Stat minW={'120px'}>
                        <StatLabel>Lorem Ipsum</StatLabel>
                        <StatNumber fontSize={'2rem'}>

  {/* this */}

  <ScrollTrigger onEnter={() => setState(true)}>

<Heading>

    {
        state ?

            <CountUp start={0} end={123}
                duration={3}

            /> : '0'
    }
</Heading>

</ScrollTrigger>



{/*this  */}

                        </StatNumber>
                        <StatHelpText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum beatae explicabo rerum minus optio quasi officiis voluptatum. Vitae eaque
                        </StatHelpText>
                    </Stat>


                </StatGroup>
            </Box>
        </>
    )
}