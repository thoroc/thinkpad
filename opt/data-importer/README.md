# ETL pipeline to import Lenovo/IBM small computer device data

This project is an ETL (Extract, Transform, Load) pipeline designed to import data from Lenovo/IBM
small computer devices. The pipeline extracts data from various sources, transforms it into a
suitable format, and loads it into a target database for further analysis or reporting.

## Commands

### Extract

To extract data from the source systems, run the following command:

```bash
Deno run cli.ts extract <source_path> --output <output_path>
```

where:

- `<source_path>`: The path to the source data file or directory.
- `<output_path>`: The path where the extracted data will be saved.

### Transform

To transform the extracted data, run the following command:

```bash
Deno run cli.ts transform <input_path> --output <output_path>
```

where:

- `<input_path>`: The path to the input data file or directory.
- `<output_path>`: The path where the transformed data will be saved.
