"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumber = void 0;
class RandomNumber {
    constructor() {
        this.description = {
            displayName: 'Random Number',
            name: 'randomNumber',
            group: ['transform'],
            version: 1,
            description: 'Generate a random number between min and max',
            defaults: {
                name: 'Random Number',
            },
            inputs: ['main'],
            outputs: ['main'],
            icon: 'file:random.svg',
            properties: [
                {
                    displayName: 'Minimum',
                    name: 'min',
                    type: 'number',
                    default: 1,
                    description: 'The minimum number in range',
                },
                {
                    displayName: 'Maximum',
                    name: 'max',
                    type: 'number',
                    default: 100,
                    description: 'The maximum number in range',
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            const min = this.getNodeParameter('min', i);
            const max = this.getNodeParameter('max', i);
            // 🔗 Aqui a chamada para a API random.org
            const response = await this.helpers.httpRequest({
                method: 'GET',
                url: `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`,
            });
            const random = parseInt(response, 10);
            returnData.push({
                json: {
                    result: random,
                    min,
                    max,
                },
            });
        }
        return [returnData];
    }
}
exports.RandomNumber = RandomNumber;
