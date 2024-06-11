// new-type.ts

export interface User {
  userId: number;
  // Add other user properties if needed
}

export interface BirthdayCard {
  birthdayCardId: number;
  title?: string;
  content?: string;
  imageUrl?: string;
  userId: number;
  user?: User;
}

export interface EventCard {
  eventCardId: number;
  location?: string;
  date?: string;
  time: Date;
  duration?: number;
  title?: string;
  description?: string;
  userId: number;
  user?: User;
}

export interface History {
  historyId: number;
  queueId: number;
  queue?: Queue;
  startDate: Date;
  endDate: Date;
}

export interface MediaCard {
  mediaCardId: number;
  url?: string;
  userId: number;
  user?: User;
  fileType?: string;
  uploadDate: Date;
}

export interface Queue {
  queueId: number;
  cardType?: string;
  birthdayCardId?: number;
  birthdayCard?: BirthdayCard;
  mediaCardId?: number;
  mediaCard?: MediaCard;
  eventCardId?: number;
  eventCard?: EventCard;
  startDate?: Date;
  endDate?: Date;
  durationMinutes?: number;
  durationHours?: number;
  histories?: History[];
}
