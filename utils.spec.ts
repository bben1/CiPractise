// const {addition, greeting} = require('./utils.ts');
import {addition, greeting} from './utils';


describe('utils', () => {
    it('addition should add numbers correctly', () => {
        const a = 1
        const b = 2
        expect(addition(a,b)).toBe(3);
    })

    it('greeting should return a greeting sentence', () => {
        const name = 'Ben'
        const age = 23
        expect(greeting(name, age)).toEqual(`Hello, my name is ${name} and I am ${age} years old.`);
    })
})