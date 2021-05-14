import React, {FunctionComponent} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableRow} from '@material-ui/core';

type ImageDataTableProps = {
    url?: string;
    width?: number;
    height?: number;
    xResolution?: number;
    yResolution?: number;
}

export const ImageDataTable: FunctionComponent<ImageDataTableProps> = ({url, width, height, xResolution, yResolution}) => (
    <TableContainer>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>Url</TableCell>
                    <TableCell>{url}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Width</TableCell>
                    <TableCell>{width}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Height</TableCell>
                    <TableCell>{height}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>XResolution</TableCell>
                    <TableCell>{xResolution}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>YResolution</TableCell>
                    <TableCell>{yResolution}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
);
