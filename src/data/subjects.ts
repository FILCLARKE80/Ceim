import type { SubjectInfo } from './types'

// Leaving Certificate subject reference. Descriptions are short, student-friendly
// summaries of what each subject involves at Senior Cycle level.
export const SUBJECTS: Record<string, SubjectInfo> = {
  english: {
    id: 'english',
    name: 'English',
    category: 'core',
    description:
      'Compulsory for most courses. Develops reading, comprehension, essay writing and analysis of texts, poetry and drama. A strong English grade supports almost every career.',
  },
  irish: {
    id: 'irish',
    name: 'Irish (Gaeilge)',
    category: 'core',
    description:
      'Required for entry to NUI colleges (UCD, UCC, Galway, Maynooth) and for primary teaching, unless exempt. Focuses on oral, written and comprehension skills.',
  },
  maths: {
    id: 'maths',
    name: 'Mathematics',
    category: 'core',
    description:
      'Higher Level Maths earns 25 bonus CAO points for a H6 or above. Essential for engineering, science, computing, finance and many health courses.',
  },
  appliedMaths: {
    id: 'appliedMaths',
    name: 'Applied Mathematics',
    category: 'science',
    description:
      'Uses maths to model real-world problems — motion, forces, algorithms and dynamics. Excellent preparation for engineering and physics degrees.',
  },
  physics: {
    id: 'physics',
    name: 'Physics',
    category: 'science',
    description:
      'Studies mechanics, electricity, light, heat and modern physics. Core for engineering, physics, and many technology and architecture pathways.',
  },
  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    category: 'science',
    description:
      'Covers atomic structure, reactions, organic chemistry and lab work. Essential for medicine, pharmacy, veterinary and most science degrees.',
  },
  biology: {
    id: 'biology',
    name: 'Biology',
    category: 'science',
    description:
      'The most popular science subject — human biology, genetics, ecology and physiology. Strongly recommended for health, nursing and life-science careers.',
  },
  agriScience: {
    id: 'agriScience',
    name: 'Agricultural Science',
    category: 'science',
    description:
      'Combines biology, chemistry and farm management. Useful for veterinary, agriculture, food science and environmental careers.',
  },
  computerScience: {
    id: 'computerScience',
    name: 'Computer Science',
    category: 'science',
    description:
      'A newer Leaving Cert subject covering programming, algorithms, computational thinking and a coursework project. Ideal preparation for software and tech degrees.',
  },
  business: {
    id: 'business',
    name: 'Business',
    category: 'business',
    description:
      'Introduces enterprise, management, marketing and people in business. A good foundation for commerce, management and entrepreneurship.',
  },
  accounting: {
    id: 'accounting',
    name: 'Accounting',
    category: 'business',
    description:
      'Focuses on financial statements, ratios and management accounting. Directly relevant to accountancy, finance and commerce degrees.',
  },
  economics: {
    id: 'economics',
    name: 'Economics',
    category: 'business',
    description:
      'Studies how markets, governments and people make decisions about resources. Valuable for business, economics, law and policy careers.',
  },
  history: {
    id: 'history',
    name: 'History',
    category: 'humanities',
    description:
      'Develops research, source analysis and structured argument — skills prized in law, journalism, teaching and the civil service.',
  },
  geography: {
    id: 'geography',
    name: 'Geography',
    category: 'humanities',
    description:
      'Covers physical and human geography, maps and a field-study project. Relevant to planning, environmental science and engineering.',
  },
  art: {
    id: 'art',
    name: 'Art',
    category: 'arts',
    description:
      'Practical and theoretical study of drawing, design and art history. Often required (with a portfolio) for architecture, design and creative degrees.',
  },
  french: {
    id: 'french',
    name: 'French',
    category: 'language',
    description:
      'A modern continental language — listening, reading, writing and oral. A third language is required by some NUI courses and helps with international careers.',
  },
  designGraphics: {
    id: 'designGraphics',
    name: 'Design & Communication Graphics (DCG)',
    category: 'practical',
    description:
      'Technical drawing, CAD and graphic communication. Strongly recommended for architecture, engineering and product design.',
  },
  technology: {
    id: 'technology',
    name: 'Technology',
    category: 'practical',
    description:
      'Design-and-make projects covering electronics, materials and manufacturing. Good preparation for engineering and product design.',
  },
  homeEc: {
    id: 'homeEc',
    name: 'Home Economics',
    category: 'practical',
    description:
      'Nutrition, food science, and family resource management. Useful for nutrition, nursing, food science and education careers.',
  },
  politics: {
    id: 'politics',
    name: 'Politics & Society',
    category: 'humanities',
    description:
      'Explores rights, power, sustainability and active citizenship. Relevant to law, social science, journalism and public policy.',
  },
  music: {
    id: 'music',
    name: 'Music',
    category: 'arts',
    description:
      'Performing, composing and listening. Required for music degrees and useful for any creative or teaching pathway.',
  },
}

export function getSubject(id: string): SubjectInfo | undefined {
  return SUBJECTS[id]
}
