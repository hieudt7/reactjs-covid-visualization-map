const Preloaders = () => {
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<div className="w-28">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
					<circle
						fill="#4A148C"
						stroke="#4A148C"
						stroke-width="14"
						r="15"
						cx="40"
						cy="100"
					>
						<animate
							attributeName="opacity"
							calcMode="spline"
							dur="2.9"
							values="1;0;1;"
							keySplines=".5 0 .5 1;.5 0 .5 1"
							repeatCount="indefinite"
							begin="-.4"
						></animate>
					</circle>
					<circle
						fill="#4A148C"
						stroke="#4A148C"
						stroke-width="14"
						r="15"
						cx="100"
						cy="100"
					>
						<animate
							attributeName="opacity"
							calcMode="spline"
							dur="2.9"
							values="1;0;1;"
							keySplines=".5 0 .5 1;.5 0 .5 1"
							repeatCount="indefinite"
							begin="-.2"
						></animate>
					</circle>
					<circle
						fill="#4A148C"
						stroke="#4A148C"
						stroke-width="14"
						r="15"
						cx="160"
						cy="100"
					>
						<animate
							attributeName="opacity"
							calcMode="spline"
							dur="2.9"
							values="1;0;1;"
							keySplines=".5 0 .5 1;.5 0 .5 1"
							repeatCount="indefinite"
							begin="0"
						></animate>
					</circle>
				</svg>
			</div>
		</div>
	);
};

export default Preloaders;
