import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={0}>
        <Avatar />
      </group>
      <ambientLight intensity={2} />
    </>
  );
};
export default Experience;
