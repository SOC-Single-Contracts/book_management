import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto, UpdateBookDto } from './dto/book.dto';
export declare class BooksService {
    private booksRepository;
    constructor(booksRepository: Repository<Book>);
    create(createBookDto: CreateBookDto): Promise<Book>;
    findAll(): Promise<Book[]>;
    findOne(id: string): Promise<Book>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<Book>;
    remove(id: string): Promise<void>;
}
