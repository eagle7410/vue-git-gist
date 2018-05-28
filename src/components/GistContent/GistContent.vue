<template>
	<page title="Gist content">
		<div class="page-cont">
			<div class="row">
				<router-link class="nav-link" to="/" exact>Back to gist list</router-link>
			</div>
			<div class="row">
				<textarea class="form-control" v-html="cont" rows="10" />
			</div>
		</div>
	</page>
</template>

<script>
	export default {
		name: 'GistContent',
		data() {
			return {
				cont : ''
			}
		},
		async mounted () {
			try {
				this.cont =  await this.$gitApi.getGistContent(this.$route.params.id);

			} catch (e) {
				console.error('Error mounted GistContent', e);
			}
		}
	}
</script>

<style scoped>

</style>
