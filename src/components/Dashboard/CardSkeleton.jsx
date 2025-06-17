import React from 'react';
import ContentLoader from 'react-content-loader';

const CardSkeleton = () => (
     <ContentLoader
          speed={0}
          width="100%"
          height={100}
          viewBox="0 0 400 100"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
     >
          <rect x="10" y="15" rx="4" ry="4" width="120" height="15" />
          <rect x="10" y="40" rx="4" ry="4" width="180" height="25" />
     </ContentLoader>
);

export default CardSkeleton;
