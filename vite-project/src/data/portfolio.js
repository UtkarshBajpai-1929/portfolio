export const portfolio = {
  name: 'Utkarsh Bajpai',
  initials: 'UB',
  role: 'Civil Engineering Student @ IIT Dhanbad | Full Stack Developer | Problem Solver',
  subtitle:
    'Building scalable applications, solving real-world problems, and continuously learning modern technologies.',
  description:
    'I am a Civil Engineering student at IIT Dhanbad with a strong interest in software development, scalable systems, and problem-solving. I enjoy building full-stack applications, exploring modern technologies, and continuously improving my engineering and development skills.',
  profileImage: '/utkarsh-profile.jpeg',
  resume: '/Utkarsh_Bajpai_Resume.pdf',
  socials: {
    github: 'https://github.com/UtkarshBajpai-1929',
    linkedin: '',
    email: 'utkarshbajpai632@gmail.com',
    resume: '/Utkarsh_Bajpai_Resume.pdf',
  },
  navItems: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],
  about: [
    'I am currently pursuing B.Tech in Civil Engineering at IIT Dhanbad while actively building expertise in software development and scalable systems.',
    'My interest lies in full-stack development, backend engineering, and solving practical problems through technology. I enjoy building applications that improve user experiences and address real-world needs.',
    'I strongly believe in learning by building, which is why I consistently work on projects that challenge my technical thinking and strengthen my development skills.',
    'Currently, I am focused on deepening my understanding of software engineering, full-stack development, and data structures & algorithms while preparing for software engineering internships.',
  ],
  education: {
    institution: 'Indian Institute of Technology (IIT) Dhanbad',
    degree: 'Bachelor of Technology (B.Tech)',
    branch: 'Civil Engineering',
    cgpa: '8.6',
    status: 'Engineering Student',
    goal: 'Software Engineering Internship (2026)',
  },
  skills: [
    {
      category: 'Programming Languages',
      icon: 'Code2',
      items: ['C++', 'C', 'Python', 'JavaScript'],
    },
    {
      category: 'Frontend Development',
      icon: 'PanelsTopLeft',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React.js','Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Backend Development',
      icon: 'ServerCog',
      items: ['Node.js', 'Express.js','Next.js', 'REST APIs', 'JWT Authentication', 'Authentication & Authorization', 'Role Based Access Control'],
    },
    {
      category: 'Database & Cloud',
      icon: 'Database',
      items: ['MongoDB', 'Cloudinary', 'PostgreSQL', 'Prisma ORM', 'Mongoose'],
    },
    {
      category: 'File Uploads',
      icon: 'UploadCloud',
      items: ['Multer'],
    },
    {
      category: 'Payments & Integrations',
      icon: 'CreditCard',
      items: ['Stripe', 'Razorpay'],
    },
    {
      category: 'Developer Tools',
      icon: 'Wrench',
      items: ['Git', 'GitHub', 'Postman', 'VS Code'],
    },
    {
      category: 'Core Concepts',
      icon: 'Brain',
      items: [
        'Data Structures & Algorithms',
        'Full Stack Development',
        'Backend Architecture',
        'API Design',
        'Authentication Systems',
        'State Management',
        'Scalable Systems',
        'Problem Solving',
      ],
    },
  ],
  projects: [
       {
      title: 'EduBridge',
      tagline: 'Scalable Digital School Learning Platform',
      description:
        'A scalable school learning platform designed to enhance digital education experiences through video-based learning and doubt resolution systems. The architecture is designed to support future scalability with attendance tracking, academic achievements, notices, and school management functionality.',
      features: [
        'Video learning platform',
        'Doubt resolution system',
        'Scalable architecture',
        'Expandable academic modules',
        'Student-centric learning experience',
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS', 'Cloudinary'],
      highlight: 'Scalability thinking and product vision.',
      links: {
        github: 'https://github.com/UtkarshBajpai-1929/EduBridge',
        live: 'https://edubridge-lemon-iota.vercel.app/',
      },
    },
    {
      title: 'AI Based Study Planner',
      tagline: 'AI Powered Productivity & Study Planning Platform',
      description:
        'A full-stack AI-powered study planning platform designed to generate personalized study schedules based on user goals and academic progress. The platform helps users improve productivity through personalized planning, progress tracking, streak maintenance, and dashboard analytics.',
      features: [
        'Personalized study schedule generation',
        'Progress tracking system',
        'Daily streak maintenance',
        'Authentication system',
        'Dashboard analytics',
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Authentication'],
      highlight: 'Practical problem-solving and productivity-focused engineering.',
      links: {
        github: 'https://github.com/UtkarshBajpai-1929/study-planner',
        live: 'https://study-planner-khaki-zeta.vercel.app/',
      },
    },
    {
      title: 'Civil Design Toolkit',
      tagline: 'Concrete Mix Design & Estimation Toolkit',
      description:
        'A frontend-based civil engineering utility application designed to simplify concrete mix design calculations and material estimation. The platform calculates concrete mix proportions and generates quantity estimates to support material ordering, making the process more efficient and practical for engineering use cases.',
      features: [
        'Concrete mix design calculator',
        'Material quantity estimation',
        'Order estimation support',
        'Civil engineering utility tools',
        'Clean and intuitive interface',
      ],
      techStack: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
      highlight: 'Domain-driven problem solving by combining civil engineering knowledge with software development.',
      links: {
        github: 'https://github.com/UtkarshBajpai-1929/mix-designer',
        live: 'https://mix-designer-zxvx.vercel.app/',
      },
    },
    {
      title: 'Ecommerce Backend System',
      tagline: 'Scalable Ecommerce Backend Architecture',
      description:
        'A scalable backend architecture for an ecommerce platform focused on secure authentication, payments, product management, and efficient order handling.',
      features: [
        'JWT Authentication',
        'Role-based access (Admin/User)',
        'Stripe/Razorpay integration',
        'Cart & Order Management',
        'Product Management APIs',
        'Cloudinary image uploads',
        'Security & Rate Limiting',
        'REST API Architecture',
      ],
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'Stripe', 'Razorpay', 'Multer'],
      highlight: 'Backend engineering and scalable API architecture.',
      links: {
        github: 'https://github.com/UtkarshBajpai-1929/ecommerce',
        live: 'https://ecommerce-x3d7.onrender.com/',
      },
    },
  ],
  experience: {
    title: 'Mentorship',
    description:
      'Mentored and guided school students in Mathematics and Science, helping strengthen conceptual understanding and problem-solving ability.',
  },
  beyondTech: ['Cricket', 'Learning Piano', 'Writing / Poetry'],
  recruiterSignals: ['Strong Problem Solver', 'Serious Builder', 'Fast Learner with Engineering Mindset'],
}
