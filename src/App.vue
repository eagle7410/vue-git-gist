<template>
	<div id="app" class="col-sm-6">
		<div class="row">
			<img src="./assets/logo.png">
		</div>
		<div class="row">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<router-link class="nav-link" to="/" exact>You gist list</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/token">Git token</router-link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="scss">
	@import './assets/custom.scss';

	.router-link-active {
		color: #007bff !important;
	}

	.page-cont {
		margin: 5px;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
