///<reference path="../typings/tsd.d.ts"/>

import {expect} from 'chai';
import {ParamFile} from './../lib/paramfile';
import * as fs from 'fs';

describe('ParamFile', () => {
    let oldExists = fs.existsSync;
    beforeEach(() => {
        fs.existsSync = (file): boolean => {
            return file.match(/parameters\.yml\.dist$/).length > 0;
        };
    });
    afterEach(() => {
        fs.existsSync = oldExists;
    });

    describe('Constructing the ParamFile object', () => {
        it('should store parameters in object', () => {
            let templateFile = 'parameters.yml.dist';
            let destinationFile = 'parameters.yml';
            let envMap = {
                'CONFIG_KEY_1': 'ENV_KEY_1',
                'CONFIG_KEY_2': 'ENV_KEY_2'
            };

            let configObj = {
                templateFile: templateFile,
                destinationFile: destinationFile,
                envMap: envMap
            };

            let paramFile = new ParamFile(configObj);
            expect(paramFile.templateFile).to.equal(templateFile);
            expect(paramFile.destinationFile).to.equal(destinationFile);
            expect(paramFile.envMap).to.equal(envMap);
        });

        it('should validate whether template path exists', () => {
            let invalidConfig = {
                templateFile: 'invalidConfig.yml.dist'
            };

            expect(() => new ParamFile(invalidConfig)).to.throw();
        });

        it('should throw when templateFile is not provided', () => {
            // let's confuse the tsc compiler
            let invalidConfig = {
                templateFile: 'will_be_deleted',
                destinationFile: 'params.yml',
                envMap: {
                    'CONFIG_KEY_1': 'ENV_KEY_1',
                    'CONFIG_KEY_2': 'ENV_KEY_2'
                }
            };
            delete invalidConfig.templateFile;

            expect(() => new ParamFile(invalidConfig)).to.throw();
        });
    });
});
