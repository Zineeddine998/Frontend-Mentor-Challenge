  export class jobs {
    id:number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
  }

 export class ListFilterInterface{
  id:number;
  value: string;
 }