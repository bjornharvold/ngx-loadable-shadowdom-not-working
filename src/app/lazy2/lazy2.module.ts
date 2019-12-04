import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { Lazy2Component } from './lazy2.component';

@NgModule({
  declarations: [Lazy2Component],
  imports: [
    CommonModule
  ]
})
export class Lazy2Module {
  constructor(injector: Injector) {
    const el = createCustomElement(Lazy2Component, {injector});
    customElements.define('app-lazy2', el);
  }
}

