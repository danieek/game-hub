import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card direction="row" overflow="hidden">
      <HStack>
        <Skeleton height="32px" width="200px" borderRadius={8} />
      </HStack>
    </Card>
  );
};

export default GenreListSkeleton;
