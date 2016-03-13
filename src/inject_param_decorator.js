import { InjectMetadata } from "angular2/core";

export var InjectParam = (params) => {
  return (clazz) => {
    params.forEach( (param) => {
      Reflect.defineMetadata("parameters", [new InjectMetadata(param)], clazz);
    });
  }
}
