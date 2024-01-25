export const  parseHTMLString = (htmlString:any) => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(htmlString, 'text/html');
	return doc.body.textContent || "";
  }
