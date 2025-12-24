import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Shape } from 'three';

interface House3DProps {
  type: 'small' | 'medium' | 'large';
}

const ClassicAFrame: React.FC<{ type: 'small' | 'medium' | 'large'; width: number; depth: number; height: number }> = ({ type, width, depth, height }) => {
  const roofAngle = Math.atan2(height, width / 2);
  const roofLength = Math.sqrt(Math.pow(height, 2) + Math.pow(width / 2, 2));
  const roofThickness = 0.2;
  const overhang = 0.6; 

  // Optimize shape creation
  const triangleShape = useMemo(() => {
    const shape = new Shape();
    shape.moveTo(-width / 2 + 0.2, 0);
    shape.lineTo(width / 2 - 0.2, 0);
    shape.lineTo(0, height - 0.2);
    shape.lineTo(-width / 2 + 0.2, 0);
    return shape;
  }, [width, height]);

  const isLarge = type === 'large';
  const isMedium = type === 'medium';

  return (
    <group position={[0, 0, 0]}>
      {/* Interior Warm Light */}
      <pointLight position={[0, height * 0.4, 0]} intensity={2} distance={10} color="#ffaa55" castShadow />

      {/* --- ROOF STRUCTURE --- */}
      {/* Left Roof Panel */}
      <mesh 
        position={[-width / 4, height / 2, 0]} 
        rotation={[0, 0, roofAngle]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[roofLength + 0.4, roofThickness, depth + overhang * 2]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.3} />
      </mesh>

      {/* Right Roof Panel */}
      <mesh 
        position={[width / 4, height / 2, 0]} 
        rotation={[0, 0, -roofAngle]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[roofLength + 0.4, roofThickness, depth + overhang * 2]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.3} />
      </mesh>

      {/* --- UNIQUE FEATURES BASED ON TYPE --- */}
      
      {/* MEDIUM: Skylight (Krovni prozor) on Right Roof */}
      {isMedium && (
        <group position={[width / 4 + 0.2, height / 2 + 0.5, 0.5]} rotation={[0, 0, -roofAngle]}>
          <mesh castShadow>
             <boxGeometry args={[1.5, 0.3, 1.5]} />
             <meshStandardMaterial color="#222" />
          </mesh>
          <mesh position={[0, 0.16, 0]} rotation={[-Math.PI/2, 0, 0]}>
             <planeGeometry args={[1.3, 1.3]} />
             <meshStandardMaterial color="#aaddff" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      )}

      {/* LARGE: Side Annex (Bočno proširenje) */}
      {isLarge && (
        <group position={[width/2 + 1, 1.5, -1]}>
          {/* Annex Body */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[2.5, 3, 4]} />
            <meshStandardMaterial color="#262626" /> 
          </mesh>
          {/* Annex Roof (Flat) */}
          <mesh position={[0, 1.55, 0]} castShadow>
            <boxGeometry args={[2.7, 0.1, 4.2]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          {/* Annex Window */}
          <mesh position={[1.26, 0.5, 0]} rotation={[0, Math.PI/2, 0]}>
             <planeGeometry args={[2, 1.5]} />
             <meshStandardMaterial color="#aaddff" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      )}

      {/* --- FRAMING / BEAMS --- */}
      <mesh position={[-width / 4, height / 2, depth / 2]} rotation={[0, 0, roofAngle]} castShadow>
        <boxGeometry args={[roofLength, 0.25, 0.15]} />
        <meshStandardMaterial color="#6b412b" roughness={0.9} />
      </mesh>
      <mesh position={[width / 4, height / 2, depth / 2]} rotation={[0, 0, -roofAngle]} castShadow>
        <boxGeometry args={[roofLength, 0.25, 0.15]} />
        <meshStandardMaterial color="#6b412b" roughness={0.9} />
      </mesh>

      {/* --- INTERIOR / FACADE --- */}
      {/* Glass Facade */}
      <mesh position={[0, 0, depth / 2 - 0.1]}>
        <shapeGeometry args={[triangleShape]} />
        <meshPhysicalMaterial 
          color="#aaddff" 
          metalness={0.9}
          roughness={0.05}
          transmission={0.5} 
          thickness={0.5}
          opacity={0.6}
          transparent
        />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 0, -depth / 2 + 0.1]} rotation={[0, Math.PI, 0]} receiveShadow>
        <shapeGeometry args={[triangleShape]} />
        <meshStandardMaterial color="#3e2216" roughness={0.8} />
      </mesh>

      {/* Loft Floor */}
      <mesh position={[0, height * 0.4, depth / 2 - 0.2]} castShadow>
        <boxGeometry args={[width * 0.7, 0.15, 0.1]} />
        <meshStandardMaterial color="#5c3a21" />
      </mesh>

      {/* --- ENTRANCE DOOR --- */}
      <group position={[0, 1.05, depth / 2 + 0.05]}>
        <mesh castShadow>
          <boxGeometry args={isLarge ? [1.8, 2.15, 0.1] : [1.1, 2.15, 0.1]} />
          <meshStandardMaterial color="#2a1b12" />
        </mesh>
        
        <mesh position={isLarge ? [-0.45, 0, 0.02] : [0, 0, 0.02]}>
          <boxGeometry args={isLarge ? [0.8, 2.05, 0.05] : [0.95, 2.05, 0.05]} />
          <meshStandardMaterial color="#5c3a21" />
        </mesh>
        
        {isLarge && (
           <mesh position={[0.45, 0, 0.02]}>
            <boxGeometry args={[0.8, 2.05, 0.05]} />
            <meshStandardMaterial color="#5c3a21" />
          </mesh>
        )}

        <mesh position={isLarge ? [0.1, 0, 0.06] : [0.35, 0, 0.06]}>
          <sphereGeometry args={[0.04]} />
          <meshStandardMaterial color="#cca43b" metalness={1} roughness={0.2} />
        </mesh>
      </group>

      {/* --- CHIMNEY --- */}
      <mesh position={[width/3, height * 0.6, -depth/4]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, height/2, 8]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* --- DECK / TERRACE --- */}
      <mesh position={[0, 0.1, depth / 2 + 1.5]} receiveShadow>
        <boxGeometry args={[isLarge ? width + 4 : width + 1.5, 0.2, 3]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.8} />
      </mesh>
      
      <mesh position={[0, 0.1, 0]}>
         <boxGeometry args={[width - 0.2, 0.2, depth]} />
         <meshStandardMaterial color="#57534e" />
      </mesh>

      {(isMedium || isLarge) && (
        <group position={[0, 0.6, depth/2 + 2.9]}>
           <mesh position={[0, 0, 0]}>
              <boxGeometry args={[width + 1, 0.05, 0.05]} />
              <meshStandardMaterial color="#222" />
           </mesh>
           <mesh position={[-width/2, -0.3, 0]}>
              <boxGeometry args={[0.05, 0.6, 0.05]} />
              <meshStandardMaterial color="#222" />
           </mesh>
           <mesh position={[width/2, -0.3, 0]}>
              <boxGeometry args={[0.05, 0.6, 0.05]} />
              <meshStandardMaterial color="#222" />
           </mesh>
        </group>
      )}

      <mesh position={[0, -0.1, depth / 2 + 3.2]} receiveShadow>
        <boxGeometry args={[2.5, 0.2, 0.8]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>

    </group>
  );
};

export const House3D: React.FC<House3DProps> = ({ type }) => {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  const config = {
    small: { width: 4.5, depth: 5, height: 5 },     
    medium: { width: 5.5, depth: 7, height: 6.5 },  
    large: { width: 7, depth: 9, height: 8 },       
  };

  const { width, depth, height } = config[type];

  return (
    <group ref={groupRef} position={[0, -1, 0]}> 
      <ClassicAFrame type={type} width={width} depth={depth} height={height} />
    </group>
  );
};