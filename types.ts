
export enum View {
  HOME = 'HOME',
  INTRO = 'INTRO',
  MODES = 'MODES',
  FLOWCHART = 'FLOWCHART',
  ATS = 'ATS',
  AGC = 'AGC',
  CONTACT = 'CONTACT'
}

export interface ManualStep {
  id: number;
  label: string;
  description: string;
}

export interface Specification {
  label: string;
  value: string;
}
