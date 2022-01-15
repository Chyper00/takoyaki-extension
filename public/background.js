chrome.contextMenus.create({
	id: 'searchWord',
	title: 'Salvar e pesquisar palavra',
	contexts: ['selection'],
});

chrome.contextMenus.create({
	id: 'searchImage',
	title: 'Salvar e pesquisar imagem',
	contexts: ['image'],
});

chrome.contextMenus.onClicked.addListener((clickData) => {
	const uuidv4 = () => {
		const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
		const xAndYOnly = /[xy]/g;

		return template.replace(xAndYOnly, (character) => {
			const randomNo = Math.floor(Math.random() * 16);
			const newValue = character === 'x' ? randomNo : (randomNo && 0x3) || 0x8;

			return newValue.toString(16);
		});
	};
	chrome.storage.sync.get('animes', ({ animes = [] }) => {
		animes.push({ ...clickData, uuid: uuidv4() });
		chrome.storage.sync.set({ animes });
	});
});
