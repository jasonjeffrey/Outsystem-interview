import React, {useEffect} from 'react';
import {Grid,} from '@material-ui/core';
import {ImageGrid} from './components/image-grid/ImageGrid';
import {TreeView} from './components/tree-view/TreeView';
import {fetchFolders, GallerySliceState} from './gallerySlice';
import {useDispatch, useSelector} from 'react-redux';
import {ImageDataTable} from './components/image-data-table/ImageDataTable';
import styled from 'styled-components';

const TreeViewWrapper = styled.div`
  height: 50vh;
  overflow: scroll;
`;

const ImageDataTableWrapper = styled.div`
  height: 50vh;
`;

function Gallery() {
    const dispatch = useDispatch();
    const folders = useSelector((state: {gallery: GallerySliceState}) => state.gallery.folders);
    const artist = useSelector((state: {gallery: GallerySliceState}) => state.gallery.selectedArtist);
    const selectedImage = useSelector((state: {gallery: GallerySliceState}) => state.gallery.selectedImage);

    useEffect(() => {
        dispatch(fetchFolders());
    }, [dispatch]);

    return (
        <Grid container style={{height: '100vh'}}>
            <Grid item xs={9}>
                <h1>{artist?.name}</h1>
                <ImageGrid images={artist?.portfolio} selectedIndex={selectedImage?.id}/>
            </Grid>
            <Grid item xs={3}>
                <TreeViewWrapper>
                    <TreeView folders={folders} />
                </TreeViewWrapper>
                <ImageDataTableWrapper>
                    <ImageDataTable
                        url={selectedImage?.url}
                        width={selectedImage?.width}
                        height={selectedImage?.height}
                        xResolution={selectedImage?.xResolution}
                        yResolution={selectedImage?.yResolution}/>
                </ImageDataTableWrapper>

            </Grid>
        </Grid>
    );
}

export default Gallery;
