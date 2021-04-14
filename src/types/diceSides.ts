export enum DiceSides {
    one = 1,
    two,
    three,
    four,
    five,
    six
}

// Reference for building arrays from enums: https://github.com/microsoft/TypeScript/issues/17198#issuecomment-315400819
export const diceSidesKeys = Object.keys(DiceSides).filter(k => typeof DiceSides[k as any] === "number");
export const diceSidesValues = diceSidesKeys.map(k => DiceSides[k as any]);