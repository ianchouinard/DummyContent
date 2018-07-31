
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
				body: {type: "string", stringType: "paragraphs", min: 4, max: 12, count: (Math.random() * 12) + 3},
				heroImage: {type: "image", xMin: 200, xMax: 300, yMin: 100, yMax: 400},
				dateCreated: {type: 'date', from: new Date('December 17, 2007'), to: new Date('December 17, 2018'), locale: 'en-US'},
				mapLocation: {type: 'coordinates', latMin: -10, latMax: 80, lonMin: -60, lonMax: 145}
			}
		}
	]
};

module.exports = DummyContentConfig;
