///<reference path="../typings/tsd.d.ts"/>

import {existsSync} from 'fs';
import {resolve} from 'path';

interface ParamFileObj {
    templateFile: string;
    destinationFile?: string;
    envMap?: any;
}

export class ParamFile {
    constructor(private params: ParamFileObj) {
        this.validate();
    }

    public get templateFile(): string {
        return this.params.templateFile || '';
    }

    public get destinationFile(): string {
        return this.params.destinationFile || '';
    }

    public get envMap(): string {
        return this.params.envMap || {};
    }

    private validate(): void {
        if (!this.params.hasOwnProperty('templateFile')
            || !existsSync(resolve(this.params.templateFile))
        ) {
            throw new Error("File not found");
        }
    }
}
