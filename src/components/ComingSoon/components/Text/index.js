import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { useLoader, useUpdate } from 'react-three-fiber';

function Text({
  children,
  vAlign = 'center',
  hAlign = 'center',
  size = 1,
  color = '#000000',
  ...props
}) {
  const font = useLoader(THREE.FontLoader, '/bold.blob');
  const config = useMemo(
    () => ({
      font,
      size: 40,
      height: 30,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    [font]
  );
  const mesh = useUpdate(
    self => {
      const size = new THREE.Vector3();
      self.geometry.computeBoundingBox();
      self.geometry.boundingBox.getSize(size);
      self.position.x =
        hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x;
      self.position.y =
        vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y;
    },
    [children]
  );
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

Text.defaultProps = {
  children: null,
  color: '#000000',
  hAlign: 'center',
  size: 1,
  vAlign: 'center',
};

export default Text;
