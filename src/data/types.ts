// Core domain types for the Irish Career Pathways app.

export type SubjectCategory =
  | 'core'
  | 'science'
  | 'language'
  | 'business'
  | 'humanities'
  | 'practical'
  | 'arts'

export interface SubjectInfo {
  id: string
  name: string
  category: SubjectCategory
  description: string
}

export type Importance = 'essential' | 'recommended' | 'helpful'

export interface SeniorSubject {
  subjectId: string
  importance: Importance
  reason?: string
}

export interface CollegeCourse {
  /** CAO course code, e.g. "TR033" */
  code: string
  name: string
  institution: string
  /** NFQ level (8 = honours degree, 7 = ordinary degree, 6 = higher cert). */
  level: number
  /** Latest available CAO Round 1 points. null = not points based / matriculation only. */
  caoPoints: number | null
  /** Year the points figure refers to. */
  pointsYear: string
  duration: string
  /** Extra entry requirements such as HPAT, portfolio, interview. */
  extraRequirements?: string
}

export interface Postgrad {
  name: string
  type: 'Masters' | 'Professional' | 'PhD' | 'Diploma'
  description: string
}

export interface Role {
  title: string
  description: string
  salaryRange?: string
}

// How essential postgraduate study / professional training is for this career:
//  required     — you cannot practise without it (e.g. architect, psychologist, solicitor)
//  recommended  — commonly needed to qualify fully or progress (chartership, PME, PhD for research)
//  optional     — your degree is enough to start; postgrad is only for specialising
export type PostgradNeed = 'required' | 'recommended' | 'optional'

export interface Career {
  id: string
  title: string
  category: string
  icon: string
  shortDescription: string
  description: string
  postgradNeed?: PostgradNeed
  /** Focus areas / subject choices in 1st–3rd year (Junior Cycle). */
  juniorCycle: string[]
  /** Recommended Leaving Cert subjects (Senior Cycle). */
  seniorCycleSubjects: SeniorSubject[]
  leavingCertNotes: string
  collegeCourses: CollegeCourse[]
  postgrad: Postgrad[]
  roles: Role[]
  relatedCareers?: string[]
}
