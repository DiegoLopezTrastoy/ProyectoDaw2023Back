"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVecinoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_vecino_dto_1 = require("./create-vecino.dto");
class UpdateVecinoDto extends (0, mapped_types_1.PartialType)(create_vecino_dto_1.CreateVecinoDto) {
}
exports.UpdateVecinoDto = UpdateVecinoDto;
//# sourceMappingURL=update-vecino.dto.js.map