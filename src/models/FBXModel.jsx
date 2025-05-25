import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const FBXModel = ({ path }) => {
  const fbx = useLoader(FBXLoader, path);
  const modelRef = useRef();

  useEffect(() => {
    fbx.scale.set(0.01, 0.01, 0.01); // Adjust as needed
  }, [fbx]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <primitive object={fbx} ref={modelRef} />;
};

export default FBXModel;
