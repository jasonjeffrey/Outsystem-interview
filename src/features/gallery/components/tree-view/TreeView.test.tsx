import {render} from '@testing-library/react';
import {TreeView} from './TreeView';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe('TreeView Component', () => {
    it('RENDERS component without any TreeViewItems', () => {
        const component = <TreeView folders={[]}/>
        const {asFragment} = render(component);

        expect(asFragment()).toMatchSnapshot();
    });

    it('RENDERS component with 1 TreeViewItem', () => {
        const component = <TreeView folders={[{name: 'test', artists: []}]}/>
        const {asFragment} = render(component);

        expect(asFragment()).toMatchSnapshot();
    });
});
