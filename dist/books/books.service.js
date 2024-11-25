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
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const book_entity_1 = require("./entities/book.entity");
let BooksService = class BooksService {
    constructor(booksRepository) {
        this.booksRepository = booksRepository;
    }
    async create(createBookDto) {
        try {
            if (!createBookDto.title ||
                !createBookDto.author ||
                !createBookDto.isbn) {
                throw new common_1.BadRequestException('Title, Author, and ISBN are required');
            }
            const book = this.booksRepository.create(createBookDto);
            return await this.booksRepository.save(book);
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Error occurred while creating the book');
        }
    }
    async findAll() {
        try {
            return await this.booksRepository.find();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error occurred while retrieving books');
        }
    }
    async findOne(id) {
        try {
            const book = await this.booksRepository.findOne({ where: { id } });
            if (!book) {
                throw new common_1.NotFoundException(`Book with id ${id} not found`);
            }
            return book;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Error occurred while retrieving the book');
        }
    }
    async update(id, updateBookDto) {
        try {
            const book = await this.booksRepository.findOne({ where: { id } });
            if (!book) {
                throw new common_1.NotFoundException(`Book with id ${id} not found`);
            }
            Object.assign(book, updateBookDto);
            return await this.booksRepository.save(book);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Error occurred while updating the book');
        }
    }
    async remove(id) {
        try {
            const book = await this.booksRepository.findOne({ where: { id } });
            if (!book) {
                throw new common_1.NotFoundException(`Book with id ${id} not found`);
            }
            await this.booksRepository.remove(book);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Error occurred while deleting the book');
        }
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BooksService);
//# sourceMappingURL=books.service.js.map