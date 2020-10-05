import React, { useRef } from 'react';
// import PropTypes from 'prop-types';

import Text from '../Text';

import { useFrame } from 'react-three-fiber';

function Jumbo() {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z =
        Math.sin(clock.getElapsedTime()) * 0.3)
  );
  const x = 16;
  return (
    <group ref={ref}>
      <Text hAlign="left" position={[x, 4.2, 0]} children="SOMETHING" />
      <Text hAlign="left" position={[x - 8.5, 0, 0]} children="NEW" />
      <Text hAlign="left" position={[x - 3.5, -4.2, 0]} children="COMING" />
      <Text hAlign="left" position={[x - 6.3, -8.4, 0]} children="SOON" />
    </group>
  );
}

Jumbo.propTypes = {};

Jumbo.defaultProps = {};

export default Jumbo;
