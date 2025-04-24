import { animated, useSpring } from "@react-spring/three";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

interface PieSliceProps {
	startAngle: number;
	endAngle: number;
	radius: number;
	height: number;
	color: string;
	midAngle: number;
	percentage: number;
}

const PieSlice: React.FC<PieSliceProps> = ({
	startAngle,
	endAngle,
	radius,
	height,
	color,
	midAngle,
	percentage,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [currentEndAngle, setCurrentEndAngle] = useState(startAngle);
	const meshRef = useRef<THREE.Mesh>(null);
	const points: THREE.Vector2[] = [];
	const segments = 64;

	// Ensure angles are in the correct range
	const normalizedStartAngle = startAngle % (Math.PI * 2);
	const normalizedEndAngle = endAngle % (Math.PI * 2);

	// Calculate angle step
	const angleStep = (currentEndAngle - normalizedStartAngle) / segments;

	// Create points for the pie slice
	for (let index = 0; index <= segments; index++) {
		const currentAngle = normalizedStartAngle + angleStep * index;
		const x = Math.cos(currentAngle) * radius;
		const y = Math.sin(currentAngle) * radius;
		points.push(new THREE.Vector2(x, y));
	}

	// Add center point
	points.push(new THREE.Vector2(0, 0));

	const shape = new THREE.Shape(points);
	const extrudeSettings = {
		steps: 1,
		depth: height,
		bevelEnabled: false,
	};

	// Calculate offset position when hovered
	const offsetDistance = 0.2;
	const targetX = Math.cos(midAngle) * (isHovered ? offsetDistance : 0);
	const targetY = Math.sin(midAngle) * (isHovered ? offsetDistance : 0);

	// Calculate text position
	const textRadius = radius * 0.7; // Move text closer to center for better positioning
	const textPosition: [number, number, number] = [
		Math.cos(midAngle) * textRadius,
		Math.sin(midAngle) * textRadius,
		height + 0.2, // Slightly above the slice
	];

	// Animate position and material properties
	const { positionX, positionY, emissiveIntensity, scale } = useSpring({
		positionX: targetX,
		positionY: targetY,
		emissiveIntensity: isHovered ? 0.5 : 0,
		scale: isHovered ? 1.05 : 1,
		config: { mass: 1, tension: 280, friction: 60 },
	});

	// Animate the slice appearance like opening a fan
	useFrame(() => {
		if (currentEndAngle < normalizedEndAngle) {
			setCurrentEndAngle((previous) =>
				Math.min(previous + 0.05, normalizedEndAngle)
			);
		}
	});

	return (
		<group>
			<animated.mesh
				ref={meshRef}
				position-x={positionX}
				position-y={positionY}
				scale={scale}
				onPointerOver={() => setIsHovered(true)}
				onPointerOut={() => setIsHovered(false)}
				castShadow
				receiveShadow
			>
				<extrudeGeometry args={[shape, extrudeSettings]} />
				<animated.meshStandardMaterial
					color={color}
					side={THREE.DoubleSide}
					emissive={color}
					emissiveIntensity={emissiveIntensity}
					shadowSide={THREE.DoubleSide}
				/>
			</animated.mesh>
			{currentEndAngle >= normalizedEndAngle && (
				<Text
					position={textPosition}
					rotation={[0, 0, 0]}
					fontSize={0.2}
					color="#ffffff"
					anchorX="center"
					anchorY="middle"
					fontWeight={600}
				>
					{`${Math.round(percentage)}%`}
				</Text>
			)}
		</group>
	);
};

export default PieSlice;
