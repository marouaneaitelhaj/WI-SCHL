import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export type TSession = {
  id: number;
  day: string;
  hour: string;
};

export const sessions: TSession[] = [
  {
    id: 1,
    day: "lun",
    hour: "07:00",
  },
  {
    id: 2,
    day: "lun",
    hour: "08:00",
  },
  {
    id: 3,
    day: "lun",
    hour: "09:00",
  },
  {
    id: 4,
    day: "lun",
    hour: "10:00",
  },
  {
    id: 5,
    day: "lun",
    hour: "11:00",
  },
  {
    id: 6,
    day: "lun",
    hour: "12:00",
  },
  {
    id: 7,
    day: "lun",
    hour: "13:00",
  },
  {
    id: 8,
    day: "lun",
    hour: "14:00",
  },
  {
    id: 9,
    day: "lun",
    hour: "15:00",
  },
  {
    id: 10,
    day: "lun",
    hour: "16:00",
  },
  {
    id: 11,
    day: "lun",
    hour: "17:00",
  },
  {
    id: 12,
    day: "lun",
    hour: "18:00",
  },
  {
    id: 13,
    day: "lun",
    hour: "19:00",
  },
  {
    id: 14,
    day: "mar",
    hour: "07:00",
  },
  {
    id: 15,
    day: "mar",
    hour: "08:00",
  },
  {
    id: 16,
    day: "mar",
    hour: "09:00",
  },
  {
    id: 17,
    day: "mar",
    hour: "10:00",
  },
  {
    id: 18,
    day: "mar",
    hour: "11:00",
  },
  {
    id: 19,
    day: "mar",
    hour: "12:00",
  },
  {
    id: 20,
    day: "mar",
    hour: "13:00",
  },
  {
    id: 21,
    day: "mar",
    hour: "14:00",
  },
  {
    id: 22,
    day: "mar",
    hour: "15:00",
  },
  {
    id: 23,
    day: "mar",
    hour: "16:00",
  },
  {
    id: 24,
    day: "mar",
    hour: "17:00",
  },
  {
    id: 25,
    day: "mar",
    hour: "18:00",
  },
  {
    id: 26,
    day: "mar",
    hour: "19:00",
  },
  {
    id: 27,
    day: "mer",
    hour: "07:00",
  },
  {
    id: 28,
    day: "mer",
    hour: "08:00",
  },
  {
    id: 29,
    day: "mer",
    hour: "09:00",
  },
  {
    id: 30,
    day: "mer",
    hour: "10:00",
  },
  {
    id: 31,
    day: "mer",
    hour: "11:00",
  },
  {
    id: 32,
    day: "mer",
    hour: "12:00",
  },
  {
    id: 33,
    day: "mer",
    hour: "13:00",
  },
  {
    id: 34,
    day: "mer",
    hour: "14:00",
  },
  {
    id: 35,
    day: "mer",
    hour: "15:00",
  },
  {
    id: 36,
    day: "mer",
    hour: "16:00",
  },
  {
    id: 37,
    day: "mer",
    hour: "17:00",
  },
  {
    id: 38,
    day: "mer",
    hour: "18:00",
  },
  {
    id: 39,
    day: "mer",
    hour: "19:00",
  },
  {
    id: 40,
    day: "jeu",
    hour: "07:00",
  },
  {
    id: 41,
    day: "jeu",
    hour: "08:00",
  },
  {
    id: 42,
    day: "jeu",
    hour: "09:00",
  },
  {
    id: 43,
    day: "jeu",
    hour: "10:00",
  },
  {
    id: 44,
    day: "jeu",
    hour: "11:00",
  },
  {
    id: 45,
    day: "jeu",
    hour: "12:00",
  },
  {
    id: 46,
    day: "jeu",
    hour: "13:00",
  },
  {
    id: 47,
    day: "jeu",
    hour: "14:00",
  },
  {
    id: 48,
    day: "jeu",
    hour: "15:00",
  },
  {
    id: 49,
    day: "jeu",
    hour: "16:00",
  },
  {
    id: 50,
    day: "jeu",
    hour: "17:00",
  },
  {
    id: 51,
    day: "jeu",
    hour: "18:00",
  },
  {
    id: 52,
    day: "jeu",
    hour: "19:00",
  },
  {
    id: 53,
    day: "ven",
    hour: "07:00",
  },
  {
    id: 54,
    day: "ven",
    hour: "08:00",
  },
  {
    id: 55,
    day: "ven",
    hour: "09:00",
  },
  {
    id: 56,
    day: "ven",
    hour: "10:00",
  },
  {
    id: 57,
    day: "ven",
    hour: "11:00",
  },
  {
    id: 58,
    day: "ven",
    hour: "12:00",
  },
  {
    id: 59,
    day: "ven",
    hour: "13:00",
  },
  {
    id: 60,
    day: "ven",
    hour: "14:00",
  },
  {
    id: 61,
    day: "ven",
    hour: "15:00",
  },
  {
    id: 62,
    day: "ven",
    hour: "16:00",
  },
  {
    id: 63,
    day: "ven",
    hour: "17:00",
  },
  {
    id: 64,
    day: "ven",
    hour: "18:00",
  },
  {
    id: 65,
    day: "ven",
    hour: "19:00",
  },
  {
    id: 66,
    day: "sam",
    hour: "07:00",
  },
  {
    id: 67,
    day: "sam",
    hour: "08:00",
  },
  {
    id: 68,
    day: "sam",
    hour: "09:00",
  },
  {
    id: 69,
    day: "sam",
    hour: "10:00",
  },
  {
    id: 70,
    day: "sam",
    hour: "11:00",
  },
  {
    id: 71,
    day: "sam",
    hour: "12:00",
  },
  {
    id: 72,
    day: "sam",
    hour: "13:00",
  },
  {
    id: 73,
    day: "sam",
    hour: "14:00",
  },
  {
    id: 74,
    day: "sam",
    hour: "15:00",
  },
  {
    id: 75,
    day: "sam",
    hour: "16:00",
  },
  {
    id: 76,
    day: "sam",
    hour: "17:00",
  },
  {
    id: 77,
    day: "sam",
    hour: "18:00",
  },
  {
    id: 78,
    day: "sam",
    hour: "19:00",
  },
  {
    id: 79,
    day: "dim",
    hour: "07:00",
  },
  {
    id: 80,
    day: "dim",
    hour: "08:00",
  },
  {
    id: 81,
    day: "dim",
    hour: "09:00",
  },
  {
    id: 82,
    day: "dim",
    hour: "10:00",
  },
  {
    id: 83,
    day: "dim",
    hour: "11:00",
  },
  {
    id: 84,
    day: "dim",
    hour: "12:00",
  },
  {
    id: 85,
    day: "dim",
    hour: "13:00",
  },
  {
    id: 86,
    day: "dim",
    hour: "14:00",
  },
  {
    id: 87,
    day: "dim",
    hour: "15:00",
  },
  {
    id: 88,
    day: "dim",
    hour: "16:00",
  },
  {
    id: 89,
    day: "dim",
    hour: "17:00",
  },
  {
    id: 90,
    day: "dim",
    hour: "18:00",
  },
  {
    id: 91,
    day: "dim",
    hour: "19:00",
  },
];

export const days = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];

export const hours = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

// get the index of the day in the days array
export const getDayIndex = (day: string) => {
  if((days.indexOf(day) + 1) === 7) return 0;
  return days.indexOf(day) + 1;
};

export const getSessionsByHour = (hour: string) => {
  const sessionsByHour = [] as any;

  sessions.forEach((session) => {
    const hourOfSession = session.hour;

    if (hourOfSession === hour) {
      sessionsByHour.push(session);
    }
  });

  return sessionsByHour;
};