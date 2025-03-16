import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import TiltedCard from './TiltedCard';
import FloatingParticles from './FloatingParticles';

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('Organizers');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  // Faculty coordinators data
  const facultyCoordinators = [
    {
      name: 'Dr. Payal Bansal',
      image: '/placeholder-user.jpg',
      role: 'Faculty Coordinator',
      linkedin: 'https://www.linkedin.com/in/dr-payal-bansal',
      twitter: 'https://twitter.com/dr-payal-bansal'
    },
    {
      name: 'Dr. Dinesh Goyal',
      image: '/placeholder-user.jpg',
      role: 'Faculty Coordinator',
      linkedin: 'https://www.linkedin.com/in/dr-dinesh-goyal',
      twitter: 'https://twitter.com/dr-dinesh-goyal'
    }
  ];

  // Team members data
  const teamMembers = {
    'Organizers': [
      { name: 'Lead Organizer', image: '/placeholder-user.jpg', role: 'Team Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Co-Organizer', image: '/placeholder-user.jpg', role: 'Co-Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' }
    ],
    'Tech': [
      { name: 'Tech Lead', image: '/placeholder-user.jpg', role: 'Lead Developer', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Tech Co-Lead', image: '/placeholder-user.jpg', role: 'Backend Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' }
    ],
    'PR': [
      { name: 'PR Manager', image: '/placeholder-user.jpg', role: 'PR Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'PR Coordinator', image: '/placeholder-user.jpg', role: 'Social Media Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' }
    ],
    'Designing': [
      { name: 'Design Lead', image: '/placeholder-user.jpg', role: 'UI/UX Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Design Co-Lead', image: '/placeholder-user.jpg', role: 'Graphics Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' }
    ],
    'Content': [
      { name: 'Content Head', image: '/placeholder-user.jpg', role: 'Content Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Content Manager', image: '/placeholder-user.jpg', role: 'Editor', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' }
    ]
  };

  const CardContent = ({ member }) => (
    <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center">
      <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
        {member.name}
      </h3>
      <p className="text-gray-400 mb-4">{member.role}</p>
      <div className="flex gap-3">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 
            text-black font-medium transition-all duration-300 hover:from-yellow-500 hover:to-orange-500
            hover:shadow-lg hover:shadow-orange-500/30"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          href={member.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 
            text-black font-medium transition-all duration-300 hover:from-yellow-500 hover:to-orange-500
            hover:shadow-lg hover:shadow-orange-500/30"
        >
          <FaXTwitter className="text-xl" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-orange-950/20 text-white px-4 py-16 relative overflow-hidden">
      <FloatingParticles />
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 grid grid-cols-2 -z-10 pointer-events-none">
          <div className="bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-3xl h-96 w-96 -translate-y-1/2"></div>
          <div className="bg-gradient-to-bl from-yellow-500/5 to-transparent rounded-full blur-3xl h-96 w-96 translate-x-1/2"></div>
        </div>

        {/* Faculty Coordinators Section */}
        <motion.div
          className="mb-24"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Faculty Coordinators
          </h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
          >
            {facultyCoordinators.map((faculty, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltedCard
                  imageSrc={faculty.image}
                  altText={faculty.name}
                  captionText={`${faculty.name} - ${faculty.role}`}
                  containerHeight="400px"
                  imageHeight="300px"
                  imageWidth="300px"
                  overlayContent={<CardContent member={faculty} />}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Core Team Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Meet the Core Team
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(teamMembers).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
                  ${activeTab === tab 
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black shadow-lg shadow-orange-500/20' 
                    : 'bg-orange-950/20 text-gray-400 hover:text-white hover:bg-orange-900/20'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Team Members Content */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="absolute inset-0"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
              >
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                  {teamMembers[activeTab].map((member, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <TiltedCard
                        imageSrc={member.image}
                        altText={member.name}
                        captionText={`${member.name} - ${member.role}`}
                        containerHeight="400px"
                        imageHeight="300px"
                        imageWidth="300px"
                        overlayContent={<CardContent member={member} />}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamSection;