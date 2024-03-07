import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../entities/recipe.model'; // Corrected import path

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.css'] // Corrected `styleUrls`
})
export class SmallRecipeComponent {
[x: string]: any;
  // ... other code

  @Input()
  public recipe?: Recipe; // No errors with this corrected code
}