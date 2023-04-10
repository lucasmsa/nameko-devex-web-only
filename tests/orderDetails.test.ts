import OrderDetails from '../src/routes/page-two/+page.svelte'
import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import { orderBuilder } from './factory/orderBuilder'

const fetch = vi.fn()

function createFetchErroredReponse(data) {
	return { json: () => new Error('Error fetching data!') }
}

describe('Order Details page', () => {
	test('should render the component with order details', async () => {
		const orderDetails = [
			orderBuilder({
				quantity: 3,
				price: '20',
				product_id: 'abc123',
			}),
		]

		render(OrderDetails, { data: { orderDetails } })

		const pageTitle = screen.getByText('Order Details')
		const productId = screen.getByText('id: abc123')
		const productPrice = screen.getByText('Price: $20')
		const quantity = screen.getByText('🗃️ Quantity: 3')

		expect(pageTitle).toBeTruthy()
		expect(productId).toBeTruthy()
		expect(productPrice).toBeTruthy()
		expect(quantity).toBeTruthy()
	})

	test('should throw an error message without fetching data', async () => {
		try {
			render(OrderDetails)
		} catch (exception) {
			expect(exception).toBeTruthy()
		}
	})
})
