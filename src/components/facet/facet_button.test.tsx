/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { render, mount } from 'enzyme';
import { requiredProps } from '../../test';
import { shouldRenderCustomStyles } from '../../test/internal';

import { EuiFacetButton } from './facet_button';
import { EuiIcon } from '../icon';

describe('EuiFacetButton', () => {
  shouldRenderCustomStyles(<EuiFacetButton>Content</EuiFacetButton>);

  test('is rendered', () => {
    const component = render(
      <EuiFacetButton {...requiredProps}>Content</EuiFacetButton>
    );

    expect(component).toMatchSnapshot();
  });

  describe('props', () => {
    describe('isDisabled', () => {
      it('is rendered', () => {
        const component = render(
          <EuiFacetButton
            isDisabled
            quantity={6}
            icon={<EuiIcon type="dot" color="success" />}
          >
            Content
          </EuiFacetButton>
        );

        expect(component).toMatchSnapshot();
      });
    });

    describe('isLoading', () => {
      it('is rendered', () => {
        const component = render(
          <EuiFacetButton isLoading>Content</EuiFacetButton>
        );

        expect(component).toMatchSnapshot();
      });
    });

    describe('isSelected', () => {
      it('is rendered', () => {
        const component = render(
          <EuiFacetButton isSelected>Content</EuiFacetButton>
        );

        expect(component).toMatchSnapshot();
      });
    });

    describe('quantity', () => {
      it('is rendered', () => {
        const component = render(
          <EuiFacetButton quantity={60}>Content</EuiFacetButton>
        );

        expect(component).toMatchSnapshot();
      });
    });

    describe('icon', () => {
      it('is rendered', () => {
        const component = render(
          <EuiFacetButton icon={<EuiIcon type="dot" />}>Content</EuiFacetButton>
        );

        expect(component).toMatchSnapshot();
      });
    });

    describe('onClick', () => {
      it('supports onClick', () => {
        const handler = jest.fn();
        const component = mount(
          <EuiFacetButton onClick={handler}>Content</EuiFacetButton>
        );
        component.find('button').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
    });
  });
});
