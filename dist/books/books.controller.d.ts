import { BooksService } from './books.service';
import { CreateBookDto, UpdateBookDto } from './dto/book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAll(): Promise<import("./entities/book.entity").Book[]>;
    findOne(id: string): Promise<import("./entities/book.entity").Book>;
    create(createBookDto: CreateBookDto): Promise<import("./entities/book.entity").Book>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<import("./entities/book.entity").Book>;
    remove(id: string): Promise<void>;
}
