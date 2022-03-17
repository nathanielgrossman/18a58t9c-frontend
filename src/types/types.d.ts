type Image = {
  _id: string;
  original: string;
  views: number;
  created_at: Date;
  last_viewed: Date;
  color: string;
};

type ImageQueryResult = {
  images: Array<Image>
  total: number;
}