import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./output.html";
import { formatPhoneNumber } from './phoneUtil';
class Output extends LightningElement {
  constructor(...args) {
    super(...args);
    this.currencyCode = void 0;
    this.dateType = void 0;
    this.label = void 0;
    this.type = 'text';
    this.dateTimeValue = void 0;
    this.valuePrivate = void 0;
    this.moment = void 0;
    this._value = void 0;
  }
  set value(val) {
    this.valuePrivate = val;
    this.calculateDateTime();
  }
  get value() {
    return this.valuePrivate;
  }
  get isDateTime() {
    return this.type === 'datetime';
  }
  get isEmail() {
    return this.type === 'email';
  }
  get isNumber() {
    return this.type === 'number';
  }
  get isPhonenumber() {
    return this.type === 'phone';
  }
  get isText() {
    return this.type === 'text';
  }
  async calculateDateTime() {
    if (this.type === 'datetime') {
      if (!this.moment) {
        this.moment = await require( /* webpackChunkName: "moment" */'moment');
      }
      const mom = this.moment(this._val);
      switch (this.dateType) {
        case 'weekOfYear':
          this.dateTimeValue = mom.week();
          break;
        case 'dayOfYear':
          this.dateTimeValue = mom.dayOfYear();
          break;
        default:
          this.dateTimeValue = mom.format('MMMM Do YYYY, h:mm:ss A');
      }
    }
  }
  get formattedNumber() {
    if (this.valuePrivate) {
      return `${this.currencyCode} ${parseFloat(this.valuePrivate).toFixed(2)}`;
    }
    return ' - ';
  }
  get formattedPhonenumber() {
    return formatPhoneNumber(this.value);
  }
  get hrefPhonenumber() {
    return `tel:${this.value}`;
  }
  get hrefEmail() {
    return `mailto:${this.value}`;
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(Output, {
  publicProps: {
    currencyCode: {
      config: 0
    },
    dateType: {
      config: 0
    },
    label: {
      config: 0
    },
    type: {
      config: 0
    },
    value: {
      config: 3
    }
  },
  track: {
    dateTimeValue: 1,
    valuePrivate: 1
  },
  fields: ["moment", "_value"]
});
export default _registerComponent(Output, {
  tmpl: _tmpl,
  sel: "ui-output",
  apiVersion: 61
});