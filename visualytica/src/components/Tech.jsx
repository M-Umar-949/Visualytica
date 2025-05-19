import React from "react";
import { Box, Typography, Tooltip, styled } from "@mui/material";

const techStack = [
  { name: "Next.js", icon: "/icons/next.svg" },
  { name: "D3.js", icon: "/icons/d3.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "ML", icon: "/icons/networkx.svg" },
  { name: "Lightning", icon: "/icons/fastapi.svg" },
];

// Wrapper for the whole section
const TechStackWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: "80px 20px",
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "-8rem",
}));

// Heading with simple styling
const TechHeading = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 600,
  color: "#2c3e50",
  marginBottom: "60px",
  letterSpacing: "0.1em",
}));

// Grid wrapper
const HexGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "30px",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "700px",
}));

// Hexagon using SVG background
const Hexagon = styled(Box)(({ theme }) => ({
  width: "140px",
  height: "160px",
  backgroundImage: "url('/hexagon.svg')",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s ease",
  cursor: "pointer",

  "&:hover": {
    transform: "scale(1.08)",
  },
}));

// Add this new styled row container
const HexRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  marginBottom: "20px",
  "&.offset": {
    transform: "translateX(120px)", // offset bottom row by half hex width
  },
}));


// Icon inside the hexagon
const TechIcon = styled("img")(({ theme }) => ({
  width: "50px",
  height: "50px",
  objectFit: "contain",
  filter: "brightness(0) invert(1)", // white effect on dark bg
}));

const Tech = () => {
  return (
    <TechStackWrapper>
      <TechHeading>TECH STACK</TechHeading>
      <HexGrid>
        <HexRow>
          {techStack.slice(0, 3).map((tech, index) => (
            <Tooltip key={index} title={tech.name} arrow>
              <Hexagon>
                <TechIcon src={tech.icon} alt={tech.name} />
              </Hexagon>
            </Tooltip>
          ))}
        </HexRow>
        <HexRow className="offset">
          {techStack.slice(3).map((tech, index) => (
            <Tooltip key={index + 3} title={tech.name} arrow>
              <Hexagon>
                <TechIcon src={tech.icon} alt={tech.name} />
              </Hexagon>
            </Tooltip>
          ))}
        </HexRow>
      </HexGrid>
    </TechStackWrapper>
  );
};
export default Tech;
