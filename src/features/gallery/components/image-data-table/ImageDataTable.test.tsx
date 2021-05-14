import {render} from '@testing-library/react';
import {ImageDataTable} from './ImageDataTable';

describe('ImageDataTable Component', () => {
    it('RENDERS component without any filled props', () => {
        const component = <ImageDataTable />
        const {asFragment} = render(component);

        expect(asFragment()).toMatchSnapshot();
    });

    it('RENDERS component with filled props', () => {
        const component = <ImageDataTable  url={'http://example.com'}
                                           height={768}
                                           width={1080}
                                           xResolution={72}
                                           yResolution={72}/>
        const {asFragment} = render(component);

        expect(asFragment()).toMatchSnapshot();
    });
});
