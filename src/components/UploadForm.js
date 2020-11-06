import React from 'react';
import { useDropzone } from 'react-dropzone';

import {
  Text,
  Button,
  Input,
  Stack,
  Flex,
} from '@chakra-ui/core';

export default function UploadForm() {
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  const [fileToUpload, setFileToUpload] = React.useState({});

  function onDrop(acceptedFiles) {
    setFileToUpload(acceptedFiles[0]);
  }

  function onSubmit(file, options) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      // Add your method of upload here
    })
    reader.readAsDataURL(file)
  }

  return (
    <Flex
      rounded="md"
      alignItems="center"
      justifyContent="center"
      direction="column"
      w={400}
      height={300}
    >

      <Text fontSize="xl">Upload to Cloudinary</Text>

      <Stack w="80%" spacing={2}>
        <Input w="92%" size="sm" fontSize="sm" placeholder="Title" />
      </Stack>
      <Flex
        rounded="md"
        border="2px solid black"
        cursor="pointer"
        h="200px"
        width="80%"
        alignSelf="center"
        alignItems="center"
        justifyContent="center"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <p>Choose file to upload...</p>
      </Flex>

      <Button
        size="lg"
        variantColor="teal"
        variant="outline"
        mt={4}
      >
        Upload Photo
      </Button>
    </Flex>
  );
};