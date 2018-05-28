<template>
	<page title="Gist list">
		<div class="page-cont">
			<div class="row">
				<div class="col-sm-8">
					<input class="form-control" type="search" placeholder="Search" aria-label="Search">
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<ul class="list-group">
						<gist v-for="data in list" :gist="data" :key="data.id" />
					</ul>
				</div>
			</div>
		</div>
	</page>
</template>

<script>
	import Gist from './Gist'

	export default {
		name: 'List',
		components : {
			Gist
		},
		data() {
			return {
				list: []
			}
		},
		async mounted () {
			try {
				let list =  await this.$gitApi.getGists();

				this.list = list.map(gist => {
					const fileName = Object.keys(gist.files);
					const fileData = gist.files[fileName];

					return {
						title :`[${fileName}] ${gist.description}`,
						rawUrl : fileData.raw_url,
						id : gist.id
					}
				});

			} catch (e) {
				console.error('Error mounted List', e);
			}
		}
	}
</script>
<style scoped>
	.list-group {
		margin-top: 10px;
	}
</style>
