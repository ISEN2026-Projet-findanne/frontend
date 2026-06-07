export const MOCK_USER = {
  name: "Mme Dupont",
  role: "Enseignant",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
};

export const MOCK_STUDENTS = [
  { id: "1", name: "Lucas Martin", group: "TD1", subject: "Java", avg: 14.5, risk: "faible", status: "validé", promo: "2026" },
  { id: "2", name: "Emma Bernard", group: "TD1", subject: "Java", avg: 9.5, risk: "modéré", status: "rattrapage", promo: "2026" },
  { id: "3", name: "Hugo Petit", group: "TD2", subject: "C++", avg: 7.2, risk: "critique", status: "échec", promo: "2026" },
  { id: "4", name: "Chloé Dubois", group: "TD2", subject: "C++", avg: 16.0, risk: "faible", status: "validé", promo: "2026" },
  { id: "5", name: "Léo Leroy", group: "TD1", subject: "Java", avg: 11.0, risk: "faible", status: "validé", promo: "2026" },
  { id: "6", name: "Camille Moreau", group: "TD3", subject: "Web Dev", avg: 8.5, risk: "modéré", status: "rattrapage", promo: "2026" },
  { id: "7", name: "Arthur Simon", group: "TD3", subject: "Web Dev", avg: 18.2, risk: "faible", status: "validé", promo: "2026" },
];

export const MOCK_SUBJECTS = [
  {
    id: "java",
    name: "Java",
    levels: [
      {
        id: "l1",
        name: "1ère année",
        classes: [
          {
            id: "java-l1-td1",
            name: "TD1",
            students: 25,
            avg: 12.4,
            successRate: 85,
          },
          {
            id: "java-l1-td2",
            name: "TD2",
            students: 28,
            avg: 13.1,
            successRate: 90,
          },
        ],
      },
      {
        id: "l2",
        name: "2ème année",
        classes: [
          {
            id: "java-l2-td1",
            name: "TD1",
            students: 20,
            avg: 11.7,
            successRate: 75,
          },
        ],
      },
    ],
  },

  {
    id: "cpp",
    name: "C++",
    levels: [
      {
        id: "l1",
        name: "1ère année",
        classes: [
          {
            id: "cpp-l1-td1",
            name: "TD1",
            students: 22,
            avg: 10.8,
            successRate: 68,
          },
        ],
      },
    ],
  },

  {
    id: "webdev",
    name: "Web Dev",
    levels: [
      {
        id: "l1",
        name: "1ère année",
        classes: [
          {
            id: "web-l1-td1",
            name: "TD1",
            students: 30,
            avg: 14.2,
            successRate: 93,
          },
        ],
      },
    ],
  },
];

export const MOCK_ALERTS = [
  { id: "a1", student: "Hugo Petit", risk: "critique", score: 92, action: "Contacter" },
  { id: "a2", student: "Emma Bernard", risk: "modéré", score: 65, action: "Surveiller" },
  { id: "a3", student: "Camille Moreau", risk: "modéré", score: 58, action: "Surveiller" },
];

export const MOCK_HISTOGRAM_DATA = [
  { range: "0-5", count: 2 },
  { range: "5-10", count: 5 },
  { range: "10-15", count: 18 },
  { range: "15-20", count: 12 },
];

export const MOCK_CURVE_DATA = [
  { month: "Sep", avg: 11.5 },
  { month: "Oct", avg: 12.2 },
  { month: "Nov", avg: 11.8 },
  { month: "Dec", avg: 12.9 },
  { month: "Jan", avg: 13.4 },
];

export const MOCK_RADAR_DATA = [
  { subject: "Algorithmie", A: 120, B: 110, fullMark: 150 },
  { subject: "Architecture", A: 98, B: 130, fullMark: 150 },
  { subject: "Base de données", A: 86, B: 130, fullMark: 150 },
  { subject: "Programmation", A: 99, B: 100, fullMark: 150 },
  { subject: "Projet", A: 85, B: 90, fullMark: 150 },
  { subject: "Maths", A: 65, B: 85, fullMark: 150 },
];
