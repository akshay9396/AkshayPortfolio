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
    linkedin: "https://www.linkedin.com/in/akshay-kanade-746398122"
  },

  impact: <ImpactItem[]>[
    { value: 6, unit: "+", label: "Years of Experience" },
    { value: 70, unit: "%", label: "Inference Throughput Boost" },
    { value: 50, unit: "%", label: "Delivery Cycle Reduction" },
  ],

  experience: <Experience[]>[
    {
      role: "AI/ML Engineer",
      type: "Full-time",
      company: "OneVision Software AG",
      location: "Regensburg, Germany",
      period: "Jun 2024 – Nov 2025",
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
    languages:            ["English (C1)", "German (A2 – learning B1)"] as string[],
    databases:            ["SQL", "FAISS", "Vector Databases", "PostgreSQL"] as string[],
    programmingLanguages: ["Python", "C++", "Pandas", "NumPy", "FastAPI"] as string[],
    mlFrameworks:         ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "ONNX"] as string[],
    computerVision:       ["OpenCV", "YOLO", "Detectron2", "Faster R-CNN", "U-Net", "TensorRT"] as string[],
    ml:                   ["Deep Learning", "Transfer Learning", "CNNs", "Vision Transformers (ViTs)", "Model Fine-Tuning", "Supervised & Unsupervised Learning", "Pruning", "Quantization", "Mixed Precision", "Edge Deployment"] as string[],
    genai:       ["Hugging Face Transformers", "RAG", "Prompt Engineering", "Embeddings", "LLM Fine-Tuning", "QLoRA"] as string[],
    agentic:     ["LangChain", "AI Agents", "MCP", "n8n Automation", "Tool Use", "Voice Agents"] as string[],
    cloud:       ["Azure ML", "AWS (S3, EC2, SageMaker)", "GCP"] as string[],
    devops:      ["MLflow", "DVC", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Git", "Linux", "ROS"] as string[],
  },

  projects: <Project[]>[
    {
      title: "AI-Based Object Detection & Segmentation",
      subtitle: "Computer Vision · Edge Deployment",
      period: "2022 – 2023",
      bullets: [
        "Implemented YOLOv5, Faster R-CNN, and U-Net across 5+ datasets achieving over 92% detection accuracy",
        "Streamlined preprocessing pipelines using OpenCV and Albumentations, reducing preparation time by 40%",
        "Optimized Jetson Nano inference using pruning and TensorRT, achieving 60% faster edge performance"
      ],
      tech: ["YOLOv5", "Faster R-CNN", "U-Net", "TensorRT", "OpenCV", "Jetson Nano"]
    },
    {
      title: "MLOps Deployment & Monitoring Pipeline",
      subtitle: "ML Engineering · DevOps",
      period: "2023 – 2024",
      bullets: [
        "Established reproducible ML workflows using MLflow, DVC, and Docker across 20+ experiments",
        "Implemented CI/CD pipelines reducing model release time by 35%",
        "Built monitoring dashboards tracking 10+ performance metrics and model drift"
      ],
      tech: ["MLflow", "DVC", "Docker", "Kubernetes", "CI/CD", "Jenkins"]
    },
    {
      title: "LLM-Based RAG Assistant",
      subtitle: "Generative AI · LLM Engineering",
      period: "2024",
      bullets: [
        "Developed a Retrieval-Augmented Generation system using embeddings and FAISS",
        "Optimized document chunking and prompts, improving response relevance by 30%",
        "Deployed a FastAPI-based inference service supporting multi-user concurrent access"
      ],
      tech: ["Hugging Face", "FAISS", "FastAPI", "RAG", "Embeddings", "LangChain"]
    },
    {
      title: "Camera Calibration & Image Processing",
      subtitle: "Sensor Fusion · Autonomous Systems",
      period: "2022 – 2023",
      bullets: [
        "Performed intrinsic camera calibration with OpenCV achieving reprojection error of 0.0156",
        "Applied edge detection, perspective correction, and geometric transformations",
        "Validated calibration across multiple camera setups ensuring stable perception workflows"
      ],
      tech: ["OpenCV", "Python", "NumPy", "Camera Calibration", "ROS"]
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
    link: "https://www.ijser.org/onlineResearchPaperViewer.aspx?Evaluation-of-dimensions-of-a-vehicle-using-Velodyne-and-Blickfeld-LiDAR.pdf"
  },

  drivingLicense: "Class B"
};
