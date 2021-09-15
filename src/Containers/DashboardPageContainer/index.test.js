import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';

import DashboardPageContainer from './';
import CustomerDataTable from '../../Components/CustomerDataTable';
configure({ adapter: new Adapter() });

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});

describe('Render Dashboard Page', () => {
  test('Check if text is in the page document', () => {
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

    render(<DashboardPageContainer />); // render the page without crashing
    const linkElement = screen.getByText('CRM APP 1.0.0');
    expect(linkElement).toBeInTheDocument();
  });

  test('Check if CustomerFormDrawer rendered inside the container', () => {
    const wrapper = shallow(<DashboardPageContainer />);
    expect(wrapper.find(CustomerDataTable).length).toEqual(1);
    // expect(wrapper.find(CustomerFormDrawer).length).toEqual(0);
    // CustomerFormDrawer is not available unless user click the add new customer button or the row in the data table.
  });
});
