import { html, TemplateResult } from 'lit-html';

const Button = (
    handleClick: (e: Event) => void,
    text?: string,
    className?: string
): TemplateResult => {
    return html`
    <button class=${className} @click=${handleClick}>${text}</button>
`;
};

export default Button;
