import {Photo} from '../../../api';

export interface ISelectedImage extends Photo {
    xResolution: number;
    yResolution: number;
}
