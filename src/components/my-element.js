import {
  LitElement,
  customElement,
  property,
  html,
} from '@polymer/lit-element';

@customElement('my-element')
// eslint-disable-next-line no-unused-vars
class MyElement extends LitElement {
  @property({ type: String })
  msg = 'world';

  render() {
    const { msg } = this;

    return html`
      <style>
        h1 {
          color: green;
        }
      </style>

      <h1>Hello ${msg}!</h1>
    `;
  }
}
