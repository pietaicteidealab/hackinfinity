// import React from 'react';
// import { Box, Container, Typography, Grid, Card, CardContent, Button, Avatar, Divider } from '@mui/material';
// import { motion } from 'framer-motion';
// import { EmojiEvents, MonetizationOn, Lightbulb, CloudQueue, BusinessCenter, DevicesOther, Computer, Business, Router } from '@mui/icons-material';
// import dynamic from 'next/dynamic';

// // Dynamically import ParticleComponent with no SSR to avoid hydration issues
// const ParticleComponent = dynamic(() => import('./ParticleComponent'), { ssr: false });

// const MotionBox = motion(Box);
// const MotionCard = motion(Card);
// const MotionTypography = motion(Typography);
// const MotionAvatar = motion(Avatar);

// function Prizes() {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 20
//       }
//     }
//   };

//   const prizes = [
//     {
//       place: "1ST PLACE",
//       title: "GRAND PRIZE",
//       color: "#FFB800",
//       icon: <EmojiEvents sx={{ fontSize: 50 }} />,
//       rewards: [
//         { icon: <MonetizationOn />, text: "$10,000 Cash Prize" },
//         { icon: <BusinessCenter />, text: "Startup Incubation Opportunity" },
//         { icon: <DevicesOther />, text: "Latest AR/VR Development Kit" },
//         { icon: <CloudQueue />, text: "1-Year Cloud Credits" }
//       ]
//     },
//     {
//       place: "2ND PLACE",
//       title: "RUNNER-UP",
//       color: "#C0C0C0",
//       icon: <EmojiEvents sx={{ fontSize: 50 }} />,
//       rewards: [
//         { icon: <MonetizationOn />, text: "$5,000 Cash Prize" },
//         { icon: <Computer />, text: "AI Development Toolkit" },
//         { icon: <CloudQueue />, text: "6-Month Cloud Credits" }
//       ]
//     },
//     {
//       place: "3RD PLACE",
//       title: "THIRD PRIZE",
//       color: "#CD7F32",
//       icon: <EmojiEvents sx={{ fontSize: 50 }} />,
//       rewards: [
//         { icon: <MonetizationOn />, text: "$2,500 Cash Prize" },
//         { icon: <DevicesOther />, text: "Smart Home Devices" },
//         { icon: <CloudQueue />, text: "3-Month Cloud Credits" }
//       ]
//     }
//   ];

//   const specialPrizes = [
//     {
//       place: "SPECIAL PRIZE",
//       title: "BEST BUSINESS IDEA",
//       color: "#4CAF50",
//       icon: <Business sx={{ fontSize: 50 }} />,
//       rewards: [
//         { icon: <MonetizationOn />, text: "$2,000 Cash Prize" },
//         { icon: <BusinessCenter />, text: "Business Mentorship Program" },
//         { icon: <CloudQueue />, text: "3-Month Business Suite Access" }
//       ]
//     },
//     {
//       place: "SPECIAL PRIZE",
//       title: "BEST IoT PROJECT",
//       color: "#2196F3",
//       icon: <Router sx={{ fontSize: 50 }} />,
//       rewards: [
//         { icon: <MonetizationOn />, text: "$2,000 Cash Prize" },
//         { icon: <DevicesOther />, text: "IoT Development Kit" },
//         { icon: <CloudQueue />, text: "3-Month IoT Platform Credits" }
//       ]
//     }
//   ];

//   return (
//     <Box
//       id="prizes"
//       sx={{
//         position: 'relative',
//         py: 10,
//         px: 2,
//         backgroundColor: '#0a0a0a',
//         backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(50, 50, 50, 0.08) 0%, rgba(0, 0, 0, 0) 100%)',
//         overflow: 'hidden'
//       }}
//     >
//       {/* Particles Background */}
//       <ParticleComponent />

//       {/* Background decorative elements */}
//       <Box
//         component={motion.div}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.05 }}
//         transition={{ duration: 1.5 }}
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url('/tbg.png?height=800&width=1600')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           zIndex: 0
//         }}
//       />

