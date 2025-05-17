import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MindmapNode {
	@PrimaryColumn('uuid')
	id!: string;


	@Column()
	title!: string;

	@Column({ nullable: true })
	parentId!: number;

	@Column({ type: 'jsonb', nullable: true })
	position!: { x: number; y: number };

	@Column({ nullable: true })
	side!: 'left' | 'right';

	@Column({ default: true })
	expanded!: boolean;

	@Column({ type: 'text', nullable: true })
	rule!: string;

	@Column({ type: 'text', nullable: true })
	exception!: string;

	@Column({ type: 'text', nullable: true })
	example!: string;

}

