import { directive, Part } from 'lit-html';
import { Subscribable } from 'rxjs';

type SubscribableOrPromiseLike<T> = Subscribable<T> | PromiseLike<T>;

interface PreviousValue<T> {
    readonly value: T
    readonly subscribableOrPromiseLike: SubscribableOrPromiseLike<T>;
}

const previousValues = new WeakMap<Part, PreviousValue<unknown>>();

const subscribe = directive(
    <T>(subscribableOrPromiseLike: SubscribableOrPromiseLike<T>) => {
        return (
            part: Part,
        ) => {
            if (
                !('then' in subscribableOrPromiseLike)
            && !('subscribe' in subscribableOrPromiseLike)
            ) {
                throw new Error('subscribableOrPromiseLike must be a subscribable or a promise like',);
            }
            const previousValue = previousValues.get(part);
            if (previousValue !== undefined && subscribableOrPromiseLike === previousValue.subscribableOrPromiseLike) {
                return;
            }
            const cb = (value: T) => {
                if (
                    previousValue !== undefined
                && part.value === previousValue.value
                && subscribableOrPromiseLike === previousValue.subscribableOrPromiseLike
                ) {
                    return;
                }
                part.setValue(value);
                part.commit();
                previousValues.set(part, { value, subscribableOrPromiseLike });
            };
            if ('then' in subscribableOrPromiseLike) {
                subscribableOrPromiseLike.then(cb);
                return;
            }
            subscribableOrPromiseLike.subscribe(cb);
        };
    }
);

export {
    subscribe,
};