//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
//         <MotionBox
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {/* Section Header */}
//           <MotionBox
//             variants={titleVariants}
//             sx={{ textAlign: 'center', mb: 8 }}
//           >
//             <MotionTypography
//               component="h2"
//               variant="h3"
//               fontWeight="bold"
//               color="white"
//               sx={{ mb: 2, display: 'inline-flex', alignItems: 'center' }}
//             >
//               <Box 
//                 component="span" 
//                 sx={{ 
//                   width: '2rem', 
//                   height: '4px', 
//                   bgcolor: 'error.main', 
//                   mr: 2, 
//                   display: 'inline-block' 
//                 }} 
//               />
//               PRIZES & AWARDS
//               <Box 
//                 component="span" 
//                 sx={{ 
//                   width: '2rem', 
//                   height: '4px', 
//                   bgcolor: 'error.main', 
//                   ml: 2, 
//                   display: 'inline-block' 
//                 }} 
//               />
//             </MotionTypography>
            
//             <MotionTypography 
//               variant="subtitle1" 
//               color="grey.400"
//               sx={{ maxWidth: '800px', mx: 'auto' }}
//             >
//               Exceptional innovation deserves exceptional rewards. Check out what you can win!
//             </MotionTypography>
//           </MotionBox>

//           {/* Main Prize Cards */}
//           <Grid container spacing={4} sx={{ mb: 6 }}>
//             {prizes.map((prize, index) => (
//               <Grid item xs={12} md={4} key={`main-${index}`}>
//                 <MotionCard
//                   variants={itemVariants}
//                   whileHover={{ 
//                     scale: 1.05, 
//                     boxShadow: `0 0 25px ${prize.color}40` 
//                   }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                   sx={{
//                     bgcolor: 'rgba(20, 20, 20, 0.8)',
//                     backdropFilter: 'blur(10px)',
//                     borderRadius: 2,
//                     overflow: 'hidden',
//                     position: 'relative',
//                     border: `1px solid ${prize.color}40`,
//                     height: '100%',
//                     minHeight: '500px'
//                   }}
//                 >
//                   {/* Prize ribbon */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: 0,
//                       right: 0,
//                       width: '150px',
//                       height: '150px',
//                       overflow: 'hidden',
//                       zIndex: 1
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         bgcolor: prize.color,
//                         color: '#000',
//                         fontWeight: 'bold',
//                         py: 0.75,
//                         width: '200px',
//                         textAlign: 'center',
//                         transform: 'rotate(45deg)',
//                         position: 'absolute',
//                         top: '40px',
//                         right: '-40px',
//                         boxShadow: '0 3px 10px rgba(0,0,0,0.3)'
//                       }}
//                     >
//                       {prize.place}
//                     </Box>
//                   </Box>
                  
//                   <CardContent sx={{ p: 4, pt: 6, height: '100%', display: 'flex', flexDirection: 'column' }}>
//                     <MotionBox
//                       sx={{ 
//                         display: 'flex', 
//                         flexDirection: 'column', 
//                         alignItems: 'center',
//                         mb: 3
//                       }}
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ 
//                         type: "spring", 
//                         stiffness: 260, 
//                         damping: 20,
//                         delay: 0.2 + index * 0.1
//                       }}
//                     >
//                       <MotionAvatar
//                         sx={{
//                           width: 80,
//                           height: 80,
//                           bgcolor: `${prize.color}20`,
//                           color: prize.color,
//                           mb: 2,
//                           position: 'relative'
//                         }}
//                       >
//                         {prize.icon}
//                         <Box
//                           sx={{
//                             position: 'absolute',
//                             inset: 0,
//                             bgcolor: prize.color,
//                             borderRadius: '50%',
//                             filter: 'blur(20px)',
//                             opacity: 0.3
//                           }}
//                         />
//                       </MotionAvatar>
                      
//                       <Typography 
//                         variant="h5" 
//                         fontWeight="bold" 
//                         sx={{ color: prize.color, textAlign: 'center' }}
//                       >
//                         {prize.title}
//                       </Typography>
//                     </MotionBox>
                    
//                     <Divider sx={{ mb: 3, bgcolor: `${prize.color}30` }} />
                    
