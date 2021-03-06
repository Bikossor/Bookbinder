const Scanner = require('../dist/Scanner').Scanner;
const Reader = require('../dist/Reader').Reader;
const Transformer = require('../dist/Transformer').Transformer;

describe('Scanner', () => {
    test(`scanDir() should return an array with one entry when a valid Path and FileExtension is specified.`, () => {
        expect(
            Scanner.scanDir("./test/", ".book").length
        ).toBe(1);
    });

    test(`scanDir() should return an empty array when an invalid Path is specified.`, () => {
        expect(
            Scanner.scanDir("./foo/", ".book").length
        ).toBe(0);
    });

    test(`scanDir() should return an empty array when an invalid Path and FileExtension is specified.`, () => {
        expect(
            Scanner.scanDir("./foo/", ".bar").length
        ).toBe(0);
    });
});

describe('Reader', () => {
    test('readFromFiles() should return an array with one entry', () => {
        const filePaths = Scanner.scanDir("./test/", ".book");

        expect(
            Reader.readFromFiles(filePaths).length
        ).toBe(1);
    });

    test('readFromFiles() should return an empty array', () => {
        const filePaths = Scanner.scanDir("./foo/", ".book");

        expect(
            Reader.readFromFiles(filePaths).length
        ).toBe(0);
    });

    test('readFromFiles() should return an empty array', () => {
        const filePaths = Scanner.scanDir("./foo/", ".bar");

        expect(
            Reader.readFromFiles(filePaths).length
        ).toBe(0);
    });
});

describe('Transformer', () => {
    test('transform() should return an array with one entry', () => {
        const filePaths = Scanner.scanDir("./test/", ".book");
        const files = Reader.readFromFiles(filePaths);

        expect(
            Transformer.transform(files).length
        ).toBe(1);
    });

    test('transform() should return an empty array', () => {
        const filePaths = Scanner.scanDir("./foo/", ".book");
        const files = Reader.readFromFiles(filePaths);

        expect(
            Transformer.transform(files).length
        ).toBe(0);
    });

    test('transform() should return an empty array', () => {
        const filePaths = Scanner.scanDir("./foo/", ".bar");
        const files = Reader.readFromFiles(filePaths);

        expect(
            Transformer.transform(files).length
        ).toBe(0);
    });
});
