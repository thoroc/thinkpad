# Check Data Shape

This script checks the shape of data in extracted JSON files by listing all properties found and
their unique values.

## Usage

Run the script with the following command:

```bash
deno run --allow-read data/scripts/check-data-shape.ts --input-path ./data/extracted --selected-properties all
```

## Options

- `--input-path <inputPath:string>`: Path to the directory containing JSON files (default:
  `./data/extracted`).
- `--selected-properties <selectedProperties:string[]>`: Comma-separated list of properties to check
  (default: `all`).
- `--list`: List all property names found in the data.
- `--grouped`: Group the properties by their names.

##  Pre-requisites

- Download the files from <https://psref.lenovo.com/Withdrawn/>
- Move the files to `data/imports/`:

  ```sh
  mv ~/Downloads/ThinkPad* data/imports/
  ```

- Rename the files to remove anything that isn't specific to the model, e.g.
  `ThinkPad_L440 multi model 202508011607.xlsx` to `ThinkPad_L440.xlsx`:

  ```sh
  for f in ./data/imports/_" multi model 202508011606"_; do mv "$f" "${f// multi model 202508011606/}"; done
  ```
