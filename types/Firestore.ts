export interface Firestore {
  schemas: {
    Work: {
      dId: string
      sorcecode?: string
      walkthrough?: string
      decs?: string
      isgroup?: boolean
      role?: string | null
      previewImage?: string
      id?: number
      name: string
      stack?: string[]
      startDate?: Firestore['schemas']['Date']
      endDate?: Firestore['schemas']['Date']
    }

    Date: {
      seconds: number
      nanoseconds: number
    }
  }
}
