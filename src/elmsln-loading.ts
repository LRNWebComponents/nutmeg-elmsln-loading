import { Nutmeg, Property, html, TemplateResult } from '@nutmeg/element';

export class ElmslnLoading extends Nutmeg.Element {
  @Property() public color: string;
  @Property() public size: string;

  constructor() {
    super();
  }

  /** The component instance has been inserted into the DOM. */
  public connectedCallback() {
    super.connectedCallback();
  }

  /** The component instance has been removed from the DOM. */
  public disconnectedCallback() {
    super.disconnectedCallback()
  }

  /** Watch for changes to these attributes. */
  public static get observedAttributes(): string[] {
    return ['color', 'size'];
  }

  /** Watch for changes to these properties. */
  public static get observedProperties(): string[] {
    return [];
  }

  /** Rerender when the observed attributes change. */
  public attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    super.attributeChangedCallback(name, oldValue, newValue)
  }

  /** Styling for the component. */
  public get styles(): TemplateResult {
    return html`
      <style>
        :host {
          display: block;
          -webkit-animation:spin 1.25s ease-out infinite;
          -moz-animation:spin 1.25s ease-out infinite;
          animation:spin 1.25s ease-out infinite;
          vertical-align: middle;
          width: var(--lrn-icon-width, 24px);
          height: var(--lrn-icon-height, 24px);
          position: relative;
        }
        svg {
          display: block;
          draggable: false;
        }
        .tiny {
          width: 1em;
          height: 1em;
          -webkit-animation:spin .75s ease-out infinite;
          -moz-animation:spin .75s ease-out infinite;
          animation:spin .75s ease-out infinite;
        }
        .small {
          width: 2em;
          height: 2em;
          -webkit-animation:spin 1s ease-out infinite;
          -moz-animation:spin 1s ease-out infinite;
          animation:spin 1s ease-out infinite;
        }
        .medium {
          width: 4em;
          height: 4em;
        }
        .large {
          width: 5em;
          height: 5em;
          -webkit-animation:spin 1.25s ease-out infinite;
          -moz-animation:spin 1.25s ease-out infinite;
          animation:spin 1.25s ease-out infinite;
        }
        .epic {
          width: 25em;
          height: 25em;
          -webkit-animation:spin 2s ease-out infinite;
          -moz-animation:spin 2s ease-out infinite;
          animation:spin 2s ease-out infinite;
        }
        @-moz-keyframes spin { 100% { -moz-transform: rotate(60deg); filter:saturate(10) invert(.9);} }
        @-webkit-keyframes spin { 100% { -webkit-transform: rotate(60deg); filter:saturate(10) invert(.9);} }
        @keyframes spin { 100% { -webkit-transform: rotate(60deg); transform:rotate(60deg);} }
      </style>
    `;
  }

  /** HTML Template for the component. */
  public get template(): TemplateResult {
    return html`
    <svg class="${this.color} ${this.size}">
      <g name="network">
        <path d="M22.6,12.2L24,13c0.4,0.2,0.9,0.2,1.3,0l2.1-1.2c0.4-0.2,0.6-0.6,0.6-1.1V8.3c0-0.5-0.2-0.9-0.6-1.1L25.2,6
          c-0.4-0.2-0.9-0.2-1.3,0l-2.1,1.2c-0.4,0.2-0.6,0.6-0.6,1.1v1.6c0,0.5-0.2,0.9-0.6,1.1l-3,1.8c-0.4,0.2-0.9,0.2-1.3,0l0,0
          c-0.4-0.2-0.6-0.6-0.6-1.1V8c0-0.5,0.2-0.9,0.6-1.1l1.4-0.8c0.4-0.2,0.6-0.6,0.6-1.1V2.6c0-0.5-0.2-0.9-0.6-1.1l-2.1-1.2
          c-0.4-0.2-0.9-0.2-1.3,0l-2.1,1.2c-0.4,0.2-0.6,0.6-0.6,1.1V5c0,0.5,0.2,0.9,0.6,1.1l1.4,0.8c0.4,0.2,0.6,0.6,0.6,1.1v3.7
          c0,0.5-0.2,0.9-0.6,1.1h0c-0.4,0.2-0.9,0.2-1.3,0l-3-1.8C9,10.8,8.7,10.4,8.7,9.9V8.3c0-0.5-0.2-0.9-0.6-1.1L6,6
          C5.6,5.8,5.1,5.8,4.8,6L2.7,7.2C2.3,7.5,2,7.9,2,8.3v2.4c0,0.5,0.2,0.9,0.6,1.1L4.8,13c0.4,0.2,0.9,0.2,1.3,0l1.4-0.8
          c0.4-0.2,0.9-0.2,1.3,0l3,1.8c0.4,0.2,0.6,0.6,0.6,1.1v0c0,0.5-0.2,0.9-0.6,1.1l-3,1.8c-0.4,0.2-0.9,0.2-1.3,0L6,17.1
          c-0.4-0.2-0.9-0.2-1.3,0l-2.1,1.2c-0.4,0.2-0.6,0.6-0.6,1.1v2.4c0,0.5,0.2,0.9,0.6,1.1l2.1,1.2c0.4,0.2,0.9,0.2,1.3,0l2.1-1.2
          c0.4-0.2,0.6-0.6,0.6-1.1v-1.6c0-0.5,0.2-0.9,0.6-1.1l3-1.7c0.4-0.2,0.9-0.2,1.3,0l0,0c0.4,0.2,0.6,0.6,0.6,1.1V22
          c0,0.5-0.2,0.9-0.6,1.1l-1.4,0.8c-0.4,0.2-0.6,0.6-0.6,1.1v2.4c0,0.5,0.2,0.9,0.6,1.1l2.1,1.2c0.4,0.2,0.9,0.2,1.3,0l2.1-1.2
          c0.4-0.2,0.6-0.6,0.6-1.1V25c0-0.5-0.2-0.9-0.6-1.1l-1.4-0.8c-0.4-0.2-0.6-0.6-0.6-1.1v-3.5c0-0.5,0.2-0.9,0.6-1.1l0,0
          c0.4-0.2,0.9-0.2,1.3,0l3,1.7c0.4,0.2,0.6,0.6,0.6,1.1v1.6c0,0.5,0.2,0.9,0.6,1.1l2.1,1.2c0.4,0.2,0.9,0.2,1.3,0l2.1-1.2
          c0.4-0.2,0.6-0.6,0.6-1.1v-2.4c0-0.5-0.2-0.9-0.6-1.1l-2.1-1.2c-0.4-0.2-0.9-0.2-1.3,0l-1.4,0.8c-0.4,0.2-0.9,0.2-1.3,0l-3-1.7
          c-0.4-0.2-0.6-0.6-0.6-1.1v0c0-0.5,0.2-0.9,0.6-1.1l3-1.7C21.7,12,22.2,12,22.6,12.2z M7.4,10.3c0,0.2-0.1,0.5-0.3,0.6l-0.4,0.2
          l-0.9,0.5c-0.2,0.1-0.5,0.1-0.7,0l-1.3-0.7c-0.2-0.1-0.3-0.3-0.3-0.6V8.8c0-0.2,0.1-0.5,0.3-0.6l1.3-0.7c0.2-0.1,0.5-0.1,0.7,0
          L7,8.2c0.2,0.1,0.3,0.3,0.3,0.6v1.1V10.3z M26.6,19.9v1.5c0,0.2-0.1,0.5-0.3,0.6l-1.3,0.7c-0.2,0.1-0.5,0.1-0.7,0L23,22
          c-0.2-0.1-0.3-0.3-0.3-0.6v-1.1v-0.4c0-0.2,0.1-0.5,0.3-0.6l0.4-0.2l0.9-0.5c0.2-0.1,0.5-0.1,0.7,0l1.3,0.7
          C26.4,19.4,26.6,19.6,26.6,19.9z M23,8.2l1.3-0.7c0.2-0.1,0.5-0.1,0.7,0l1.3,0.7c0.2,0.1,0.3,0.3,0.3,0.6v1.5
          c0,0.2-0.1,0.5-0.3,0.6l-1.3,0.7c-0.2,0.1-0.5,0.1-0.7,0l-1-0.6L23,10.9c-0.2-0.1-0.3-0.3-0.3-0.6V9.9V8.8
          C22.6,8.6,22.8,8.3,23,8.2z M13.4,2.5l1.3-0.7c0.2-0.1,0.5-0.1,0.7,0l1.3,0.7C16.8,2.6,17,2.8,17,3.1v1.5c0,0.2-0.1,0.5-0.3,0.6
          l-0.9,0.5l-0.4,0.2c-0.2,0.1-0.5,0.1-0.7,0l-0.4-0.2l-0.9-0.5C13.2,5,13,4.8,13,4.6V3.1C13,2.8,13.2,2.6,13.4,2.5z M7.4,20.3v1.1
          c0,0.2-0.1,0.5-0.3,0.6l-1.3,0.7c-0.2,0.1-0.5,0.1-0.7,0L3.8,22c-0.2-0.1-0.3-0.3-0.3-0.6v-1.5c0-0.2,0.1-0.5,0.3-0.6l1.3-0.7
          c0.2-0.1,0.5-0.1,0.7,0l0.9,0.5L7,19.3c0.2,0.1,0.3,0.3,0.3,0.6V20.3z M16.6,27.5l-1.3,0.7c-0.2,0.1-0.5,0.1-0.7,0l-1.3-0.7
          c-0.2-0.1-0.3-0.3-0.3-0.6v-1.5c0-0.2,0.1-0.5,0.3-0.6l0.9-0.5l0.4-0.2c0.2-0.1,0.5-0.1,0.7,0l0.4,0.2l0.9,0.5
          c0.2,0.1,0.3,0.3,0.3,0.6v1.5C17,27.2,16.8,27.4,16.6,27.5z"/>
      </g>
    </svg>
    `;
  }
}

window.customElements.define('elmsln-loading', ElmslnLoading);
