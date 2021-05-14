import React from 'react';
import { render} from '@testing-library/react';
import Gallery from './Gallery';

jest.mock('react-redux', () => ({
    useSelector: () => [],
    useDispatch: () => jest.fn()
}));

describe("Gallery Feature", () => {
    it('RENDER Gallery Component', () => {
        const component = <Gallery/>
        const {asFragment} = render(component);

        expect(asFragment()).toMatchSnapshot();
    });
})
