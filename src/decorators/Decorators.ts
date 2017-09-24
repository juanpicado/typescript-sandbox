import {simpleDecorator, decoratorFactory, propertyDec, methodDec} from './definitions/simpleDecorator';

@simpleDecorator
@decoratorFactory('test')
export default class DecoratorClass {

	@propertyDec
	name: string;

	@propertyDec
	sureName: string;

	@propertyDec
	static staticProp: string;

	@methodDec
	public print(name: string) {

	}
}