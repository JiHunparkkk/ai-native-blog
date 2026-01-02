import { Author } from './utils'

export const defaultAuthors: Record<string, Author> = {
  'jihun': {
    name: 'Ji Hun Park',
    bio: 'Software engineer passionate about web development and AI',
    avatar: '/avatars/jihun.jpg'
  }
}

export const DEFAULT_AUTHOR_KEY = 'jihun'

export function getAuthor(authorInput?: string | Author): Author {
  if (!authorInput) {
    return defaultAuthors[DEFAULT_AUTHOR_KEY]
  }

  if (typeof authorInput === 'string') {
    return defaultAuthors[authorInput] || defaultAuthors[DEFAULT_AUTHOR_KEY]
  }

  return authorInput
}
