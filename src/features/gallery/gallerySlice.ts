import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AlbumApi, Artist, Configuration, Photo} from '../../api';
import {IFolder} from './interfaces/i-folder';
import {ISelectedImage} from './interfaces/i-selected-image';
const albumApi = new AlbumApi(
    new Configuration({basePath: 'https://outsystems78.outsystemscloud.com/PhotoAlbum/rest/album'})
);

export type GallerySliceState = {
    folders: IFolder[];
    selectedArtist: Artist | null;
    selectedImage: ISelectedImage;
};

export const fetchFolders = createAsyncThunk(
    'gallery/fetchFolders',
    async () => albumApi.folders()
);

export const fetchFolderContent = createAsyncThunk(
    'gallery/fetchFolderContent',
    async (folderName: string) => albumApi.folder({folderName})
);

export const fetchArtistDetails = createAsyncThunk(
    'gallery/fetchArtistDetails',
    async (artistId: number) => albumApi.artist({artistId})
);

export const fetchImageExifData = createAsyncThunk(
    'gallery/fetchImageExifData',
    async (imageParams: Photo): Promise<ISelectedImage> => {
        //Read EXIF data
        return {...imageParams, xResolution: 0, yResolution: 0};
    }
);

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        folders: [],
        selectedArtist: null,
        selectedImage: {
            id: 0,
            url: '',
            width: 0,
            height: 0,
            xResolution: 0,
            yResolution: 0
        }
    } as GallerySliceState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFolders.fulfilled, (state, action) => {
            state.folders = action.payload;
        });
        builder.addCase(fetchFolderContent.fulfilled, (state, action) => {
            const selectedFolder = state.folders.find((folder) => folder.name === action.payload.name);

            if(selectedFolder) {
                selectedFolder.artists = action.payload.artists;
            }
        });
        builder.addCase(fetchArtistDetails.fulfilled, (state, action) => {
            state.selectedArtist = action.payload;
        });

       builder.addCase(fetchImageExifData.fulfilled, (state, action) => {
            state.selectedImage = action.payload;
        });
    }
})

export default gallerySlice.reducer
