import { State, Store } from './types'
import axios from 'axios'

/**
 * Retrieve current state
 */
export const crawl = async (store: Store): Promise<State> => {
  const { uri, authToken, orderId } = store.tracker

  const payload = await axios.get(`${uri}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })

  const items = payload.data.items
  return items.find((e: any) => e.entity_id == orderId)
}
