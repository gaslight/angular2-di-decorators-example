import {Component} from 'angular2/core';
import {InjectMetadata} from 'angular2/core';
import Service from "./service";
import { InjectParameters } from "angular2-di-decorators";

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App with service: {{service.foo}}</h1>',
    providers: [Service]
})
@InjectParameters([Service])
export default class AppComponent {
  constructor(service) {
    this.service = service;
  }
}
