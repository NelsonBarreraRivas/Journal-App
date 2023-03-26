import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { FC, memo } from 'react';

interface Props{
    imgUrls: string[]
}

export const ImageGallery: FC<Props> = memo(( { imgUrls = [] } ) => {

    return (
        <ImageList
            sx={{
                width: '100%',
                height: 500,
                '&::-webkit-scrollbar': {
                    width: '0.39rem',
                    backgroundColor: 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#55555580',
                    borderRadius: 3
                }
            }}
            cols={4} rowHeight={200}>
            {imgUrls?.map(( image ) => (
                <ImageListItem key={image}>
                    <img
                        src={`${image}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={'Imagen de la nota'}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
})
