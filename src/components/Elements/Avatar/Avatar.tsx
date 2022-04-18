import React from 'react'
import CustomAvatar from 'boring-avatars'
import { Avatar, chakra, ChakraProps, Icon } from '@chakra-ui/react'
import { AvatarColorArray } from '@/data/AvatarData'
import { RiAccountCircleLine } from 'react-icons/ri'
import { useENSData } from '@/hooks/useENSData'

type DisplayAvatarProps = ChakraProps & {
  address?: string | null
  svgProps?: any
  size?: number | string
  mt?: number | string
  showPlaceHolderAvatar?: boolean | null
}
const DisplayAvatar = ({
  address,
  svgProps,
  size = 25,
  mt = 2,
  showPlaceHolderAvatar,
  ...rest
}: DisplayAvatarProps) => {
  const [avatar, ,] = useENSData(address)
  let content = null
  if (avatar) {
    content = <Avatar size="xs" src={avatar} {...rest} />
  } else if (address && !avatar && showPlaceHolderAvatar) {
    content = (
      <CustomAvatar
        size={size}
        variant="pixel"
        name="Unnamed"
        colors={AvatarColorArray}
      />
    )
  } else if(showPlaceHolderAvatar) {
    content = (
      <Icon
        cursor="pointer"
        fontSize={size}
        color="gray.600"
        _dark={{ color: 'gray.200' }}
        fontWeight={600}
        as={RiAccountCircleLine}
        mt={mt}
      />
    )
  }

  return (
    <chakra.span
      zIndex="banner"
      sx={{
        svg: {
          ...svgProps,
        },
      }}
    >
      {content}
    </chakra.span>
  )
}

export default DisplayAvatar
