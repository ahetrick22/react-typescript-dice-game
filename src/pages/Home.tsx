import React, {ReactNode, useEffect, useState} from "react";
import { Image, Button, Heading, Text, SimpleGrid, Box, Flex } from "@chakra-ui/react"
import {DiceSides, diceSidesKeys, diceSidesValues} from "../types/diceSides";
import {DieSvgs} from "../components/DieSvgs";
import {GameButton} from "../components/GameButton";
import {GameSectionContainer, GameSectionContainerText} from "../components/GameSectionContainer";

type HomeState = {
    currentRoll: number | null,
    overallScore: {[key in DiceSides]: number},
    dieSvg: ReactNode | null,
    fill: string,
    gameOver: boolean,
}

// Initialize outside of component to prevent reallocation on each render
const initialHomeState: HomeState = {
    currentRoll: null,
    overallScore: {
        [DiceSides.one]: 0,
        [DiceSides.two]: 0,
        [DiceSides.three]: 0,
        [DiceSides.four]: 0,
        [DiceSides.five]: 0,
        [DiceSides.six]: 0,
    },
    dieSvg: null,
    fill: '#000',
    gameOver: false,
}

export const Home = () => {
    const [state, setState] = useState<HomeState>(initialHomeState);

    useEffect(() => {
        // If we've just gotten to 5, make sure that the user knows which number won and that the game stops
        const winningScore = Object.keys(state.overallScore).find(key => state.overallScore[key] === 5);
        if (winningScore) {
            setState(prevState => {return {...prevState, gameOver: true}})
        }
    }, [state.overallScore])

    const rollDie = () => {
        // Get a random roll
        let newRoll = parseInt(diceSidesValues[Math.floor(Math.random() * diceSidesValues.length)]);

        // Update the current roll value and the total overall score at the current roll
        setState(prevState => {
            return {
                ...prevState,
                currentRoll: newRoll,
                overallScore: {
                    ...prevState.overallScore,
                    [newRoll]: prevState.overallScore[newRoll] + 1
                },
                dieSvg: DieSvgs(newRoll, state.fill)
            }
        });
    }

    const resetGame = () => {
        // reset all values besides the selected die fill color
        setState(prevState => {return {...initialHomeState, fill: prevState.fill}});
    }

    const getScoreText = (): string => {
        if (state.gameOver) {
            const winningScore = Object.keys(state.overallScore).find(key => state.overallScore[key] === 5);
            return `Current game complete. The winner is ${winningScore}!`;
        }
        return `Current Roll: ${state.currentRoll === null ? 'N/A' : state.currentRoll}`;
    }

    return (
        <>
            <Image src={require('../assets/background-image.jpg')} opacity={0.2} fit={'cover'} zIndex={-1} position={'fixed'} minH={'100%'}/>
            <Heading
                as="h1"
                size={'2xl'}
                textAlign={'center'}
                mb={8}
            >
                Welcome to Dicey Stuff
            </Heading>
            <SimpleGrid
                minChildWidth="200px"
                spacing="40px"
            >
               <GameSectionContainer>
                    <GameSectionContainerText text={"Available Actions"}/>
                    <GameButton onClick={rollDie} text={"Roll Die"} disabled={state.gameOver}/>
                    <GameButton onClick={resetGame} text={"Reset"} />
                </GameSectionContainer>
                <GameSectionContainer>
                    <GameSectionContainerText
                        text={getScoreText()}
                    />
                    {state.dieSvg}
                </GameSectionContainer>
                <GameSectionContainer>
                    <GameSectionContainerText text={"Current Scores"} />
                    {diceSidesKeys.map(side =>
                        <Text key={side}>{`${side}: ${state.overallScore[DiceSides[side]]}`}</Text>
                    )}
                </GameSectionContainer>
            </SimpleGrid>

        </>
    );
};
