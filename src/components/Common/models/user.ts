export interface IArticlesEnvelope {
    articles: IArticle[];
    articleCount: number;
  }
  
  export interface IArticle {
    id: string;
    title: string;
    description: string;
    category: string;
    date: Date;
    isLiked: boolean;
    isAuthor: boolean;
    likesBy: ILikeBy[];
    comments: IComment[];
  }
  
  export interface IChart {
    label: string;
    value: string;
  }
  
  export interface IComment {
    id: string;
    createdAt: Date;
    body: string;
    username: string;
    displayName: string;
    image: string;
  }
  
  export interface IArticleFormValues extends Partial<IArticle> {
    time?: Date;
  }
  
  export class ArticleFormValues implements IArticleFormValues {
    id?: string = undefined;
    title: string = '';
    category: string = '';
    description: string = '';
    date?: Date = undefined;
    time?: Date = undefined;
  
    constructor(init?: IArticleFormValues) {
      if (init && init.date) {
        init.time = init.date;
      }
      Object.assign(this, init);
    }
  }
  
  export interface ILikeBy {
    username: string;
    displayName: string;
    image: string;
    isAuthor: boolean;
    following?: boolean;
  }
  

  export interface RegisterEmlAndPass {
      email:string;
      password:string;
      confirmPassword:string;
  }

  