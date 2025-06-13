import React from 'react';
import { Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Styled components
const TeamContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4, 0),
  backgroundImage: 'url("/Teambg.svg")', // use your SVG here
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
}));



const ContentWrapper = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(4),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: 'Aboreto, cursive',
  top: '-70px',
  position: 'relative',
  fontSize: '3.5rem',
  fontWeight: 400,
  color: 'white',
  textAlign: 'center',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
    letterSpacing: '0.15em',
    top: '-40px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    letterSpacing: '0.1em',
    top: '-20px',
  },
}));

const TeamGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(4),
  width: '100%',
  maxWidth: '1200px',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(4),
  },
}));

const TeamMemberCard = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    '&:nth-of-type(odd)': {
        transform: 'translateY(-50px)',
        [theme.breakpoints.down('lg')]: {
            transform: 'translateY(0)', // Reset on smaller screens for better mobile layout
        },
    }
}));

const MemberFrame = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '250px',
    height: '420px',
    background: 'linear-gradient(to top, #4051b5 0%,rgb(4, 8, 47) 100%)',
    borderRadius: '120px 120px 40px 40px',
    border: '6px solid white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(3, 2, 2),
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.down('md')]: {
        width: '220px',
        height: '350px',
        padding: theme.spacing(2.5, 1.5, 1.5),
    },
    [theme.breakpoints.down('sm')]: {
        width: '280px',
        height: '380px',
        padding: theme.spacing(2, 1, 1),
    },
}));

const MemberName = styled(Typography)(({ theme }) => ({
  fontFamily: 'Aboreto, cursive',
  fontSize: '1.1rem',
  fontWeight: 400,
  color: 'white',
  textAlign: 'center',
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
  },
}));

const MemberRole = styled(Typography)(({ theme }) => ({
  fontFamily: 'Aboreto, cursive',
  fontSize: '0.85rem',
  fontWeight: 300,
  color: 'rgba(255, 255, 255, 0.8)',
  textAlign: 'center',
  marginTop: theme.spacing(0.5),
  [theme.breakpoints.down('md')]: {
    fontSize: '0.75rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
  },
}));

const MemberImage = styled('img')(({ theme }) => ({
    width: '240px',
    height: '430px',
    marginTop: '38px', // This will move the image up
    [theme.breakpoints.down('md')]: {
        width: '200px',
        height: '320px',
        marginTop: '30px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '240px',
        height: '360px',
        marginTop: '-10px',
    },
}));

const LinkedInButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(40),
  left: '50%',
  transform: 'translateX(-50%)',
  width: '40px',
  height: '40px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'white',
    transform: 'translateX(-50%) translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  [theme.breakpoints.down('md')]: {
    bottom: theme.spacing(30),
    width: '38px',
    height: '38px',
  },
  [theme.breakpoints.down('sm')]: {
    bottom: theme.spacing(35),
    width: '40px',
    height: '40px',
  },
}));

const Team = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Dr M.Faisal cheema',
      role: '( Supervisor )',
      image: '/Umar.png', // Replace with your actual image path
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Muhammad Umar',
      role: '( Front-end developer )',
      image: '/Umar.png', 
      linkedin: 'https://www.linkedin.com/in/muhammad-umar-796506248/'
    },
    {
      id: 3,
      name: 'Syed Saad gillani',
      role: '( Back-end developer )',
      image: '/Umar.png', 
      linkedin: 'https://www.linkedin.com/in/saad-gillani-544098273/'
    },
    {
      id: 4,
      name: 'M Owais zahid',
      role: '( Intern )',
      image: '/Umar.png', 
      linkedin: 'https://www.linkedin.com/in/muhammad-owais-zahid-699a52262/'
    }
  ];

  return (
    <TeamContainer>
      <ContentWrapper maxWidth="xl">
        <Title variant="h1">
          THE TEAM
        </Title>

        <TeamGrid>
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id}>
              <MemberFrame>
                <Box>
                  <MemberName>{member.name}</MemberName>
                  <MemberRole>{member.role}</MemberRole>
                </Box>
                
                <MemberImage
                  src={member.image}
                  alt={member.name}
                />

                <LinkedInButton
                  onClick={() => window.open(member.linkedin, '_blank')}
                >
                  <LinkedInIcon 
                    sx={{ 
                      color: '#0077B5', 
                      fontSize: isMobile ? '20px' : '24px' 
                    }} 
                  />
                </LinkedInButton>
              </MemberFrame>
            </TeamMemberCard>
          ))}
        </TeamGrid>
      </ContentWrapper>
    </TeamContainer>
  );
};

export default Team;