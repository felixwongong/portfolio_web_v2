import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index3.js";
const sun = "/_app/immutable/assets/sun-79eee5b4.gif";
const moon = "/_app/immutable/assets/moon-39907e0c.gif";
let isNightMode = writable(0);
isNightMode.subscribe((val) => {
});
const navHeight = "h-16";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isNightMode, $$unsubscribe_isNightMode;
  $$unsubscribe_isNightMode = subscribe(isNightMode, (value) => $isNightMode = value);
  $$unsubscribe_isNightMode();
  return `<div><div class="${"fixed top-0 left-0 w-screen " + escape(navHeight, true) + " z-50 bg-white border-b-2 border-black"}"><nav class="${"max-w-screen-md h-full mx-auto flex flex-row align-middle justify-between"}"><a href="${"/"}" class="${"text-primary-dark font-bold text-lg antialiased flex flex-row items-center dark:bg-darkSecondary px-2 rounded-md"}"><h2>Felix Wong</h2></a>
            <ul class="${"flex flex-row justify-evenly items-center"}"><li class="${"mx-3 text-primary-dark tracking-wider"}"><a href="${"/Work"}" class="${"py-0.5 border-transparent border-b-2 hover:border-gray-600"}">Work</a></li>
                <li class="${"mx-3 text-primary-dark tracking-wider"}"><a href="${"/Post"}" class="${"py-0.5 border-transparent border-b-2 hover:border-gray-600"}">Post</a></li></ul>
            <div class="${"w-10 h-10 my-auto"}"><img${add_attribute("src", $isNightMode ? moon : sun, 0)} alt="${"toggleNightMode"}" class="${"object-scale-down"}"></div></nav></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"font-comic bg-gradient-to-r from-yellow-200 to-orange-400 min-h-screen"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
    ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
