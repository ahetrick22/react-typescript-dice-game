import React from 'react';
import { Button } from "@chakra-ui/react"

type ButtonProps = {
    text: string,
    onClick: () => void,
    disabled?: boolean,
}

export const GameButton = ({text, onClick, disabled = false}: ButtonProps) =>
    <Button
        onClick={onClick}
        m={4}
        colorScheme={'pink'}
        disabled={disabled}
    >{text}</Button>