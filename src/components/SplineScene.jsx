import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene = ({onLoaded}) => {

    useEffect(() => {
        // Simulate spline component loading
        const timer = setTimeout(() => {
          if (onLoaded) {
            onLoaded();
          }
        }, 3000); // Adjust this timing based on your actual loading time
    
        return () => clearTimeout(timer);
      }, [onLoaded]);

      
    return (
      //   <div className="spline-background">
      //       <Spline
      //   scene="https://prod.spline.design/4gEOJhKN116u6bHE/scene.splinecode" 
      // />
      //   </div>
        <div className="spline-background">
        <Spline
    scene="https://prod.spline.design/8ciRUqlhwaU5bKsp/scene.splinecode" 
  />
    </div>
    );
};

export default SplineScene;
