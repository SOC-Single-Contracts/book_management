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
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const book_dto_1 = require("./dto/book.dto");
const swagger_1 = require("@nestjs/swagger");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    findAll() {
        return this.booksService.findAll();
    }
    findOne(id) {
        return this.booksService.findOne(id);
    }
    create(createBookDto) {
        return this.booksService.create(createBookDto);
    }
    update(id, updateBookDto) {
        return this.booksService.update(id, updateBookDto);
    }
    remove(id) {
        return this.booksService.remove(id);
    }
};
exports.BooksController = BooksController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all books' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of all books',
        type: [book_dto_1.CreateBookDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a book by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'The book ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The details of the requested book',
        type: book_dto_1.CreateBookDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Book not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Add a new book' }),
    (0, swagger_1.ApiBody)({ type: book_dto_1.CreateBookDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Book created successfully',
        type: book_dto_1.CreateBookDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_dto_1.CreateBookDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a book by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'The book ID' }),
    (0, swagger_1.ApiBody)({ type: book_dto_1.UpdateBookDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Book updated successfully',
        type: book_dto_1.UpdateBookDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Book not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, book_dto_1.UpdateBookDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a book by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'The book ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Book deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Book not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "remove", null);
exports.BooksController = BooksController = __decorate([
    (0, swagger_1.ApiTags)('Books'),
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
//# sourceMappingURL=books.controller.js.map