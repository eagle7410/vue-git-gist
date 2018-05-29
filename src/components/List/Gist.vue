<template>
	<li class="list-group-item">
		<div class="row d-flex align-items-center">
			<div class="col-sm-2 align-middle">
				<btn-copy @click.prevent="copyToBuffer" :class="isBtnActive ? 'btn-active' : ''"/>
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
		data() {
			return {
				isBtnActive: false
			}
		},
		props: {
			gist: {
				type: Object,
				content : ''
			},
		},
		methods: {
			async copyToBuffer() {
				this.isBtnActive = true;

				try {
					const content = await this.$gitApi.getGistContent(this.gist.id, false);

					const $buffer = document.createElement('textarea');

					$buffer.innerHTML = content;
					document.body.appendChild($buffer);
					$buffer.select();

					const successful = document.execCommand('copy');

					if (successful) {
						setTimeout(() => {
							this.isBtnActive = false
						}, 200)
					} else {
						this.isBtnActive = false;
					}

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
	.btn-active {
		background-color: #ffe8a1;
	}
</style>
