import {
  VStack,
  HStack,
  Text,
  Heading,
  Box,
  IconButton,
} from '@chakra-ui/react'
import React from 'react'
import { TeamData } from '@/data/MeetOurTeamData'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { IconType } from 'react-icons/lib'
import EveripediaLogo from './logos/everipedia.svg'
import { Image } from '../Elements/Image/Image'
import AboutOurTeamSlider from './AboutOurTeamSlider'

const IconButtonSocial = ({
  name,
  icon,
  onClick,
}: {
  name: string
  icon?: IconType
  onClick: () => void
}) => (
  <IconButton
    bgColor="transparent"
    _hover={{ bgColor: 'transparent' }}
    _focus={{ bgColor: 'transparent' }}
    _active={{ bgColor: 'transparent' }}
    cursor="pointer"
    color="gray"
    aria-label={name}
    size="xs"
    as={icon}
    {...(!icon && { icon: <EveripediaLogo fill="gray" /> })}
    onClick={onClick}
  />
)
const AboutOurTeam = () => (
  <VStack spacing={8} maxW="5xl" mx="auto" my={16}>
    <Heading size="lg">Meet our team</Heading>
    <Text align={{ base: 'left', lg: 'center' }} maxW="3xl" opacity={0.6}>
      Our mission to build the world’s greatest encyclopedia requires a skilled
      executive team that embraces grand challenges. At Everipedia, we are
      fortunate to have people with deep experience and knowledge in both the
      education and blockchain industry.
    </Text>
    <Box w="100%">
      <AboutOurTeamSlider>
        {TeamData.map(teamMember => (
          <VStack
            display="block !important"
            mx="auto"
            key={teamMember.name}
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <Image
                w="150px"
                h="150px"
                mx="auto"
                mt="80px"
                className="teamMember__image"
                src={teamMember.image}
                alt={teamMember.name}
                priority
                overflow="hidden"
                rounded="full"
              />
            </Box>
            <Heading textAlign="center" size="md" mt={4}>
              {teamMember.name}
            </Heading>
            <Text textAlign="center" mt={2} opacity={0.6}>
              {teamMember.title}
            </Text>
            <VStack spacing={4} className="teamMember__about" display="none">
              <Text textAlign="center" mt={2}>
                {teamMember.about}
              </Text>
              <HStack justify="center" spacing={4}>
                {teamMember.socials.linkedin && (
                  <IconButtonSocial
                    name="linked in"
                    icon={BsLinkedin}
                    onClick={() => window.open(teamMember.socials.linkedin)}
                  />
                )}
                {teamMember.socials.twitter && (
                  <IconButtonSocial
                    name="twitter"
                    icon={BsTwitter}
                    onClick={() => window.open(teamMember.socials.twitter)}
                  />
                )}
                {teamMember.socials.everipedia && (
                  <IconButtonSocial
                    name="everipedia"
                    onClick={() => window.open(teamMember.socials.everipedia)}
                  />
                )}
              </HStack>
            </VStack>
          </VStack>
        ))}
      </AboutOurTeamSlider>
    </Box>
  </VStack>
)

export default AboutOurTeam
