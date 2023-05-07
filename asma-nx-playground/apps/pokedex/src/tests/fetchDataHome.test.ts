import { Result } from "@core/api"
import { RootStore } from "../mst/store/RootStore"
import { IData, IVariables } from '@features/pokedex';
import { DocumentNode } from "graphql";


test('check fetchDataHome function', async () => {
    const store = RootStore.create();

    const fetchDataStub: Result<string, Error> = {
        result: 'err',
        data: new Error("400")
    }

    const fetchDataMock = async (
        query: DocumentNode,
        variables?: IVariables
    ) => {
        return fetchDataStub
    }
    await store.fetchDataHome(fetchDataMock)

    expect(store.pokemons.length).toBe(0)
})

//--------------------------------------------------------------------------------------

test("should fetch and store pokemon home data correctly in RootStore", async () => {
    const store = RootStore.create();
    const expectedData: IData = {
        getAllPokemon: [
            {
                key: "pokestarsmeargle",
                sprite: "https://play.pokemonshowdown.com/sprites/gen5/pokestarsmeargle.png",
                types: [
                    {
                        name: "Normal"
                    }
                ]
            }
        ]
    };

    const fetchDataStub: Result<IData, string> = {
        result: 'ok',
        data: expectedData
    };

    const fetchDataMock = async (
        query: DocumentNode,
        variables?: IVariables
    ) => {
        return fetchDataStub
    }

    await store.fetchDataHome(fetchDataMock)

    expect(store.pokemons.length).toBeGreaterThan(0)
    expect(store.pokemons[0].key).toBe("pokestarsmeargle")
    expect(store.pokemons[0].sprite).toBe("https://play.pokemonshowdown.com/sprites/gen5/pokestarsmeargle.png")
    expect(store.pokemons[0].types).toEqual([{ name: "Normal" }])
})

//----------------------------------------------------------------------------

test("should handle empty pokemon home data correctly in RootStore", async () => {
    const store = RootStore.create();

    const emptyData: IData = {
        getAllPokemon: []
    };

    const fetchDataStub: Result<IData, string> = {
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

    expect(store.pokemons.length).toBe(0);
});

