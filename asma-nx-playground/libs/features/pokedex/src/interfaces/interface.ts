export interface IVariables {
    take?: number,
    offset?: number,
    offsetFlavorTexts?: number,
    pokemon?: string,
    number?: number,
}



export interface IData {
    getAllPokemon: GetAllPokemon[]
}

export interface GetAllPokemon {
    key: string
    sprite?: string
    types: Type[]
}

export interface Type {
    name?: string
}
//-------------------------


export interface IDetailData {
    getPokemon: GetPokemon
    getPokemonByDexNumber: GetPokemonByDexNumber | undefined
}

export interface GetPokemon {
    key: string
    abilities: Abilities
    color: string
    height: number
    weight: number
    gender: Gender
    types: Type[]
    sprite?: string
}

export interface Abilities {
    first: First
}

export interface First {
    key: string
    desc?: string
}

export interface Gender {
    female: string
    male: string
}


export interface GetPokemonByDexNumber {
    baseStats: BaseStats
}

export interface BaseStats {
    attack: number
    defense: number
    hp: number
    specialattack: number
    specialdefense: number
    speed: number
}
