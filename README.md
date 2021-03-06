# DummyContent JSON content generator
A quick node program for generating dummy / placeholder content JSON files for front end development/prototyping.

## Info
Currently, this can be used to generate JSON files for placeholder content & data (see /example-output/ and DummyContentConfig.js for example usage). Useful for trying to get realistic and varying content for making front end prototypes.

Still a work in progress. Next on the to do list...
1. Supported any amount of nested object arrays 
2. Support other file types (ex. output as object in JS file, or templating engine files like PUG)
3. Allow the generator to not generate files that have already been generated.

## Usage
- Clone this repo (or download the zip if your into that sort of thing)
- `npm install`
- Set up the dummy-content-config.js file
- `node DummyContent.js`

### Configuration
An example config is provided out of the box.

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
		  author: {type: "string", stringType: "words"},
		  body: {type: "string", stringType: "paragraphs", min: 4, max: 12, count: (Math.random() * 12) + 3},
		  public: {type: "boolean"},
		  num: {type: "integer", min: 0, max: 10000, round: true},
		  heroImage: {type: "image", xMin: 800, xMax: 1200, yMin: 400, yMax: 600},
		  dateCreated: {type: 'date', from: new Date('December 17, 2007'), to: new Date('December 17, 2018'), locale: 'en-US'},
		  location: {type: 'coordinates', latMin: -10, latMax: 80, lonMin: -60, lonMax: 145}
		}
	  }
  ]
};
```

#### Config Properties
| Property      | Type          | Description  |
| ------------- |---------------| -------------|
| outputPath    | String        | Set this to the path to the directory files should be generated into.|
| dataSets      | Array<Object> | Array of data set configurations.|

#### dataSets properties
| Property      | Type        | Description  |
| ------------- |-------------| -------------|
| name          | String      | Will be used to define the JSON and the filename that is generated. Should contain no spaces or special characters.|
| items         | Integer     | Number of objects that will be generated for this set. |
| schema        | Object      | Schema for the data that needs to be generated. |

### Schema Properities
#### type: "string"
| Property      | Type       | Description  |
| ------------- |------------| -------------|
| stringType    | String     | Content type, either: "paragraphs", "sentences", "words" |
| min           | Integer    | Min number of words if stringType is "sentences". Min number of sentences if stringType is "paragraphs". |
| max           | Integer    | Max number of words if stringType is "sentences". Max number of sentences if stringType is "paragraphs". |
| count         | Integer    | Amount of words, sentences, or paragraphs |
#### type: "integer"
| Property      | Type        | Description  |
| ------------- |-------------| -------------|
| min           | Integer     | Min number. |
| max           | Integer     | Max number. |
| round         | Boolean     | Set to true if number should be rounded. |
#### type: "boolean"
No settings for this property type.
#### type: "image"
Note, this uses the free image service at [placeholder.com](https://placeholder.com/) (No association to me or this project)
| Property      | Type        | Description  |
| ------------- |-------------| -------------|
| xMin          | Integer     | Min Y dimension. |
| xMax          | Integer     | Max Y dimension |
| yMin          | Integer     | Min Y dimension. |
| yMax          | Integer     | Max Y dimension |
#### type: "date"
| Property      | Type        | Description  |
| ------------- |-------------| -------------|
| from          | Date        | Get random date from this date. |
| to            | Date        | Get random date up to this date. |
| locale        | String      | Localization string. If provided, date will be returned in a localized mm/dd/yyyy format. Ex. use "en-US" for us english |
#### type: "coordinates"
Returns a latitude and longitude in an array. 
``` javascript
[latitude, longitude]
```
| Property      | Type        | Description  |
| ------------- |-------------| -------------|
| latMin        | Integer     | Minimun latitide. (-90 to 90) |
| latMax        | Integer     | Maximum latitude. (-90 to 90) |
| lonMin        | Integer     | Minimun longitude. (-180 to 180) |
| lonMax        | Integer     | Maximum longitude. (-180 to 180) |
