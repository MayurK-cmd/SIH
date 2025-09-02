

// 🔹 Exams after 10th
exports.getExamsAfter10th = (req, res) => {
  const data = {
    governmentJobAndRecruitment: {
      SSC_MTS: "Entry-level posts in central government offices.",
      RRB_GroupD: "Technical and non-technical staff positions in Indian Railways.",
      IndianArmy: "Soldier (General Duty/Tradesman) recruitment in Defence sector.",
      IndianNavy: "Matric Recruit (MR): Entry as Sailor/Technician.",
      StatePolice: "Constable/Home Guard: Entry-level police posts (state exam).",
      ForestGuard: "Forest Guard/Technician roles in forestry and wildlife.",
      PSU_Helper: "Public Sector Units helper/technician roles (ONGC, BHEL, DRDO, ISRO) often requiring ITI/technical skill."
    },
    competitiveAndScholarship: {
      NTSE: "National-level scholarship for talented students.",
      KVPY: "Research fellowships for aspiring scientists (now under INSPIRE).",
      Olympiads: "Science, Math, English, Cyber, GK (SOF/ISEA).",
      TalentExams: "All India Mathematics/Science Talent Exams at national/state levels.",
      JNVST: "Navodaya Vidyalaya admission test for gifted students."
    },
    polytechnicAndDiploma: {
      statePolytechnic: "State Polytechnic Entrance Exams (e.g., JEECUP, Delhi CET, AP POLYCET).",
      ITI: "ITI Entrance: Vocational courses (Electrician, Mechanic, Computer Operator, etc.).",
      IMU_CET: "Indian Maritime University CET for Marine Engineering/Navigational Science (some after 12th, some after 10th)."
    },
    specializedExams: {
      sainikMilitary: "Sainik School & Military School Admissions (defence-prep).",
      RMO: "Regional Mathematics Olympiad, qualifying for national rounds.",
      biotechOlympiad: "National Biotechnology Olympiad for biosciences."
    }
  };

  res.json(data);
};

// 🔹 Exams after 12th
exports.getExamsAfter12th = (req, res) => {
  const data = {
    science: {
      engineering: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "COMEDK UGET", "SRMJEEE"],
      medical: ["NEET (MBBS, BDS, BAMS, BHMS, BUMS)", "AIIMS", "JIPMER", "AFMC"],
      architecture: ["NATA", "JEE Main (B.Arch)"],
      scienceDegrees: ["CUET (central universities)", "State-level entrance exams"],
      agriculture: ["ICAR AIEEA"],
      defence: ["NDA (PCM required for Air Force & Navy)"]
    },
    commerce: {
      accountancy: ["CA Foundation (CPT)", "CS Foundation"],
      management: ["IPMAT", "DU JAT", "SET", "CUET", "NPAT", "CLAT (for BBA LLB)", "State-level management exams"],
      law: ["CLAT", "AILET", "State-level Law Exams"],
      ugManagement: ["BBA/BMS entrance exams", "University-specific tests"]
    },
    arts: {
      law: ["CLAT", "AILET", "State-level Law Exams"],
      design: ["NIFT (Fashion)", "NID (Design)"],
      hotelManagement: ["NCHMCT JEE"],
      liberalArts: ["CUET", "University-specific exams"],
      mediaAndSocialWork: ["College/university-specific entrance exams"]
    },
    common: {
      university: ["CUET (for central & state universities)"],
      abroad: ["SAT (for studying abroad)"],
      govtJobs: ["SSC CHSL", "RRB NTPC", "State PSC/Clerk/Constable Exams"],
      defence: ["NDA", "Indian Armed Forces (subject-specific eligibility)"]
    }
  };

  res.json(data);
};
