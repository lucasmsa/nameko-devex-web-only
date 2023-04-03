<script lang="ts">
	import type { LabeledInputProps } from '../interfaces/LabeledInputProps'

	export let {
		label,
		icon,
		options = [],
		placeholder = '',
		value = '',
		type = 'text',
		readonly = false,
	}: Partial<LabeledInputProps> = {}

	const hasOptions = options.length > 0

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement
		value = target.value
	}
</script>

<section>
	{#if label}
		<label for="input-handler" class="text-base font-amplitudeWide font-medium"
			>{label}</label
		>
	{/if}

	<div class="flex border-[#C3C1D7] border-solid border-[1px] h-12 rounded">
		{#if icon}
			<span class="">{icon}</span>
		{/if}

		{#if hasOptions}
			<select
				class="w-full !outline-none text-base m-3 font-amplitudeWideBook"
				{value}
				on:change={handleChange}
			>
				{#each options as option}
					<option value={option.value}>{option.label}</option>
				{/each}
			</select>
		{:else}
			<input
				type={type || 'text'}
				id="input-handler"
				{value}
				{placeholder}
				{readonly}
				on:input={handleChange}
				class="w-full !outline-none text-base m-3 font-amplitudeWideBook"
			/>
		{/if}
	</div>
</section>
