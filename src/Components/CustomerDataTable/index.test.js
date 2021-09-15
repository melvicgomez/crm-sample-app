import React from 'react';
import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux';

import CustomerDataTable from './';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});

describe('Render CustomerDataTable component', () => {
  test('Check if component render successfully', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    useSelectorMock.mockReturnValue({});
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    expect(dummyDispatch).not.toHaveBeenCalled();

    render(<CustomerDataTable />); // render the page without crashing
  });
});
