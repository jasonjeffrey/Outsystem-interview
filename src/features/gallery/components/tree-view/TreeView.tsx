import React, {FunctionComponent} from 'react';
import {List} from '@material-ui/core';
import {TreeViewItem} from '../tree-view-item/TreeViewItem';
import {IFolder} from '../../interfaces/i-folder';

type TreeViewProps = {
    folders: IFolder[];
}

export const TreeView: FunctionComponent<TreeViewProps> = ({folders}) => {
    return (
    <List>
        {folders.map((folder: IFolder) => (<TreeViewItem key={folder.name} title={folder.name} artists={folder.artists}/>))}
    </List>
)};
