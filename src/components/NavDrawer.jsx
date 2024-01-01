import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  HStack,
  Text,
  VStack,
  IconButton,
} from '@chakra-ui/react'
import React from 'react'

export default function NavDrawer({ navItems }) {
  console.log(navItems)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} bg={'transparent'} onClick={onOpen}>
        <HamburgerIcon boxSize={'1.5rem'} />
      </Button>
      <Drawer
        isOpen={isOpen}
        size={'full'}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Logo</DrawerHeader>

          <DrawerBody>
            <VStack gap={'1rem'}>
              {
                navItems.map((item, i) => {
                  return <Text key={i} fontSize={'1rem'} cursor={'pointer'}>
                    {item.t}
                  </Text>
                })
              }
            </VStack>
          </DrawerBody>

          <DrawerFooter  justifyContent={'center'} gap={'1rem'}>
            <IconButton
              bg={'transparent'}
              icon={<SearchIcon />}
            />
            <Button>Enrolment</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}