//                     <Box 
//                       component="ul" 
//                       sx={{ 
//                         p: 0, 
//                         m: 0, 
//                         listStyle: 'none',
//                         flex: 1,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'flex-start'
//                       }}
//                     >
//                       {prize.rewards.map((reward, i) => (
//                         <Box
//                           component="li"
//                           key={i}
//                           sx={{
//                             display: 'flex',
//                             alignItems: 'flex-start',
//                             gap: 2,
//                             mb: 2
//                           }}
//                         >
//                           <Avatar
//                             sx={{
//                               width: 32,
//                               height: 32,
//                               bgcolor: `${prize.color}20`,
//                               color: prize.color
//                             }}
//                           >
//                             {reward.icon}
//                           </Avatar>
//                           <Typography variant="body1" color="grey.300" sx={{ mt: 0.5 }}>
//                             {reward.text}
//                           </Typography>
//                         </Box>
//                       ))}
//                     </Box>
//                   </CardContent>
//                 </MotionCard>
//               </Grid>
//             ))}
//           </Grid>

//           {/* Special Prize Cards - Centered */}
//           <Grid 
//             container 
//             spacing={4} 
//             sx={{ mb: 6 }} 
//             justifyContent="center"
//           >
//             {specialPrizes.map((prize, index) => (
//               <Grid item xs={12} md={4} key={`special-${index}`} sx={{ maxWidth: { md: '33.33%' } }}>
//                 <MotionCard
//                   variants={itemVariants}
//                   whileHover={{ 
//                     scale: 1.05, 
//                     boxShadow: `0 0 25px ${prize.color}40` 
//                   }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                   sx={{
//                     bgcolor: 'rgba(20, 20, 20, 0.8)',
//                     backdropFilter: 'blur(10px)',
//                     borderRadius: 2,
//                     overflow: 'hidden',
//                     position: 'relative',
//                     border: `1px solid ${prize.color}40`,
//                     height: '100%',
//                     minHeight: '500px'
//                   }}
//                 >
//                   {/* Prize ribbon */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: 0,
//                       right: 0,
//                       width: '150px',
//                       height: '150px',
//                       overflow: 'hidden',
//                       zIndex: 1
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         bgcolor: prize.color,
//                         color: '#000',
//                         fontWeight: 'bold',
//                         py: 0.75,
//                         width: '200px',
//                         textAlign: 'center',
//                         transform: 'rotate(45deg)',
//                         position: 'absolute',
//                         top: '40px',
//                         right: '-40px',
//                         boxShadow: '0 3px 10px rgba(0,0,0,0.3)'
//                       }}
//                     >
//                       {prize.place}
//                     </Box>
//                   </Box>
                  
//                   <CardContent sx={{ p: 4, pt: 6, height: '100%', display: 'flex', flexDirection: 'column' }}>
//                     <MotionBox
//                       sx={{ 
//                         display: 'flex', 
//                         flexDirection: 'column', 
//                         alignItems: 'center',
//                         mb: 3
//                       }}
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ 
//                         type: "spring", 
//                         stiffness: 260, 
//                         damping: 20,
//                         delay: 0.2 + index * 0.1
//                       }}
//                     >
//                       <MotionAvatar
//                         sx={{
//                           width: 80,
//                           height: 80,
//                           bgcolor: `${prize.color}20`,
//                           color: prize.color,
//                           mb: 2,
//                           position: 'relative'
//                         }}
//                       >
//                         {prize.icon}
//                         <Box
//                           sx={{
//                             position: 'absolute',
//                             inset: 0,
//                             bgcolor: prize.color,
//                             borderRadius: '50%',
//                             filter: 'blur(20px)',
//                             opacity: 0.3
//                           }}
//                         />
//                       </MotionAvatar>
                      
//                       <Typography 
//                         variant="h5" 
//                         fontWeight="bold" 
//                         sx={{ color: prize.color, textAlign: 'center' }}
//                       >
//                         {prize.title}
//                       </Typography>
//                     </MotionBox>
                    
//                     <Divider sx={{ mb: 3, bgcolor: `${prize.color}30` }} />
                    
