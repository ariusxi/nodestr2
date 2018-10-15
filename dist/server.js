"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 3000;
app_1.default.listen(PORT, () => {
    console.log('API Rodando na porta: ' + PORT);
});
//# sourceMappingURL=server.js.map