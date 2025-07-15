import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("connected navbar!")
  }
  
  toggle() {
    const div = document.getElementById("menu-dropdown-items");
    console.log(div);
    div.classList.toggle('hidden');
  }
}
