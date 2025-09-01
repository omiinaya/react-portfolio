import React from 'react';
import { useData } from '../contexts/DataContext';

const ApproximateMap: React.FC = () => {
  const { profile } = useData();

  // Miami area coordinates for approximate location
  const lat = 25.7617;
  const lng = -80.1918;
  const zoom = 11;

  return (
    <div className="map-container">
      <div className="openstreetmap-frame">
        <iframe
          width="100%"
          height="300"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.1}%2C${lat-0.1}%2C${lng+0.1}%2C${lat+0.1}&layer=mapnik&marker=${lat}%2C${lng}`}
          title="Approximate Location Map"
        />
      </div>
      <div className="map-disclaimer">
        <small>Approximate location in {profile.basics.location}</small>
      </div>
      <br />
      <small>
        <a
          href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          View Larger Map
        </a>
      </small>
    </div>
  );
};

export default ApproximateMap;