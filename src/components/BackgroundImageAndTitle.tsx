import React, {memo} from 'react';
import {Heading, Image} from "@chakra-ui/react";
import backgroundImage from "../assets/background-image.jpg";

const BackgroundImageAndTitle = () =>
    <>
        <Image
            src={backgroundImage}
            opacity={0.2}
            fit={'cover'}
            zIndex={-1}
            position={'fixed'}
            minH={'100%'}
        />
        <Heading
        as="h1"
        size={'2xl'}
        textAlign={'center'}
        mb={8}
        >
            Welcome to Dicey Stuff
        </Heading>
    </>

// since this is a pure component, memoize to avoid rerenders
export default memo(BackgroundImageAndTitle);