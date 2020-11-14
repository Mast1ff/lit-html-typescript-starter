/**
 * @memo ポリフィル群
 * - core-js/stable lit-htmlなどのブラウザ互換の吸収。読込必須。
 * - regenerator-runtime/runtime 上記同様、読込必須。
 * - intersection-observer IntersectionObserverAPIのポリフィル。使用する場合は読込。
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import 'intersection-observer';

/**
 * @memo lit-htmlライブラリ
 * HTMLのレンダリング用軽量ライブラリ。
 * 各種サンプルを参照
 * - { initTemplatePolyfill } - lit-htmlを仕様する場合に必ず読込と関数の実行をindex.tsの最上部で行うこと。
 */
import { render } from 'lit-html';
import { initTemplatePolyfill } from 'lit-html/polyfills/template_polyfill';
initTemplatePolyfill();

import { listATemplate, listBTemplate } from './_samples/repeat';
import { htmlTemplate } from './_samples/unsafeHTML';
import { styleMapTemplate } from './_samples/styleMap';
import { stringStateTemplate, arrayStateTemplate } from './_samples/withState';

const repeatARoot = document.getElementById('__repeat-a');
const repeatBRoot = document.getElementById('__repeat-b');
const unsafeHTMLRoot = document.getElementById('__unsafe-html');
const styleMapRoot = document.getElementById('__style-map');
const createStateARoot = document.getElementById('__create-state-a');
const createStateBRoot = document.getElementById('__create-state-b');

if (repeatARoot) {
    render(listATemplate, repeatARoot);
}
if (repeatBRoot) {
    render(listBTemplate, repeatBRoot);
}
if (unsafeHTMLRoot) {
    render(htmlTemplate, unsafeHTMLRoot);
}
if (styleMapRoot) {
    render(styleMapTemplate, styleMapRoot);
}
if (createStateARoot) {
    render(stringStateTemplate, createStateARoot);
}
if (createStateBRoot) {
    render(arrayStateTemplate, createStateBRoot);
}
