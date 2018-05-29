<template>
	<page title="Gist list">
		<div class="page-cont">
			<div class="row">
				<div class="col-sm-12">
					<input class="form-control" type="search" placeholder="Search" aria-label="Search"
					       v-model="filter"
					>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<ul class="pagination" v-if="pageTotal > 1">
						<li class="page-item">
							<a class="page-link" @click.prevent="setPage(pageNow - 1)">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>

						<li class="page-item" v-for="page in pageTotal" :key="`page_${page}`">
							<a :class="'page-link' + (pageNow === page -1 ? ' active' : '' )"
							   @click.prevent="setPage(page -1)">{{page}}</a>
						</li>

						<li class="page-item">
							<a class="page-link" @click.prevent="setPage(pageNow + 1)">
								<span aria-hidden="true">&raquo;</span>
							</a>
						</li>
					</ul>
					<ul class="list-group">
						<gist v-for="data in pageRows" :gist="data" :key="data.id"/>
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
		components: {
			Gist
		},
		computed: {
			countRows: function () {
				return this.filterList.length;
			},
			pageTotal: function () {
				return Math.ceil(this.countRows / this.pageSize);
			},
			filterList() {
				return [].concat(this.list.filter(item => item.title.includes(this.filter)));

			},
			pageRows() {
				return this.filterList.slice(this.pageStartIndex, this.pageStartIndex + this.pageSize);
			},
			pageStartIndex: function () {
				let that = this;

				if ((that.pageNow * that.pageSize) > that.countRows) {
					that.pageNow = 0;
				}

				return that.pageNow * that.pageSize;
			},
		},
		data() {
			return {
				pageSize: 6,
				pageNow: 0,
				list: [],
				filter: ''
			}
		},
		methods: {
			setPage(num) {
				num = num < 0 ? 0 : num;
				num = num > this.pageTotal - 1 ? this.pageTotal - 1 : num;

				this.pageNow = num;
			}
		},
		async mounted() {
			try {
				let list = await this.$gitApi.getGists();

				this.list = list.map(gist => {
					const fileName = Object.keys(gist.files);
					const fileData = gist.files[fileName];

					return {
						title: `[${fileName}] ${gist.description}`,
						rawUrl: fileData.raw_url,
						id: gist.id
					}
				});

			} catch (e) {
				console.error('Error mounted List', e);
			}
		}
	}
</script>
<style scoped>
	.active {
		color: white !important;
		background: #24292e;
	}

	.list-group, .pagination {
		margin-top: 10px;
	}
</style>
