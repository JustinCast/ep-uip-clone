import { Image } from '@/components/Elements/Image/Image'
import {
  AspectRatio,
  chakra,
  Divider,
  Flex,
  Icon,
  LinkBox,
  Text,
  LinkOverlay,
} from '@chakra-ui/react'
import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import { RiHeartLine } from 'react-icons/ri'
import NextLink from 'next/link'

import { getReadableDate } from '@/utils/getFormattedDate'
import { shortenText } from '@/utils/shortenText'
import { Wiki } from '@/types/Wiki'

export type CollectionItemProps = {
  item: Wiki
}

const COLLECTION = {
  image:
    'https://lh3.googleusercontent.com/rRFcgtEdcqEs9dPVJBdofZYu7jlyiO9tbN2S1wqTRnpEo9FUzEq0it_n6DLjxLTd_SWjD1chgImLw4tEvyVrpbRuVa_dfMgUU263=w316',
}

export const CollectionItem = (props: CollectionItemProps) => {
  const { item } = props
  const { updated, content, title, id } = item

  return (
    <LinkBox>
      <Flex
        shadow="base"
        _hover={{ shadow: 'lg' }}
        direction="column"
        rounded="2xl"
        overflow="hidden"
        _dark={{ bg: '#303339' }}
      >
        <AspectRatio maxW="full" ratio={1}>
          <Image src={COLLECTION.image} w="full" />
        </AspectRatio>
        <Flex direction="column" px="3" fontSize="xs" py="2" mb="3">
          <Flex align="center">
            <NextLink href={`/wiki/${id}`} passHref>
              <LinkOverlay>
                <chakra.span color="gray.500"> {title}</chakra.span>
              </LinkOverlay>
            </NextLink>
            {updated && (
              <>
                <chakra.span ml="auto" color="gray.500">
                  Last Updated:
                </chakra.span>
                <chakra.span>{getReadableDate(updated)}</chakra.span>
              </>
            )}
          </Flex>
          <Text noOfLines={1}>{shortenText(content, 65)}</Text>
        </Flex>
        <Divider />
        <Flex px="3" align="center" py="2">
          <FaEthereum />
          <Icon as={RiHeartLine} ml="auto" />
          <chakra.span ml="2">0</chakra.span>
        </Flex>
      </Flex>
    </LinkBox>
  )
}