import React from 'react';
import PropTypes from 'prop-types';

import { isNumber, makeUniqueId } from '../utils';

function Star({ id, full, config = {} }) {
  const fullColor = config.fullColor || '#ffcf00';
  const emptyColor = config.emptyColor || '#7f7f7f';
  // check user size input
  const width = `${config.size && isNumber(config.size) ? config.size : 20}px`;
  const height = width;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="249.748"
      viewBox="0 -10 187.673 179.503"
      height="239.338"
      style={{ width, height, marginRight: 2 }}
    >
      {/* if not whole number, create gradient */}
      {full !== 1 && full !== 0 && (
        <defs>
          <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: fullColor, stopOpacity: 1 }}
            />
            <stop
              offset={`${full * 100}%`}
              style={{ stopColor: fullColor, stopOpacity: 1 }}
            />
            <stop
              offset={`${full * 100}%`}
              style={{ stopColor: emptyColor, stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      )}
      <path
        fill={
          full === 1 ? fullColor : full === 0 ? emptyColor : `url(#grad-${id})`
        }
        d="M187.183 57.47a9.955 9.955 0
    00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972
    9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578
    6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0
    003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0
    005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979
    9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0
    002.925-10.604zm0 0"
      />
    </svg>
  );
}

export default function StarRating({ rating, config = {}, style = {} }) {
  const id = makeUniqueId();
  // number of full, 'half' and empty stars
  const full = Math.floor(rating);
  const half = Math.round((rating - full) * 100) / 100;
  const empty = Math.floor(5 - rating);
  // partial arrays
  const fullArr = Array(full).fill(1);
  const halfArr = half !== 0 ? [half] : [];
  const emptyArr = Array(empty).fill(0);
  // array of star-to-be numbers
  const stars = fullArr.concat(halfArr).concat(emptyArr);
  // font size of rating text will be half of the star size, with a min value of 16px
  let fontSize = config.size && isNumber(config.size) ? config.size : 20;
  fontSize = fontSize / 2 < 16 ? 16 : fontSize / 2;
  // TODO do all this array thing a litter more efficiently

  return (
    <div style={{ display: 'flex', marginBottom: 14, ...style }}>
      {stars.map((star) => (
        <Star id={id} full={star} config={config} />
      ))}
      {config.showText && (
        <span
          style={{
            fontSize,
            color: '#7f7f7f',
            lineHeight: 1,
            alignSelf: 'center',
            marginLeft: 8,
          }}
        >
          {rating}
        </span>
      )}
    </div>
  );
}

Star.propTypes = {
  config: PropTypes.object,
  full: PropTypes.number,
  id: PropTypes.string,
};

StarRating.propTypes = {
  config: PropTypes.object,
  rating: PropTypes.number,
  style: PropTypes.object,
};
