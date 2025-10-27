import { ObjectId } from 'mongodb'

export interface Store {
  _id: ObjectId
  enabled: boolean
  tracker: Tracker
  state?: State
  listeners: Listener[]
}

export interface Tracker {
  uri: string
  authToken: string
  orderId: string
}

export type Listener = TelegramListener | MailListener

export interface BaseListener {
  channel: string
  enabled: boolean
}

export interface TelegramListener extends BaseListener {
  channel: 'telegram'
  bot: string
  chatId: string
}

export interface MailListener extends BaseListener {
  channel: 'mail'
  email: string
}

export interface State {
  entity_id: string
  updated_at: string
  status_histories?: StatusHistory[]
}

export interface StatusHistory {
  status: string
  created_at: string
  comment: string | null
}
