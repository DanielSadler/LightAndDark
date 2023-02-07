/// <reference types="cypress" />
import { mount } from 'cypress/react18';
import { setGlobalConfig } from '@storybook/testing-react';
import * as sbPreview from '../../.storybook/preview';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);

setGlobalConfig(sbPreview);
