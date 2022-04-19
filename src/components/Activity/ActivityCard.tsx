import React from 'react'
import {
  HStack,
  Heading,
  Text,
  Box,
  Link,
  Tag,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import shortenAccount from '@/utils/shortenAccount'
import { WikiImage } from '@/components/WikiImage'
import { getWikiImageUrl } from '@/utils/getWikiImageUrl'
import { Wiki } from '@/types/Wiki'
import { getReadableDate } from '@/utils/getFormattedDate'
import DisplayAvatar from '../Elements/Avatar/Avatar'

interface ActivityCardProps {
  id: string
  title: string
  brief: string
  editor: string
  lastModTimeStamp: string
  wiki: Wiki
  wikiId: string
}

const CreatedTime = ({ date }: { date: string }) => {
  return (
    <Text
      mt="1"
      fontSize="sm"
      fontWeight="light"
      opacity={0.6}
      whiteSpace="nowrap"
    >
      {getReadableDate(date)}
    </Text>
  )
}

const ActivityCard = ({
  id,
  title,
  brief,
  editor,
  lastModTimeStamp,
  wiki,
  wikiId,
}: ActivityCardProps) => {
  const editDetails = useBreakpointValue({
    base: (
      <Box>
        <HStack>
          <DisplayAvatar address={wiki.user?.id} size="20" />
          <Text fontSize="14px" color="linkColor">
            <NextLink href={`/account/${editor}`} passHref>
              <Link href="passRef" color="brand.500" fontWeight="bold">
                {shortenAccount(editor)}
              </Link>
            </NextLink>
          </Text>
        </HStack>
        <CreatedTime date={lastModTimeStamp} />
      </Box>
    ),
    md: (
      <Flex justifyContent="space-between" w="full">
        <Box>
          <HStack flex="1">
            <DisplayAvatar address={wiki.user?.id} size="20" />
            <Text fontSize="14px" color="linkColor">
              <NextLink href={`/account/${editor}`} passHref>
                <Link href="passRef" color="brand.500" fontWeight="bold">
                  {shortenAccount(editor)}
                </Link>
              </NextLink>
            </Text>
          </HStack>
        </Box>
        <Box>
          <CreatedTime date={lastModTimeStamp} />
        </Box>
      </Flex>
    ),
    lg: (
      <Flex justifyContent="space-between" w="full">
        <Box>
          <HStack flex="1">
            <DisplayAvatar address={wiki.user?.id} size="20" />
            <Text fontSize="14px" color="linkColor">
              <NextLink href={`/account/${editor}`} passHref>
                <Link href="passRef" color="brand.500" fontWeight="bold">
                  {shortenAccount(editor || '')}
                </Link>
              </NextLink>
            </Text>
            <HStack spacing={2}>
              {wiki.tags.map((tag, index) => (
                <Tag
                  key={index}
                  borderRadius={6}
                  variant="solid"
                  bg={`hsl(${Math.floor(Math.random() * 360)}, 20%, 80%)`}
                >
                  <Text px={4} color="textColor">
                    {tag.id}
                  </Text>
                </Tag>
              ))}
            </HStack>
          </HStack>
        </Box>
        <Box>
          <CreatedTime date={lastModTimeStamp} />
        </Box>
      </Flex>
    ),
  })

  return (
    <HStack
      bgColor="cardBg"
      justifyContent="flex-start"
      borderWidth="1px"
      borderColor="cardBorder"
      borderRadius="lg"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.10)"
      px={{ base: 3, lg: 5 }}
      py={{ base: 3, lg: 3 }}
      w="full"
    >
      <NextLink href={`/wiki/${id}`} passHref>
        <WikiImage
          cursor="pointer"
          flexShrink={0}
          imageURL={getWikiImageUrl(wiki)}
          h={{ base: 70, lg: 100 }}
          w={{ base: 70, lg: 100 }}
          borderRadius="lg"
          overflow="hidden"
        />
      </NextLink>
      <Box w="100%" px={4} p={{ base: 1, lg: 4 }} mx="auto">
        <Flex mb={{ base: 0, md: 2 }} justifyContent="space-between">
          <NextLink href={`/wiki/${wikiId}`} passHref>
            <Heading
              cursor="pointer"
              as="h2"
              fontSize={{ base: '16px', md: '20px' }}
              letterSpacing="wide"
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              w={{ base: '50%', md: '100%' }}
            >
              {title}
            </Heading>
          </NextLink>
          <NextLink href={`/categories/${wiki.categories[0].id}`} passHref>
            <Text
              display={{ base: 'none', md: 'block' }}
              color="brand.500"
              fontWeight="bold"
              cursor="pointer"
            >
              {wiki.categories[0].title}
            </Text>
          </NextLink>
        </Flex>
        <Box mb="2" maxW={{ base: '70%', lg: '80%' }} overflow="hidden">
          <Text display={{ base: 'none', md: 'flex' }}>{brief}</Text>
        </Box>
        {editDetails}
      </Box>
    </HStack>
  )
}

export default ActivityCard
