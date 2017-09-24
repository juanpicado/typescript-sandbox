import Decorators from './decorators/Decorators';
import DecoratorMetadata from './decorators/DecoratorMetadata';

const dec: any = new Decorators();
const dec2: any = new DecoratorMetadata();

dec.print('hola');

console.log(dec);