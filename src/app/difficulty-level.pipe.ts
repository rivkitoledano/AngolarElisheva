import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficultyLevel',
  standalone: true
})
export class DifficultyLevelPipe implements PipeTransform {

    transform(value: string, difficultyLevel:number|any): string {
      const stars = '*'.repeat(difficultyLevel);
      return `${value} ${stars}`;
    
  }

}
