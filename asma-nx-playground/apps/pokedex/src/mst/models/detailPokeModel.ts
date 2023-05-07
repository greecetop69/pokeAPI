import { types } from 'mobx-state-tree';


export const detailPokeModel = types.model("detailPokeModel", {
    getPokemon: types.model({
        key: types.identifier,
        abilities: types.model({
            first: types.model({
                key: '',
                desc: types.maybeNull(types.string)
            })
        }),
        color: '',
        height: 0,
        weight: 0,
        gender: types.model({
            female: '',
            male: ''
        }),
        types: types.array(
            types.model({
                name: ''
            })
        ),
        sprite: ''
    }),
    getPokemonByDexNumber: types.model({
        baseStats: types.model({
            attack: 0,
            defense: 0,
            hp: 0,
            specialattack: 0,
            specialdefense: 0,
            speed: 0
        })
    })

}
)


