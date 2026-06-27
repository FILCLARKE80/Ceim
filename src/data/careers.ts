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
    relatedCareers: ['accounting-technician', 'lawyer', 'data-scientist'],
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
  {
    id: 'marine-biologist',
    title: 'Marine Biologist',
    category: 'Science & Environment',
    icon: '🐠',
    shortDescription: 'Study life in the oceans, rivers and coasts.',
    description:
      'Marine biologists study sea life and ecosystems — from plankton to whales — and the impact of climate change, pollution and fishing. The usual route is a degree in marine science, zoology or biology, often followed by a research masters or PhD. Fieldwork, diving and lab analysis are all part of the job.',
    juniorCycle: ['Science', 'Geography', 'A love of nature and the sea'],
    seniorCycleSubjects: [
      { subjectId: 'biology', importance: 'essential', reason: 'The core science behind marine life.' },
      { subjectId: 'chemistry', importance: 'recommended', reason: 'Needed for water chemistry and many courses.' },
      { subjectId: 'geography', importance: 'helpful', reason: 'Covers oceans, ecosystems and the environment.' },
      { subjectId: 'maths', importance: 'recommended' },
    ],
    leavingCertNotes:
      'Most courses require at least one laboratory science (Biology and/or Chemistry). Higher-points degrees often want two sciences. A third language is needed for NUI courses.',
    collegeCourses: [
      { code: 'GY313', name: 'Marine Science', institution: 'University of Galway', level: 8, caoPoints: 419, pointsYear: '2024', duration: '4 years' },
      { code: 'CK402', name: 'Biological, Earth & Environmental Sciences', institution: 'University College Cork', level: 8, caoPoints: 466, pointsYear: '2024', duration: '4 years' },
      { code: 'AU770', name: 'Freshwater & Marine Biology', institution: 'ATU Galway', level: 8, caoPoints: 328, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'MSc Marine Biology / Marine Science', type: 'Masters', description: 'Specialise in ecology, fisheries, aquaculture or conservation.' },
      { name: 'PhD in Marine Science', type: 'PhD', description: 'Research route into academia and senior scientific roles.' },
    ],
    roles: [
      { title: 'Marine Biologist / Researcher', description: 'Studies marine species and ecosystems in the field and lab.', salaryRange: '€32k–€55k' },
      { title: 'Marine / Environmental Consultant', description: 'Advises on coastal projects, surveys and impact assessments.', salaryRange: '€38k–€70k' },
      { title: 'Fisheries / Aquaculture Scientist', description: 'Manages fish stocks or sustainable seafood production.', salaryRange: '€38k–€65k' },
    ],
    relatedCareers: ['vet', 'data-scientist'],
  },
  {
    id: 'accounting-technician',
    title: 'Accounting Technician',
    category: 'Business & Finance',
    icon: '🧾',
    shortDescription: 'Handle day-to-day accounts, payroll and bookkeeping.',
    description:
      'Accounting technicians keep the financial engine running — bookkeeping, payroll, invoices, VAT returns and management accounts. It is a faster, more affordable route into finance than a full accountancy degree: most qualify through a 2-year Accounting Technician programme (with Accounting Technicians Ireland) or an earn-as-you-learn apprenticeship, and can later progress to chartered accountant with exemptions.',
    juniorCycle: ['Business Studies', 'Maths', 'Attention to detail'],
    seniorCycleSubjects: [
      { subjectId: 'accounting', importance: 'recommended', reason: 'Direct head start on the technician exams.' },
      { subjectId: 'business', importance: 'recommended' },
      { subjectId: 'maths', importance: 'recommended' },
      { subjectId: 'economics', importance: 'helpful' },
    ],
    leavingCertNotes:
      'Entry is accessible — often via the Leaving Cert, a PLC/further-education course, or an apprenticeship, with much lower points than a university degree. Some take it straight after sixth year as an alternative to the CAO.',
    collegeCourses: [
      { code: 'APP', name: 'Accounting Technician Apprenticeship', institution: 'Accounting Technicians Ireland (nationwide)', level: 6, caoPoints: null, pointsYear: '2024', duration: '2 years', extraRequirements: 'Apprenticeship — earn while you learn' },
      { code: 'PLC', name: 'Accounting Technician (Level 6)', institution: 'ETB / Further Education colleges', level: 6, caoPoints: null, pointsYear: '2024', duration: '2 years', extraRequirements: 'PLC / QQI route' },
      { code: 'DT365', name: 'Accounting & Finance', institution: 'TU Dublin', level: 8, caoPoints: 350, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'Progress to Chartered Accountant (ACA/ACCA)', type: 'Professional', description: 'Qualified technicians get exemptions and can train towards full accountancy.' },
      { name: 'Degree top-up', type: 'Diploma', description: 'Convert the technician qualification into a Level 7/8 accounting degree.' },
    ],
    roles: [
      { title: 'Accounts Assistant', description: 'Processes invoices, reconciliations and ledgers.', salaryRange: '€30k–€42k' },
      { title: 'Payroll Administrator', description: 'Runs payroll, taxes and employee payments.', salaryRange: '€32k–€48k' },
      { title: 'Bookkeeper / Credit Controller', description: 'Keeps the books and manages money owed to the business.', salaryRange: '€32k–€50k' },
    ],
    relatedCareers: ['accountant', 'lawyer'],
  },
  {
    id: 'dentist',
    title: 'Dentist',
    category: 'Health & Medicine',
    icon: '🦷',
    shortDescription: 'Diagnose and treat teeth, gums and oral health.',
    description:
      'Dentists prevent, diagnose and treat problems with teeth and gums. The route is a 5-year Dental Science degree leading to registration with the Dental Council. Entry is very competitive and strong chemistry is essential.',
    juniorCycle: ['Science', 'Maths', 'Good manual dexterity'],
    seniorCycleSubjects: [
      { subjectId: 'chemistry', importance: 'essential', reason: 'Required for entry to dental science.' },
      { subjectId: 'biology', importance: 'recommended' },
      { subjectId: 'physics', importance: 'helpful' },
      { subjectId: 'maths', importance: 'recommended' },
    ],
    leavingCertNotes:
      'Requires Chemistry plus another science and high overall points. Some schools may interview. Places are very limited.',
    collegeCourses: [
      { code: 'TR072', name: 'Dental Science', institution: 'Trinity College Dublin', level: 8, caoPoints: 602, pointsYear: '2024', duration: '5 years' },
      { code: 'CK702', name: 'Dental Science', institution: 'University College Cork', level: 8, caoPoints: 590, pointsYear: '2024', duration: '5 years' },
    ],
    postgrad: [
      { name: 'Specialist Training (Ortho, Oral Surgery…)', type: 'Professional', description: 'Further training to specialise after qualifying and gaining experience.' },
      { name: 'Doctorate / Research', type: 'PhD', description: 'Academic and research dentistry.' },
    ],
    roles: [
      { title: 'General Dentist', description: 'Treats patients in a dental practice.', salaryRange: '€60k–€120k' },
      { title: 'Orthodontist', description: 'Specialist in braces and tooth alignment.', salaryRange: '€90k–€180k' },
      { title: 'Oral & Maxillofacial Surgeon', description: 'Surgery of the mouth, jaw and face.', salaryRange: '€120k–€250k' },
    ],
    relatedCareers: ['doctor', 'pharmacist'],
  },
  {
    id: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    category: 'Engineering',
    icon: '⚙️',
    shortDescription: 'Design machines, engines and manufacturing systems.',
    description:
      'Mechanical engineers design and build moving things — engines, machines, robotics, medical devices and production lines. The route is a Level 8 engineering degree, often with a common first year, leading to Chartered Engineer status.',
    juniorCycle: ['Maths', 'Science', 'Technical Graphics / making things'],
    seniorCycleSubjects: [
      { subjectId: 'maths', importance: 'essential', reason: 'Higher Level usually required; 25 bonus points.' },
      { subjectId: 'physics', importance: 'recommended', reason: 'Core to mechanics and thermodynamics.' },
      { subjectId: 'designGraphics', importance: 'recommended' },
      { subjectId: 'appliedMaths', importance: 'helpful' },
    ],
    leavingCertNotes:
      'Typically requires Higher Level Maths (often H4). Physics and DCG are strongly advantageous.',
    collegeCourses: [
      { code: 'DN150', name: 'Engineering (Mechanical)', institution: 'University College Dublin', level: 8, caoPoints: 533, pointsYear: '2024', duration: '4–5 years' },
      { code: 'LM116', name: 'Mechanical Engineering', institution: 'University of Limerick', level: 8, caoPoints: 419, pointsYear: '2024', duration: '4 years' },
      { code: 'CK600', name: 'Engineering', institution: 'University College Cork', level: 8, caoPoints: 466, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'ME Mechanical / Biomedical Engineering', type: 'Masters', description: 'Specialise in design, energy, robotics or medical devices.' },
      { name: 'Chartered Engineer (CEng)', type: 'Professional', description: 'Accreditation from Engineers Ireland after experience.' },
    ],
    roles: [
      { title: 'Design Engineer', description: 'Designs products and mechanical systems.', salaryRange: '€42k–€75k' },
      { title: 'Manufacturing / Process Engineer', description: 'Improves production lines and quality.', salaryRange: '€45k–€80k' },
      { title: 'Biomedical Device Engineer', description: 'Designs medical devices (big sector in Ireland).', salaryRange: '€48k–€90k' },
    ],
    relatedCareers: ['civil-engineer', 'electrical-engineer'],
  },
  {
    id: 'electrical-engineer',
    title: 'Electrical & Electronic Engineer',
    category: 'Engineering',
    icon: '🔌',
    shortDescription: 'Design electronics, power systems and circuits.',
    description:
      'Electrical and electronic engineers design everything from microchips and renewable-energy grids to communications and control systems. The route is a Level 8 engineering degree leading to Chartered Engineer status.',
    juniorCycle: ['Maths', 'Science', 'Electronics / coding'],
    seniorCycleSubjects: [
      { subjectId: 'maths', importance: 'essential', reason: 'Higher Level usually required; 25 bonus points.' },
      { subjectId: 'physics', importance: 'recommended', reason: 'Core to electricity and electronics.' },
      { subjectId: 'appliedMaths', importance: 'helpful' },
      { subjectId: 'computerScience', importance: 'helpful' },
    ],
    leavingCertNotes:
      'Higher Level Maths is normally required. Physics is highly recommended.',
    collegeCourses: [
      { code: 'TR032', name: 'Engineering (Electronic / Electrical)', institution: 'Trinity College Dublin', level: 8, caoPoints: 510, pointsYear: '2024', duration: '5 years' },
      { code: 'DN150', name: 'Engineering (Electrical/Electronic)', institution: 'University College Dublin', level: 8, caoPoints: 533, pointsYear: '2024', duration: '4–5 years' },
      { code: 'LM117', name: 'Electronic & Computer Engineering', institution: 'University of Limerick', level: 8, caoPoints: 400, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'ME Electronic / Electrical Engineering', type: 'Masters', description: 'Specialise in chip design, power, photonics or telecoms.' },
      { name: 'Chartered Engineer (CEng)', type: 'Professional', description: 'Accreditation from Engineers Ireland after experience.' },
    ],
    roles: [
      { title: 'Electronic Engineer', description: 'Designs circuits, chips and devices.', salaryRange: '€45k–€85k' },
      { title: 'Power / Energy Engineer', description: 'Works on electricity grids and renewables.', salaryRange: '€48k–€85k' },
      { title: 'Embedded Systems Engineer', description: 'Programs hardware and control systems.', salaryRange: '€50k–€95k' },
    ],
    relatedCareers: ['mechanical-engineer', 'software-engineer'],
  },
  {
    id: 'quantity-surveyor',
    title: 'Quantity Surveyor',
    category: 'Engineering',
    icon: '📋',
    shortDescription: 'Manage costs and contracts on construction projects.',
    description:
      'Quantity surveyors are the cost managers of construction — estimating, budgeting, procurement and contracts so projects stay on budget. The route is a Level 8 degree accredited by the SCSI, leading to Chartered Surveyor status.',
    juniorCycle: ['Maths', 'Business Studies', 'Technical Graphics'],
    seniorCycleSubjects: [
      { subjectId: 'maths', importance: 'recommended', reason: 'Costing and measurement are maths-heavy.' },
      { subjectId: 'designGraphics', importance: 'recommended' },
      { subjectId: 'business', importance: 'helpful' },
      { subjectId: 'economics', importance: 'helpful' },
    ],
    leavingCertNotes:
      'No mandatory subjects beyond matriculation, but Maths, DCG and Business are a strong foundation.',
    collegeCourses: [
      { code: 'TU813', name: 'Quantity Surveying & Construction Economics', institution: 'TU Dublin', level: 8, caoPoints: 400, pointsYear: '2024', duration: '4 years' },
      { code: 'GA785', name: 'Quantity Surveying', institution: 'ATU', level: 8, caoPoints: 309, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'Chartered Quantity Surveyor (SCSI/RICS)', type: 'Professional', description: 'Professional accreditation via the APC after experience.' },
      { name: 'MSc Construction / Project Management', type: 'Masters', description: 'Move into project and commercial management.' },
    ],
    roles: [
      { title: 'Quantity Surveyor', description: 'Manages costs and contracts on projects.', salaryRange: '€42k–€75k' },
      { title: 'Commercial Manager', description: 'Leads the commercial side of major projects.', salaryRange: '€70k–€110k' },
      { title: 'Estimator', description: 'Prices tenders and bids for construction work.', salaryRange: '€45k–€80k' },
    ],
    relatedCareers: ['civil-engineer', 'architect'],
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    category: 'Technology',
    icon: '🔐',
    shortDescription: 'Protect systems and data from cyber attacks.',
    description:
      'Cybersecurity professionals defend organisations from hackers — monitoring threats, testing defences and responding to incidents. Most enter through a computer science or dedicated cybersecurity degree, often with professional certifications.',
    juniorCycle: ['Maths', 'Coding / curiosity about how things break', 'Logic'],
    seniorCycleSubjects: [
      { subjectId: 'maths', importance: 'recommended', reason: 'Higher Level helps for the computing degree.' },
      { subjectId: 'computerScience', importance: 'recommended' },
      { subjectId: 'physics', importance: 'helpful' },
      { subjectId: 'business', importance: 'helpful' },
    ],
    leavingCertNotes:
      'Usually a H5/O6 in Maths is required. No other specific subjects, though computer science helps.',
    collegeCourses: [
      { code: 'TU856', name: 'Computer Science (Cybersecurity)', institution: 'TU Dublin', level: 8, caoPoints: 430, pointsYear: '2024', duration: '4 years' },
      { code: 'MU027', name: 'Computer Science (Cyber stream)', institution: 'Maynooth University', level: 8, caoPoints: 419, pointsYear: '2024', duration: '4 years' },
      { code: 'GA882', name: 'Cybersecurity', institution: 'ATU', level: 8, caoPoints: 350, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'MSc Cybersecurity', type: 'Masters', description: 'Specialise in forensics, network security or governance.' },
      { name: 'Industry certifications (CompTIA, CISSP)', type: 'Professional', description: 'Recognised certs that boost employability.' },
    ],
    roles: [
      { title: 'Security Analyst (SOC)', description: 'Monitors and responds to threats.', salaryRange: '€45k–€80k' },
      { title: 'Penetration Tester', description: 'Ethically hacks systems to find weaknesses.', salaryRange: '€55k–€100k' },
      { title: 'Security Architect', description: 'Designs secure systems and policy.', salaryRange: '€80k–€130k' },
    ],
    relatedCareers: ['software-engineer', 'data-scientist'],
  },
  {
    id: 'actuary',
    title: 'Actuary',
    category: 'Business & Finance',
    icon: '🎲',
    shortDescription: 'Use maths to measure and price risk.',
    description:
      'Actuaries use mathematics, statistics and finance to measure risk for insurance, pensions and investments. It is one of the most maths-intensive and well-paid careers, entered via an actuarial or maths degree plus professional exams.',
    juniorCycle: ['Maths (excelling)', 'Logic', 'Problem solving'],
    seniorCycleSubjects: [
      { subjectId: 'maths', importance: 'essential', reason: 'A high Higher Level Maths grade is essential.' },
      { subjectId: 'appliedMaths', importance: 'recommended' },
      { subjectId: 'economics', importance: 'helpful' },
      { subjectId: 'accounting', importance: 'helpful' },
    ],
    leavingCertNotes:
      'A H1/H2 in Higher Level Maths is typically expected. Actuarial degrees are among the highest-points courses.',
    collegeCourses: [
      { code: 'DN230', name: 'Actuarial & Financial Studies', institution: 'University College Dublin', level: 8, caoPoints: 601, pointsYear: '2024', duration: '4 years' },
      { code: 'DC353', name: 'Actuarial Mathematics', institution: 'Dublin City University', level: 8, caoPoints: 566, pointsYear: '2024', duration: '4 years' },
      { code: 'CK407', name: 'Financial Mathematics & Actuarial Science', institution: 'University College Cork', level: 8, caoPoints: 543, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'Professional Actuarial Exams (IFoA)', type: 'Professional', description: 'A series of exams sat while working to become a Fellow.' },
      { name: 'MSc Actuarial Science', type: 'Masters', description: 'Conversion/specialist route with exam exemptions.' },
    ],
    roles: [
      { title: 'Trainee Actuary', description: 'Works and studies towards qualification.', salaryRange: '€45k–€65k' },
      { title: 'Qualified Actuary', description: 'Prices risk for insurers and pension funds.', salaryRange: '€80k–€140k' },
      { title: 'Chief Risk Officer', description: 'Leads risk strategy for a company.', salaryRange: '€130k–€250k+' },
    ],
    relatedCareers: ['accountant', 'data-scientist', 'economist'],
  },
  {
    id: 'economist',
    title: 'Economist',
    category: 'Business & Finance',
    icon: '📉',
    shortDescription: 'Analyse the economy, markets and policy.',
    description:
      'Economists study how money, markets and policy shape society — advising governments, banks, and companies. The route is an economics degree, often followed by a masters for analyst and policy roles.',
    juniorCycle: ['Business Studies', 'Maths', 'Current affairs'],
    seniorCycleSubjects: [
      { subjectId: 'economics', importance: 'recommended', reason: 'A direct introduction to the field.' },
      { subjectId: 'maths', importance: 'recommended', reason: 'Modern economics is quantitative.' },
      { subjectId: 'business', importance: 'helpful' },
      { subjectId: 'geography', importance: 'helpful' },
    ],
    leavingCertNotes:
      'Higher Level Maths is a real advantage. A third language is required for NUI economics degrees.',
    collegeCourses: [
      { code: 'TR081', name: 'Business, Economic & Social Studies (BESS)', institution: 'Trinity College Dublin', level: 8, caoPoints: 510, pointsYear: '2024', duration: '4 years' },
      { code: 'DN700', name: 'Economics', institution: 'University College Dublin', level: 8, caoPoints: 498, pointsYear: '2024', duration: '3 years' },
      { code: 'CK201', name: 'Economics', institution: 'University College Cork', level: 8, caoPoints: 466, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'MSc Economics', type: 'Masters', description: 'Required for most professional economist roles.' },
      { name: 'PhD Economics', type: 'PhD', description: 'Route into research, academia and central banking.' },
    ],
    roles: [
      { title: 'Economic Analyst', description: 'Models and forecasts economic trends.', salaryRange: '€45k–€80k' },
      { title: 'Policy Economist', description: 'Advises government and bodies on policy.', salaryRange: '€55k–€95k' },
      { title: 'Financial / Markets Economist', description: 'Advises banks and investors.', salaryRange: '€70k–€140k' },
    ],
    relatedCareers: ['accountant', 'actuary', 'data-scientist'],
  },
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    category: 'Business & Finance',
    icon: '📣',
    shortDescription: 'Plan and run campaigns to grow brands.',
    description:
      'Marketing professionals research customers and design campaigns to grow brands and sales — across digital, social, advertising and PR. The route is usually a marketing or business degree, with digital marketing booming in Ireland.',
    juniorCycle: ['Business Studies', 'Art / creativity', 'Communication'],
    seniorCycleSubjects: [
      { subjectId: 'business', importance: 'recommended', reason: 'Introduces marketing and enterprise.' },
      { subjectId: 'english', importance: 'recommended', reason: 'Communication is central to marketing.' },
      { subjectId: 'art', importance: 'helpful' },
      { subjectId: 'economics', importance: 'helpful' },
    ],
    leavingCertNotes:
      'No mandatory subjects beyond matriculation. Business and a creative subject are useful.',
    collegeCourses: [
      { code: 'DC230', name: 'Marketing, Innovation & Technology', institution: 'Dublin City University', level: 8, caoPoints: 419, pointsYear: '2024', duration: '4 years' },
      { code: 'TU717', name: 'Marketing', institution: 'TU Dublin', level: 8, caoPoints: 380, pointsYear: '2024', duration: '4 years' },
      { code: 'DN650', name: 'Commerce (Marketing)', institution: 'University College Dublin', level: 8, caoPoints: 520, pointsYear: '2024', duration: '3 years' },
    ],
    postgrad: [
      { name: 'MSc Marketing / Digital Marketing', type: 'Masters', description: 'Specialise and accelerate into management.' },
      { name: 'Professional Diploma (Digital Marketing)', type: 'Diploma', description: 'Short, practical qualifications widely valued.' },
    ],
    roles: [
      { title: 'Digital Marketing Executive', description: 'Runs social, search and content campaigns.', salaryRange: '€32k–€50k' },
      { title: 'Brand / Marketing Manager', description: 'Leads strategy for a brand or product.', salaryRange: '€50k–€90k' },
      { title: 'Marketing Director', description: 'Heads marketing across an organisation.', salaryRange: '€90k–€160k' },
    ],
    relatedCareers: ['accountant', 'journalist'],
  },
  {
    id: 'journalist',
    title: 'Journalist',
    category: 'Law & Society',
    icon: '📰',
    shortDescription: 'Research, write and report the news.',
    description:
      'Journalists find, verify and tell stories across newspapers, broadcast and online media. The usual route is a journalism or communications degree, building a portfolio and shorthand along the way.',
    juniorCycle: ['Strong English', 'CSPE / current affairs', 'Writing for the school'],
    seniorCycleSubjects: [
      { subjectId: 'english', importance: 'recommended', reason: 'Writing is the core skill.' },
      { subjectId: 'history', importance: 'helpful', reason: 'Builds research and context.' },
      { subjectId: 'politics', importance: 'helpful' },
      { subjectId: 'french', importance: 'helpful' },
    ],
    leavingCertNotes:
      'No mandatory subjects beyond matriculation; a strong English grade and wide reading matter most.',
    collegeCourses: [
      { code: 'DC131', name: 'Journalism', institution: 'Dublin City University', level: 8, caoPoints: 419, pointsYear: '2024', duration: '4 years' },
      { code: 'TU712', name: 'Journalism', institution: 'TU Dublin', level: 8, caoPoints: 408, pointsYear: '2024', duration: '4 years' },
      { code: 'GY110', name: 'Arts (Journalism pathway)', institution: 'University of Galway', level: 8, caoPoints: 350, pointsYear: '2024', duration: '3 years' },
    ],
    postgrad: [
      { name: 'MA Journalism', type: 'Masters', description: 'A common entry route, including for graduates of other subjects.' },
      { name: 'Specialist Diploma (Broadcast/Online)', type: 'Diploma', description: 'Focus on radio, TV or digital media.' },
    ],
    roles: [
      { title: 'Reporter / Journalist', description: 'Researches and writes news stories.', salaryRange: '€30k–€55k' },
      { title: 'Sub-editor / Producer', description: 'Edits copy or produces broadcast content.', salaryRange: '€38k–€65k' },
      { title: 'Editor', description: 'Leads a newsroom or publication.', salaryRange: '€60k–€110k' },
    ],
    relatedCareers: ['lawyer', 'marketing-manager'],
  },
  {
    id: 'graphic-designer',
    title: 'Graphic Designer',
    category: 'Arts & Design',
    icon: '🎨',
    shortDescription: 'Create visual designs for brands and media.',
    description:
      'Graphic designers create the visual identity of brands, products and media — logos, layouts, packaging and digital interfaces. The route is a design degree, almost always requiring a portfolio for entry.',
    juniorCycle: ['Art', 'Graphics / digital tools', 'Building a sketchbook'],
    seniorCycleSubjects: [
      { subjectId: 'art', importance: 'essential', reason: 'Builds the portfolio that design courses require.' },
      { subjectId: 'designGraphics', importance: 'recommended' },
      { subjectId: 'english', importance: 'helpful' },
      { subjectId: 'business', importance: 'helpful' },
    ],
    leavingCertNotes:
      'Most design degrees require a portfolio of creative work for entry, sometimes alongside a points requirement. Start building it early.',
    collegeCourses: [
      { code: 'AD201', name: 'Visual Communication Design', institution: 'NCAD', level: 8, caoPoints: null, pointsYear: '2024', duration: '4 years', extraRequirements: 'Portfolio-based entry' },
      { code: 'DL836', name: 'Design for Visual Communications', institution: 'IADT', level: 8, caoPoints: null, pointsYear: '2024', duration: '4 years', extraRequirements: 'Portfolio + points' },
      { code: 'TU975', name: 'Graphic Design', institution: 'TU Dublin', level: 8, caoPoints: null, pointsYear: '2024', duration: '4 years', extraRequirements: 'Portfolio + points' },
    ],
    postgrad: [
      { name: 'MA Design / UX', type: 'Masters', description: 'Specialise in branding, motion or user-experience design.' },
      { name: 'UX/UI Conversion Course', type: 'Diploma', description: 'Move into high-demand digital product design.' },
    ],
    roles: [
      { title: 'Graphic Designer', description: 'Designs for print and digital media.', salaryRange: '€32k–€55k' },
      { title: 'UX / Product Designer', description: 'Designs apps and digital experiences.', salaryRange: '€45k–€85k' },
      { title: 'Art / Creative Director', description: 'Leads the creative vision of a studio or brand.', salaryRange: '€60k–€110k' },
    ],
    relatedCareers: ['architect', 'marketing-manager'],
  },
  {
    id: 'occupational-therapist',
    title: 'Occupational Therapist',
    category: 'Health & Medicine',
    icon: '🧩',
    shortDescription: 'Help people do the everyday activities that matter.',
    description:
      'Occupational therapists help people of all ages take part in daily life — after injury, illness or disability — through practical rehabilitation and adaptation. The route is a 4-year degree registered with CORU.',
    juniorCycle: ['Science', 'Caring / volunteering', 'Practical problem solving'],
    seniorCycleSubjects: [
      { subjectId: 'biology', importance: 'recommended', reason: 'Anatomy and physiology underpin the degree.' },
      { subjectId: 'chemistry', importance: 'helpful' },
      { subjectId: 'homeEc', importance: 'helpful' },
      { subjectId: 'maths', importance: 'recommended' },
    ],
    leavingCertNotes:
      'Most courses require a laboratory science subject plus the usual matriculation requirements.',
    collegeCourses: [
      { code: 'TR055', name: 'Occupational Therapy', institution: 'Trinity College Dublin', level: 8, caoPoints: 543, pointsYear: '2024', duration: '4 years' },
      { code: 'CK706', name: 'Occupational Therapy', institution: 'University College Cork', level: 8, caoPoints: 521, pointsYear: '2024', duration: '4 years' },
      { code: 'GY512', name: 'Occupational Therapy', institution: 'University of Galway', level: 8, caoPoints: 510, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'MSc Occupational Therapy (specialist)', type: 'Masters', description: 'Specialise in areas like paediatrics, mental health or neuro-rehab.' },
    ],
    roles: [
      { title: 'Occupational Therapist', description: 'Assesses and supports daily-living skills.', salaryRange: '€40k–€65k' },
      { title: 'Senior OT', description: 'Leads a clinical area or team.', salaryRange: '€55k–€80k' },
      { title: 'OT Manager', description: 'Manages an OT department.', salaryRange: '€70k–€90k' },
    ],
    relatedCareers: ['physiotherapist', 'speech-language-therapist', 'nurse'],
  },
  {
    id: 'speech-language-therapist',
    title: 'Speech & Language Therapist',
    category: 'Health & Medicine',
    icon: '🗣️',
    shortDescription: 'Help people with speech, language and swallowing.',
    description:
      'Speech and language therapists assess and treat communication and swallowing difficulties in children and adults. The route is a 4-year degree registered with CORU.',
    juniorCycle: ['Science', 'Strong English / languages', 'Interest in communication'],
    seniorCycleSubjects: [
      { subjectId: 'biology', importance: 'recommended', reason: 'Anatomy and physiology of speech.' },
      { subjectId: 'english', importance: 'helpful', reason: 'Language is central to the work.' },
      { subjectId: 'french', importance: 'helpful' },
      { subjectId: 'maths', importance: 'recommended' },
    ],
    leavingCertNotes:
      'Most courses require a laboratory science (often Biology). A third language is needed for NUI courses.',
    collegeCourses: [
      { code: 'TR057', name: 'Clinical Speech & Language Studies', institution: 'Trinity College Dublin', level: 8, caoPoints: 521, pointsYear: '2024', duration: '4 years' },
      { code: 'CK704', name: 'Speech & Language Therapy', institution: 'University College Cork', level: 8, caoPoints: 498, pointsYear: '2024', duration: '4 years' },
      { code: 'GY513', name: 'Speech & Language Therapy', institution: 'University of Galway', level: 8, caoPoints: 488, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'MSc Speech & Language Therapy', type: 'Masters', description: 'Specialise or enter via a graduate-entry masters.' },
    ],
    roles: [
      { title: 'Speech & Language Therapist', description: 'Treats communication and swallowing needs.', salaryRange: '€40k–€65k' },
      { title: 'Senior SLT', description: 'Specialist lead in a clinical area.', salaryRange: '€55k–€80k' },
      { title: 'SLT Manager', description: 'Leads a therapy service.', salaryRange: '€70k–€90k' },
    ],
    relatedCareers: ['occupational-therapist', 'physiotherapist', 'psychologist'],
  },
  {
    id: 'radiographer',
    title: 'Radiographer',
    category: 'Health & Medicine',
    icon: '🩻',
    shortDescription: 'Produce medical images to diagnose illness.',
    description:
      'Radiographers use X-ray, CT, MRI and ultrasound to produce the images doctors use to diagnose and treat patients. The route is a 4-year degree registered with CORU. Physics and biology are valuable.',
    juniorCycle: ['Science', 'Maths', 'Technology'],
    seniorCycleSubjects: [
      { subjectId: 'physics', importance: 'recommended', reason: 'Imaging is built on physics.' },
      { subjectId: 'biology', importance: 'recommended' },
      { subjectId: 'chemistry', importance: 'helpful' },
      { subjectId: 'maths', importance: 'recommended' },
    ],
    leavingCertNotes:
      'Requires a laboratory science (Physics is especially relevant) plus the usual matriculation.',
    collegeCourses: [
      { code: 'TR058', name: 'Radiation Therapy', institution: 'Trinity College Dublin', level: 8, caoPoints: 510, pointsYear: '2024', duration: '4 years' },
      { code: 'DN410', name: 'Radiography', institution: 'University College Dublin', level: 8, caoPoints: 543, pointsYear: '2024', duration: '4 years' },
      { code: 'CK705', name: 'Medical & Health Sciences (Radiography)', institution: 'University College Cork', level: 8, caoPoints: 521, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'MSc Radiography / Imaging', type: 'Masters', description: 'Specialise in CT, MRI, ultrasound or radiation therapy.' },
    ],
    roles: [
      { title: 'Diagnostic Radiographer', description: 'Performs X-rays, CT and MRI scans.', salaryRange: '€40k–€65k' },
      { title: 'Radiation Therapist', description: 'Delivers radiotherapy to cancer patients.', salaryRange: '€42k–€70k' },
      { title: 'Clinical Specialist / Manager', description: 'Leads an imaging service.', salaryRange: '€60k–€90k' },
    ],
    relatedCareers: ['nurse', 'doctor', 'physiotherapist'],
  },
  {
    id: 'dietitian',
    title: 'Dietitian',
    category: 'Health & Medicine',
    icon: '🥗',
    shortDescription: 'Use nutrition science to improve health.',
    description:
      'Dietitians apply the science of nutrition to prevent and treat illness — from hospitals to public health and sport. The route is a degree in human nutrition and dietetics, registered with CORU.',
    juniorCycle: ['Science', 'Home Economics', 'Interest in food and health'],
    seniorCycleSubjects: [
      { subjectId: 'chemistry', importance: 'recommended', reason: 'Required or strongly advised for dietetics.' },
      { subjectId: 'biology', importance: 'recommended' },
      { subjectId: 'homeEc', importance: 'helpful' },
      { subjectId: 'maths', importance: 'recommended' },
    ],
    leavingCertNotes:
      'Chemistry (and often Biology) is typically required for dietetics degrees. Check each course closely.',
    collegeCourses: [
      { code: 'DC203', name: 'Human Nutrition & Dietetics', institution: 'Dublin Institutions (joint TUD/TCD/DIT)', level: 8, caoPoints: 543, pointsYear: '2024', duration: '4 years' },
      { code: 'CK709', name: 'Nutritional Sciences', institution: 'University College Cork', level: 8, caoPoints: 510, pointsYear: '2024', duration: '4 years' },
      { code: 'DN261', name: 'Human Nutrition', institution: 'University College Dublin', level: 8, caoPoints: 498, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'MSc Dietetics', type: 'Masters', description: 'Graduate-entry route to registration for science graduates.' },
      { name: 'Sports / Clinical Nutrition', type: 'Masters', description: 'Specialise in performance or clinical care.' },
    ],
    roles: [
      { title: 'Clinical Dietitian', description: 'Treats patients in hospital or community.', salaryRange: '€40k–€65k' },
      { title: 'Sports Dietitian', description: 'Advises athletes and teams on nutrition.', salaryRange: '€40k–€75k' },
      { title: 'Public Health Nutritionist', description: 'Shapes population nutrition policy.', salaryRange: '€45k–€80k' },
    ],
    relatedCareers: ['nurse', 'physiotherapist', 'doctor'],
  },
  {
    id: 'social-worker',
    title: 'Social Worker',
    category: 'Law & Society',
    icon: '🤝',
    shortDescription: 'Support and protect vulnerable people and families.',
    description:
      'Social workers support people through difficult times — protecting children, helping families, and advocating for vulnerable adults. The route is a professional social work degree (or postgraduate masters), registered with CORU.',
    juniorCycle: ['CSPE / social awareness', 'Strong English', 'Volunteering'],
    seniorCycleSubjects: [
      { subjectId: 'english', importance: 'recommended', reason: 'Reports and communication are central.' },
      { subjectId: 'politics', importance: 'helpful' },
      { subjectId: 'biology', importance: 'helpful' },
      { subjectId: 'history', importance: 'helpful' },
    ],
    leavingCertNotes:
      'No mandatory subjects beyond matriculation. Many qualify via a primary social-science degree then a masters in social work.',
    collegeCourses: [
      { code: 'CK113', name: 'Social Work (BSW)', institution: 'University College Cork', level: 8, caoPoints: 419, pointsYear: '2024', duration: '4 years' },
      { code: 'DN720', name: 'Social Science', institution: 'University College Dublin', level: 8, caoPoints: 421, pointsYear: '2024', duration: '3 years' },
      { code: 'MH103', name: 'Applied Social Studies', institution: 'Maynooth University', level: 8, caoPoints: 400, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'Master of Social Work (MSW)', type: 'Masters', description: 'The professional qualifying route for many social workers.' },
    ],
    roles: [
      { title: 'Child Protection Social Worker', description: 'Safeguards children and supports families.', salaryRange: '€42k–€70k' },
      { title: 'Medical Social Worker', description: 'Supports patients in hospital settings.', salaryRange: '€42k–€70k' },
      { title: 'Team Leader / Principal', description: 'Leads a social work team.', salaryRange: '€65k–€90k' },
    ],
    relatedCareers: ['psychologist', 'teacher-primary'],
  },
  {
    id: 'research-scientist',
    title: 'Research Scientist',
    category: 'Science & Environment',
    icon: '🔬',
    shortDescription: 'Investigate how the world works in the lab.',
    description:
      'Research scientists run experiments to advance knowledge and develop new products — in pharma, biotech, chemistry and beyond. The route is a science degree, almost always followed by a PhD for independent research roles.',
    juniorCycle: ['Science', 'Maths', 'Curiosity and experiments'],
    seniorCycleSubjects: [
      { subjectId: 'chemistry', importance: 'recommended', reason: 'Core to most lab science.' },
      { subjectId: 'biology', importance: 'recommended' },
      { subjectId: 'physics', importance: 'helpful' },
      { subjectId: 'maths', importance: 'recommended' },
    ],
    leavingCertNotes:
      'A laboratory science is normally required. Two sciences and Higher Level Maths strengthen applications.',
    collegeCourses: [
      { code: 'TR071', name: 'Science', institution: 'Trinity College Dublin', level: 8, caoPoints: 521, pointsYear: '2024', duration: '4 years' },
      { code: 'DN200', name: 'Science', institution: 'University College Dublin', level: 8, caoPoints: 498, pointsYear: '2024', duration: '4 years' },
      { code: 'CK402', name: 'Biological, Earth & Environmental Sciences', institution: 'University College Cork', level: 8, caoPoints: 466, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'PhD (Biochemistry, Chemistry, etc.)', type: 'PhD', description: 'Essential for leading independent research.' },
      { name: 'MSc Research / Industry specialism', type: 'Masters', description: 'Specialise for industry R&D roles.' },
    ],
    roles: [
      { title: 'Laboratory Scientist', description: 'Runs experiments and analysis.', salaryRange: '€35k–€55k' },
      { title: 'R&D Scientist (Pharma/Biotech)', description: 'Develops new drugs and products.', salaryRange: '€45k–€85k' },
      { title: 'Principal Investigator', description: 'Leads a research group or lab.', salaryRange: '€70k–€120k' },
    ],
    relatedCareers: ['marine-biologist', 'pharmacist', 'environmental-scientist'],
  },
  {
    id: 'environmental-scientist',
    title: 'Environmental Scientist',
    category: 'Science & Environment',
    icon: '🌍',
    shortDescription: 'Study and protect the natural environment.',
    description:
      'Environmental scientists study ecosystems, climate, water and pollution to protect the planet and guide sustainable decisions. The route is a degree in environmental or earth science, with strong demand driven by climate action.',
    juniorCycle: ['Science', 'Geography', 'Interest in nature and climate'],
    seniorCycleSubjects: [
      { subjectId: 'biology', importance: 'recommended' },
      { subjectId: 'geography', importance: 'recommended', reason: 'Covers ecosystems and the environment.' },
      { subjectId: 'chemistry', importance: 'recommended' },
      { subjectId: 'maths', importance: 'helpful' },
    ],
    leavingCertNotes:
      'A laboratory science is normally required; Geography is a strong complement.',
    collegeCourses: [
      { code: 'CK402', name: 'Biological, Earth & Environmental Sciences', institution: 'University College Cork', level: 8, caoPoints: 466, pointsYear: '2024', duration: '4 years' },
      { code: 'DN200', name: 'Science (Environmental stream)', institution: 'University College Dublin', level: 8, caoPoints: 498, pointsYear: '2024', duration: '4 years' },
      { code: 'GY302', name: 'Environmental Science', institution: 'University of Galway', level: 8, caoPoints: 409, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'MSc Environmental Science / Climate', type: 'Masters', description: 'Specialise in climate, water, or sustainability.' },
      { name: 'PhD Environmental Research', type: 'PhD', description: 'Research and policy leadership.' },
    ],
    roles: [
      { title: 'Environmental Scientist', description: 'Monitors and protects the environment.', salaryRange: '€35k–€60k' },
      { title: 'Environmental Consultant', description: 'Advises on impact and compliance.', salaryRange: '€40k–€75k' },
      { title: 'Sustainability Manager', description: 'Leads sustainability strategy.', salaryRange: '€55k–€95k' },
    ],
    relatedCareers: ['marine-biologist', 'research-scientist', 'civil-engineer'],
  },
  {
    id: 'physicist',
    title: 'Physicist',
    category: 'Science & Environment',
    icon: '🔭',
    shortDescription: 'Study matter, energy and the laws of the universe.',
    description:
      'Physicists study everything from subatomic particles to galaxies, and apply that knowledge in technology, medicine and finance. The route is a physics degree, often followed by a PhD for research and many quantitative careers.',
    juniorCycle: ['Maths (excelling)', 'Science', 'Curiosity about how things work'],
    seniorCycleSubjects: [
      { subjectId: 'physics', importance: 'essential', reason: 'The foundation of the degree.' },
      { subjectId: 'maths', importance: 'essential', reason: 'Physics is deeply mathematical.' },
      { subjectId: 'appliedMaths', importance: 'recommended' },
      { subjectId: 'chemistry', importance: 'helpful' },
    ],
    leavingCertNotes:
      'Higher Level Maths is strongly expected; Physics is required or strongly advised. Theoretical physics courses are very high points.',
    collegeCourses: [
      { code: 'TR035', name: 'Physical Sciences', institution: 'Trinity College Dublin', level: 8, caoPoints: 543, pointsYear: '2024', duration: '4 years' },
      { code: 'TR034', name: 'Theoretical Physics', institution: 'Trinity College Dublin', level: 8, caoPoints: 589, pointsYear: '2024', duration: '4 years' },
      { code: 'DN200', name: 'Science (Physics)', institution: 'University College Dublin', level: 8, caoPoints: 498, pointsYear: '2024', duration: '4 years' },
    ],
    postgrad: [
      { name: 'PhD Physics', type: 'PhD', description: 'Route into research, academia and national labs.' },
      { name: 'MSc (Medical Physics, Data, Finance)', type: 'Masters', description: 'Physics graduates are prized across quantitative fields.' },
    ],
    roles: [
      { title: 'Research Physicist', description: 'Investigates physical phenomena.', salaryRange: '€40k–€75k' },
      { title: 'Medical Physicist', description: 'Applies physics in hospitals (imaging, radiotherapy).', salaryRange: '€55k–€95k' },
      { title: 'Quantitative Analyst', description: 'Applies physics-style maths in finance/tech.', salaryRange: '€70k–€140k' },
    ],
    relatedCareers: ['research-scientist', 'data-scientist', 'electrical-engineer'],
  },
  {
    id: 'lecturer',
    title: 'University Lecturer / Academic',
    category: 'Education',
    icon: '🎓',
    shortDescription: 'Teach and research at third level.',
    description:
      'Academics teach university students and carry out original research in their field. The path is a primary degree, then a masters and PhD in the subject, followed by research and teaching posts. It is a long route driven by deep interest in a subject.',
    juniorCycle: ['Your strongest subject', 'Reading widely', 'Writing'],
    seniorCycleSubjects: [
      { subjectId: 'english', importance: 'helpful', reason: 'Writing and analysis matter in every field.' },
      { subjectId: 'maths', importance: 'helpful' },
      { subjectId: 'history', importance: 'helpful' },
      { subjectId: 'biology', importance: 'helpful' },
    ],
    leavingCertNotes:
      'Your subject of interest guides your choices — aim for a strong degree in the field you want to research.',
    collegeCourses: [
      { code: 'TR071', name: 'Science / Arts (your field)', institution: 'Trinity College Dublin', level: 8, caoPoints: 521, pointsYear: '2024', duration: '3–4 years' },
      { code: 'DN200', name: 'Science / Arts (your field)', institution: 'University College Dublin', level: 8, caoPoints: 498, pointsYear: '2024', duration: '3–4 years' },
      { code: 'GY101', name: 'Arts (your field)', institution: 'University of Galway', level: 8, caoPoints: 350, pointsYear: '2024', duration: '3 years' },
    ],
    postgrad: [
      { name: 'PhD (in your discipline)', type: 'PhD', description: 'Essential — an original research doctorate is the entry ticket.' },
      { name: 'Postdoctoral Research', type: 'Professional', description: 'Research posts building towards a permanent academic position.' },
    ],
    roles: [
      { title: 'Postdoctoral Researcher', description: 'Carries out funded research after the PhD.', salaryRange: '€42k–€55k' },
      { title: 'Lecturer / Assistant Professor', description: 'Teaches and researches permanently.', salaryRange: '€55k–€90k' },
      { title: 'Professor', description: 'Senior academic leading a field and department.', salaryRange: '€100k–€150k' },
    ],
    relatedCareers: ['research-scientist', 'teacher-secondary', 'psychologist'],
  },
]

export function getCareer(id: string): Career | undefined {
  return CAREERS.find((c) => c.id === id)
}

export const CATEGORIES = Array.from(new Set(CAREERS.map((c) => c.category))).sort()
