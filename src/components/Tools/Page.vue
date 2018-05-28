<template>
	<div class="cont">
		<div class="row" v-if="title">
			<div class="offset-1">
				<h1>{{title}}</h1>
			</div>
		</div>
		<slot/>
	</div>
</template>

<script>
	export default {
		name: 'Page',
		props : {
			title : {
				type : String,
				default :''
			}
		}
	}
</script>
