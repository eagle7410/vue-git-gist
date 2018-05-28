<template>
	<li class="list-group-item">
		<div class="row">
			<div class="col-sm-2">
				<btn-copy @click.prevent="copyToBuffer"/>
			</div>
			<div class="col-sm-10 text-left">
				<router-link class="nav-link" :to="{path :`/gist-content/${gist.id}`}">
					{{gist.title}}
				</router-link>
			</div>
		</div>
	</li>
</template>

<script>
	import BtnCopy from './BtnCopy'
	export default {
		name: 'Gist',
		components : {
			BtnCopy
		},
		props: {
			gist: {
				type: Object,
				content : ''
			},
		},
		methods: {
			async copyToBuffer($event) {

				try {
					const content = await this.$gitApi.getGistContent(this.gist.id);

					const $buffer = document.createElement('textarea');

					$buffer.innerHTML = content;
					document.body.appendChild($buffer);
					$buffer.select();

					const successful = document.execCommand('copy');

					if (process.env.NODE_ENV === 'development') {
						const msg = successful ? 'successful' : 'unsuccessful';
						console.log('Copying text command was ' + msg);
					}

					$buffer.remove();

				} catch (e) {
					console.error('Error', e);
				}
			}
		},
	}
</script>

<style scoped>

</style>
