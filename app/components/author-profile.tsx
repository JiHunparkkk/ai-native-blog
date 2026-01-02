import Image from 'next/image'

type Author = {
  name: string
  bio: string
  avatar?: string
}

interface AuthorProfileProps {
  author: Author
}

export function AuthorProfile({ author }: AuthorProfileProps) {
  return (
    <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex items-start gap-4">
        {/* 아바타 */}
        {author.avatar ? (
          <Image
            src={author.avatar}
            alt={`${author.name} avatar`}
            width={64}
            height={64}
            className="rounded-full flex-shrink-0"
          />
        ) : (
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
            <span className="text-xl font-semibold text-neutral-600 dark:text-neutral-400">
              {author.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        {/* 작가 정보 */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
            Written by
          </p>
          <p className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
            {author.name}
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            {author.bio}
          </p>
        </div>
      </div>
    </div>
  )
}
