export interface StateProps {
  searched: boolean;
  details: {
    username: string | null;
    bio: string;
    companyInfo: string;
    companyname: string;
    coverphotoid: number | null;
    logoid: number | null;
    industries: string[];
    occupations: string[];

    homebusiness?: any;
    mobile?: any;
    shop?: any;
    services?: any;
  };
}
