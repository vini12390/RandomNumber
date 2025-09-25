import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class RandomNumber implements INodeType {
	description: INodeTypeDescription = {
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

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const min = this.getNodeParameter('min', i) as number;
			const max = this.getNodeParameter('max', i) as number;

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
