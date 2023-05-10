"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VecinosController = void 0;
const common_1 = require("@nestjs/common");
const vecinos_service_1 = require("./vecinos.service");
const create_vecino_dto_1 = require("./dto/create-vecino.dto");
const update_vecino_dto_1 = require("./dto/update-vecino.dto");
let VecinosController = class VecinosController {
    constructor(vecinosService) {
        this.vecinosService = vecinosService;
    }
    create(createVecinoDto) {
        return this.vecinosService.create(createVecinoDto);
    }
    findAll() {
        return this.vecinosService.findAll();
    }
    findOne(id) {
        return this.vecinosService.findOne(+id);
    }
    update(id, updateVecinoDto) {
        return this.vecinosService.update(+id, updateVecinoDto);
    }
    remove(id) {
        return this.vecinosService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vecino_dto_1.CreateVecinoDto]),
    __metadata("design:returntype", void 0)
], VecinosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VecinosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VecinosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vecino_dto_1.UpdateVecinoDto]),
    __metadata("design:returntype", void 0)
], VecinosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VecinosController.prototype, "remove", null);
VecinosController = __decorate([
    (0, common_1.Controller)('vecinos'),
    __metadata("design:paramtypes", [vecinos_service_1.VecinosService])
], VecinosController);
exports.VecinosController = VecinosController;
//# sourceMappingURL=vecinos.controller.js.map