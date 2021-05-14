import {fireEvent, render} from '@testing-library/react';
import {TreeViewItem} from './TreeViewItem';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => jest.fn()
}));

describe('TreeViewItem', () => {
    it('RENDERS component without any children', () => {
        const component = <TreeViewItem title={'test'} artists={[]}/>
        const {asFragment} = render(component);

        expect(asFragment()).toMatchSnapshot();
    });

    it('RENDERS component with 1 Child', () => {
        const component = <TreeViewItem title={'test'} artists={[{id: 0, name: 'testArtist', portfolioSize: 1}]}/>
        const {asFragment, getByTestId} = render(component);

        fireEvent.click(getByTestId('test'));

        expect(asFragment()).toMatchSnapshot();
    });
});
