import "reflect-metadata";

// class decorators
export function simpleDecorator(constructor: Function) {
	console.log('simple decorator called', constructor);
}

// class decorators with parameter
export function decoratorFactory(name: string) {
	return function (constructor: Function) {
		//console.log(`decorator factory with parameter: ${name}`);
	}
}
// property decorators
export function propertyDec(target: any, propretyKey: string) {
	
	// console.group('@propertyDec');
	// console.log(`target ${target}`);
	// console.log(`target.constructor ${target.constructor}`);	
	// console.log(`propertyKey ${propretyKey}`);
	// if(typeof(target) === 'function') {
	// 		console.log(`class name ${target.name}`);
	// } else {
	// 		console.log(`class name ${target.constructor.name}`);
	// }

	console.groupEnd();
}

// methods decorators
export function methodDec(target: any, methodName: string, descriptor?: PropertyDescriptor) {
	// console.group('@methodDec');
	// console.log(`target ${target}`);
	// console.log(`methodName ${methodName}`);
	// console.log(`target[methodName] ${target[methodName]}`);
	// console.groupEnd();
}

export function auditLogDec(target: any, methodName: string, descriptor?: PropertyDescriptor) {
	console.group('@auditLogDec');
	console.log(`target ${target}`);
	console.log(`methodName ${methodName}`);
	console.log(`target[methodName] ${target[methodName]}`);
	
	let originalFunction = target[methodName];
	let auditFunction: any = function() {
		console.log(`auditLogDec: override of ${methodName} called`);
		originalFunction.apply(this, arguments);
	}
	
	target[methodName] = auditFunction;
	console.groupEnd();
}

export function parameterDec(target: any, methodName: string, parameterIndex: number) {
	console.group('@parameterDec');
	console.log(`target ${target}`);
	console.log(`methodName ${methodName}`);
	console.log(`parameterIndex ${parameterIndex}`);
	console.groupEnd();
}

export function metadataParameterDec(target: any, methodName: string, parameterIndex: number) {
	console.group('@metadataParameterDec');
	console.log(`target ${target}`);
	console.log(`methodName ${methodName}`);
	console.log(`parameterIndex ${parameterIndex}`);
	console.groupEnd();

	let designType = Reflect.getMetadata(
		'design:type', target, methodName);
	console.warn(`desginType ${designType}`);
	let designParamTypes = Reflect.getMetadata(
			'design:paramtypes', target, methodName);
	console.warn(`designParamTypes ${designParamTypes}`);

}