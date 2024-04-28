import React from "react";
import { Box, Button, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { FaDice, FaQuestionCircle } from "react-icons/fa";

const tiles = ["wood", "brick", "sheep", "wheat", "ore", "gold", "desert", "water"];

const randomTile = () => tiles[Math.floor(Math.random() * tiles.length)];

const Index = () => {
  const generateBoard = () => {
    return Array.from({ length: 19 }, () => ({
      type: randomTile(),
      number: Math.floor(Math.random() * 11) + 2,
    }));
  };

  const [board, setBoard] = React.useState(generateBoard());

  const handleGenerate = () => {
    setBoard(generateBoard());
  };

  return (
    <VStack spacing={8} p={5}>
      <Text fontSize="2xl" fontWeight="bold">
        Catan Seafarers Board Generator
      </Text>
      <Button leftIcon={<FaDice />} colorScheme="teal" onClick={handleGenerate}>
        Generate New Board
      </Button>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        {board.map((tile, index) => (
          <GridItem w="100%" h="100" key={index}>
            <VStack>
              <Image src={`https://images.unsplash.com/photo-1523350165414-082d792c4bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0J0aWxlLnR5cGUlN0QlMjB0aWxlfGVufDB8fHx8MTcxNDMzNjQ1M3ww&ixlib=rb-4.0.3&q=80&w=1080`} boxSize="50px" />
              <Text>{tile.number !== 7 ? tile.number : <FaQuestionCircle />}</Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};

export default Index;
