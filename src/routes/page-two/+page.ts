import { LoadEvent } from '@sveltejs/kit'
import { API_URL, ID } from '../../constants/apiUrl'

export async function load({ fetch }: LoadEvent) {
	try {
		const orderDetailsUrl = `${API_URL}/orders/${ID}`
		const response = await fetch(orderDetailsUrl)

		const { order_details: orderDetails } = await response.json()

		return {
			orderDetails,
		}
	} catch (error) {
		console.error(error)
	}
}
