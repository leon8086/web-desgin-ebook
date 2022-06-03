import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  '/',
  '/environments',
  {
    text: "第1章 开始你的旅程",
    icon: "note",
    prefix: "/01/",
    children: [ '1.hello.world','2.roaming' ],
  },
]);
