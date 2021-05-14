import React, {FunctionComponent} from 'react';
import {GridList, GridListTile} from '@material-ui/core';
import styled from 'styled-components';
import {Photo} from '../../../../api';
import {useDispatch} from 'react-redux';
import {fetchImageExifData} from '../../gallerySlice';

type ImageGridProps = {
    images?: Photo[];
    selectedIndex?: number;
};

const SelectedGridListTitle = styled(GridListTile)`
  border: 1px solid red;
`;


export const ImageGrid: FunctionComponent<ImageGridProps> = ({images = [], selectedIndex}) => {
    const dispatch = useDispatch();

    function handleImageClick(image: Photo) {
        if (image) {
            dispatch(fetchImageExifData(image));
        }
    }

    return (
        <GridList cellHeight={160} cols={3}>
            {
                images.map((image) => {
                    if (selectedIndex === image.id) {
                        return <SelectedGridListTitle key={image.id} cols={1}>
                            <img src={image.thumbnail} alt=""/>
                        </SelectedGridListTitle>
                    } else {
                        return <GridListTile
                            key={image.id}
                            data-testid={image.id}
                            cols={1}
                            onClick={() => handleImageClick(image)}>
                            <img src={image.thumbnail} alt=""/>
                        </GridListTile>
                    }
                })
            }
        </GridList>
    );
}
