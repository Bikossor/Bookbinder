import * as fs from 'fs';
import * as path from 'path';

export class Scanner {
	/**
	 * @param Path Path to be scanned at
	 * @param FileExtension FileExtension to be filtered by
	 * @returns An array of the file names
	 */
	public static scanDir(Path: string, FileExtension: string): string[] {
		var result = new Array<string>();

		if (!fs.existsSync(Path)) {
			return result;
		}

		var entries: fs.Dirent[] = fs.readdirSync(Path, {
			withFileTypes: true
		});

		var files: fs.Dirent[] = entries.filter(_file => {
			return _file.isFile() && path.extname(_file.name) === FileExtension;
		});

		files.forEach(file => {
			result.push(file.name);
		});

		return result;
	};
}