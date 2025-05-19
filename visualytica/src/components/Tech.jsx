import React, { useState, useEffect } from "react";
import { Box, Typography, Tooltip, styled } from "@mui/material";

const techStack = [
  { name: "Next.js", icon: "/icons/next.svg" },
  { name: "D3.js", icon: "/icons/d3.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "Network X", icon: "/icons/networkx.svg" },
  { name: "FASTapi", icon: "/icons/fastapi.svg" },
];

// Wrapper for the whole section
const TechStackWrapper = styled(Box)({
  textAlign: "center",
  padding: "80px 20px",
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "-8rem",
  "@media (max-width: 768px)": {
    padding: "60px 15px",
    marginTop: "-4rem",
  }
});

// Heading with simple styling
const TechHeading = styled(Typography)({
  fontFamily: "Aboreto, cursive",
  fontSize: "2.5rem",
  fontWeight: 600,
  color: "#2c3e50",
  marginBottom: "60px",
  letterSpacing: "0.1em",
  "@media (max-width: 768px)": {
    fontSize: "2rem",
    marginBottom: "40px",
  }
});

// Desktop grid wrapper
const DesktopHexGrid = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "700px",
});

// Mobile grid wrapper
const MobileHexGrid = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "100%",
});

// Desktop Hexagon
const DesktopHexagon = styled(Box)({
  width: "240px",
  height: "260px",
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
});

// Mobile Hexagon
const MobileHexagon = styled(Box)({
  width: "140px",
  height: "150px",
  backgroundImage: "url('/hexagon.svg')",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s ease",
  cursor: "pointer",
  margin: "0 5px 15px",
  "&:hover": {
    transform: "scale(1.08)",
  },
});

// HexRow for desktop
const HexRow = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginBottom: "-64px",
  "&.offset": {
    transform: "translateX(125px)", // offset bottom row by half hex width
  }
});

// Mobile hex container with wrap
const MobileHexContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  maxWidth: "350px",
});

// Desktop Icon
const DesktopTechIcon = styled("img")({
  width: "100px",
  height: "100px",
  objectFit: "contain",
  filter: "brightness(0) invert(1)", // white effect on dark bg
});

// Mobile Icon
const MobileTechIcon = styled("img")({
  width: "70px",
  height: "70px",
  objectFit: "contain",
  filter: "brightness(0) invert(1)", // white effect on dark bg
});

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive layout with window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile layout - 3 staggered rows
  const renderMobileLayout = () => (
    <MobileHexGrid>
      <MobileHexContainer>
        {techStack.map((tech, index) => (
          <Tooltip key={index} title={tech.name} arrow>
            <MobileHexagon>
              <MobileTechIcon 
                src={tech.icon} 
                alt={tech.name}
              />
            </MobileHexagon>
          </Tooltip>
        ))}
      </MobileHexContainer>
    </MobileHexGrid>
  );

  // Desktop layout - 2 rows with hexagon offset pattern
  const renderDesktopLayout = () => (
    <DesktopHexGrid>
      <HexRow>
        {techStack.slice(0, 3).map((tech, index) => (
          <Tooltip key={index} title={tech.name} arrow>
            <DesktopHexagon>
              <DesktopTechIcon src={tech.icon} alt={tech.name} />
            </DesktopHexagon>
          </Tooltip>
        ))}
      </HexRow>
      <HexRow className="offset">
        {techStack.slice(3).map((tech, index) => (
          <Tooltip key={index + 3} title={tech.name} arrow>
            <DesktopHexagon>
              <DesktopTechIcon src={tech.icon} alt={tech.name} />
            </DesktopHexagon>
          </Tooltip>
        ))}
      </HexRow>
    </DesktopHexGrid>
  );

  return (
    <TechStackWrapper>
      <TechHeading>TECH STACK</TechHeading>
      {isMobile ? renderMobileLayout() : renderDesktopLayout()}
    </TechStackWrapper>
  );
};

export default Tech;