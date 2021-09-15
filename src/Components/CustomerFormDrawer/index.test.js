import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import * as reactRedux from 'react-redux';

import CustomerFormDrawer from './';

configure({ adapter: new Adapter() });

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});

describe('Check if component renders properly', () => {
  it('Render visible/opened CustomerFormDrawer without customerData', () => {
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
    const wrapperComponent = mount(
      <CustomerFormDrawer visible customerData={null} onClose={() => {}} />
    );
    expect(wrapperComponent.prop('visible')).toEqual(true);
  });

  /** --------------------- */

  it('Render update CustomerFormDrawer with customerData', () => {
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

    const params = {
      first_name: 'First Name',
      last_name: 'Last Name',
      phone_number: '09171234567',
      email: 'email@domain.com',
      address: 'Address',
      date_of_birth: '1995-07-17',
    };

    const wrapperComponent = mount(
      <CustomerFormDrawer visible customerData={params} onClose={() => {}} />
    );
    expect(wrapperComponent.prop('visible')).toEqual(true);
    expect(wrapperComponent.prop('customerData')).toEqual(params);
    expect(
      wrapperComponent.find('.ant-drawer').hasClass('ant-drawer-open')
    ).toEqual(true);
  });
});
