<script lang="ts">
	import LabeledInput from '../../components/LabeledInput.svelte'
	import PropertyTypeCard from '../../components/PropertyTypeCard.svelte'
</script>

<svelte:head>
	<title>Property Details</title>
</svelte:head>

<section
	class="flex flex-col w-full ml-auto mr-auto max-w-[844px] pt-[70px] mx-4"
>
	<section class="flex">
		<div class="flex">
			<div class="text-lg flex flex-col gap-3 max-w-[410px]">
				<h2 class="font-amplitudeWide text-4xl">Property details</h2>
				<p class="font-amplitudeWideBook text-[18px] tracking-tight">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam.
				</p>
				<div class="flex flex-col gap-4 mt-4">
					<LabeledInput label="Property Name" />
					<LabeledInput
						label="Address"
						readonly
						value={'21 Jump Street, Los Angeles, California'}
					/>
				</div>
			</div>
			<div class="ml-20">
				<img src="/icons/property-icon.svg" alt="Property Icon" />
			</div>
		</div>
	</section>
	<section class="flex flex-col flex-wrap my-8 gap-2">
		<p class="text-base font-amplitudeWide font-medium">Property Type</p>
		<div class="flex gap-5">
			<PropertyTypeCard
				selected
				icon={'/icons/home-icon.svg'}
				name="Single-Family"
			/>
			<PropertyTypeCard icon={'/icons/building-icon.svg'} name="Multi-Family" />
			<PropertyTypeCard icon={'/icons/home-icon.svg'} name="Townhome" />
			<PropertyTypeCard icon={'/icons/building-icon.svg'} name="Condo" />
		</div>
	</section>
</section>
