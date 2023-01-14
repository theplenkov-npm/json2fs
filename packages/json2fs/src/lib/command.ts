import { Command } from 'commander';
import { createNestedStructure } from './json2fs';
import { readStdin } from './readStdin';
import * as fs from 'fs';

interface Options {
    from: string,
    to: string
}

export default new Command()
    .description('Converts json to file tree')
    .requiredOption('--to <dir_name>', 'Directory name to store the files')
    .option('--from <json_file>', 'json file (by default is taken from STDIN)')
    .action(async (options: Options) => {

        let json_string = '';

        if (options.from) {
            json_string = (await fs.promises.readFile(options.from)).toString();
        } else {
            //read stding
            json_string = await readStdin();
        }

        const data = JSON.parse(json_string);
        await createNestedStructure(data, options.to);
    });

