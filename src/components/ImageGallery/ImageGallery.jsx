import React from 'react';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import { Item } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, ...otherProps }) => {
    return (
        <Gallery>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => {
                return (
                    <Item
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        tags={tags}
                        {...otherProps}
                    />
                );
            })};
        </Gallery>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })
    ),
};