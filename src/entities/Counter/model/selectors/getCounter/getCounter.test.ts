import { StateSchema } from 'app/provaiders/StoreProvider/config/StateSchema';
import { getCounter } from './getCounter';

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

describe('getCounter', () => {
    test('shoud return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
