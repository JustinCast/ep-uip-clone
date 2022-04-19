import React, { ChangeEvent, useState } from 'react'
import { Button, Flex, Input, Image, useToast } from '@chakra-ui/react'
import axios from 'axios'
import buffer from 'buffer'

type ImageInputType = {
  setHideDropzone: (hide: boolean) => void
  setImage: (name: string, f: ArrayBuffer) => void
  deleteImage: () => void
}

const ImageInput = ({
  setHideDropzone,
  setImage,
  deleteImage,
}: ImageInputType) => {
  const [imgSrc, setImageSrc] = useState<string>()
  const toast = useToast()

  const handleOnImageInputChanges = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setImageSrc(event.target.value)
    setHideDropzone(true)
    try {
      const { data } = await axios.get(String(event.target.value), {
        responseType: 'arraybuffer',
      })
      setImage(event.target.value, new buffer.Buffer(data as Buffer))
      toast({
        title: 'Image successfully Fetched',
        status: 'success',
        duration: 2000,
      })
    } catch (error) {
      toast({
        title: 'Image could not be fetched. Ensure you have the right link',
        status: 'error',
        duration: 2000,
      })
    }
    return null
  }

  return (
    <Flex
      mt={imgSrc ? 0 : -20}
      mb={5}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {imgSrc ? (
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={5}
        >
          <Image
            objectFit="cover"
            h="255px"
            w="full"
            borderRadius={4}
            overflow="hidden"
            src={imgSrc}
            alt="Input"
          />
          <Button
            w="25%"
            shadow="md"
            bg="red.400"
            onClick={() => {
              setImageSrc(undefined)
              setHideDropzone(false)
              deleteImage()
            }}
          >
            Clear
          </Button>
        </Flex>
      ) : (
        <Input
          w="90%"
          textAlign="center"
          onChange={handleOnImageInputChanges}
          placeholder="(or) paste image link here"
        />
      )}
    </Flex>
  )
}

export default ImageInput
