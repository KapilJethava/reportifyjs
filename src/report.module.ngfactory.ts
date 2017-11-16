/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './report.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/common/src/localization';
import * as import4 from '@angular/core/src/di/injector';
import * as import5 from '@angular/core/src/i18n/tokens';
class ReportModuleInjector extends import0.NgModuleInjector<import1.ReportModule> {
  _CommonModule_0:import2.CommonModule;
  _ReportModule_1:import1.ReportModule;
  __NgLocalization_2:import3.NgLocaleLocalization;
  constructor(parent:import4.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_2():import3.NgLocaleLocalization {
    if ((this.__NgLocalization_2 == null)) { (this.__NgLocalization_2 = new import3.NgLocaleLocalization(this.parent.get(import5.LOCALE_ID))); }
    return this.__NgLocalization_2;
  }
  createInternal():import1.ReportModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ReportModule_1 = new import1.ReportModule(this.parent.get(import1.ReportModule,(null as any)));
    return this._ReportModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.ReportModule)) { return this._ReportModule_1; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ReportModuleNgFactory:import0.NgModuleFactory<import1.ReportModule> = new import0.NgModuleFactory(ReportModuleInjector,import1.ReportModule);