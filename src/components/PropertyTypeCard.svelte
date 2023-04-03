<script lang="ts">
	import type { PropertyTypeCardProps } from '../interfaces/PropertyTypeCardProps'
	export let {
		icon = '',
		name = '',
		selected = false,
	}: Partial<PropertyTypeCardProps> = {}

	const iconSource = selected ? icon.split('.svg')[0] + '-selected.svg' : icon
</script>

<section
	class={`flex cursor-pointer align-middle justify-center rounded w-full h-[72px]  border-solid border-[1px] ${
		selected
			? 'bg-[#F3F1FE] border-[#3F25C8] text-[#3F25C8]'
			: 'border-[#C3C1D7]'
	}`}
>
	<div class="flex items-center gap-3">
		<img class="h-8 w-8 stroke-white" src={iconSource} alt={`${name} icon`} />
		<p class={`font-amplitudeWide text-medium`}>
			{name}
		</p>
	</div>
</section>
