import { StateSchema } from 'app/provaiders/StoreProvider/config/StateSchema';
import { getCounterValue } from './getCounterValue';

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
describe('getCounterValue', () => {
    const state: DeepPartial<StateSchema> = {
        counter: { value: 10 },
    };
    test('', () => {
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
