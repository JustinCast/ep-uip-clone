import React from 'react'
import {
  Box,
  HStack,
  Text,
  IconButton,
  useDisclosure,
  BoxProps,
} from '@chakra-ui/react'
import { RiArrowDownSLine } from 'react-icons/ri'

interface AccordionProps {
  title: string
  children: React.ReactNode
}

const WikiAccordion = ({
  title,
  children,
  ...rest
}: BoxProps & AccordionProps) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box w="100%" bgColor="wikiCardBg" p={3} borderRadius={4}>
      <HStack cursor="pointer" onClick={onToggle} justify="start">
        <IconButton
          color="linkColor"
          variant="link"
          minW={3}
          aria-label={`toggle ${title}`}
          icon={<RiArrowDownSLine />}
        />
        <Text
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
          }}
          fontSize="14px"
          color="linkColor"
        >
          {title}
        </Text>
      </HStack>
      {!isOpen && (
        <Box p={2} mt={1} {...rest}>
          {children}
        </Box>
      )}
    </Box>
  )
}

export default WikiAccordion
