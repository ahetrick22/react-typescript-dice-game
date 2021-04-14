import React, {ReactNode} from 'react';
import {Flex, Text} from '@chakra-ui/react';

type GameSectionContainerProps = {
    children: ReactNode
}

export const GameSectionContainer = ({children}: GameSectionContainerProps) =>
    <Flex
    align={'center'}
    justify={'space-between'}
    direction={'column'}
    bg={'#F1F1F1'}
    m={4}
    p={4}
    borderRadius={16}
    minH={['175px', '200px', '225px', '250px']}
>{children}</Flex>

type GameSectionContainerTextProps = {
    text: string
}

export const GameSectionContainerText = ({text}: GameSectionContainerTextProps) =>
    <Text
        fontWeight={'bold'}
        textAlign={'center'}
    >{text}
    </Text>