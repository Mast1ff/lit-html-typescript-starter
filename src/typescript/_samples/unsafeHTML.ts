import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

/**
 * {@link https://lit-html.polymer-jp.org/guide/template-reference#unsafehtml}
 * @function unsafeHTML
 * @param {string} htmlString 文字列をHTMLとしてレンダリングします。
 *
 * @description
 *  - 重大な脆弱性を持つ可能性があるため、極力使用しないこと。
 */

//

/**
 * @example
 */
const htmlString = '<div class="template_html">生のHTMLになります</div>';
const htmlTemplate = html`
    ${unsafeHTML(htmlString)}
`;

export { htmlTemplate };
