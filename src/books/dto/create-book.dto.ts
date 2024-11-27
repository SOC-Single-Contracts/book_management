import { IsNotEmpty, IsString, IsISBN } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsISBN()
  @IsNotEmpty()
  isbn: string;
}
