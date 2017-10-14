
const DummyDataConfig = {
    outputPath: "./data",
    recompileExisting: false,
    outputFormat: 'pug',
	dataSets: [
		{
			name: "HomeCTAs",
			items: 4,
			schema: {
				title: {units: "sentences", sentenceLowerBound: 1, sentenceUpperBound: 5},
				body: {units: "paragraphs", paragraphLowerBound: 1, paragraphUpperBound: 1},
				btnText: {units: "words"}
			}
		},
		{
			name: "Articles",
			items: 8,
			schema: {
				title: {units: "sentences", sentenceLowerBound: 4, sentenceUpperBound: 8},
				author: {units: "sentences", sentenceLowerBound: 2, sentenceUpperBound: 2},
				body: {units: "paragraphs", paragraphLowerBound: 4, paragraphUpperBound: 12, count: (Math.random() * 12) + 3}
			}
		}
	]
};

module.exports = DummyDataConfig;
