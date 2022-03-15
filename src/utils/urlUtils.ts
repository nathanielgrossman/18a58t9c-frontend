import { GROUP_SIZE } from "./constants";

// Root URLs
export const API_HOST = 'https://kboykyzml8.execute-api.us-west-2.amazonaws.com/prod';
export const STATIC_HOST = 'https://s3-us-west-1.amazonaws.com/18a58t9c'

// Static URLs
export const UPDATE_VIEWS_URL = `${API_HOST}/update-views-18a58t9c`;
export const SCATTER_VIEW_URL = `${API_HOST}/get-assorted-18a58t9c`;
export const CHRONOLOGICAL_VIEW_URL = `${API_HOST}/get-images-18a58t9c?start=${0}&size=${GROUP_SIZE}`;

// Parameterized URLs
export const getThumbURL = (id: string) => `${STATIC_HOST}/thumbs/${id}.jpg`;
export const getWebpURL = (id: string) => `${STATIC_HOST}/webp/${id}.webp`;
export const getJpgURL = (id: string) => `${STATIC_HOST}/jpg/${id}.jpg`;
export const getGroupURL = (group: number) => `${API_HOST}/get-images-18a58t9c?start=${GROUP_SIZE * group}&size=${GROUP_SIZE}`;
