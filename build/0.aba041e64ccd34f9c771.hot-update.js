exports.id = 0;
exports.modules = {

/***/ "./src/schemas/VideoSchema.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var mongoose = __webpack_require__(\"mongoose\");\nmongoose.connect('mongodb://MarceloPedroRedes:marcelopedro1@ds255715.mlab.com:55715/efeito-mateus');\nmongoose.Promise = global.Promise;\n\nvar videoSchema = new mongoose.Schema({\n  url: String,\n  rating: Number\n});\n\nvar Video = mongoose.model('Video', videoSchema);\n\n/* unused harmony default export */ var _unused_webpack_default_export = (Video);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NoZW1hcy9WaWRlb1NjaGVtYS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL1ZpZGVvU2NoZW1hLmpzPzNlNDciXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9NYXJjZWxvUGVkcm9SZWRlczptYXJjZWxvcGVkcm8xQGRzMjU1NzE1Lm1sYWIuY29tOjU1NzE1L2VmZWl0by1tYXRldXMnKTtcbm1vbmdvb3NlLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcblxudmFyIHZpZGVvU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHVybDogU3RyaW5nLFxuICByYXRpbmc6IE51bWJlclxufSk7XG5cbnZhciBWaWRlbyA9IG1vbmdvb3NlLm1vZGVsKCdWaWRlbycsIHZpZGVvU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NoZW1hcy9WaWRlb1NjaGVtYS5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvc2NoZW1hcy9WaWRlb1NjaGVtYS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/schemas/VideoSchema.js\n");

/***/ })

};