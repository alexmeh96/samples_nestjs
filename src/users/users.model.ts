import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttrs {
  email: string,
  password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: 'user@mail.ru', description: 'почтовый адрес'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({example: '12345678', description: 'пароль'})
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({example: 'true', description: 'забанен или нет'})
  @Column({ type: DataType.STRING, defaultValue: false })
  banned: boolean;

  @ApiProperty({example: 'за хулиганство', description: 'причина блокировки'})
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;
}
