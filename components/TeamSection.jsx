import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import TiltedCard from './TiltedCard';
import FloatingParticles from './FloatingParticles';

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('Tech');

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
      name: 'Dr Dinesh Goyal',
      image: '/placeholder-user.jpg',
      role: 'Faculty Coordinator',
      linkedin: 'https://www.linkedin.com/in/dr-payal-bansal',
      twitter: 'https://twitter.com/dr-payal-bansal'
    },
    {
      name: 'Dr Payal Bansal',
      image: '/placeholder-user.jpg',
      role: 'Faculty Coordinator',
      linkedin: 'https://www.linkedin.com/in/dr-dinesh-goyal',
      twitter: 'https://twitter.com/dr-dinesh-goyal'
    }
  ];

  // Team members data
  const teamMembers = {
    'Organizers': [
      { name: 'Hardik Jain', image: '/team/hardik-jain.jpg', role: 'Team Lead', linkedin: 'https://www.linkedin.com/in/jainhardik06/', twitter: 'https://x.com/jainhardik06' },
      { name: 'Sarthak Chopra', image: '/team/sarthak-chopra.jpg', role: 'Co-Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Raghav Sharma', image: '/team/raghav-sharma.jpg', role: 'Co-Lead', linkedin: 'https://www.linkedin.com/in/raghavsharma098?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', twitter: 'https://x.com/raghav_sharma34?s=21' },
    ],
    'Tech': [
      { name: 'Aaditya Vinayak', image: '/team/Aadiii.jpg', role: 'Tech Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Sahaj Jain', image: '/team/kuldeep.jpg', role: 'Supporting Developer', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Siddhika Agrawal', image: '/team/siddhika.jpg', role: 'Developer', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Vibhor Mathur', image: '/team/vibhor-mathur.jpg', role: 'Tech Team', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Ankit Rao', image: '/team/ankit-rao.jpg', role: 'Tech Team', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
    ],
    'PR': [
      { name: 'Palak Modi', image: '/team/palak-modi.jpg', role: 'PR Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Kuldeep Soni', image: '/team/kuldeep.jpg', role: 'PR Co-Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Dishu Choudhary', image: '/team/dishu-choudhary.jpg', role: 'PR Team', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Ujjwal Dubey', image: '/team/ujjwal-dubey.jpg', role: 'PR Team', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      
    ],
    'Designing': [
      { name: 'Suhani Bansal', image: '/team/suhani-bansal.jpg', role: 'UI/UX Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Arpit Garg', image: '/team/copy of arpit.jpg', role: 'Graphics Designer', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Krati Saini', image: '/team/krati-saini.jpg', role: 'Graphics Designer', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' }
    ],
    'Content': [
      { name: 'Ridhi Jain', image: '/placeholder-user.jpg', role: 'Content Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Khushi Gupta', image: '/placeholder-user.jpg', role: 'Content Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Himanshu Gaud', image: '/team/himanshu-gaud.jpg', role: 'Content Team', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Palak Agarwal', image: '/team/palak-agrawal.jpg', role: 'Content Team', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
    ],
    'Advisory': [
      { name: 'Kartik Mehta', image: '/team/kartik-mehta.jpg', role: 'Technical Advisor', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Aditya Pareek', image: '/placeholder-user.jpg', role: 'Advisory', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Kartikey Sharma', image: '/team/kartikey-sharma.jpg', role: 'Advisory', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Mayank Saini', image: '/team/mayank-saini.jpg', role: 'Advisory', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Manish Vaishnav', image: '/placeholder-user.jpg', role: 'Advisory', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Himani Jangid', image: '/team/himani jangid.jpg', role: 'Advisory', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Naman Sharma', image: '/team/naman-sharma.jpg', role: 'Advisory', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' }
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
    <div id='team' className="relative min-h-screen bg-gradient-to-b from-black via-black to-orange-950/20 text-white px-4 py-32 overflow-hidden">
      {/* Background container */}
      <div className="absolute inset-0">
        <FloatingParticles />
      </div>

      <div className="max-w-7xl mx-auto relative space-y-32">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {facultyCoordinators.map((faculty, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltedCard
                  imageSrc={faculty.image}
                  altText={faculty.name}
                  captionText={`${faculty.name} - ${faculty.role}`}
                  containerHeight="300px"
                  imageHeight="200px"
                  imageWidth="200px"
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
          className="mb-32"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Meet the Core Team
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
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
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="w-full"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
              >
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pb-12"
                >
                  {teamMembers[activeTab].map((member, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <TiltedCard
                        imageSrc={member.image}
                        altText={member.name}
                        captionText={`${member.name} - ${member.role}`}
                        containerHeight="300px"
                        imageHeight="200px"
                        imageWidth="200px"
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