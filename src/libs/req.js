/**
 * Send to server.
 * @method send
 * @param  {string} url
 * @param  {*} data
 * @param  {*} method
 * @param  {*} headers
 * @param  {*} async
 * @return {Promise}
 */
const send = (url, data, method, headers = {}, async = true) => new Promise((resolve, reject) => {
	const token = localStorage.getItem('token');
	let xhr = new XMLHttpRequest();

	xhr.open(method, url, async);
	xhr.onload = r => {
		try {
			let data = JSON.parse(r.target.responseText);

			resolve(data)

		} catch (e) {
			console.error('Parse response bad', e);
			reject(e);
		}

	};

	xhr.onerror = reject;

	let head = {
		'Accept'       : 'application/vnd.github.jean-grey-preview+json',
		'Authorization': `token ${token}`,
		...headers
	};

	for (let key in head) {
		xhr.setRequestHeader(key, head[key]);
	}

	if (process.env.NODE_ENV === 'development') {
		console.log(url + ' send ' + data);
	}

	xhr.send(data);
});

/**
 * Send for save.
 * @method save
 * @param  {string} url
 * @param  {*} data
 * @param  {*} headers
 * @return {Promise}
 */
const save = (url, data, headers) => send(url, data, 'POST', headers);
/**
 * Send for get.
 * @method save
 * @param  {string} url
 * @param  {*} data
 * @param  {*} headers
 * @return {Promise}
 */
const get = (url, data, async, headers) => send(url, data, 'GET', headers, async);
/**
 * Send for delete.
 * @method save
 * @param  {string} url
 * @param  {*} data
 * @param  {*} headers
 * @return {Promise}
 */
const move = (url, data, headers) => send(url, data, 'DELETE', headers);
/**
 * Send for update.
 * @method save
 * @param  {string} url
 * @param  {*} data
 * @param  {*} headers
 * @return {Promise}
 */
const update = (url, data, headers) => send(url, data, 'PUT', headers);

export {save, get, move, update};
