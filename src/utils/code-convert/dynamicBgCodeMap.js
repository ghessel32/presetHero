
export const dynamicBgCodeMap = {
  GradientBlinds: `
<GradientBlinds
  gradientColors={["#FF9FFC", "#5227FF"]}
  angle={0}
  noise={0.3}
  blindCount={12}
  blindMinWidth={50}
  spotlightRadius={0.5}
  spotlightSoftness={1}
  spotlightOpacity={1}
  mouseDampening={0.15}
  distortAmount={0}
  shineDirection="left"
  mixBlendMode="lighten"
/>
`,

  DarkVeil: `
<DarkVeil />
`,

  FloatingLines: `
<FloatingLines
  enabledWaves={["top", "middle", "bottom"]}
  lineCount={[5, 5, 10]}
  lineDistance={[8, 6, 4]}
  bendRadius={5.0}
  bendStrength={-0.5}
  interactive={true}
  parallax={true}
/>
`,

  Aurora: `
<Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>
`,

  Particles: `
<Particles
  particleColors={["#ffffff", "#ffffff"]}
  particleCount={200}
  particleSpread={10}
  speed={0.1}
  particleBaseSize={100}
  moveParticlesOnHover={true}
  alphaParticles={false}
  disableRotation={false}
/>
`,
};
