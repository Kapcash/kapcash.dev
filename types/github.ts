export interface GithubPinnedRepo {
  id: string;
  owner: string;
  repo: string;
  link: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  languageColor: string;
}

export const githubRepos: GithubPinnedRepo[] = [
  {
    id: 'ts-matrix',
    languageColor: '#2b7489',
    owner: 'Kapcash',
    repo: 'ts-matrix',
    link: 'https://github.com/Kapcash/ts-matrix',
    description: 'A TypeScript vector and matrix math library.',
    language: 'Typescript',
    stars: 14,
    forks: 1,
  },
  {
    id: 'bookmark-switcher',
    languageColor: '#41b883',
    owner: 'Kapcash',
    repo: 'bookmark-switcher',
    link: 'https://github.com/Kapcash/bookmark-switcher',
    description: 'A Mozilla Firefox extension to switch between several bookmark toolbars.',
    language: 'Vue',
    stars: 9,
    forks: 2,
  },
  {
    id: 'vue-use-calendar',
    languageColor: '#41b883',
    owner: 'Kapcash',
    repo: 'vue-use-calendar',
    link: 'https://github.com/Kapcash/vue-use-calendar',
    description: 'Vue 3 composable to create reactive calendars.',
    language: 'Vue',
    stars: 14,
    forks: 1,
  },
  {
    id: 'vue-class-transformer',
    languageColor: '#2b7489',
    owner: 'Kapcash',
    repo: 'vue-class-transformer',
    link: 'https://github.com/Kapcash/vue-class-transformer',
    description: 'Vue cli transforming vanilla component syntax to Typescript class based syntax.',
    language: 'Typescript',
    stars: 4,
    forks: 0,
  },
]
