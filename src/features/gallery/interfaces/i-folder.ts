import {ArtistSummary, FolderSummary} from '../../../api';

export interface IFolder extends FolderSummary {
    artists?: ArtistSummary[]
}
