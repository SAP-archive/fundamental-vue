export interface _NotificationOptions {
  duration: number
  closable: boolean
  title: string
  type: null | 'success' | 'warning' | 'error' | 'information'
  description: string
}

export type NotificationOptions = Partial<_NotificationOptions>
