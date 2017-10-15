# DummyContent JSON content generator
A quick node program for generating dummy json data files for front end development/prototyping

## Info
Currently, this can be used to generate data arrays containing string content. Useful for trying to get realistic and varying conent for making front end prototypes.

Stil a work in progress. Next on the to do list...
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

| Property      | Type          | Description  |
| ------------- |:-------------:| ------------:|
| outputPath    | String        | Set this to the path to the directory files should be generated into to.|
| dataSets      | Array<Object> | Array of data set configurations.|

#### dataSets properties

| Property      | String        | Description  |
| ------------- |:-------------:| ------------:|
| name   | String        | Will be used to define the JSON and the filename that is generated. Should contain no spaces or special characters.|
| items     | Integer | Number of objects that will be generated for this set. |
| schema | Object | Schema for the data that needs to be generated.


#### Example configuration
``` javascript
const DummyDataConfig = {
    outputPath: "./data",
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
```