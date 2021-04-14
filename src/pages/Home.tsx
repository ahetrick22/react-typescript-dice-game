import React, {useEffect, useState} from "react";

enum DiceSides {
    one = 1,
    two,
    three,
    four,
    five,
    six
}

// Reference for building arrays from enums: https://github.com/microsoft/TypeScript/issues/17198#issuecomment-315400819
const diceSidesKeys = Object.keys(DiceSides).filter(k => typeof DiceSides[k as any] === "number");
const diceSidesValues = diceSidesKeys.map(k => DiceSides[k as any]);

type HomeState = {
    currentRoll: number | null,
    overallScore: {[key in DiceSides]: number},
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
    }
}

export const Home = () => {
    const [state, setState] = useState<HomeState>(initialHomeState);

    useEffect(() => {
        // If we've just gotten to 5, make sure that the user knows which number won and that the game stops
        const winningScore = Object.keys(state.overallScore).find(key => state.overallScore[key] === 5);
        if (winningScore) {
            alert(`The winner is ${winningScore}!`)
            resetGame();
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
                }
            }
        });
    }

    const resetGame = () => {
        setState(initialHomeState);
    }

    return (
        <>
            <div>Dicey Stuff</div>
            <div>Current Roll: {state.currentRoll === null ? 'N/A' : state.currentRoll}</div>
            <button onClick={rollDie}>Roll</button>
            <button onClick={resetGame}>Reset</button>
            {diceSidesKeys.map(side => <div key={side}>{state.overallScore[DiceSides[side]]}</div>)}
        </>
    );
};
