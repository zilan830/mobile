import webInspector from "./webInspector";

export default (configure = webInspector.make(
  "API_ROOT",
  "http://xxx/"
));
webInspector.make("FILE_API_ROOT", "http://xxx/");


console.log("use prod env");