import React from 'react'
import { Box, HStack, Icon } from '@chakra-ui/react'
import { TriangleUpIcon } from '@chakra-ui/icons'

interface HistoryCardProps {
  isRightAligned?: boolean
  isFullWidth?: boolean
}

interface HistoryCardArrowProps {
  isRightAligned?: boolean
}

const HistoryCardArrow = ({ isRightAligned }: HistoryCardArrowProps) => {
  return (
    <HStack
      flexDir={isRightAligned ? 'row-reverse' : 'row'}
      justify="space-between"
      pos="absolute"
      top="50%"
      w="30px"
      transform={
        isRightAligned ? 'translate(-100%, -50%)' : 'translate(100%, -50%)'
      }
      right={isRightAligned ? 'unset' : '0'}
      left={isRightAligned ? '0' : 'unset'}
    >
      <Icon
        transform={
          isRightAligned
            ? 'rotate(-90deg) translateY(4px)'
            : 'rotate(90deg) translateY(4px)'
        }
        as={TriangleUpIcon}
        p={0}
        m={0}
        color="cardBg"
      />
      <Box
        flexShrink={0}
        m="0 !important"
        transform={isRightAligned ? 'translateX(-50%)' : 'translateX(50%)'}
        w={2}
        h={2}
        borderRadius="100%"
        bgColor="brand.500"
      />
    </HStack>
  )
}

export const HistoryCard = ({
  isRightAligned,
  isFullWidth,
}: HistoryCardProps) => {
  return (
    <Box
      pos="relative"
      h="250px"
      w={isFullWidth ? 'calc(100% - 15px)' : 'calc(50% - 30px)'}
      bgColor="cardBg"
      borderRadius={4}
      p={4}
      ml={isRightAligned ? 'auto' : 'unset'}
      mr={isRightAligned ? '0' : 'unset'}
    >
      <HistoryCardArrow isRightAligned={isRightAligned} />
    </Box>
  )
}
