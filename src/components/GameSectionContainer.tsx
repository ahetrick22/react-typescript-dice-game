import React, {ReactNode} from 'react';
import {Flex} from '@chakra-ui/react';

type GameSectionContainerProps = {
    children: ReactNode
}

export const GameSectionContainer = ({children}: GameSectionContainerProps) => <Flex
    align={'center'}
    justify={'space-between'}
    direction={'column'}
    bg={'#F1F1F1'}
    m={4}
    p={4}
    borderRadius={16}
    minH={['175px', '200px', '225px', '250px']}
>{children}</Flex>