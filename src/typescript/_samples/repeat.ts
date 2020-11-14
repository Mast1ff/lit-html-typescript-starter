import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';

/**
 * {@link https://lit-html.polymer-jp.org/guide/template-reference#repeat}
 * @function repeat
 * @param {array} items レンダリングをする配列
 * @param {function | htmlTemplate} keyFnOrTemplate 固有のキーを返す関数またはテンプレート
 * @param {function | undefined} template テンプレートまたはundefined
 *
 * @description
 *  - 純粋な配列の場合、itemsとtemplateだけ渡せばOK
 *  - 連想配列の場合、固有のキーを渡す必要があるため、第3引数まで使用する。
 */

//

/**
 * @example 純粋配列
 */
const listA = ['リンゴ', 'バナナ', 'メロン'];
const listATemplate = html`
    <ul class="template_list-a">
    ${repeat(
        listA,
        (item) => {
            return html`
                <li>${item}</li>
            `;
        }
    )}
    </ul>
`;

/**
 * @example 連想配列
 */
type ListTypes = {
    name: string
    label: string
    path: string
    newTab?: boolean
}

const listB: ListTypes[] = [
    {
        name: 'Home',
        label: 'home',
        path: '/',
    },
    {
        name: 'Github',
        label: 'github',
        path: 'https://github.com/NSI-Co-Ltd/lit-html-typescript',
        newTab: true,
    },
];
const listBTemplate = html`
    <ul class="template_list-b">
    ${repeat(
        listB,
        (item) => {
            return item.label;
        },
        (item) => {
            return html`
                <li>
                    <a
                        href=${item.path}
                        aria-label=${item.label}
                        target=${item.newTab ? '_blank' : ''}
                        rel=${item.newTab ? 'noopener noreferrer' : ''}
                    >
                        ${item.name}
                    </a>
                </li>
            `;
        }
    )}
    </ul>
`;

export { listATemplate, listBTemplate };
