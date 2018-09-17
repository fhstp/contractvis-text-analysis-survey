// Imported using:
// import {exampleFunction} from './additional_scripts/utility'
export function exampleFunction() {
  console.log('Function was called from a module!');
}
export function reset_settings(
  load_first_page: string,
  switch_to_second_page: string
) {
  // reset all settings!
  if (localStorage.getItem(load_first_page) !== 'true' &&
        localStorage.getItem(load_first_page) !== 'false') {

    localStorage.setItem(load_first_page, 'false');
  }

  if (localStorage.getItem(switch_to_second_page) !== 'true' &&
        localStorage.getItem(switch_to_second_page) !== 'false') {

     localStorage.setItem(switch_to_second_page, 'false');
  }
}
