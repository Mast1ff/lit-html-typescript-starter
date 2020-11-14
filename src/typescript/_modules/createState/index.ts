import { Part } from 'lit-html';
import { BehaviorSubject } from 'rxjs';
import { subscribe } from './subscribe';

type DispatchState<S> = (nextState: S) => void
type SubscribableState<S> = (part: Part, initialState: S) => void

/**
 * @param {any} initialState - どの型でも受け入れます。
 * @return {any} - 引数に持たせた型のstateと、stateを更新するアクションを返します。
 */
function createState<S>(
    initialState: S,
): [SubscribableState<S>, DispatchState<S>] {
    const stateStotre = new BehaviorSubject(initialState);
    const updateState = <T>(store: BehaviorSubject<T>) => {
        return (next: () => T) => {
            return () => {
                return store.next(next());
            };
        };
    };
    const updateAction = updateState(stateStotre);
    const dispatch = (nextState: S) => {
        updateAction(
            () => {
                return nextState;
            }
        )();
    };
    const state = subscribe(stateStotre);
    return [state, dispatch];
}

export {
    createState,
};
