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

      {/* --- ROOF STRUCTURE (Standing Seam Metal / Lim) --- */}
      {/* Left Roof Panel with Standing Seams */}
      <group position={[-width / 4, height / 2, 0]} rotation={[0, 0, roofAngle]}>
        {/* Base panel */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[roofLength + 0.4, roofThickness, depth + overhang * 2]} />
          <meshStandardMaterial color="#3d4f5f" roughness={0.4} metalness={0.7} />
        </mesh>
        {/* Vertical Standing Seams - running from eave to ridge */}
        {Array.from({ length: Math.floor((depth + overhang * 2) / 0.3) }).map((_, i) => (
          <mesh
            key={`left-seam-${i}`}
            position={[0, 0.13, -depth / 2 - overhang + 0.15 + i * 0.3]}
            castShadow
          >
            <boxGeometry args={[roofLength + 0.3, 0.08, 0.04]} />
            <meshStandardMaterial color="#2a3a4a" roughness={0.25} metalness={0.9} />
          </mesh>
        ))}
      </group>

      {/* Right Roof Panel with Standing Seams */}
      <group position={[width / 4, height / 2, 0]} rotation={[0, 0, -roofAngle]}>
        {/* Base panel */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[roofLength + 0.4, roofThickness, depth + overhang * 2]} />
          <meshStandardMaterial color="#3d4f5f" roughness={0.4} metalness={0.7} />
        </mesh>
        {/* Vertical Standing Seams - running from eave to ridge */}
        {Array.from({ length: Math.floor((depth + overhang * 2) / 0.3) }).map((_, i) => (
          <mesh
            key={`right-seam-${i}`}
            position={[0, 0.13, -depth / 2 - overhang + 0.15 + i * 0.3]}
            castShadow
          >
            <boxGeometry args={[roofLength + 0.3, 0.08, 0.04]} />
            <meshStandardMaterial color="#2a3a4a" roughness={0.25} metalness={0.9} />
          </mesh>
        ))}
      </group>

      {/* Ridge Cap - Metal strip at the peak */}
      <mesh position={[0, height + 0.1, 0]} castShadow>
        <boxGeometry args={[0.2, 0.12, depth + overhang * 2]} />
        <meshStandardMaterial color="#1a2a3a" roughness={0.3} metalness={0.9} />
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
        <group position={[width/2, 1.5, 0]}>
          {/* Annex Body */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3, 3, 5.5]} />
            <meshStandardMaterial color="#262626" />
          </mesh>
          {/* Annex Roof (Flat) */}
          <mesh position={[0, 1.55, 0]} castShadow>
            <boxGeometry args={[3.2, 0.1, 5.7]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          {/* Annex Window - bočni */}
          <mesh position={[1.51, 0.5, 0]} rotation={[0, Math.PI/2, 0]}>
             <planeGeometry args={[2.5, 1.5]} />
             <meshStandardMaterial color="#1a3a4a" metalness={0.95} roughness={0.05} />
          </mesh>
          {/* Okvir prednjeg prozora */}
          <mesh position={[0, 0.5, 2.76]}>
            <boxGeometry args={[2.2, 1.7, 0.08]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
          {/* Annex Window - prednji (reflektirajuće staklo) */}
          <mesh position={[0, 0.5, 2.78]}>
            <boxGeometry args={[2, 1.5, 0.05]} />
            <meshStandardMaterial color="#1a3a4a" metalness={0.95} roughness={0.05} />
          </mesh>
        </group>
      )}

      {/* --- SIMPLE FRONT FACADE --- */}

      {/* Glass Facade */}
      <mesh position={[0, 0, depth / 2]}>
        <shapeGeometry args={[triangleShape]} />
        <meshPhysicalMaterial
          color="#87CEEB"
          metalness={0.3}
          roughness={0.1}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 0, -depth / 2 + 0.1]} rotation={[0, Math.PI, 0]} receiveShadow>
        <shapeGeometry args={[triangleShape]} />
        <meshStandardMaterial color="#3e2216" roughness={0.8} />
      </mesh>

      {/* Loft Floor */}
      <mesh position={[0, height * 0.4, 0]} castShadow>
        <boxGeometry args={[width * 0.4, 0.12, depth * 0.6]} />
        <meshStandardMaterial color="#5c3a21" />
      </mesh>

      {/* --- SIMPLE DOOR --- */}
      <mesh position={[0, 1.1, depth / 2 + 0.1]} castShadow>
        <boxGeometry args={[1.2, 2.2, 0.1]} />
        <meshStandardMaterial color="#4a3728" roughness={0.7} />
      </mesh>
      {/* Door Handle */}
      <mesh position={[0.4, 1.1, depth / 2 + 0.18]}>
        <sphereGeometry args={[0.06]} />
        <meshStandardMaterial color="#c9a227" metalness={0.9} roughness={0.2} />
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

      {/* --- TERRACE RAILING / OGRADA --- */}
      <group position={[0, 0.2, depth / 2 + 1.5]}>
        {/* Front railing - horizontal bars */}
        <mesh position={[0, 0.8, 1.4]}>
          <boxGeometry args={[isLarge ? width + 3.8 : width + 1.3, 0.06, 0.04]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.9} />
        </mesh>
        <mesh position={[0, 0.5, 1.4]}>
          <boxGeometry args={[isLarge ? width + 3.8 : width + 1.3, 0.04, 0.04]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.9} />
        </mesh>

        {/* Front railing - vertical posts */}
        {Array.from({ length: isLarge ? 9 : 5 }).map((_, i) => {
          const railWidth = isLarge ? width + 3.6 : width + 1.1;
          const spacing = railWidth / (isLarge ? 8 : 4);
          return (
            <mesh key={`front-post-${i}`} position={[-railWidth / 2 + i * spacing, 0.45, 1.4]}>
              <boxGeometry args={[0.04, 0.9, 0.04]} />
              <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.9} />
            </mesh>
          );
        })}

        {/* Left side railing */}
        <mesh position={[isLarge ? -(width + 3.8) / 2 : -(width + 1.3) / 2, 0.8, 0]}>
          <boxGeometry args={[0.04, 0.06, 2.8]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.9} />
        </mesh>
        <mesh position={[isLarge ? -(width + 3.8) / 2 : -(width + 1.3) / 2, 0.5, 0]}>
          <boxGeometry args={[0.04, 0.04, 2.8]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.9} />
        </mesh>
        {/* Left side posts */}
        {Array.from({ length: 3 }).map((_, i) => (
          <mesh key={`left-post-${i}`} position={[isLarge ? -(width + 3.8) / 2 : -(width + 1.3) / 2, 0.45, -1.2 + i * 1.2]}>
            <boxGeometry args={[0.04, 0.9, 0.04]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.9} />
          </mesh>
        ))}

        {/* Right side railing */}
        <mesh position={[isLarge ? (width + 3.8) / 2 : (width + 1.3) / 2, 0.8, 0]}>
          <boxGeometry args={[0.04, 0.06, 2.8]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.9} />
        </mesh>
        <mesh position={[isLarge ? (width + 3.8) / 2 : (width + 1.3) / 2, 0.5, 0]}>
          <boxGeometry args={[0.04, 0.04, 2.8]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.9} />
        </mesh>
        {/* Right side posts */}
        {Array.from({ length: 3 }).map((_, i) => (
          <mesh key={`right-post-${i}`} position={[isLarge ? (width + 3.8) / 2 : (width + 1.3) / 2, 0.45, -1.2 + i * 1.2]}>
            <boxGeometry args={[0.04, 0.9, 0.04]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.9} />
          </mesh>
        ))}
      </group>

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