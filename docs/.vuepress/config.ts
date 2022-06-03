import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "网页设计电子讲义",
  description: "用于厦门理工学院软件工程专业网页设计的电子讲义",

  base: "/",

  theme,
});
