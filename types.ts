
export type ApplianceType = 'AC' | 'Washing Machine' | 'Fridge' | 'Microwave Oven';

export interface ServiceItem {
  id: string;
  type: ApplianceType;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}