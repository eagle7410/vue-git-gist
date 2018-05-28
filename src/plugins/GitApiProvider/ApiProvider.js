import {get} from '../../libs/req';

const baseUrl = `https://api.github.com`;

class ApiProvider {
	async getGists () {
		let list = await get(`${baseUrl}/gists`);

		return list || [];
	}

	async getGistContent(id) {
		let data = await get(`${baseUrl}/gists/${id}`, {}, false);
		let fileData = Object.values(data.files).shift();

		return fileData.content || '';
	}
}

export default ApiProvider;
