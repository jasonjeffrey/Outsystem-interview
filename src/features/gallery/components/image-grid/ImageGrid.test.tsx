import {ImageGrid} from './ImageGrid';
import {render, fireEvent} from '@testing-library/react';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe('ImageGrid Component', () => {
    it('RENDERS component without any GridItems', () => {
        const component = <ImageGrid images={[]}/>
        const {asFragment} = render(component);

        expect(asFragment()).toMatchSnapshot();
    });

    it('RENDERS component with 1 GridItem', () => {
        const component = <ImageGrid images={[{id: 0, thumbnail: 'http://example.com/test.jpg'}]}/>
        const {asFragment} = render(component);

        expect(asFragment()).toMatchSnapshot();
    });

    it('RENDERS component with 1 GridItem which is selected', () => {
        const component = <ImageGrid images={[{id: 0, thumbnail: 'http://example.com/test.jpg'}]} selectedIndex={0} />
        const {asFragment} = render(component);

        expect(asFragment()).toMatchSnapshot();
    });
});