//                     <Box 
//                       component="ul" 
//                       sx={{ 
//                         p: 0, 
//                         m: 0, 
//                         listStyle: 'none',
//                         flex: 1,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'flex-start'
//                       }}
//                     >
//                       {prize.rewards.map((reward, i) => (
//                         <Box
//                           component="li"
//                           key={i}
//                           sx={{
//                             display: 'flex',
//                             alignItems: 'flex-start',
//                             gap: 2,
//                             mb: 2
//                           }}
//                         >
//                           <Avatar
//                             sx={{
//                               width: 32,
//                               height: 32,
//                               bgcolor: `${prize.color}20`,
//                               color: prize.color
//                             }}
//                           >
//                             {reward.icon}
//                           </Avatar>
//                           <Typography variant="body1" color="grey.300" sx={{ mt: 0.5 }}>
//                             {reward.text}
//                           </Typography>
//                         </Box>
//                       ))}
//                     </Box>
//                   </CardContent>
//                 </MotionCard>
//               </Grid>
//             ))}
//           </Grid>

//           {/* Footer Section */}
//           <MotionBox
//             variants={itemVariants}
//             sx={{ textAlign: 'center' }}
//           >
//             <Typography 
//               variant="body1" 
//               color="grey.400" 
//               sx={{ mb: 3, maxWidth: '800px', mx: 'auto' }}
//             >
//               Additionally, all participants will receive exclusive hackathon swag, certificates of participation, and
//               networking opportunities with industry leaders.
//             </Typography>
            
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   backgroundImage: 'linear-gradient(to right, #f44336, #ff9800)',
//                   fontWeight: 'bold',
//                   borderRadius: 2,
//                   px: 4,
//                   py: 1.5,
//                   color: 'white',
//                   '&:hover': {
//                     backgroundImage: 'linear-gradient(to right, #d32f2f, #f57c00)',
//                     boxShadow: '0 4px 20px rgba(244, 67, 54, 0.4)'
//                   }
//                 }}
//               >
//                 Register Now
//               </Button>
//             </motion.div>
//           </MotionBox>
//         </MotionBox>
//       </Container>
//     </Box>
//   );
// }

// export default Prizes;






"use client"
import { motion } from "framer-motion"
import { Trophy, DollarSign, Briefcase, Smartphone, Cloud, Monitor, Building, Wifi } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import ParticleComponent with no SSR to avoid hydration issues
// const ParticleComponent = dynamic(() => import("./particle-component"), { ssr: false })

