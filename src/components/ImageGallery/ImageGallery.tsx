// import style from './ImageGallery.module.css';
import { FC } from 'react';
import { Image } from '../../types';
import ImageCard from '../ImageCard/ImageCard';

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (likes: number, author: string, srcModal: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul>
      {images.map(image => {
        return (
          <li key={image.id}>
            <ImageCard
              likes={image.likes}
              author={image.user.name}
              srcModal={image.urls.regular}
              alt={image.alt_description}
              srcSmall={image.urls.small}
              onImageClick={onImageClick}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
