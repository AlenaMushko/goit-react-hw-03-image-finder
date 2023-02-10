// import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
export const ImageGallery = ({ items }) => {
  return (
    <ul className="gallery">
      <ImageGalleryItem items={items} />
    </ul>
  );
};
