import { DocumentNode } from '@apollo/client';
import { Result } from '@core/api';
import { client } from '@features/pokedex';
import { IData, IDetailData, IVariables } from '../interfaces/interface';

export const fetchData = async (
    query: DocumentNode,
    variables?: IVariables
): Promise<Result<IData | IDetailData, Error>> => {
    try {
        const { data }: { data: IData | IDetailData } = await client.query({
            query,
            variables,
        });
        return { result: 'ok', data };
    } catch (error) {
        if (error instanceof Error) {
            return { result: 'err', data: error };
        } else return { result: 'err', data: new Error('Unknown error occured') };
    }
};
