import 'mocha';
import { expect } from 'chai';
import 'karma-fixture';

describe('<elmsln-loading>', () => {
  let component;
  let fixturePath = 'elmsln-loading.fixture.html';
  const FIXTURES = {
    DEFAULT: 0,
    SLOT: 1,
    STYLE: 2,
    ATTRIBUTES: 3,
    PROPERTIES: 4,
  };
  const DEFAULTS = {
    BOOLEAN: true,
    NUMBER: 42,
    STRING: 'Pickle',
    OBJECT: {
      foo: 'bar',
    },
  }

  before(() => {
    fixture.setBase('test/fixture')
  });

  afterEach(() => {
    fixture.cleanup()
  });

  describe('slot', () => {
    beforeEach(() => {
      component = fixture.load(fixturePath)[FIXTURES.SLOT];
    });

    it('is rendered', () => {
      // Firefox has different output so testing for inclusion instead of exact match.
      const slot = component.shadowRoot.querySelector('slot');
      expect(slot.assignedNodes()[0].wholeText).to.include(DEFAULTS.STRING);
      // TODO: Switch to simpler test when Firefox is no longer polyfilled.
      // expect(component.innerText).equal('Cat');
    });
  });

  describe('--elmsln-loading-background-color', () => {
    describe('with default', () => {
      beforeEach(() => {
        component = fixture.load(fixturePath)[FIXTURES.SLOT];
      });

      it('is set', () => {
        expect(getComputedStyle(component.shadowRoot.querySelector('.content')).backgroundColor).equal('rgb(250, 250, 250)');
      });
    });

    describe('with outside value', () => {
      beforeEach(() => {
        component = fixture.load(fixturePath)[FIXTURES.STYLE].querySelector('elmsln-loading');
      });

      it('is set blue', () => {
        expect(getComputedStyle(component.shadowRoot.querySelector('.content')).backgroundColor).equal('rgb(3, 169, 244)');
      });
    });
  });

  describe('#color', () => {
    beforeEach(() => {
      component = fixture.load(fixturePath)[FIXTURES.DEFAULT];
    });

    describe('as property', () => {
      describe('when defined', () => {
        beforeEach(() => {
          component.color = DEFAULTS.STRING;
        });

        it('is gettable', () => {
          expect(component.color).equal(DEFAULTS.STRING);
        });

        it('is reflected to attribute', () => {
          expect(component.getAttribute('color')).equal(DEFAULTS.STRING);
        });

        it('is rendered in shadowRoot', () => {
          expect(component.shadowRoot.querySelector('.content').innerText).to.include(`color: ${DEFAULTS.STRING}`);
        });
      });

      describe('when undefined', () => {
        beforeEach(() => {
          component.color = null;
        });

        it('is gettable', () => {
          expect(component.color).equal(null);
        });

        it('is not reflected to attribute', () => {
          expect(component.hasAttribute('color')).to.be.false;
        });

        it('is not rendered in shadowRoot', () => {
          expect(component.shadowRoot.querySelector('.content').innerText).to.not.include(`color: ${DEFAULTS.NUMBER}`);
        });
      });
    });

    describe('as attribute', () => {
      describe('when defined', () => {
        beforeEach(() => {
          component.setAttribute('color', DEFAULTS.STRING);
        });

        it('is gettable', () => {
          expect(component.color).equal(DEFAULTS.STRING);
        });

        it('is reflected to attribute', () => {
          expect(component.getAttribute('color')).equal(DEFAULTS.STRING);
        });

        it('is rendered in shadowRoot', () => {
          expect(component.shadowRoot.querySelector('.content').innerText).to.include(`color: ${DEFAULTS.STRING}`);
        });
      });

      describe('when undefined', () => {
        beforeEach(() => {
          component.removeAttribute('color');
        });

        it('is gettable', () => {
          expect(component.color).equal(null);
        });

        it('is not reflected to attribute', () => {
          expect(component.hasAttribute('color')).to.be.false;
        });

        it('is not rendered in shadowRoot', () => {
          expect(component.shadowRoot.querySelector('.content').innerText).to.not.include(`color: ${DEFAULTS.NUMBER}`);
        });
      });
    });
  });

  describe('#size', () => {
    beforeEach(() => {
      component = fixture.load(fixturePath)[FIXTURES.DEFAULT];
    });

    describe('as property', () => {
      describe('when defined', () => {
        beforeEach(() => {
          component.size = DEFAULTS.STRING;
        });

        it('is gettable', () => {
          expect(component.size).equal(DEFAULTS.STRING);
        });

        it('is reflected to attribute', () => {
          expect(component.getAttribute('size')).equal(DEFAULTS.STRING);
        });

        it('is rendered in shadowRoot', () => {
          expect(component.shadowRoot.querySelector('.content').innerText).to.include(`size: ${DEFAULTS.STRING}`);
        });
      });

      describe('when undefined', () => {
        beforeEach(() => {
          component.size = null;
        });

        it('is gettable', () => {
          expect(component.size).equal(null);
        });

        it('is not reflected to attribute', () => {
          expect(component.hasAttribute('size')).to.be.false;
        });

        it('is not rendered in shadowRoot', () => {
          expect(component.shadowRoot.querySelector('.content').innerText).to.not.include(`size: ${DEFAULTS.NUMBER}`);
        });
      });
    });

    describe('as attribute', () => {
      describe('when defined', () => {
        beforeEach(() => {
          component.setAttribute('size', DEFAULTS.STRING);
        });

        it('is gettable', () => {
          expect(component.size).equal(DEFAULTS.STRING);
        });

        it('is reflected to attribute', () => {
          expect(component.getAttribute('size')).equal(DEFAULTS.STRING);
        });

        it('is rendered in shadowRoot', () => {
          expect(component.shadowRoot.querySelector('.content').innerText).to.include(`size: ${DEFAULTS.STRING}`);
        });
      });

      describe('when undefined', () => {
        beforeEach(() => {
          component.removeAttribute('size');
        });

        it('is gettable', () => {
          expect(component.size).equal(null);
        });

        it('is not reflected to attribute', () => {
          expect(component.hasAttribute('size')).to.be.false;
        });

        it('is not rendered in shadowRoot', () => {
          expect(component.shadowRoot.querySelector('.content').innerText).to.not.include(`size: ${DEFAULTS.NUMBER}`);
        });
      });
    });
  });

});
