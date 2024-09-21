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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const event_entity_1 = require("./event.entity");
let EventService = class EventService {
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
    }
    async create(createEventDto) {
        const event = this.eventRepository.create(createEventDto);
        return this.eventRepository.save(event);
    }
    async update(eventId, updateEventDto, userType) {
        const event = await this.eventRepository.findOne({ where: { EventID: eventId } });
        if (!event) {
            throw new common_1.BadRequestException(`Event with ID ${eventId} not found`);
        }
        if (userType !== 'Admin' && userType !== 'Instructor') {
            throw new common_1.UnauthorizedException('You must be logged in as an admin or instructor to update event details');
        }
        Object.assign(event, updateEventDto);
        return this.eventRepository.save(event);
    }
    async delete(eventId, userType) {
        const event = await this.eventRepository.findOne({ where: { EventID: eventId } });
        if (!event) {
            throw new common_1.BadRequestException(`Event with ID ${eventId} not found`);
        }
        if (userType !== 'Admin') {
            throw new common_1.UnauthorizedException('You must be logged in as an admin to delete events');
        }
        await this.eventRepository.remove(event);
    }
    async getAllEvents() {
        return this.eventRepository.find();
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventService);
//# sourceMappingURL=event.service.js.map