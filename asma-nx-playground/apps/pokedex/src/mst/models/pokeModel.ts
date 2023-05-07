import { types } from 'mobx-state-tree';


export const pokeModel = types.model("pokeModel", {
    key: types.identifier,
    sprite: '',
    types: types.array(
        types.model({
            name: ''
        })
    ),
})