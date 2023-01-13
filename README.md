# Transform JSON files to key-based file structure
The use case for such CLI comes from kubernetes world. Sometimes we need to store secrets as key-value files.
Here is the example from SAP world: https://www.npmjs.com/package/@sap/xsenv#usage-in-kubernetes
The input however sometimes come as a JSON file. For example as Cloud Foundry service binding.
The purpose of this CLI is to create these files from provided JSON

## Installation
```
npm i -D json2fs
```

## Usage
```
Usage: json2fs [options]

Converts json to file tree

Options:
  --to <dir_name>     Directory name to store the files
  --from <json_file>  json file (by default is taken from STDIN)
  -h, --help          display help for command
```