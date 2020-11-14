import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map';

/**
 * {@link https://lit-html.polymer-jp.org/guide/template-reference#stylemap}
 * @function styleMap
 * @param {object} styleMap キャメルケース記述のキーを持ったstylemap
 *
 * @description
 * 複数のstyleを一定のルールで定義したい場合などに使用します。
 */

//

/**
 * @example
 */
type TStyleMap = {
    backgroundColor: string
    color: string
}
const styleA: TStyleMap = {
    backgroundColor: 'red',
    color: 'white',
};
const styleB: TStyleMap = {
    backgroundColor: 'blue',
    color: 'gray',
};
const styleMapTemplate = html`
    <div class="template_style-map" style=${styleMap(styleA)}>Style A</div>
    <div class="template_style-map" style=${styleMap(styleB)}>Style B</div>
`;

export { styleMapTemplate };
