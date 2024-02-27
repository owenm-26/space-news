//interface to use for each article
interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: Launch[];
  events: any;
}

//interface for Launch, an attribute of Article
interface Launch {
  launch_id: string;
  provider: string;
}

export type { Article, Launch };
