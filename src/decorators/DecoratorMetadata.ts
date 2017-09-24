import { metadataParameterDec } from './definitions/simpleDecorator';

export default class DecoratorMetadata {
	print(
		@metadataParameterDec id: number,
		name: string): number {
			return 1000;
		}
}