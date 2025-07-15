import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from 'el-transition'

export default class extends Controller {
  static targets = ['openUserMenu'];

  connect() {
    // console.log("connected header!")
    // console.log('enter: ', enter);
    // console.log('leave: ', leave);
    // console.log('toggle: ', toggle);
    this.openUserMenuTarget.addEventListener('click', this.toggleDropdownMenu);
  }
  
  // toggle {
  //   const div = document.getElementById("menu-dropdown-items");
  //   // console.log(div);
  //   div.classList.toggle('hidden');
  // }

  toggleDropdownMenu() {
    toggle(document.getElementById('menu-dropdown-items'));
  }
}
