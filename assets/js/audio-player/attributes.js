/**
 * WordPress dependencies
 */
const attributes = {
	"src": {
		"type": "string",
		"source": "attribute",
		"selector": "audio",
		"attribute": "src"
	},
	"caption": {
		"type": "string",
		"source": "html",
		"selector": "figcaption"
	},
	"id": {
		"type": "number"
	},
	"autoplay": {
		"type": "boolean",
		"source": "attribute",
		"selector": "audio",
		"attribute": "autoplay"
	},
	"loop": {
		"type": "boolean",
		"source": "attribute",
		"selector": "audio",
		"attribute": "loop"
	},
	"preload": {
		"type": "string",
		"source": "attribute",
		"selector": "audio",
		"attribute": "preload"
	}
};

export default attributes;
