import React from 'react'
import WikiAccordion from '@/components/Wiki/WikiAccordion'
import AccordionWidget from '@/components/Wiki/WikiAccordion/AccordionWidget'
import { VStack } from '@chakra-ui/react'
import { sampleProfileSummary } from '@/data/WikiInsightsData'

const ProfileSummary = () => {
  return (
    <VStack w="100%" p={4} spacing={4} borderWidth="1px" borderRadius={2}>
      <WikiAccordion
        display="flex"
        flexDir="column"
        gap={2}
        title="Profile Summary"
      >
        {sampleProfileSummary.map((item, index) => (
          <AccordionWidget key={index} {...item} />
        ))}
      </WikiAccordion>
    </VStack>
  )
}

export default ProfileSummary
