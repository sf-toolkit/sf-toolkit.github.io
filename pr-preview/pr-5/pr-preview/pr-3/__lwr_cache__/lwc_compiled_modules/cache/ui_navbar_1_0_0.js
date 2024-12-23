import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./navbar.html";
class NavBar extends LightningElement {
  constructor(...args) {
    super(...args);
    this.currentNavItem = void 0;
    this._isRendered = false;
    this._navItemsPrivate = [];
  }
  set navItems(value) {
    this._navItemsPrivate = [];
    Object.keys(value).forEach(key => {
      this._navItemsPrivate.push(value[key]);
      if (value[key].visible) {
        this.currentNavItem = value[key].value;
      }
    });
  }
  get navItems() {
    return this._navItemsPrivate;
  }
  set selectedItem(value) {
    if (value && this.currentNavItem !== value) {
      this.styleNavItem(this.currentNavItem, value);
      this.currentNavItem = value;
    }
  }
  get selectedItem() {
    return this.currentNavItem;
  }
  renderedCallback() {
    if (this._isRendered) return;
    this._isRendered = true;
    this.template.querySelector(`a[data-item="${this.currentNavItem}"]`).parentNode.parentNode.classList.add('active');
  }
  handleNavItemClick(event) {
    const choice = event.currentTarget.dataset.item;
    this.styleNavItem(this.currentNavItem, choice);
    this.currentNavItem = choice;
    event.preventDefault();
    this.dispatchEvent(new CustomEvent('categorychange', {
      detail: choice,
      bubbles: true
    }));
  }
  styleNavItem(itemOld, itemNew) {
    const tabOld = this.template.querySelector(`a[data-item="${itemOld}"]`).parentNode.parentNode;
    const tabNew = this.template.querySelector(`a[data-item="${itemNew}"]`).parentNode.parentNode;
    tabOld.classList.remove('active');
    tabNew.classList.add('active');
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(NavBar, {
  publicProps: {
    navItems: {
      config: 3
    },
    selectedItem: {
      config: 3
    }
  },
  fields: ["currentNavItem", "_isRendered", "_navItemsPrivate"]
});
export default _registerComponent(NavBar, {
  tmpl: _tmpl,
  sel: "ui-navbar",
  apiVersion: 61
});