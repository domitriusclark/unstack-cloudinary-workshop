import UploadForm from '../src/components/UploadForm';

import {
  Flex
} from "@chakra-ui/core";

export default function Index() {
  return (
    <Flex minW="100vw" alignItems="center" justifyContent="center">
      <UploadForm />
    </Flex>
  )
}