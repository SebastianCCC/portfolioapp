export interface Dribbble {
  schemas: {
    Shot: {
      animated: boolean
      description: string | null
      height: number
      html_url: string
      id: number
      images: Dribbble['schemas']['Images']
      low_profile: boolean
      tags: string[] | null
      title: string
      width: number
      published_at: string | Date
      updated_at: string | Date | null
      attachments: Dribbble['schemas']['Attachments'][] | []
      projects: Dribbble['schemas']['Project'][] | []
      video: Dribbble['schemas']['Video'] | null
    }

    Images: {
      hidpi: string
      normal: string
      one_x: string
      two_x: string
      four_x: string
      teaser: string
    }

    Attachments: {
      id: number
      url: string
      thumbnail_url: string
      size: number
      content_type: string
      created_at: string | Date
    }

    Project: {
      id: number
      name: string
      description: string
      shots_count: number
      created_at: string | Date
      updated_at: string | Date | null
    }

    Video: {
      id: number
      duration: number
      video_file_name: string
      video_file_size: number
      width: number
      height: number
      silent: boolean
      created_at: string | Date
      updated_at: string | Date | null
      url: string
      small_preview_url: string
      large_preview_url: string
      xlarge_preview_url: string
    }
  }
}
