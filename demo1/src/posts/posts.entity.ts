import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 定义数据库表 'posts' 对应的实体类
@Entity('posts')
export class PostsEntity {
  // 主键，自动生成的数字
  @PrimaryGeneratedColumn()
  id: number; // 标记为助理额

  // 标题，最长50个字符
  @Column({ length: 50 })
  title: string;

  // 作者，文本类型
  @Column('text')
  author: string;

  // 缩略图URL，默认值为空字符串
  @Column({ default: '' })
  thumb_url: string;

  // 类型，tinyint类型
  @Column('tinyint')
  type: number;

  // 创建时间，默认值为当前时间
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  // 更新时间，默认值为当前时间
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;
}
