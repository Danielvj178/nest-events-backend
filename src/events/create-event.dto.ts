import { IsDateString, IsString, Length } from "class-validator";

export class CreateEventDto {
    @IsString()
    @Length(5, 25, { message: 'The name length is wrong' })
    name: string;
    @Length(5, 25)
    description: string;
    @IsDateString()
    @Length(5, 255, { groups: ['create'] })
    @Length(10, 20, { groups: ['update'] })
    when: string;
    @Length(5, 255)
    address: string;
}