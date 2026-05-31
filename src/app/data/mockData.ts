export type Student = {
  id: string;
  firstName: string;
  lastName: string;
  studentNumber: string;
  promo: string;
  group: string;
  year: number;
  averageS1: number;
  averageS2: number;
  annualAverage: number;
  rank: number;
  status: "Validé" | "Non Validé" | "En attente";
  riskLevel: "Faible" | "Modéré" | "Élevé" | "Critique";
  riskScore: number;
};

export const MOCK_STUDENTS: Student[] = [
  {
    id: "1",
    firstName: "Alice",
    lastName: "Dupont",
    studentNumber: "20230001",
    promo: "2024",
    group: "TD1",
    year: 1,
    averageS1: 14.5,
    averageS2: 15.2,
    annualAverage: 14.85,
    rank: 12,
    status: "Validé",
    riskLevel: "Faible",
    riskScore: 10,
  },
  {
    id: "2",
    firstName: "Bob",
    lastName: "Martin",
    studentNumber: "20230002",
    promo: "2024",
    group: "TD2",
    year: 1,
    averageS1: 9.5,
    averageS2: 8.2,
    annualAverage: 8.85,
    rank: 145,
    status: "Non Validé",
    riskLevel: "Critique",
    riskScore: 85,
  },
  {
    id: "3",
    firstName: "Charlie",
    lastName: "Durand",
    studentNumber: "20230003",
    promo: "2025",
    group: "TD1",
    year: 2,
    averageS1: 11.0,
    averageS2: 12.5,
    annualAverage: 11.75,
    rank: 55,
    status: "Validé",
    riskLevel: "Modéré",
    riskScore: 35,
  },
  {
    id: "4",
    firstName: "Diana",
    lastName: "Bernard",
    studentNumber: "20230004",
    promo: "2024",
    group: "TD3",
    year: 1,
    averageS1: 16.5,
    averageS2: 17.0,
    annualAverage: 16.75,
    rank: 2,
    status: "Validé",
    riskLevel: "Faible",
    riskScore: 5,
  },
  {
    id: "5",
    firstName: "Ethan",
    lastName: "Petit",
    studentNumber: "20230005",
    promo: "2025",
    group: "TD2",
    year: 2,
    averageS1: 10.2,
    averageS2: 9.8,
    annualAverage: 10.0,
    rank: 88,
    status: "En attente",
    riskLevel: "Élevé",
    riskScore: 65,
  },
];

export const MOCK_RECENT_ALERTS = [
  { id: 1, student: "Bob Martin", type: "Chute de notes", date: "2026-05-20", level: "Critique" },
  { id: 2, student: "Ethan Petit", type: "Absences répétées", date: "2026-05-21", level: "Élevé" },
  { id: 3, student: "Lucas Dubois", type: "Comportement", date: "2026-05-22", level: "Modéré" },
];

export const MOCK_RECENT_GRADES = [
  { id: 1, subject: "Mathématiques", exam: "Partiel S2", date: "2026-05-24", average: 11.2 },
  { id: 2, subject: "Physique", exam: "CC3", date: "2026-05-23", average: 13.5 },
  { id: 3, subject: "Informatique", exam: "Projet Web", date: "2026-05-22", average: 15.8 },
];
