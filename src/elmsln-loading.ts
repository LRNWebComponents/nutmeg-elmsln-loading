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
          box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0 ,0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
        }

        :host([hidden]) {
          display: none;
        }

        .content {
          background-color: var(--elmsln-loading-background-color, #FAFAFA);
          color: #212121;
          padding: 16px;
        }
      </style>
    `;
  }

  /** HTML Template for the component. */
  public get template(): TemplateResult {
    return html`
      <div class="content">
        Welcome to &lt;elmsln-loading&gt;

        <ul>
          <li>color: ${this.color}</li>
          <li>size: ${this.size}</li>
        </ul>

        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define('elmsln-loading', ElmslnLoading);
