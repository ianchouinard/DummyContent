# DummyContent JSON content generator
A quick node program for generating dummy json data files for front end development/prototyping

## Info
Currently, this can be used to generate data arrays containing string content. Useful for trying to get realistic and varying conent for making front end prototypes.

Stil a work in progress. Next on the to do list....
1. Support randomized, non string data types
2. Supported any amount of nested object arrays 
3. Support other file types (ex. output as object in JS file, or templating engine files like PUG)
4. Allow the generator to not generate files that have already been generated.
5. Create independatnt schema for content generation (currently just uses the loremipsum module because this only outputs string types)

## Usage
- Clone this repo (or download the zip if your into that sort of thing)
- `npm install`
- Set up the dummy-content-config.js file
- `node DummyContent.js`

### Configuration
An example config is provided out of the box. A run down of the options...

*outputPath: string*
Set this to the path to the directory files should be generated into to.
------
*dataSets: Array<Object>*
Array of data set configurations. Properties for that include.

*name: string*
Will be used to define the JSON and the filename that is generated. Should contain no spaces or special characters.

*items: integer*
Number of objects that will be generated for this set.

*schema: object*
Schema for the data that needs to be generated.

#### Example configuration
``` javascript
const DummyDataConfig = {
    outputPath: "./data",
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
```