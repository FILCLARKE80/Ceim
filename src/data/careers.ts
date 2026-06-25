import type { Career } from './types'

// Indicative dataset. CAO points are 2024 Round 1 figures (Level 8 unless noted)
// and are provided as a guide only — always verify the latest on cao.ie.
export const CAREERS: Career[] = [
  {
    id: 'doctor',
    title: 'Doctor (Medicine)',
    category: 'Health & Medicine',
    icon: '🩺',
    shortDescription: 'Diagnose and treat patients as a hospital or GP doctor.',
    description:
      'Doctors assess, diagnose and treat illness and injury. Becoming a doctor in Ireland means a 5–6 year undergraduate medical degree (or a 4 year graduate-entry route), followed by an intern year and several years of specialist training. Entry is highly competitive and combines Leaving Cert points with the HPAT-Ireland aptitude test.',
    juniorCycle: ['Science', 'Maths', 'A strong all-round academic record'],
    seniorCycleSubjects: [
      { subjectId: 'chemistry', importance: 'essential', reason: 'Required by most medical schools.' },
      { subjectId: 'biology', importance: 'recommended', reason: 'Foundation for physiology and anatomy.' },
      { subjectId: 'maths', importance: 'recommended', reason: 'Higher Level adds 25 bonus points.' },
      { subjectId: 'physics', importance: 'helpful' },
    ],
    leavingCertNotes:
      'Minimum H5 in two subjects and O6/H7 in four others, including Maths, Irish (NUI) and a lab science. Points are combined with HPAT-Ireland; a minimum overall threshold (often ~480+ before HPAT) applies.',
    collegeCourses: [
      { code: 'TR051', name: 'Medicine', institution: 'Trinity College Dublin', level: 8, caoPoints: 736, pointsYear: '2024', duration: '5 years', extraRequirements: 'HPAT-Ireland' },
      { code: 'DN400', name: 'Medicine', institution: 'University College Dublin', level: 8, caoPoints: 738, pointsYear: '2024', duration: '6 years', extraRequirements: 'HPAT-Ireland' },
      { code: 'CK701', name: 'Medicine', institution: 'University College Cork', level: 8, caoPoints: 731, pointsYear: '2024', duration: '5 years', extraRequirements: 'HPAT-Ireland' },
      { code: 'GY501', name: 'Medicine', institution: 'University of Galway', level: 8, caoPoints: 733, pointsYear: '2024', duration: '5 years', extraRequirements: 'HPAT-Ireland' },
    ],
    postgrad: [
      { name: 'Internship (1 year)', type: 'Professional', description: 'Paid supervised hospital year required to register fully with the Medical Council.' },
      { name: 'Basic & Higher Specialist Training', type: 'Professional', description: 'Several years training towards a speciality such as GP, surgery, paediatrics or psychiatry.' },
      { name: 'MD / PhD', type: 'PhD', description: 'Research degrees for academic medicine and sub-specialisation.' },
    ],
    roles: [
      { title: 'General Practitioner (GP)', description: 'Community doctor providing primary care.', salaryRange: '€90k–€180k' },
      { title: 'Hospital Consultant', description: 'Senior specialist leading care in a discipline.', salaryRange: '€150k–€250k+' },
      { title: 'Surgeon', description: 'Performs operations within a surgical speciality.', salaryRange: '€150k–€300k+' },
    ],
    relatedCareers: ['nurse', 'pharmacist', 'physiotherapist', 'vet'],
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    category: 'Technology',
    icon: '💻',
    shortDescription: 'Design and build software, apps and systems.',
    description:
      'Software engineers design, build and maintain the programs, websites and systems that power modern life. The usual route is a Level 8 degree in computer science or software engineering, though apprenticeships and conversion masters are growing. It is one of the most flexible, well-paid and in-demand careers in Ireland.',
    juniorCycle: ['Maths', 'Coding Club / self-taught programming', 'Logic & problem solving'],
    seniorCycleSubjects: [
      { subjectId: 'maths', importance: 'essential', reason: 'Higher Level Maths is expected; adds 25 bonus points.' },
      { subjectId: 'computerScience', importance: 'recommended', reason: 'Direct preparation for the degree.' },
      { subjectId: 'physics', importance: 'helpful' },
      { subjectId: 'appliedMaths', importance: 'helpful' },
    ],
    leavingCertNotes:
      'Most courses require a H5/O6 in Maths (Higher Level strongly preferred for software engineering). No specific subjects beyond Maths are mandatory, but logical subjects help.',
    collegeCourses: [
      { code: 'TR033', name: 'Computer Science', institution: 'Trinity College Dublin', level: 8, caoPoints: 531, pointsYear: '2024', duration: '4 years' },
      { code: 'DN201', name: 'Computer Science', institution: 'University College Dublin', level: 8, caoPoints: 521, pointsYear: '2024', duration: '4 years' },
      { code: 'LM118', name: 'Computer Science', institution: 'University of Limerick', level: 8, caoPoints: 419, pointsYear: '2024', duration: '4 years' },
      { code: 'DC121', name: 'Computer Science', institution: 'Dublin City University', level: 8, caoPoints: 430, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'MSc Computer Science / AI', type: 'Masters', description: 'Specialise in AI, data science, security or distributed systems.' },
      { name: 'Conversion MSc (Computing)', type: 'Masters', description: 'One-year route into tech for graduates of other disciplines.' },
    ],
    roles: [
      { title: 'Frontend / Backend Developer', description: 'Builds the user-facing or server-side parts of applications.', salaryRange: '€45k–€90k' },
      { title: 'DevOps / Cloud Engineer', description: 'Automates deployment and runs scalable infrastructure.', salaryRange: '€60k–€110k' },
      { title: 'Machine Learning Engineer', description: 'Builds and deploys AI and data models.', salaryRange: '€65k–€130k' },
    ],
    relatedCareers: ['data-scientist', 'civil-engineer'],
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'Technology',
    icon: '📊',
    shortDescription: 'Turn data into insight using statistics and AI.',
    description:
      'Data scientists analyse large datasets to find patterns, build predictive models and support decisions. The field blends maths, statistics, programming and domain knowledge. Most enter through a degree in data science, computer science, maths or statistics, often followed by a specialist masters.',
    juniorCycle: ['Maths', 'Curiosity about patterns and statistics', 'Coding basics'],
    seniorCycleSubjects: [
      { subjectId: 'maths', importance: 'essential', reason: 'Statistics and probability are core to the work.' },
      { subjectId: 'computerScience', importance: 'recommended' },
      { subjectId: 'physics', importance: 'helpful' },
      { subjectId: 'economics', importance: 'helpful', reason: 'Useful for business and financial data.' },
    ],
    leavingCertNotes:
      'Higher Level Maths is effectively essential. A science or computer science subject strengthens the application.',
    collegeCourses: [
      { code: 'DN201', name: 'Computer Science (Data Science stream)', institution: 'University College Dublin', level: 8, caoPoints: 521, pointsYear: '2024', duration: '4 years' },
      { code: 'DC119', name: 'Data Science', institution: 'Dublin City University', level: 8, caoPoints: 466, pointsYear: '2024', duration: '4 years' },
      { code: 'LM121', name: 'Mathematical Sciences', institution: 'University of Limerick', level: 8, caoPoints: 400, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'MSc Data Science / Analytics', type: 'Masters', description: 'Deepens machine learning, statistics and big-data engineering.' },
      { name: 'PhD in Machine Learning', type: 'PhD', description: 'Research route into advanced AI and academia.' },
    ],
    roles: [
      { title: 'Data Analyst', description: 'Reports and dashboards that explain what the data shows.', salaryRange: '€40k–€70k' },
      { title: 'Data Scientist', description: 'Builds predictive and statistical models.', salaryRange: '€55k–€100k' },
      { title: 'AI / ML Researcher', description: 'Designs new algorithms and models.', salaryRange: '€70k–€140k' },
    ],
    relatedCareers: ['software-engineer'],
  },
  {
    id: 'nurse',
    title: 'Nurse',
    category: 'Health & Medicine',
    icon: '👩‍⚕️',
    shortDescription: 'Care for patients across hospitals and communities.',
    description:
      'Nurses provide hands-on care, monitor patients and coordinate treatment. In Ireland nursing is a 4-year honours degree leading directly to registration, with branches including general, children’s, mental health, intellectual disability and midwifery. Demand is consistently high.',
    juniorCycle: ['Science', 'Caring / volunteering experience', 'Good communication'],
    seniorCycleSubjects: [
      { subjectId: 'biology', importance: 'recommended', reason: 'Foundation for human anatomy and physiology.' },
      { subjectId: 'chemistry', importance: 'helpful' },
      { subjectId: 'homeEc', importance: 'helpful' },
      { subjectId: 'maths', importance: 'recommended' },
    ],
    leavingCertNotes:
      'Requires a minimum O6/H7 in a laboratory science subject (Biology, Chemistry, Physics, Physics+Chemistry, or Agricultural Science) plus the usual English/Irish/Maths minimums.',
    collegeCourses: [
      { code: 'DN460', name: 'General Nursing', institution: 'University College Dublin', level: 8, caoPoints: 456, pointsYear: '2024', duration: '4 years' },
      { code: 'CK711', name: 'General Nursing', institution: 'University College Cork', level: 8, caoPoints: 451, pointsYear: '2024', duration: '4 years' },
      { code: 'DC203', name: 'General Nursing', institution: 'Dublin City University', level: 8, caoPoints: 430, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'Higher Diploma / MSc Nursing', type: 'Masters', description: 'Specialise in areas such as ICU, oncology or public health.' },
      { name: 'Advanced Nurse Practitioner', type: 'Professional', description: 'Senior clinical role with extended prescribing and autonomy.' },
    ],
    roles: [
      { title: 'Staff Nurse', description: 'Front-line ward or community nursing.', salaryRange: '€36k–€55k' },
      { title: 'Clinical Nurse Specialist', description: 'Expert in a specific clinical area.', salaryRange: '€55k–€70k' },
      { title: 'Midwife', description: 'Cares for mothers and babies before, during and after birth.', salaryRange: '€36k–€60k' },
    ],
    relatedCareers: ['doctor', 'physiotherapist', 'pharmacist'],
  },
  {
    id: 'civil-engineer',
    title: 'Civil Engineer',
    category: 'Engineering',
    icon: '🏗️',
    shortDescription: 'Design and build infrastructure — roads, bridges, buildings.',
    description:
      'Civil engineers plan, design and oversee construction of the built environment: bridges, roads, water systems and buildings. The route is a Level 8 engineering degree (often a common first year, then specialise), leading to Chartered Engineer status with Engineers Ireland.',
    juniorCycle: ['Maths', 'Science', 'Technical Graphics / Woodwork'],
    seniorCycleSubjects: [
      { subjectId: 'maths', importance: 'essential', reason: 'Higher Level Maths usually required; 25 bonus points.' },
      { subjectId: 'physics', importance: 'recommended', reason: 'Core to mechanics and structures.' },
      { subjectId: 'designGraphics', importance: 'recommended' },
      { subjectId: 'appliedMaths', importance: 'helpful' },
    ],
    leavingCertNotes:
      'Typically requires H4 Higher Level Maths (or O1/H6 depending on the course). Physics and DCG are strongly advantageous.',
    collegeCourses: [
      { code: 'DN150', name: 'Engineering (Civil)', institution: 'University College Dublin', level: 8, caoPoints: 533, pointsYear: '2024', duration: '4–5 years' },
      { code: 'TR032', name: 'Engineering', institution: 'Trinity College Dublin', level: 8, caoPoints: 510, pointsYear: '2024', duration: '5 years' },
      { code: 'GY401', name: 'Engineering (Undenominated)', institution: 'University of Galway', level: 8, caoPoints: 466, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'ME Civil / Structural Engineering', type: 'Masters', description: 'Often required for Chartered Engineer status; specialise in structures, water or transport.' },
      { name: 'Chartered Engineer (CEng)', type: 'Professional', description: 'Professional accreditation from Engineers Ireland after experience.' },
    ],
    roles: [
      { title: 'Structural Engineer', description: 'Designs buildings and bridges to be safe and stable.', salaryRange: '€40k–€75k' },
      { title: 'Site / Project Engineer', description: 'Manages construction on site.', salaryRange: '€45k–€80k' },
      { title: 'Geotechnical Engineer', description: 'Specialist in soil, foundations and ground.', salaryRange: '€50k–€85k' },
    ],
    relatedCareers: ['architect', 'software-engineer'],
  },
  {
    id: 'architect',
    title: 'Architect',
    category: 'Engineering',
    icon: '📐',
    shortDescription: 'Design buildings that are functional and beautiful.',
    description:
      'Architects design buildings and spaces, balancing aesthetics, function, sustainability and regulation. The path is long: a 5-year course (typically a 3-year degree plus 2-year masters), professional experience and exams to become a registered architect with the RIAI.',
    juniorCycle: ['Art', 'Technical Graphics', 'Maths'],
    seniorCycleSubjects: [
      { subjectId: 'art', importance: 'recommended', reason: 'Helps build the portfolio many courses require.' },
      { subjectId: 'designGraphics', importance: 'recommended' },
      { subjectId: 'maths', importance: 'recommended' },
      { subjectId: 'physics', importance: 'helpful' },
    ],
    leavingCertNotes:
      'Some architecture courses require or recommend a portfolio of creative work for entry. Check each course — requirements vary between UCD, TU Dublin and others.',
    collegeCourses: [
      { code: 'DN100', name: 'Architecture', institution: 'University College Dublin', level: 8, caoPoints: 555, pointsYear: '2024', duration: '5 years' },
      { code: 'TU991', name: 'Architecture', institution: 'TU Dublin', level: 8, caoPoints: 500, pointsYear: '2024', duration: '5 years', extraRequirements: 'Portfolio' },
      { code: 'CR300', name: 'Architecture', institution: 'MTU (Cork)', level: 8, caoPoints: 480, pointsYear: '2024', duration: '5 years', extraRequirements: 'Portfolio' },
    ],
    postgrad: [
      { name: 'Master of Architecture (MArch)', type: 'Masters', description: 'The professional qualifying degree, completing the 5-year education requirement.' },
      { name: 'RIAI Registration', type: 'Professional', description: 'Professional practice exam and logged experience to use the title "Architect".' },
    ],
    roles: [
      { title: 'Architectural Assistant', description: 'Works on designs and drawings while training.', salaryRange: '€35k–€50k' },
      { title: 'Registered Architect', description: 'Leads building design projects.', salaryRange: '€55k–€90k' },
      { title: 'Urban / Landscape Designer', description: 'Shapes public spaces and master plans.', salaryRange: '€45k–€80k' },
    ],
    relatedCareers: ['civil-engineer'],
  },
  {
    id: 'lawyer',
    title: 'Solicitor / Barrister',
    category: 'Law & Society',
    icon: '⚖️',
    shortDescription: 'Advise clients and represent them in legal matters.',
    description:
      'Lawyers advise on rights and obligations and represent clients. Solicitors do most day-to-day legal work; barristers specialise in advocacy in court. The usual route is a law degree, then professional training — the Law Society (PPC) for solicitors or King’s Inns for barristers.',
    juniorCycle: ['Strong English & writing', 'History', 'Debating'],
    seniorCycleSubjects: [
      { subjectId: 'english', importance: 'recommended', reason: 'Writing and argument are central to law.' },
      { subjectId: 'history', importance: 'recommended', reason: 'Builds research and reasoning.' },
      { subjectId: 'politics', importance: 'helpful' },
      { subjectId: 'economics', importance: 'helpful' },
    ],
    leavingCertNotes:
      'No specific subjects are required beyond the usual matriculation; high overall points matter most. A third language is needed for NUI law degrees.',
    collegeCourses: [
      { code: 'TR004', name: 'Law', institution: 'Trinity College Dublin', level: 8, caoPoints: 521, pointsYear: '2024', duration: '4 years' },
      { code: 'DN600', name: 'Law', institution: 'University College Dublin', level: 8, caoPoints: 543, pointsYear: '2024', duration: '4 years' },
      { code: 'CK301', name: 'Law', institution: 'University College Cork', level: 8, caoPoints: 477, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'PPC (Law Society)', type: 'Professional', description: 'Professional Practice Course to qualify as a solicitor, with FE-1 entrance exams.' },
      { name: 'Barrister-at-Law (King’s Inns)', type: 'Professional', description: 'Vocational course to be called to the Bar as a barrister.' },
      { name: 'LLM', type: 'Masters', description: 'Specialise in areas such as commercial, human-rights or EU law.' },
    ],
    roles: [
      { title: 'Solicitor', description: 'Advises clients and handles transactions and disputes.', salaryRange: '€50k–€120k+' },
      { title: 'Barrister', description: 'Specialist court advocate, usually self-employed.', salaryRange: 'Variable — €30k–€200k+' },
      { title: 'In-house / Corporate Counsel', description: 'Legal advisor inside a company.', salaryRange: '€70k–€150k' },
    ],
    relatedCareers: ['accountant'],
  },
  {
    id: 'teacher-secondary',
    title: 'Secondary School Teacher',
    category: 'Education',
    icon: '🎓',
    shortDescription: 'Teach a subject to students in second-level school.',
    description:
      'Post-primary teachers specialise in one or two subjects. The two routes are a concurrent degree (teaching built in) or a subject degree followed by a 2-year Professional Master of Education (PME). Registration is with the Teaching Council.',
    juniorCycle: ['Your favourite subject', 'Communication', 'Helping / tutoring others'],
    seniorCycleSubjects: [
      { subjectId: 'english', importance: 'helpful' },
      { subjectId: 'irish', importance: 'helpful', reason: 'Strong subjects help you teach them later.' },
      { subjectId: 'maths', importance: 'helpful' },
      { subjectId: 'history', importance: 'helpful' },
    ],
    leavingCertNotes:
      'The subjects you take influence what you can teach. Concurrent teaching degrees may have specific subject requirements (e.g. Higher Level Maths for maths teaching).',
    collegeCourses: [
      { code: 'DC026', name: 'Science Education', institution: 'Dublin City University', level: 8, caoPoints: 430, pointsYear: '2024', duration: '4 years' },
      { code: 'MH205', name: 'Education (concurrent)', institution: 'Maynooth University', level: 8, caoPoints: 400, pointsYear: '2024', duration: '4 years' },
      { code: 'GY119', name: 'Mathematics & Education', institution: 'University of Galway', level: 8, caoPoints: 477, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'Professional Master of Education (PME)', type: 'Masters', description: 'Two-year qualification for graduates of a subject degree to become teachers.' },
    ],
    roles: [
      { title: 'Subject Teacher', description: 'Teaches one or two Leaving Cert / Junior Cycle subjects.', salaryRange: '€42k–€80k' },
      { title: 'Year Head / Deputy Principal', description: 'Pastoral and management responsibility.', salaryRange: '€60k–€90k' },
      { title: 'Principal', description: 'Leads the whole school.', salaryRange: '€90k–€120k' },
    ],
    relatedCareers: ['teacher-primary', 'psychologist'],
  },
  {
    id: 'teacher-primary',
    title: 'Primary School Teacher',
    category: 'Education',
    icon: '✏️',
    shortDescription: 'Teach all subjects to children in primary school.',
    description:
      'Primary teachers teach the full curriculum to one class. The route is a Bachelor of Education (B.Ed, 4 years) or a 2-year Professional Master of Education after a degree. Irish is required, and a love of working with children is essential.',
    juniorCycle: ['Irish', 'A broad range of subjects', 'Music / art / sport'],
    seniorCycleSubjects: [
      { subjectId: 'irish', importance: 'essential', reason: 'A minimum grade in Higher Level Irish is required.' },
      { subjectId: 'english', importance: 'recommended' },
      { subjectId: 'maths', importance: 'recommended' },
      { subjectId: 'music', importance: 'helpful' },
    ],
    leavingCertNotes:
      'Specific minimums apply: typically H4 in Higher Level Irish, plus O6/H7 English and Maths. These requirements are strict — check each college.',
    collegeCourses: [
      { code: 'DC009', name: 'Bachelor of Education', institution: 'DCU Institute of Education', level: 8, caoPoints: 466, pointsYear: '2024', duration: '4 years' },
      { code: 'MI001', name: 'Bachelor of Education', institution: 'Mary Immaculate College', level: 8, caoPoints: 451, pointsYear: '2024', duration: '4 years' },
      { code: 'MIC', name: 'Bachelor of Education', institution: 'Marino Institute of Education', level: 8, caoPoints: 444, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'PME (Primary)', type: 'Masters', description: 'Two-year route into primary teaching for degree holders.' },
      { name: 'MEd', type: 'Masters', description: 'For leadership, special education or curriculum specialisms.' },
    ],
    roles: [
      { title: 'Class Teacher', description: 'Teaches a primary class across all subjects.', salaryRange: '€42k–€80k' },
      { title: 'Special Education Teacher', description: 'Supports children with additional needs.', salaryRange: '€45k–€80k' },
      { title: 'Principal', description: 'Leads the primary school.', salaryRange: '€70k–€110k' },
    ],
    relatedCareers: ['teacher-secondary', 'psychologist'],
  },
  {
    id: 'psychologist',
    title: 'Psychologist',
    category: 'Health & Medicine',
    icon: '🧠',
    shortDescription: 'Study behaviour and support mental wellbeing.',
    description:
      'Psychologists study the mind and behaviour and may work clinically, in education, in organisations or in research. The path is a psychology degree accredited by the PSI, followed by a specialist masters or doctorate (e.g. clinical, educational or counselling psychology).',
    juniorCycle: ['Science', 'Strong English', 'Interest in people'],
    seniorCycleSubjects: [
      { subjectId: 'biology', importance: 'recommended', reason: 'Useful for the biological side of psychology.' },
      { subjectId: 'maths', importance: 'recommended', reason: 'Psychology involves a lot of statistics.' },
      { subjectId: 'english', importance: 'helpful' },
      { subjectId: 'politics', importance: 'helpful' },
    ],
    leavingCertNotes:
      'No single subject is mandatory, but a science and Higher Level Maths help with the statistics-heavy degree. A third language is needed for NUI courses.',
    collegeCourses: [
      { code: 'TR006', name: 'Psychology', institution: 'Trinity College Dublin', level: 8, caoPoints: 555, pointsYear: '2024', duration: '4 years' },
      { code: 'DN700', name: 'Psychology', institution: 'University College Dublin', level: 8, caoPoints: 543, pointsYear: '2024', duration: '3–4 years' },
      { code: 'MH101', name: 'Psychology', institution: 'Maynooth University', level: 8, caoPoints: 488, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'Doctorate in Clinical Psychology (DClinPsych)', type: 'PhD', description: 'Competitive 3-year professional doctorate to become a clinical psychologist.' },
      { name: 'MSc Educational / Organisational Psychology', type: 'Masters', description: 'Routes into school or workplace psychology.' },
    ],
    roles: [
      { title: 'Clinical Psychologist', description: 'Assesses and treats mental-health difficulties.', salaryRange: '€60k–€100k' },
      { title: 'Educational Psychologist', description: 'Supports learning and development in schools.', salaryRange: '€60k–€95k' },
      { title: 'Organisational Psychologist', description: 'Applies psychology to workplaces and teams.', salaryRange: '€55k–€90k' },
    ],
    relatedCareers: ['doctor', 'teacher-secondary'],
  },
  {
    id: 'accountant',
    title: 'Accountant',
    category: 'Business & Finance',
    icon: '📈',
    shortDescription: 'Manage finances, tax and audit for organisations.',
    description:
      'Accountants prepare and check financial records, advise on tax and support business decisions. Many do a business or accounting degree, then professional exams (ACA, ACCA, CIMA, CPA). It is a stable, well-paid and globally portable career.',
    juniorCycle: ['Business Studies', 'Maths', 'Attention to detail'],
    seniorCycleSubjects: [
      { subjectId: 'accounting', importance: 'recommended', reason: 'Direct preparation for the professional work.' },
      { subjectId: 'maths', importance: 'recommended' },
      { subjectId: 'business', importance: 'recommended' },
      { subjectId: 'economics', importance: 'helpful' },
    ],
    leavingCertNotes:
      'No mandatory subjects beyond matriculation, but Accounting, Business and Maths give a strong head start on professional exams.',
    collegeCourses: [
      { code: 'DN650', name: 'Commerce', institution: 'University College Dublin', level: 8, caoPoints: 520, pointsYear: '2024', duration: '3 years' },
      { code: 'TR081', name: 'Business, Economic & Social Studies (BESS)', institution: 'Trinity College Dublin', level: 8, caoPoints: 510, pointsYear: '2024', duration: '4 years' },
      { code: 'CK201', name: 'Accounting', institution: 'University College Cork', level: 8, caoPoints: 466, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'ACA / ACCA / CIMA', type: 'Professional', description: 'Chartered accountancy exams completed alongside a training contract.' },
      { name: 'MSc Accounting / Finance', type: 'Masters', description: 'Specialise and gain exemptions from professional exams.' },
    ],
    roles: [
      { title: 'Auditor', description: 'Checks that financial statements are accurate.', salaryRange: '€40k–€70k' },
      { title: 'Tax Consultant', description: 'Advises on tax planning and compliance.', salaryRange: '€45k–€90k' },
      { title: 'Financial Controller / CFO', description: 'Leads an organisation’s finances.', salaryRange: '€80k–€180k+' },
    ],
    relatedCareers: ['lawyer', 'data-scientist'],
  },
  {
    id: 'pharmacist',
    title: 'Pharmacist',
    category: 'Health & Medicine',
    icon: '💊',
    shortDescription: 'Expert in medicines, dispensing and patient advice.',
    description:
      'Pharmacists are medicines experts who dispense prescriptions, advise patients and increasingly deliver clinical services. The route is a 5-year integrated masters (MPharm) followed by registration with the PSI. Strong chemistry is essential.',
    juniorCycle: ['Science', 'Maths', 'Attention to detail'],
    seniorCycleSubjects: [
      { subjectId: 'chemistry', importance: 'essential', reason: 'Required for entry to all pharmacy courses.' },
      { subjectId: 'biology', importance: 'recommended' },
      { subjectId: 'maths', importance: 'recommended' },
      { subjectId: 'physics', importance: 'helpful' },
    ],
    leavingCertNotes:
      'A minimum H4 in Chemistry is typically required, plus a second lab science or maths depending on the college. High points are needed.',
    collegeCourses: [
      { code: 'TR072', name: 'Pharmacy (MPharm)', institution: 'Trinity College Dublin', level: 8, caoPoints: 601, pointsYear: '2024', duration: '5 years' },
      { code: 'RC005', name: 'Pharmacy (MPharm)', institution: 'RCSI', level: 8, caoPoints: 590, pointsYear: '2024', duration: '5 years' },
      { code: 'CK703', name: 'Pharmacy (MPharm)', institution: 'University College Cork', level: 8, caoPoints: 577, pointsYear: '2024', duration: '5 years' },
    ],
    postgrad: [
      { name: 'MPharm (integrated)', type: 'Masters', description: 'The 5-year degree already includes masters-level study and placement.' },
      { name: 'Clinical / Industrial Specialisation', type: 'Professional', description: 'Hospital, community or pharmaceutical-industry pathways.' },
    ],
    roles: [
      { title: 'Community Pharmacist', description: 'Runs or works in a retail pharmacy.', salaryRange: '€55k–€90k' },
      { title: 'Hospital Pharmacist', description: 'Manages medicines in a hospital setting.', salaryRange: '€55k–€95k' },
      { title: 'Industrial Pharmacist', description: 'Works in drug manufacturing and regulation.', salaryRange: '€55k–€110k' },
    ],
    relatedCareers: ['doctor', 'nurse', 'vet'],
  },
  {
    id: 'physiotherapist',
    title: 'Physiotherapist',
    category: 'Health & Medicine',
    icon: '🦵',
    shortDescription: 'Help people move and recover from injury.',
    description:
      'Physiotherapists assess and treat movement problems, helping patients recover from injury, surgery or illness. The route is a 4-year honours degree leading to registration with CORU. It suits people who like science, sport and working hands-on with patients.',
    juniorCycle: ['Science', 'PE / sport', 'Biology basics'],
    seniorCycleSubjects: [
      { subjectId: 'biology', importance: 'recommended', reason: 'Anatomy and physiology underpin the degree.' },
      { subjectId: 'chemistry', importance: 'helpful' },
      { subjectId: 'physics', importance: 'helpful' },
      { subjectId: 'maths', importance: 'recommended' },
    ],
    leavingCertNotes:
      'Most courses require at least one laboratory science subject (often Biology) plus the usual matriculation requirements.',
    collegeCourses: [
      { code: 'TR053', name: 'Physiotherapy', institution: 'Trinity College Dublin', level: 8, caoPoints: 578, pointsYear: '2024', duration: '4 years' },
      { code: 'DN410', name: 'Physiotherapy', institution: 'University College Dublin', level: 8, caoPoints: 566, pointsYear: '2024', duration: '4 years' },
      { code: 'RC003', name: 'Physiotherapy', institution: 'RCSI', level: 8, caoPoints: 555, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'MSc Physiotherapy (specialist)', type: 'Masters', description: 'Specialise in sports, neurology, paediatrics or musculoskeletal care.' },
    ],
    roles: [
      { title: 'Clinical Physiotherapist', description: 'Treats patients in hospital or community.', salaryRange: '€40k–€65k' },
      { title: 'Sports Physiotherapist', description: 'Works with athletes and teams.', salaryRange: '€40k–€80k' },
      { title: 'Senior / Clinical Specialist', description: 'Expert lead in a clinical area.', salaryRange: '€60k–€85k' },
    ],
    relatedCareers: ['nurse', 'doctor'],
  },
  {
    id: 'vet',
    title: 'Veterinarian',
    category: 'Health & Medicine',
    icon: '🐾',
    shortDescription: 'Diagnose and treat animals of all kinds.',
    description:
      'Vets care for the health of animals, from pets to farm livestock. In Ireland the only veterinary medicine degree is at UCD — a competitive 5-year course. Strong chemistry and biology are essential, and there is high demand for graduates.',
    juniorCycle: ['Science', 'Experience with animals', 'Maths'],
    seniorCycleSubjects: [
      { subjectId: 'chemistry', importance: 'essential', reason: 'Required for veterinary medicine.' },
      { subjectId: 'biology', importance: 'recommended' },
      { subjectId: 'agriScience', importance: 'helpful' },
      { subjectId: 'maths', importance: 'recommended' },
    ],
    leavingCertNotes:
      'Requires Chemistry plus another science/maths subject and high overall points. Places are very limited, so the points are among the highest in the country.',
    collegeCourses: [
      { code: 'DN300', name: 'Veterinary Medicine', institution: 'University College Dublin', level: 8, caoPoints: 589, pointsYear: '2024', duration: '5 years' },
      { code: 'DN310', name: 'Veterinary Nursing', institution: 'University College Dublin', level: 8, caoPoints: 466, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'Specialist Residency', type: 'Professional', description: 'Train towards a speciality such as surgery, equine or small-animal medicine.' },
      { name: 'PhD / Research', type: 'PhD', description: 'Veterinary research and academia.' },
    ],
    roles: [
      { title: 'Small-Animal Vet', description: 'Treats pets in a clinic or hospital.', salaryRange: '€45k–€80k' },
      { title: 'Large-Animal / Farm Vet', description: 'Cares for livestock and farm animals.', salaryRange: '€45k–€85k' },
      { title: 'Veterinary Surgeon / Specialist', description: 'Advanced surgical or specialist practice.', salaryRange: '€60k–€110k' },
    ],
    relatedCareers: ['doctor', 'pharmacist'],
  },
]

export function getCareer(id: string): Career | undefined {
  return CAREERS.find((c) => c.id === id)
}

export const CATEGORIES = Array.from(new Set(CAREERS.map((c) => c.category))).sort()
