import { Component,OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from '../../../../entities/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit{
	images = [700, 533, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  recipe?:Recipe
  ingredients?:string[]
  instructions?:string[]

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 10000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = false;

	}
  ngOnInit(): void {
   this.ingredients=this.recipe?.ingredients
   this.instructions=this.recipe?.instructions

  }
}
