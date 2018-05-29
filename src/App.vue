<template>
	<div id="app" class="col-sm-4">
		<div id="head">
			<img src="./assets/github-logo-1.png" class="logo">
			<div class="col-sm-12 copy">
				Авторские права © 2018 Щербина Игорь Все права защищены
			</div>
		</div>
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

	.copy {
		color: white;
	}

	.page-cont {
		margin: 5px;
	}

	#head {
		background: #24292e;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	.logo {
		height: 100px;
	}
</style>
