import React from 'react';

interface ImageDownloadLinkProps {
  thumbnail: string;
  fullRes: string;
  alt?: string;
}

const ImageDownloadLink: React.FC<ImageDownloadLinkProps> = ({ thumbnail, fullRes, alt }) => {
  return (
    <div className="text-center my-4">
      <a href={fullRes} download>
        <img
          src={thumbnail}
          alt={alt || 'Image preview'}
          style={{
            maxWidth: '240px',
            height: 'auto',
            cursor: 'pointer',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease-in-out',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </a>
      <p style={{ fontSize: '0.9rem', color: '#555' }}>
        Click the image to download full-resolution PNG
      </p>
    </div>
  );
};

export default ImageDownloadLink;

