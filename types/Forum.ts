export interface Forum {
  schemas: {
    Article: {
      type_of: string
      id: number
      title: string
      description: string
      readable_publish_date: string
      slug: string
      path: string
      url: string
      comments_count: number | null
      public_reactions_count: number | null
      collection_id: number | null
      published_timestamp: Date
      positive_reactions_count: boolean
      cover_image: string | null
      social_image: string | null
      canonical_url: string
      created_at: Date
      edited_at: Date | string | number | null
      crossposted_at: Date | null
      published_at: Date
      last_comment_at: Date | null
      reading_time_minutes: number
      tag_list: string
      tags: string[] | null
      body_html: string
      body_markdown: string
      user: Forum['schemas']['User']
      likes?: number
    }

    User: {
      name: string | null
      username: string
      twitter_username: string | null
      github_username: string | null
      user_id: number
      website_url: string | null
      profile_image: string | null
      profile_image_90: string | null
    }

    Reaction: {
      current_user: { id: number | null }
      reactions: any[]
      article_reaction_counts: Forum['schemas']['ArticleCounts'][]
    }

    ArticleCounts: {
      category: string
      count: number
    }
  }
}
