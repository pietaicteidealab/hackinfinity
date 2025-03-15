import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Avatar, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { EmojiEvents, MonetizationOn, Lightbulb, CloudQueue, BusinessCenter, DevicesOther, Computer } from '@mui/icons-material';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);
const MotionAvatar = motion(Avatar);

function Prizes() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const prizes = [
    {
      place: "1ST PLACE",
      title: "GRAND PRIZE",
      color: "#FFB800",
      icon: <EmojiEvents sx={{ fontSize: 50 }} />,
      rewards: [
        { icon: <MonetizationOn />, text: "$10,000 Cash Prize" },
        { icon: <BusinessCenter />, text: "Startup Incubation Opportunity" },
        { icon: <DevicesOther />, text: "Latest AR/VR Development Kit" },
        { icon: <CloudQueue />, text: "1-Year Cloud Credits" }
      ]
    },
    {
      place: "2ND PLACE",
      title: "RUNNER-UP",
      color: "#C0C0C0",
      icon: <EmojiEvents sx={{ fontSize: 50 }} />,
      rewards: [
        { icon: <MonetizationOn />, text: "$5,000 Cash Prize" },
        { icon: <Computer />, text: "AI Development Toolkit" },
        { icon: <CloudQueue />, text: "6-Month Cloud Credits" }
      ]
    },
    {
      place: "3RD PLACE",
      title: "THIRD PRIZE",
      color: "#CD7F32",
      icon: <EmojiEvents sx={{ fontSize: 50 }} />,
      rewards: [
        { icon: <MonetizationOn />, text: "$2,500 Cash Prize" },
        { icon: <DevicesOther />, text: "Smart Home Devices" },
        { icon: <CloudQueue />, text: "3-Month Cloud Credits" }
      ]
    }
  ];

  return (
    <Box
      id="prizes"
      sx={{
        position: 'relative',
        py: 10,
        px: 2,
        backgroundColor: '#0a0a0a',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(50, 50, 50, 0.08) 0%, rgba(0, 0, 0, 0) 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/placeholder.svg?height=800&width=1600')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <MotionBox
            variants={titleVariants}
            sx={{ textAlign: 'center', mb: 8 }}
          >
            <MotionTypography
              component="h2"
              variant="h3"
              fontWeight="bold"
              color="white"
              sx={{ mb: 2, display: 'inline-flex', alignItems: 'center' }}
            >
              <Box 
                component="span" 
                sx={{ 
                  width: '2rem', 
                  height: '4px', 
                  bgcolor: 'error.main', 
                  mr: 2, 
                  display: 'inline-block' 
                }} 
              />
              PRIZES & AWARDS
              <Box 
                component="span" 
                sx={{ 
                  width: '2rem', 
                  height: '4px', 
                  bgcolor: 'error.main', 
                  ml: 2, 
                  display: 'inline-block' 
                }} 
              />
            </MotionTypography>
            
            <MotionTypography 
              variant="subtitle1" 
              color="grey.400"
              sx={{ maxWidth: '800px', mx: 'auto' }}
            >
              Exceptional innovation deserves exceptional rewards. Check out what you can win!
            </MotionTypography>
          </MotionBox>

          {/* Prize Cards */}
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {prizes.map((prize, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionCard
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: `0 0 25px ${prize.color}40` 
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  sx={{
                    bgcolor: 'rgba(20, 20, 20, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    border: `1px solid ${prize.color}40`,
                    height: '100%'
                  }}
                >
                  {/* Prize ribbon */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '150px',
                      height: '150px',
                      overflow: 'hidden',
                      zIndex: 1
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: prize.color,
                        color: '#000',
                        fontWeight: 'bold',
                        py: 0.75,
                        width: '200px',
                        textAlign: 'center',
                        transform: 'rotate(45deg)',
                        position: 'absolute',
                        top: '40px',
                        right: '-40px',
                        boxShadow: '0 3px 10px rgba(0,0,0,0.3)'
                      }}
                    >
                      {prize.place}
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ p: 4, pt: 6 }}>
                    <MotionBox
                      sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        mb: 3
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20,
                        delay: 0.2 + index * 0.1
                      }}
                    >
                      {/* Prize icon with glow effect */}
                      <MotionAvatar
                        sx={{
                          width: 80,
                          height: 80,
                          bgcolor: `${prize.color}20`,
                          color: prize.color,
                          mb: 2,
                          position: 'relative'
                        }}
                      >
                        {prize.icon}
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            bgcolor: prize.color,
                            borderRadius: '50%',
                            filter: 'blur(20px)',
                            opacity: 0.3
                          }}
                        />
                      </MotionAvatar>
                      
                      <Typography 
                        variant="h5" 
                        fontWeight="bold" 
                        sx={{ color: prize.color, textAlign: 'center' }}
                      >
                        {prize.title}
                      </Typography>
                    </MotionBox>
                    
                    <Divider sx={{ mb: 3, bgcolor: `${prize.color}30` }} />
                    
                    {/* Prize rewards list */}
                    <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                      {prize.rewards.map((reward, i) => (
                        <Box
                          component="li"
                          key={i}
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 2,
                            mb: 2
                          }}
                        >
                          <Avatar
                            sx={{
                              width: 32,
                              height: 32,
                              bgcolor: `${prize.color}20`,
                              color: prize.color
                            }}
                          >
                            {reward.icon}
                          </Avatar>
                          <Typography variant="body1" color="grey.300" sx={{ mt: 0.5 }}>
                            {reward.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          {/* Footer Section */}
          <MotionBox
            variants={itemVariants}
            sx={{ textAlign: 'center' }}
          >
            <Typography 
              variant="body1" 
              color="grey.400" 
              sx={{ mb: 3, maxWidth: '800px', mx: 'auto' }}
            >
              Additionally, all participants will receive exclusive hackathon swag, certificates of participation, and
              networking opportunities with industry leaders.
            </Typography>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundImage: 'linear-gradient(to right, #f44336, #ff9800)',
                  fontWeight: 'bold',
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  color: 'white',
                  '&:hover': {
                    backgroundImage: 'linear-gradient(to right, #d32f2f, #f57c00)',
                    boxShadow: '0 4px 20px rgba(244, 67, 54, 0.4)'
                  }
                }}
              >
                Register Now
              </Button>
            </motion.div>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}

export default Prizes;