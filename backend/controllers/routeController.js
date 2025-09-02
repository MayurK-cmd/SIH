exports.getAfter10th = (req, res) => {
  const data = {
    majorAcademicStreams: {
      Science: "Includes subjects like Physics, Chemistry, Biology, and Mathematics; leads to careers in engineering, medicine, research, and technology.",
      Commerce: "Focuses on Business Studies, Accountancy, Economics, and Mathematics; pathways include CA, CS, banking, and management.",
      Arts: "Covers History, Geography, Political Science, Psychology, and Sociology; suited for law, journalism, public administration, and teaching."
    },
    diplomaAndSkillCourses: {
      engineering: [
        "Mechanical", "Civil", "Electrical", "Electronics", "Automobile", "Computer", "Chemical"
      ],
      medicalAndParamedical: [
        "Medical Laboratory Technology (MLT)", "Nursing", "Radiology", "Pharmacy", "Occupational Therapy"
      ],
      computerAndIT: [
        "Diploma in Computer Applications", "Information Technology"
      ],
      designAndMedia: [
        "Fashion Design", "Interior Design", "Animation & Multimedia", "Photography", "Journalism"
      ],
      businessAndCommerce: [
        "Accounting", "Business Administration", "Retail Management", "Marketing"
      ],
      hospitalityAndTourism: [
        "Hotel Management", "Food Technology"
      ],
      vocationalTraining: [
        "Garment Technology", "Leather Technology", "Library Sciences", "Textile Processing"
      ]
    },
    specializedCareerCourses: [
      "Company Secretary (CS)", 
      "Chartered Accountancy (CA)", 
      "Cost and Management Accountancy (CMA)",
      "Digital Marketing",
      "Entrepreneurship",
      "Animation & VFX",
      "Post Production"
    ]
  };

  res.json(data);
};

exports.getAfter12th = (req, res) => {
  const data = {
    science: {
      engineering: "Bachelor of Technology (B.Tech)/Engineering (B.E): For students with Physics, Chemistry, and Mathematics (PCM).",
      medicine: "MBBS/BDS/BAMS/BHMS: Medicine, Dental, Ayurveda, Homeopathy for students with Biology (PCB).",
      bsc: "B.Sc. (Pure & Applied Sciences): Physics, Chemistry, Mathematics, Biology, Environmental Science, Biotechnology.",
      professionalCourses: "Pharmacy, Nursing, Physiotherapy, Agriculture, Veterinary.",
      computerScience: "BCA/B.Sc. Computer Science: IT and software for science students.",
      architecture: "B.Arch: For those interested in building design and construction.",
      others: ["Forensics", "Food Technology", "Nutrition", "Data Science", "Artificial Intelligence"]
    },
    commerce: {
      bcom: "Bachelor of Commerce (B.Com/B.Com Hons): Core accounting, finance, taxation, and business law.",
      management: "BBA/BMS: Management, entrepreneurship, business operations.",
      professional: "CA, CMA, CS: Professional accountancy and corporate governance.",
      economics: "Bachelor of Economics (BE): Economics analysis, finance, policy.",
      law: "BA LLB / BBA LLB: Integrated law programs after commerce.",
      computerApplications: "BCA: Software and IT suited for commerce students.",
      others: ["Certified Financial Planner (CFP)", "International Financial Reporting Standards (IFRS)", "US CMA"]
    },
    arts: {
      ba: "Bachelor of Arts (BA): Humanities, Social Sciences, Literature, Languages.",
      fineArts: "BFA, Design, Visual Arts: For creative and design-oriented careers.",
      journalism: "BJMC, Media, Event Management: Media, communications, PR, and events.",
      socialWork: "BSW: Social services, NGOs, welfare.",
      creativeIndustries: "Hotel Management, Fashion Design, Event Management.",
      law: "BA LLB: Integrated law programs.",
      diploma: ["Photography", "Digital Marketing", "Education", "Animation"]
    }
  };

  res.json(data);
};

