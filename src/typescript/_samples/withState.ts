import { html, TemplateResult } from 'lit-html';
import { createState } from '../_modules/createState';

/**
 * @function createState
 * @param {any} initialState 一定のルールの型を持つstateの初期値
 * @return {function} state 値の変更を購読したstate
 * @return {function} dispatchState 値を変更するアクション
 *
 * @description
 *  - 値の変化によって再レンダリングを引き起こしたい場合に使用します。
 *  - 引数に指定した型がstateの型として決まります。
 *  - 型の更新は、dispatchStateを用いてのみ行われます。
 *  - 中身が配列や連想配列の場合も、それをもとに作成したテンプレートをstateに持たせることで、更新を検知することができます。
 */

/**
 * @example string型
 */

const [stringState, setStringState] = createState('初期値です。');
const handleStringChange = () => {
    setStringState('更新されました!');
};
const stringStateTemplate = html`
    <div class="template_with-state">
        <p>${stringState}</p>
        <button @click=${handleStringChange}>値を更新します。</button>
    </div>
`;

/**
 * @example array型
 */
const initialArrayState = ['つよし', 'たかし', 'たけし'];
const createStringArray = (array: string[]) => {
    const _array: TemplateResult[] = [];
    array.forEach(
        (v) => {
            _array.push(html`<p>${v}</p>`);
        }
    );
    return _array;
};
const renderArray = createStringArray(initialArrayState);
const [arrayState, setArrayState] = createState(renderArray);
const handlePushState = (): void => {
    const _array = [
        ...renderArray,
        html`${'かつし'}`,
    ];
    setArrayState(_array);
};
const arrayStateTemplate = html`
    <div class="template_with-state">
        <div class="array">${arrayState}</div>
        <button @click=${handlePushState}>配列を追加します。</button>
    </div>
`;

export {
    stringStateTemplate,
    arrayStateTemplate,
};
