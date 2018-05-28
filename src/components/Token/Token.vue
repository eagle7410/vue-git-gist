<template>
	<page title="Git auth token">
		<div class="page-cont">
			<div class="row">
				<div class="col-lg-12">
					<div class="input-group">
						<div class="input-group-prepend"  @click.prevent="changeShow">
							<div class="input-group-text" id="btnGroupAddon">
								<font-awesome-icon :icon="icon" />
							</div>
						</div>
						<input class="form-control" id="token"
						       placeholder="Set token"
						       :type="tokenType"
						       v-model="token"
						>

					</div>
				</div>

			</div>
		</div>
	</page>
</template>

<script>
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid'

	export default {
		name: 'Token',
		components : {
			FontAwesomeIcon
		},
		computed: {
			tokenType () {
				return this.isShowToken ? 'text' : 'password';
			},
			icon () {
				return this.isShowToken ? faEyeSlash : faEye;
			},
			token : {
				get : function() {
					return localStorage.getItem('token');
				},
				set : function(value) {
					localStorage.setItem('token', value);
				}
			}
		},
		data : function () {
			return {
				isShowToken : false
			}
		},
		methods: {
			changeShow() {
				this.isShowToken = !this.isShowToken;
			}
		},
	}
</script>
