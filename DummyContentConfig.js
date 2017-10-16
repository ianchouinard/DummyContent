
const DummyContentConfig = {
    outputPath: "./example-output",
	dataSets: [
		{
			name: "Test",
			items: 8,
			schema: {
				title: {type: "string", stringType: "sentences", min: 4, max: 8},
				author: {type: "string", stringType: "sentences", min: 2, max: 2},
				public: {type: "boolean"},
				num: {type: "integer", min: 0, max: 10000, round: true},
				body: {type: "string", stringType: "paragraphs", min: 4, max: 12, count: (Math.random() * 12) + 3}
			}
		}
	]
};

module.exports = DummyContentConfig;
