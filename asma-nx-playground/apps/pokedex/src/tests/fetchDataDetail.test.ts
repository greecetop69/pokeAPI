import { Result } from "@core/api"
import { RootStore } from "../mst/store/RootStore"
import { IDetailData, IVariables } from '@features/pokedex';
import { DocumentNode } from "graphql";


test('check fetchDataDetail function', async () => {
    const store = RootStore.create();

    const fetchDataStub: Result<string, Error> = {
        result: 'err',
        data: new Error('400')
    }

    const fetchDataMock = async (
        query: DocumentNode,
        variables?: IVariables
    ) => {
        return fetchDataStub
    }
    await store.fetchDataDetail("pokestarsmeargle", fetchDataMock)

    expect(store.pokemonDetail).toBeNull()
})

//--------------------------------------------------------------------------------------

test("should fetch and store pokemon detail data correctly in RootStore", async () => {
    const store = RootStore.create();
    const expectedData: IDetailData = {
        getPokemon: {
            key: "pokestarsmeargle",
            abilities: {
                first: {
                    key: "owntempo",
                    desc: "This Pokémon cannot be confused. Gaining this Ability while confused cures it. This Pokémon is immune to the effect of the Intimidate Ability."
                }
            },
            color: "White",
            height: 1.5,
            weight: 61,
            gender: {
                female: "50%",
                male: "50%"
            },
            types: [
                {
                    name: "Normal"
                }
            ],
            sprite: "https://play.pokemonshowdown.com/sprites/gen5/pokestarsmeargle.png"
        },
        getPokemonByDexNumber: {
            baseStats: {
                attack: 64,
                defense: 58,
                hp: 58,
                specialattack: 80,
                specialdefense: 65,
                speed: 80
            }
        }
    };

    const fetchDataStub: Result<IDetailData, string> = {
        result: 'ok',
        data: expectedData
    };

    const fetchDataMock = async (
        query: DocumentNode,
        variables?: IVariables
    ) => {
        return fetchDataStub
    }

    await store.fetchDataDetail("pokestarsmeargle", fetchDataMock)

    expect(store.pokemonDetail?.getPokemon.key).toBe("pokestarsmeargle")
    expect(store.pokemonDetail?.getPokemonByDexNumber.baseStats.attack).toBe(64)
    expect(store.pokemonDetail?.getPokemon.sprite).toBe("https://play.pokemonshowdown.com/sprites/gen5/pokestarsmeargle.png")
    expect(store.pokemonDetail?.getPokemon.types).toEqual([{ name: "Normal" }])
})

//----------------------------------------------------------------------------

test("should handle empty pokemon detail data correctly in RootStore", async () => {
    const store = RootStore.create();

    const emptyData: IDetailData = {
        getPokemon: {
            key: '',
            abilities: {
                first: {
                    key: '',
                    desc: '',
                },
            },
            color: '',
            height: 0,
            weight: 0,
            gender: {
                female: '',
                male: '',
            },
            types: [
                {
                    name: '',
                },
            ],
            sprite: '',
        },
        getPokemonByDexNumber: undefined,
    };

    const fetchDataStub: Result<IDetailData, string> = {
        result: 'ok',
        data: emptyData
    };

    const fetchDataMock = async (
        query: DocumentNode,
        variables?: IVariables
    ) => {
        return fetchDataStub
    }

    await store.fetchDataHome(fetchDataMock)

    expect(store.pokemonDetail).toBeNull();
});

