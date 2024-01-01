import {
    Box,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

export default function FaqSection() {
    const faqs = [
        {q:'How does an investor gain access to MF Utility?'},
        {q:'Will investors be able to have multiple Common Accout Numbers?'},
        {q:'How does an investor gain access to MF Utility?'},
        {q:'Will investors be able to have multiple Common Accout Numbers?'},
        {q:'How does an investor gain access to MF Utility?'}
    ]
    return (
        <>
            <Box padding={{base:'.5rem', md: '4rem'}} color={'blueviolet'}>
                <Heading textAlign={'center'} paddingBottom={'2rem'}>FAQ</Heading>
                <Accordion allowToggle>
                  {
                    faqs.map((item, i) => {
                        return   <AccordionItem key = {i} fontSize={'1.1rem'}>

                        <AccordionButton padding={'1rem'} fontSize={'1.2rem'}>
                            <Box as="span" flex='1' textAlign='left'>
                                {item.q}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    })
                  }
                   
                </Accordion>
            </Box>
        </>
    )
}