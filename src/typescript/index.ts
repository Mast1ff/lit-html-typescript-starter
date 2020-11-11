import { html, render } from 'lit-html';

const myTemplate = html`
    <div class="test">Hello world</div>
`;

const root = document.getElementById('__surface');

if (root) {
    render(myTemplate, root);
}
