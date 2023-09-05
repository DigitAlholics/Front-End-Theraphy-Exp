export interface MedicalHistory {
  id:number;
  patientId:number;
  patientName: string;
  height: number;
  weight: number;
  bodyMass: number;
  allergies: string[];
  pathologicalHistory: string[]
}
