import { Injectable } from '@angular/core';

import { Sandwich } from './sandwich';
import { SANDWICHES } from './mock-sandwiches';

const DELAY = 400;
@Injectable()
export class SandwichService {
    getSandwiches(): Promise<Sandwich[]> {
        return new Promise<Sandwich>(resolve =>
            setTimeout(function() {
                return resolve(SANDWICHES);
            }, DELAY))
    }
}