import React, { useLayoutEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { extend, useLoader } from '@react-three/fiber';

extend({ TextGeometry });

function Text({
  children,
  vAlign = 'center',
  hAlign = 'center',
  size = 1,
  color = '#000000',
  ...props
}) {
  const font = useLoader(FontLoader, '/bold.blob');
  const config = useMemo(
    () => ({
      font,
      size: 40,
      depth: 30,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    [font]
  );
  const mesh = useRef();
  useLayoutEffect(() => {
    const self = mesh.current;
    const bounds = new THREE.Vector3();
    self.geometry.computeBoundingBox();
    self.geometry.boundingBox.getSize(bounds);
    self.position.x =
      hAlign === 'center' ? -bounds.x / 2 : hAlign === 'right' ? 0 : -bounds.x;
    self.position.y =
      vAlign === 'center' ? -bounds.y / 2 : vAlign === 'top' ? 0 : -bounds.y;
  }, [children, hAlign, vAlign]);
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh ref={mesh}>
        <textGeometry attach="geometry" args={[children, config]} />
        <meshNormalMaterial attach="material" />
      </mesh>
    </group>
  );
}

Text.propTypes = {
  children: PropTypes.any.isRequired,
  vAlign: PropTypes.string,
  hAlign: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Text;
