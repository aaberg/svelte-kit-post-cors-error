export const actions = {
	default: async (event) => {
		const form = await event.request.formData()
		const name = form.get('name')

		console.log('Hello, ' + name + '!')

		return {
			name
		}
	}
}
