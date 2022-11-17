export interface Ticket {
  id?: number;
  name: string;
  category: string;
  detail: string;
  created: Date;
  openedByName: string;
  openedByEmail: string;
  completedByEmail: string;
  completedByName: string;
  completed: boolean;
  resolution: string;
}