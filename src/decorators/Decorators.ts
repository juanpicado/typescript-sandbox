import {
	simpleDecorator, 
	decoratorFactory, 
	propertyDec, 
	methodDec, 
	auditLogDec,
	parameterDec,
  metadataParameterDec
} from './definitions/simpleDecorator';

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
	methodD(){

	}

	@auditLogDec
	public print(name: string) {
		console.log(`print called with ${name}`);
	}

	public parameterDecorator(@parameterDec value: string) {

	}
}