import { Box, Button, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import NavDrawer from "./NavDrawer";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

export default function NavbarComponent() {
  const navItems = [
    { t: 'Qualifications' },
    { t: 'Organizations' },
    { t: 'Research & Analysis' },
    { t: 'Lorem ipsum' },
    { t: 'Lorem ipsum' },
  ]
  return (


    <Flex padding={{base:'.3rem', md:'1rem'}}  bg={'blueviolet'} justify={'space-between'} alignItems={'center'} pos={'sticky'} zIndex={'1000'} top={0} color={'white'}>
      <Heading fontSize={'2rem'}>Logo</Heading>
      <Flex justify={'space-between'} alignItems={'center'} gap={'1rem'} display={{ lg: 'flex', base: 'none' }}>
        {
          navItems.map((item, i) => {
            return <Text key={i} fontSize={'1rem'} cursor={'pointer'}>
              {item.t} <ChevronDownIcon />
            </Text>
          })
        }
        <IconButton
          bg={'transparent'}
          icon={<SearchIcon />}
        />
        <Button>Enrolment</Button>
      </Flex>

      <Box display={{ lg: 'none' }}>
        <NavDrawer navItems={navItems}/>
      </Box>
    </Flex>


  );
}
