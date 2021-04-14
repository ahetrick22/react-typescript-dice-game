import React, {ReactNode, useEffect, useState} from "react";
import { Text, SimpleGrid, Input } from "@chakra-ui/react"
import {DiceSides, diceSidesKeys, diceSidesValues} from "../types/diceSides";
import {DieSvgs} from "../components/DieSvgs";
import {GameButton} from "../components/GameButton";
import {GameSectionContainer, GameSectionContainerText} from "../components/GameSectionContainer";
import BackgroundImageAndTitle from "../components/BackgroundImageAndTitle";

type HomeState = {
    currentRoll: DiceSides | null,
    overallScore: {[key in DiceSides]: number},
    dieSvg: ReactNode | null,
    fill: string,
    gameOver: boolean,
    rollText: string,
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
    fill: '#000000',
    gameOver: false,
    rollText: 'Current Roll: N/A'
}

export const Home = () => {
    const [state, setState] = useState<HomeState>(initialHomeState);

    useEffect(() => {
        // If we've just gotten to 5, make sure that the user knows which number won and that the game stops
        const winningScore = Object.keys(state.overallScore).find(key => state.overallScore[key] === 5);
        if (winningScore) {
            setState(prevState => {
                return {
                    ...prevState,
                    gameOver: true,
                    rollText: `Current game complete. The winner is ${winningScore}!`
                }
            })
        }
    }, [state.overallScore])

    useEffect(() => {
        // update the die svg when either the current roll (if there is one) or the fill changes
        if (state.currentRoll) {
            setState(prevState => {
                return {
                    ...prevState,
                    dieSvg: DieSvgs(state.currentRoll as DiceSides, state.fill)
                }
            })
        }
    }, [state.currentRoll, state.fill])

    const rollDie = () => {
        // Get a random roll
        let newRoll = parseInt(diceSidesValues[Math.floor(Math.random() * diceSidesValues.length)]);

        // Update the current roll value, the total overall score & the roll text for the current roll
        setState(prevState => {
            return {
                ...prevState,
                currentRoll: newRoll,
                rollText: `Current Roll: ${newRoll}`,
                overallScore: {
                    ...prevState.overallScore,
                    [newRoll]: prevState.overallScore[newRoll] + 1
                }
            }
        });
    }

    const resetGame = () => {
        // reset all values besides the selected die fill color
        setState(prevState => {
            return {...initialHomeState, fill: prevState.fill}
        });
    }

    return (
        <>
            <BackgroundImageAndTitle/>
            <SimpleGrid
                minChildWidth="200px"
                spacing="40px"
            >
                <GameSectionContainer>
                    <GameSectionContainerText text={"Available Actions"}/>
                    <GameButton onClick={rollDie} text={"Roll Die"} disabled={state.gameOver}/>
                    <GameButton onClick={resetGame} text={"Reset"}/>
                    <Text>Choose Die Color: </Text>
                    <Input
                        type={'color'}
                        value={state.fill}
                        onChange={(newVal) =>
                            setState(prevState => {
                                return {
                                    ...prevState,
                                    fill: newVal.target.value,
                                }
                            })
                        }
                        maxW={'100px'}
                    />
                </GameSectionContainer>
                <GameSectionContainer>
                    <GameSectionContainerText
                        text={state.rollText}
                    />
                    {state.dieSvg}
                </GameSectionContainer>
                <GameSectionContainer>
                    <GameSectionContainerText text={"Scores (first to 5 wins)"}/>
                    {diceSidesKeys.map(side =>
                        <Text key={side}>{`${side}: ${state.overallScore[DiceSides[side]]}`}</Text>
                    )}
                </GameSectionContainer>
            </SimpleGrid>
        </>
    );
};
