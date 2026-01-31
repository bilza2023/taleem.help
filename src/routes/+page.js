import { homeData } from '$lib/data/home.static.js';

export const prerender = true;

export function load() {
  return homeData;
}
