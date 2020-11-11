import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { html, render } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { initTemplatePolyfill } from 'lit-html/polyfills/template_polyfill';
import * as rxjs from 'rxjs';

import { subscribe } from './_modules/Subscribe';
import Button from './_components/Button';

initTemplatePolyfill();

const msState = {
    sw: false,
};
const message = new rxjs.BehaviorSubject('Hello world!!');
const click = <T>(store: rxjs.BehaviorSubject<T>) => {
    return (next: () => T) => {
        return () => {
            return store.next(next());
        };
    };
};
const buttonClick = click(message);
const mainTemplate = html`
    <div class="main_container">
    <h1>
        ${subscribe(message)}
    </h1>
    ${Button(
        buttonClick(() => {
            msState.sw = !msState.sw;
            return msState.sw ? 'Hello world??' : 'Hello world!!';
        }),
        'click me!!',
        'button'
    )}
    </div>
`;

type TList = {
    name: string
    label: string
    path: string
    newTab?: boolean
}[]

const list: TList = [
    {
        name: 'ほーむ',
        label: 'home',
        path: '/',
    },
    {
        name: 'ぎっとはぶ',
        label: 'Github',
        path: 'https://github.com/NSI-Co-Ltd/lit-html-typescript',
        newTab: true,
    },
];
const headerTemplate = html`
    <header class="header">
    <ul>
    ${repeat(
        list,
        (item) => {
            return item.label;
        },
        (item) => {
            return html`<li>
                            <a
                                href=${item.path}
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
    </header>
`;

const headerRoot = document.getElementById('__header');
const mainRoot = document.getElementById('__main');

if (mainRoot) {
    render(mainTemplate, mainRoot);
}

if (headerRoot) {
    render(headerTemplate, headerRoot);
}
