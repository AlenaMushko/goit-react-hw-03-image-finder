// import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ items }) => {
  return items.map(({ id, webformatURL, tags }) => {
    <li className="gallery-item" key={id}>
      <img src={webformatURL} alt={tags} />
    </li>;
  });
};
