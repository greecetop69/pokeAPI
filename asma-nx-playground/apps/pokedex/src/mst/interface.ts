import { Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree'
import { pokeModel } from './models/pokeModel';
import { RootStore } from './store/RootStore';
import { detailPokeModel } from './models/detailPokeModel';


export interface IRootStore extends Instance<typeof RootStore> { }
export interface IRootStoreSnapshotIn extends SnapshotIn<typeof RootStore> { }
export interface IRootStoreSnapshotOut extends SnapshotOut<typeof RootStore> { }


export interface IPokeModel extends Instance<typeof pokeModel> { }
export interface IPokeModelSnapshotIn extends SnapshotIn<typeof pokeModel> { }
export interface IPokeModelSnapshotOut extends SnapshotOut<typeof pokeModel> { }

export interface IDetailPokeModel extends Instance<typeof detailPokeModel> { }
export interface IDetailPokeModelSnapshotIn extends SnapshotIn<typeof detailPokeModel> { }
export interface IDetailPokeModelSnapshotOut extends SnapshotOut<typeof detailPokeModel> { }