export default function Prizes() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  const prizes = [
    {
      place: "1ST PLACE",
      title: "GRAND PRIZE",
      color: "#FFB800",
      icon: <Trophy className="w-12 h-12" />,
      rewards: [
        { icon: <DollarSign />, text: "$10,000 Cash Prize" },
        { icon: <Briefcase />, text: "Startup Incubation Opportunity" },
        { icon: <Smartphone />, text: "Latest AR/VR Development Kit" },
        { icon: <Cloud />, text: "1-Year Cloud Credits" },
      ],
    },
    {
      place: "2ND PLACE",
      title: "RUNNER-UP",
      color: "#C0C0C0",
      icon: <Trophy className="w-12 h-12" />,
      rewards: [
        { icon: <DollarSign />, text: "$5,000 Cash Prize" },
        { icon: <Monitor />, text: "AI Development Toolkit" },
        { icon: <Cloud />, text: "6-Month Cloud Credits" },
      ],
    },
    {
      place: "3RD PLACE",
      title: "THIRD PRIZE",
      color: "#CD7F32",
      icon: <Trophy className="w-12 h-12" />,
      rewards: [
        { icon: <DollarSign />, text: "$2,500 Cash Prize" },
        { icon: <Smartphone />, text: "Smart Home Devices" },
        { icon: <Cloud />, text: "3-Month Cloud Credits" },
      ],
    },
  ]

  const specialPrizes = [
    {
      place: "SPECIAL PRIZE",
      title: "BEST BUSINESS IDEA",
      color: "#4CAF50",
      icon: <Building className="w-12 h-12" />,
      rewards: [
        { icon: <DollarSign />, text: "$2,000 Cash Prize" },
        { icon: <Briefcase />, text: "Business Mentorship Program" },
        { icon: <Cloud />, text: "3-Month Business Suite Access" },
      ],
    },
    {
      place: "SPECIAL PRIZE",
      title: "BEST IoT PROJECT",
      color: "#2196F3",
      icon: <Wifi className="w-12 h-12" />,
      rewards: [
        { icon: <DollarSign />, text: "$2,000 Cash Prize" },
        { icon: <Smartphone />, text: "IoT Development Kit" },
        { icon: <Cloud />, text: "3-Month IoT Platform Credits" },
      ],
    },
  ]

  return (
    <div id="prizes" className="relative py-20 px-4 bg-[#0a0a0a] overflow-hidden">
      {/* Particles Background */}
      {/* <ParticleComponent /> */}

      {/* PCB Lines Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <PCBBackground />
      </div>

      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/tbg.png.svg?height=800&width=1600')` }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={titleVariants} className="text-center mb-16">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-flex items-center">
              <span className="w-8 h-1 bg-red-500 mr-4 inline-block" />
              PRIZES & AWARDS
              <span className="w-8 h-1 bg-red-500 ml-4 inline-block" />
            </motion.h2>

            <motion.p className="text-gray-400 max-w-3xl mx-auto">
              Exceptional innovation deserves exceptional rewards. Check out what you can win!
            </motion.p>
          </motion.div>

          {/* Main Prize Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {prizes.map((prize, index) => (
              <motion.div
                key={`main-${index}`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 25px ${prize.color}40`,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-[rgba(20,20,20,0.8)] backdrop-blur-md rounded-xl overflow-hidden relative border h-full min-h-[500px] flex flex-col"
                style={{ borderColor: `${prize.color}40` }}
              >
                {/* Prize ribbon */}
                <div className="absolute top-0 right-0 w-[150px] h-[150px] overflow-hidden z-10">
                  <div
                    className="py-3 w-[200px] text-center font-bold text-black absolute top-[40px] right-[-40px] transform rotate-45 shadow-md"
                    style={{ backgroundColor: prize.color }}
                  >
                    {prize.place}
                  </div>
                </div>

                <div className="p-8 pt-12 h-full flex flex-col">
                  <motion.div
                    className="flex flex-col items-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2 + index * 0.1,
                    }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-4 relative"
                      style={{ backgroundColor: `${prize.color}20`, color: prize.color }}
                    >
                      {prize.icon}
                      <div
                        className="absolute inset-0 rounded-full opacity-30 blur-xl"
                        style={{ backgroundColor: prize.color }}
                      />
                    </motion.div>

                    <h3 className="text-xl font-bold text-center" style={{ color: prize.color }}>
                      {prize.title}
                    </h3>
                  </motion.div>

                  <div className="mb-6 h-px" style={{ backgroundColor: `${prize.color}30` }} />

                  <ul className="p-0 m-0 list-none flex-1 flex flex-col justify-start">
                    {prize.rewards.map((reward, i) => (
                      <li key={i} className="flex items-start gap-4 mb-4">
                        <div
                          className="w-8 h-8 rounded flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${prize.color}20`, color: prize.color }}
                        >
                          {reward.icon}
                        </div>
                        <p className="text-gray-300 mt-1">{reward.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Special Prize Cards - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-12 justify-center max-w-4xl mx-auto">
            {specialPrizes.map((prize, index) => (
              <motion.div
                key={`special-${index}`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 25px ${prize.color}40`,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-[rgba(20,20,20,0.8)] backdrop-blur-md rounded-xl overflow-hidden relative border h-full min-h-[500px] flex flex-col"
                style={{ borderColor: `${prize.color}40` }}
              >
                {/* Prize ribbon */}
                <div className="absolute top-0 right-0 w-[150px] h-[150px] overflow-hidden z-10">
                  <div
                    className="py-3 w-[200px] text-center font-bold text-black absolute top-[40px] right-[-40px] transform rotate-45 shadow-md"
                    style={{ backgroundColor: prize.color }}
                  >
                    {prize.place}
                  </div>
                </div>

                <div className="p-8 pt-12 h-full flex flex-col">
                  <motion.div
                    className="flex flex-col items-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2 + index * 0.1,
                    }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-4 relative"
                      style={{ backgroundColor: `${prize.color}20`, color: prize.color }}
                    >
                      {prize.icon}
                      <div
                        className="absolute inset-0 rounded-full opacity-30 blur-xl"
                        style={{ backgroundColor: prize.color }}
                      />
                    </motion.div>

                    <h3 className="text-xl font-bold text-center" style={{ color: prize.color }}>
                      {prize.title}
                    </h3>
                  </motion.div>

                  <div className="mb-6 h-px" style={{ backgroundColor: `${prize.color}30` }} />

                  <ul className="p-0 m-0 list-none flex-1 flex flex-col justify-start">
                    {prize.rewards.map((reward, i) => (
                      <li key={i} className="flex items-start gap-4 mb-4">
                        <div
                          className="w-8 h-8 rounded flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${prize.color}20`, color: prize.color }}
                        >
                          {reward.icon}
                        </div>
                        <p className="text-gray-300 mt-1">{reward.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Section */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
              Additionally, all participants will receive exclusive hackathon swag, certificates of participation, and
              networking opportunities with industry leaders.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 font-bold rounded-lg px-8 py-3 text-white hover:from-red-600 hover:to-orange-600 shadow-lg hover:shadow-red-500/40 transition-all">
                Register Now
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// PCB Lines Background Component with orange circuit patterns
function PCBBackground() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 bg-black">
      <defs>
        <pattern id="pcb-grid" width="100" height="100" patternUnits="userSpaceOnUse">
          {/* Horizontal lines */}
          <path d="M 0 25 L 100 25" stroke="#FF6B00" strokeWidth="0.5" fill="none" />
          <path d="M 0 50 L 100 50" stroke="#FF6B00" strokeWidth="0.5" fill="none" />
          <path d="M 0 75 L 100 75" stroke="#FF6B00" strokeWidth="0.5" fill="none" />

          {/* Vertical lines */}
          <path d="M 25 0 L 25 100" stroke="#FF6B00" strokeWidth="0.5" fill="none" />
          <path d="M 50 0 L 50 100" stroke="#FF6B00" strokeWidth="0.5" fill="none" />
          <path d="M 75 0 L 75 100" stroke="#FF6B00" strokeWidth="0.5" fill="none" />

          {/* Circuit elements */}
          <circle cx="25" cy="25" r="3" fill="#FF6B00" />
          <circle cx="75" cy="75" r="3" fill="#FF6B00" />
          <circle cx="50" cy="50" r="3" fill="#FF6B00" />

          {/* Circuit paths */}
          <path d="M 25 25 L 50 25 L 50 50" stroke="#FF6B00" strokeWidth="1.5" fill="none" />
          <path d="M 50 50 L 75 50 L 75 75" stroke="#FF6B00" strokeWidth="1.5" fill="none" />
          <path d="M 25 25 L 25 75 L 50 75" stroke="#FF6B00" strokeWidth="1.5" fill="none" />

          {/* Additional circuit elements */}
          <rect x="47" y="47" width="6" height="6" fill="#FF6B00" />
          <rect x="22" y="22" width="6" height="6" fill="#FF6B00" />
          <rect x="72" y="72" width="6" height="6" fill="#FF6B00" />
        </pattern>
      </defs>

      {/* Apply the pattern */}
      <rect width="100%" height="100%" fill="url(#pcb-grid)" />

      {/* Animated elements */}
      <motion.circle
        cx="25%"
        cy="30%"
        r="5"
        fill="#FF6B00"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          r: [5, 8, 5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.circle
        cx="75%"
        cy="65%"
        r="5"
        fill="#FF6B00"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          r: [5, 8, 5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <motion.circle
        cx="50%"
        cy="80%"
        r="5"
        fill="#FF6B00"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          r: [5, 8, 5],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 2,
        }}
      />

      {/* Pulse effect along paths */}
      <motion.circle
        cx="0"
        cy="0"
        r="3"
        fill="#FF9D4D"
        initial={{
          cx: "25%",
          cy: "25%",
          opacity: 0,
        }}
        animate={{
          cx: ["25%", "50%", "50%"],
          cy: ["25%", "25%", "50%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.circle
        cx="0"
        cy="0"
        r="3"
        fill="#FF9D4D"
        initial={{
          cx: "50%",
          cy: "50%",
          opacity: 0,
        }}
        animate={{
          cx: ["50%", "75%", "75%"],
          cy: ["50%", "50%", "75%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 2,
        }}
      />

      <motion.circle
        cx="0"
        cy="0"
        r="3"
        fill="#FF9D4D"
        initial={{
          cx: "25%",
          cy: "25%",
          opacity: 0,
        }}
        animate={{
          cx: ["25%", "25%", "50%"],
          cy: ["25%", "75%", "75%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 1,
        }}
      />
    </svg>
  )
}

