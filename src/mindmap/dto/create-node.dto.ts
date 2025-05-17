export class CreateNodeDto {
  title!: string;
  parentId?: number;
  side?: 'left' | 'right';
  position?: { x: number; y: number };
}
