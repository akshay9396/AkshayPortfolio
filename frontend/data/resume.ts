// ---------------- Interfaces ----------------
export interface Experience {
  role: string;
  type: string;
  company: string;
  location: string;
  period: string;
  project: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  school: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
  coursework: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  period: string;
  bullets: string[];
  tech: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  details: string;
  period: string;
  topics: string[];
}

export interface ImpactItem {
  value: number;
  unit: string;
  label: string;
}

export interface ActivityItem {
  title: string;
  organization: string;
  date: string;
}

export interface ExtracurricularItem {
  role: string;
  organization: string;
  details: string;
}

export interface CommunityItem {
  description: string;
  date: string;
}

// ---------------- Resume Data ----------------
export const resume = {
  name: "Akshay Pralhad Kanade",
  contact: {
    address: "Prüfeninger Strasse 61, 93049 Regensburg, Germany",
    phone: "+49 15215423232",
    email: "akshaykanade77@gmail.com",
    linkedin: "https://www.linkedin.com/in/akshay-kanade-746398122",
    portfolio: "https://akshay-kanade.vercel.app/"
  },

  impact: <ImpactItem[]>[
    { value: 6, unit: "+", label: "Years of Experience" },
    { value: 70, unit: "%", label: "Inference Throughput Boost" },
    { value: 50, unit: "%", label: "Delivery Cycle Reduction" },
     { value: 5, unit: "+", label: "Automated Application Steps" },
  ],

  experience: <Experience[]>[
    {
      role: "Independent AI/ML Engineer",
      type: "Independent",
      company: "Projects & Technical Development",
      location: "Regensburg, Germany",
      period: "Nov 2025 – Present",
      project: "",
      bullets: [
        "Built an AI-powered Product Recognition Dashboard using React, TypeScript, n8n, and Groq LLM, combining free-form product descriptions, fuzzy matching, and conversational AI",
        "Automated 5+ manual steps in the job application process using AI agents and n8n, including company research, recruiter selection, language detection, personalized email generation, CV selection, and application tracking",
        "Developed AI Incident Commander, an autonomous LLM agent with dynamic tool execution, human approval workflows, and memory-based learning for automated incident response",
        "Built and experimented with 2+ GenAI/RAG applications using embeddings, vector search, LLMs, and FastAPI, while continuing professional development through German B1 studies and AI/ML certifications"
      ]
    },
    {
      role: "Software Developer (AI/ML Engineer)",
      type: "Full-time",
      company: "OneVision Software AG",
      location: "Regensburg, Germany",
      period: "Jan 2024 – Nov 2025",
      project: "Vision AI Platform",
      bullets: [
        "Designed end-to-end perception pipelines from ingestion to deployment, reducing delivery cycles by 50%",
        "Boosted inference throughput by 70% through TensorRT tuning, ONNX export, and mixed-precision execution",
        "Benchmarked CNNs, Vision Transformers, and foundation models, improving model-selection efficiency by 40%",
        "Introduced explainability and validation layers, reducing model-related support queries by 30%",
        "Collaborated with platform, DevOps, and product teams to deploy models via CI/CD with weekly production releases"
      ]
    },
    {
      role: "Working Student & Master Thesis",
      type: "Working Student",
      company: "AVL Software and Functions GmbH",
      location: "Regensburg, Germany",
      period: "Oct 2022 – Dec 2023",
      project: "ADAS Perception System",
      bullets: [
        "Built containerized object-detection pipelines for ARM platforms, reducing inference latency by 50%",
        "Reduced model size by 40–60% using pruning and quantization for real-time edge deployment",
        "Automated ROS bag processing and dataset annotation using Python and SQL, saving 30+ hours/month",
        "Validated LiDAR and radar sensor outputs for ADAS perception accuracy across diverse driving scenarios"
      ]
    },
    {
      role: "Data Analyst",
      type: "Full-time",
      company: "Accenture",
      location: "Mumbai, India",
      period: "Jan 2019 – Aug 2021",
      project: "Enterprise Analytics Platform",
      bullets: [
        "Designed ETL workflows and automated reporting systems, improving processing efficiency by 65%",
        "Developed SQL-driven data pipelines supporting analytics and ML initiatives",
        "Translated raw enterprise data into actionable business insights through cross-functional collaboration"
      ]
    }
  ],

  education: <Education[]>[
    {
      institution: "Hochschule Ravensburg-Weingarten",
      school: "Electrical Engineering & Embedded Systems",
      degree: "Master of Engineering – Electrical Engineering and Embedded Systems",
      location: "Weingarten, Germany",
      period: "Sep 2021 – Oct 2023",
      gpa: "",
      coursework: [
        "Computer Vision",
        "Machine Learning",
        "Embedded Systems",
        "Digital Signal Processing",
        "Autonomous Systems",
        "Sensor Fusion"
      ]
    },
    {
      institution: "Savitribai Phule Pune University",
      school: "Electronics & Telecommunication",
      degree: "Bachelor of Engineering – Electronics and Telecommunication",
      location: "Pune, India",
      period: "May 2014 – Jun 2018",
      gpa: "",
      coursework: [
        "Digital Electronics",
        "Signal Processing",
        "Microcontrollers",
        "Communication Systems",
        "VLSI Design",
        "Control Systems"
      ]
    }
  ],

  skills: {
  languages: ["English (C1)", "German (A2 - currently learning B1)"] as string[],

  databases: ["SQL", "FAISS", "Vector Databases"] as string[],

  programmingLanguages: [
    "Python", "C++", "C", "SQL", "JavaScript", "TypeScript", "HTML5", "CSS3", "JSON"
  ] as string[],

  mlFrameworks: [
    "PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face Transformers"
  ] as string[],

  computerVision: [
    "Object Detection", "Image Segmentation", "Image Classification", "Image Processing",
    "OpenCV", "YOLO", "Faster R-CNN", "U-Net", "Detectron2", "Albumentations",
    "Camera Calibration", "Dataset Curation", "Data Augmentation"
  ] as string[],

  ml: [
    "Supervised Learning", "Unsupervised Learning", "Deep Learning", "Transfer Learning",
    "Representation Learning", "Model Fine-Tuning", "Classification", "Regression",
    "Feature Engineering", "Model Evaluation", "Model Validation", "CNNs",
    "Transformers", "Vision Transformers (ViTs)", "Foundation Models"
  ] as string[],

  genai: [
    "Large Language Models (LLMs)", "Hugging Face Transformers", "Prompt Engineering",
    "Structured LLM Outputs", "RAG", "Embeddings", "Semantic Search",
    "Vector Databases", "FAISS", "Conversational AI", "LLM Evaluation", "Groq API"
  ] as string[],

  agentic: [
    "AI Agents", "Agentic Workflows", "n8n", "Workflow Automation",
    "Function Calling", "Structured Data Extraction", "LLM-powered Applications",
    "REST API Integration", "JSON-based Workflows"
  ] as string[],

  cloud: [
    "AWS (S3, EC2, SageMaker)", "Azure ML", "Google Cloud Platform",
    "Linux", "Windows", "Cloud-Based ML Deployment", "Edge-to-Cloud Architecture"
  ] as string[],

  devops: [
    "MLflow", "DVC", "Docker", "Kubernetes", "Jenkins", "CI/CD", "FastAPI",
    "Git", "GitHub", "VS Code", "PyCharm", "Jupyter", "PowerShell",
    "Microsoft 365", "Postman", "Docker Desktop"
  ] as string[],

  web: [
    "React.js", "Next.js", "Vite", "Tailwind CSS",
    "Responsive Web Applications", "REST API Development"
  ] as string[],

  optimization: [
    "ONNX", "TensorRT", "Pruning", "Quantization", "Mixed Precision",
    "Inference Optimization", "Model Compression", "CPU/GPU Optimization",
    "NVIDIA Jetson", "ARM-Based Deployment", "Real-Time Inference", "Edge AI"
  ] as string[],

  dataEngineering: [
    "ETL Pipelines", "Data Cleaning", "Data Transformation", "Data Validation",
    "Data Quality", "Exploratory Data Analysis (EDA)", "Statistical Analysis",
    "Pandas", "NumPy", "Scikit-learn"
  ] as string[],

  autonomousSystems: [
    "ADAS", "LiDAR Processing", "Radar Data Processing", "Sensor Validation",
    "Sensor Fusion", "ROS", "Vehicle Perception", "Object Tracking",
    "Time-Series Analysis", "Embedded AI"
  ] as string[],

  annotation: [
    "CVAT", "Label Studio", "Data Annotation", "Annotation Quality Control",
    "Dataset Validation", "Image Preprocessing"
  ] as string[],

  visualization: [
    "Power BI", "Tableau", "Matplotlib", "Seaborn",
    "Interactive Dashboards", "KPI Reporting", "Automated Reporting", "Data Storytelling"
  ] as string[],

  aiAssistedDevelopment: [
    "GitHub Copilot", "ChatGPT", "Claude", "Google Gemini",
    "AI-assisted Coding", "Code Generation", "Debugging",
    "Code Review", "Technical Research"
  ] as string[],
},

projects: <Project[]>[
  {
    title: "AI-Powered Product Recognition & Agent Workflow Platform",
    subtitle: "Generative AI · Agentic Automation",
    period: "2026",
    bullets: [
      "Designed and implemented an AI-powered product recognition workflow using n8n, combining rule-based decision logic with Groq LLM reasoning to automate product identification and context-aware interactions",
      "Developed workflows that transform unstructured user requests into structured JSON, enabling reliable AI decision-making, workflow orchestration, and REST API integration",
      "Built multilingual conversational AI with automated chat-history management, demonstrating practical experience in LLM integration, AI agents, and workflow automation"
    ],
    tech: ["React", "TypeScript", "n8n", "Groq LLM", "REST APIs", "Google Sheets"]
  },
  {
    title: "AI Incident Commander",
    subtitle: "Agentic AI · Autonomous Incident Response",
    period: "2026",
    bullets: [
      "Developed an autonomous LLM-based incident response agent with dynamic tool execution for investigating and responding to technical incidents",
      "Implemented human-approval workflows to maintain controlled execution and enable human oversight during automated incident response",
      "Integrated memory-based learning to improve future incident handling and demonstrate practical experience with autonomous agents and agentic workflows"
    ],
    tech: ["Python", "LLMs", "AI Agents", "Function Calling", "Tool Execution", "Memory", "Human-in-the-Loop"]
  },
  {
    title: "AkshayPortfolio - Personal Portfolio Website",
    subtitle: "Full-Stack Web Development · Generative AI",
    period: "2026",
    bullets: [
      "Built a responsive portfolio website using Next.js 16, TypeScript, and Tailwind CSS", 
      "Developed a Groq-powered AI Chat Twin for resume-grounded Q&A with streaming responses", 
      "Built an AI Job Match Analyzer for match scores, matched skills, and skill gaps", 
      "Implemented reusable animated UI with Framer Motion, themes, and responsive layouts", 
      "Deployed on Vercel with Next.js API routes for AI features"
    ],
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Groq AI",
      "Llama 3.1",
      "Vercel",
      "REST APIs"
    ]
  },
  {
    title: "AI-Based Object Detection & Segmentation Pipeline",
    subtitle: "Computer Vision · Edge Deployment",
    period: "2024 – 2025",
    bullets: [
      "Developed an end-to-end computer vision pipeline covering preprocessing, augmentation, model training, evaluation, optimization, and edge deployment across 5+ datasets",
      "Implemented YOLOv5, Faster R-CNN, and U-Net models, achieving >92% detection accuracy on evaluated datasets",
      "Optimized Jetson Nano inference using pruning and TensorRT, improving edge inference performance by approximately 60%"
    ],
    tech: ["PyTorch", "YOLOv5", "Faster R-CNN", "U-Net", "OpenCV", "Albumentations", "TensorRT", "Jetson Nano"]
  },
  {
    title: "AI/ML Model Optimization & Edge Deployment",
    subtitle: "Model Optimization · Edge AI",
    period: "2024 – 2025",
    bullets: [
      "Optimized deep learning inference pipelines for cloud and edge deployment by converting PyTorch models to ONNX and applying pruning, quantization, mixed precision, and TensorRT optimization",
      "Achieved up to 5× faster model execution while reducing model size and computational requirements for resource-constrained edge devices",
      "Designed reproducible cloud-to-edge deployment workflows using Docker and CI/CD, reducing manual deployment effort by approximately 50%"
    ],
    tech: ["Python", "PyTorch", "ONNX", "TensorRT", "Docker", "AWS", "Raspberry Pi", "Pruning", "Quantization"]
  },
  {
    title: "LLM-Based RAG Assistant",
    subtitle: "Generative AI · RAG",
    period: "2024",
    bullets: [
      "Developed a Retrieval-Augmented Generation system enabling natural-language queries over a knowledge base using semantic embeddings and FAISS vector search",
      "Designed document ingestion, chunking, retrieval, and prompt-generation workflows, improving retrieval relevance by approximately 20–30% through experimentation",
      "Deployed the application as a Dockerized FastAPI service for scalable, reproducible LLM inference"
    ],
    tech: ["Hugging Face Transformers", "Embeddings", "FAISS", "FastAPI", "Docker", "Python"]
  },
  {
    title: "MLOps Deployment & Monitoring Platform",
    subtitle: "MLOps · CI/CD",
    period: "2023 – 2024",
    bullets: [
      "Designed an end-to-end MLOps workflow integrating experiment tracking, dataset and model versioning, containerization, automated testing, and deployment",
      "Used MLflow and DVC across 20+ experiments and implemented Jenkins-based CI/CD pipelines, reducing model release time by approximately 35–40%",
      "Built monitoring workflows for model performance, latency, and model drift to improve reliability and reproducibility across environments"
    ],
    tech: ["MLflow", "DVC", "Docker", "Git", "Jenkins", "Python", "CI/CD"]
  },
  {
    title: "Vehicle Position & Dimension Prediction",
    subtitle: "Automotive AI · LiDAR · Time-Series ML",
    period: "2022 – 2023",
    bullets: [
      "Developed a machine learning pipeline for estimating vehicle position and dimensions using LiDAR/Velodyne sensor data across different driving scenarios",
      "Performed sensor-data preprocessing, feature engineering, dataset preparation, and regression/time-series analysis to model vehicle movement and characteristics",
      "Evaluated predictions across multiple scenarios, demonstrating practical experience in automotive AI, sensor data processing, and ADAS applications"
    ],
    tech: ["Python", "LiDAR", "Velodyne", "Pandas", "NumPy", "Scikit-learn", "Time-Series ML"]
  },
  {
    title: "Camera Calibration & Image Processing Automation",
    subtitle: "Computer Vision · Image Processing",
    period: "2022 – 2023",
    bullets: [
      "Developed an automated camera calibration and image-processing pipeline for computer vision applications using OpenCV",
      "Performed intrinsic calibration with a reprojection error of 0.0156 and implemented edge detection, perspective correction, and geometric transformations",
      "Automated repetitive image-processing tasks, reducing manual image adjustment effort by approximately 50% and validating calibration across multiple camera configurations"
    ],
    tech: ["Python", "OpenCV", "NumPy"]
  },
  {
    title: "Predictive Analytics Data Platform",
    subtitle: "Data Engineering · Analytics · Machine Learning",
    period: "2021 – 2022",
    bullets: [
      "Built a data analytics and machine learning pipeline combining structured and semi-structured datasets for predictive analysis and automated data preparation",
      "Developed ETL, preprocessing, feature engineering, classification, and regression workflows using Python and SQL, reducing data preparation time by approximately 45%",
      "Created Power BI and Tableau dashboards to visualize analytical results and support data-driven decision-making"
    ],
    tech: ["Python", "SQL", "Pandas", "Scikit-learn", "Power BI", "Tableau"]
  }
],



  certifications: <Certification[]>[
    {
      title: "Generative AI with Python and Hugging Face Transformers",
      issuer: "Udemy",
      details: "Transformers, fine-tuning, text generation pipelines",
      period: "2024",
      topics: ["Hugging Face", "Transformers", "Fine-Tuning", "Text Generation"]
    },
    {
      title: "Computer Vision A–Z™: OpenCV, SSD, YOLO, GANs",
      issuer: "Udemy",
      details: "Object detection, segmentation, and generative models",
      period: "2023",
      topics: ["OpenCV", "YOLO", "SSD", "GANs", "Object Detection"]
    },
    {
      title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
      issuer: "Maven",
      details: "Production LLM systems, RAG pipelines, agent architectures",
      period: "2024",
      topics: ["LLMs", "RAG", "QLoRA", "Agents", "Production AI"]
    },
    {
      title: "Machine Learning, Data Science and Deep Learning with Python",
      issuer: "Udemy",
      details: "End-to-end ML pipelines, neural networks, and model evaluation",
      period: "2022",
      topics: ["ML", "Deep Learning", "Scikit-learn", "Neural Networks"]
    },
    {
      title: "MLOps with MLflow, Docker, and Kubernetes",
      issuer: "Udemy",
      details: "ML experiment tracking, containerization, and orchestration",
      period: "2024",
      topics: ["MLflow", "Docker", "Kubernetes", "MLOps"]
    },
    {
      title: "AI Engineer Production Track: Deploy LLMs & Agents at Scale",
      issuer: "Maven",
      details: "Scalable deployment of LLMs and agentic AI systems",
      period: "2025",
      topics: ["LLM Deployment", "Agents", "Scalability", "Production"]
    },
    {
      title: "AI Builder: Agents, Voice Agents & Automations in n8n",
      issuer: "Maven",
      details: "Low-code AI automation, voice agents, workflow orchestration",
      period: "2025",
      topics: ["n8n", "Voice Agents", "Automation", "AI Builder"]
    },
    {
      title: "AI Engineer Agentic Track: Complete Agent & MCP Course",
      issuer: "Maven",
      details: "Multi-agent systems, Model Context Protocol, autonomous workflows",
      period: "2025",
      topics: ["MCP", "Agents", "Multi-Agent", "Autonomous AI"]
    },
    {
      title: "DevOps Fundamentals: CI/CD with AWS, Docker, Ansible & Jenkins",
      issuer: "Udemy",
      details: "CI/CD pipelines, infrastructure automation, cloud deployment",
      period: "2023",
      topics: ["CI/CD", "AWS", "Docker", "Ansible", "Jenkins"]
    },
    {
      title: "Python for Data Science and Machine Learning Bootcamp",
      issuer: "Udemy",
      details: "Data analysis, visualization, and predictive modeling with Python",
      period: "2022",
      topics: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Science"]
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      details: "Building and training neural networks with TensorFlow",
      period: "2023",
      topics: ["TensorFlow", "Neural Networks", "Model Training", "Google Certified"]
    },
  ],

  cocurricular: <ActivityItem[]>[
    {
      title: "Published Research: LiDAR Vehicle Dimension Evaluation",
      organization: "International Journal of Scientific and Engineering Research (IJSER)",
      date: "Dec 2021"
    },
    {
      title: "ADAS Perception Validation – Master Thesis Project",
      organization: "AVL Software and Functions GmbH",
      date: "2022 – 2023"
    },
    {
      title: "AI Twin Portfolio – Full-Stack Agentic System",
      organization: "Personal Project · Open Source",
      date: "2025"
    }
  ],

  extracurricular: <ExtracurricularItem[]>[
    {
      role: "Open Source Contributor",
      organization: "GitHub · AI & ML Community",
      details: "Active contributions to ML tooling and personal AI portfolio projects"
    },
    {
      role: "AI Engineering Study Group",
      organization: "Maven AI Community",
      details: "Regular peer sessions on LLM engineering, agentic AI, and production ML systems"
    }
  ],

  communityService: <CommunityItem[]>[
    {
      description: "Volunteered as a technical mentor supporting students learning Python and ML fundamentals for career transitions into AI/data engineering.",
      date: "2023 – present"
    },
    {
      description: "Shared AI/ML technical insights on LinkedIn, contributing to knowledge exchange within the professional community.",
      date: "2024 – present"
    }
  ],

  publication: {
    title: "Evaluation of dimensions of a vehicle using Velodyne and Blickfeld LiDAR",
    journal: "International Journal of Scientific and Engineering Research (IJSER)",
    volume: "Volume 12, Issue 12",
    date: "Dec 2021",
    link: "https://github.com/akshay9396/Detection-of-the-future-position-and-dimensions-of-cars-with-Blickfeld-and-Velodyne-sensors"
  },

  drivingLicense: "Class B"
};
