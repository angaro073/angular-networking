import { Routes } from '@angular/router';

import { ForDirectiveComponent } from './for-directive/for-directive.component'; 
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';

import { NgmodelAttributeComponent } from './ngmodel-attribute/ngmodel-attribute.component';
import { NgclassAttributeComponent } from './ngclass-attribute/ngclass-attribute.component';
import { NgstyleAttributeComponent } from './ngstyle-attribute/ngstyle-attribute.component';

export const routes: Routes = [
  { path: 'for-directive', component: ForDirectiveComponent },
  { path: 'if-directive', component: IfDirectiveComponent },
  { path: 'switch-directive', component: SwitchDirectiveComponent },
  { path: 'ngmodel-attribute', component: NgmodelAttributeComponent },
  { path: 'ngclass-attribute', component: NgclassAttributeComponent },
  { path: 'ngstyle-attribute', component: NgstyleAttributeComponent },
];