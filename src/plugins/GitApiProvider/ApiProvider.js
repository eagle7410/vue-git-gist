import {get} from '../../libs/req';

const baseUrl = `https://api.github.com`;

class ApiProvider {
	async getGists () {
		let list = await get(`${baseUrl}/gists`);

		return list || [];
	}

	async getGistContent(id, async = true) {
		let data = await get(`${baseUrl}/gists/${id}`, {}, async);
		let fileData = Object.values(data.files).shift();

		return fileData.content || '';
	}
}

export default ApiProvider;
