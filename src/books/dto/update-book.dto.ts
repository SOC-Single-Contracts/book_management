import { IsOptional, IsString, IsISBN } from 'class-validator';

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsISBN()
  @IsOptional()
  isbn?: string;
}
