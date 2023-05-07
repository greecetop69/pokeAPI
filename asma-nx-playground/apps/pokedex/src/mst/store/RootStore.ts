import { flow, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { IDetailPokeModelSnapshotIn, IRootStore } from "../interface";
import { pokeModel } from "../models/pokeModel";
import { GET_POKEMON, IData, IDetailData, IVariables } from '@features/pokedex';
import { detailPokeModel } from "../models/detailPokeModel";
import { GET_POKEMON_DETAIL } from "@features/pokedex";
import { Result, match } from "@core/api";
import { apolloData } from "../../interfaces/apollo";
import { DocumentNode } from "graphql";

export const RootStore = types.model('RootStore', {
    pokemons: types.array(pokeModel),
    pokemonDetail: types.maybeNull(detailPokeModel)
}).actions((self) => ({
    fetchDataHome: flow(function* (
        action: (
            query: DocumentNode,
            variables?: IVariables
        ) => Promise<Result<IData | IDetailData, Error>>,
        take = 200

    ) {
        const result = yield action(GET_POKEMON,
            { take: take, offset: 0, offsetFlavorTexts: 0, }
        )
        match<void, void, apolloData, Error>(
            result,
            (data) => self.pokemons = result.data.getAllPokemon,
            (errorMessage) => console.error('error: ', errorMessage.message)
        )
    }),

    fetchDataDetail: flow(function* (
        pokeName: string,
        action: (
            query: DocumentNode,
            variables?: IVariables
        ) => Promise<Result<IData | IDetailData, Error>>
    ) {
        const result = yield action(
            GET_POKEMON_DETAIL,
            { pokemon: pokeName, number: 1 }
        );

        match<void, void, IDetailPokeModelSnapshotIn, Error>(
            result,
            (data) => self.pokemonDetail = result.data,
            (errorMessage) => console.error(errorMessage.message)
        )
    }),
}))
export const store = RootStore.create();

export const ContextRootStore = createContext<IRootStore>(store)

export const useRootStore = () => useContext(ContextRootStore)
