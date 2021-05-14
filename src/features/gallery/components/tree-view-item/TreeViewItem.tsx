import React, {FunctionComponent, Fragment, useState} from 'react';
import {Collapse, List, ListItem, ListItemText} from '@material-ui/core';
import {ExpandLess, ExpandMore} from '@material-ui/icons';
import {ArtistSummary} from '../../../../api';
import {useDispatch} from 'react-redux';
import {fetchArtistDetails, fetchFolderContent} from '../../gallerySlice';

type TreeViewItemProps = {
    title?: string;
    artists?: ArtistSummary[];
}

export const TreeViewItem: FunctionComponent<TreeViewItemProps> = ({title = '',artists = []}) => {
    const [isFolderOpen, setIsFolderOpen] = useState(false);
    const dispatch = useDispatch();
    const handleFolderClick = () => {
        setIsFolderOpen(!isFolderOpen);
        dispatch(fetchFolderContent(title));
    };
    const handleArtistClick = (id: number | undefined) => {
        if(id) {
            dispatch(fetchArtistDetails(id));
        }
    }

    return (
        <Fragment>
            <ListItem
                button
                data-testid={title}
                onClick={handleFolderClick}>
                <ListItemText primary={title}/>
                {isFolderOpen ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={isFolderOpen} unmountOnExit>
                <List>
                    {artists.map((artist: ArtistSummary) => (
                        <ListItem key={artist.id} button onClick={() => handleArtistClick(artist.id)}>
                            <ListItemText primary={`${artist.name} (${artist.portfolioSize} photos)`} />
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </Fragment>
    );
}
